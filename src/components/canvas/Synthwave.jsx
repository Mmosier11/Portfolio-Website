import React, { Suspense, useEffect, useState, useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, ToneMapping, Glitch, BrightnessContrast, SSAO } from '@react-three/postprocessing'
import * as THREE from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { BlendFunction, BlurPass, Resizer, KernelSize, GlitchMode  } from 'postprocessing'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Road = () => {
    const roadGeometry = new THREE.PlaneGeometry(12, 300, 1, 1);
    roadGeometry.translate(0, 110, 0.1);
    roadGeometry.rotateX(-Math.PI * 0.5);

    const roadMaterial = new THREE.MeshStandardMaterial ({
        color: 0x03353b,
        transparent: true,
        opacity: 0.7,
    });

    // // Add road to scene
    // const roadRef = useRef();
    // useFrame(() => {
    //     roadRef.current.rotation.x += 0.001;
    // });

    return (
        <>
            <ambientLight />
            <mesh 
                // ref={roadRef}
                position={[0, 1, 0.1]}
                geometry={roadGeometry} 
                material={roadMaterial} 
            />
        </>
        
    );
};

const RoadLines = () => {
    const [roadLines, setRoadLines] = useState(null);
    const roadLineLeftGeometry = new THREE.PlaneGeometry(0.35, 300, 1, 1);
    roadLineLeftGeometry.translate(-5.2, 110, 0.2);
    roadLineLeftGeometry.rotateX(-Math.PI * 0.5);
  
    const roadLineRightGeometry = new THREE.PlaneGeometry(0.35, 300, 1, 1);
    roadLineRightGeometry.translate(5.2, 110, 0.2);
    roadLineRightGeometry.rotateX(-Math.PI * 0.5);
  
    const roadLineCenterLeftGeometry = new THREE.PlaneGeometry(
      0.15,
      300,
      1,
      1
    );
    roadLineCenterLeftGeometry.translate(-1.8, 110, 0.2);
    roadLineCenterLeftGeometry.rotateX(-Math.PI * 0.5);
  
    const roadLineCenterRightGeometry = new THREE.PlaneGeometry(
      0.15,
      300,
      1,
      1
    );
    roadLineCenterRightGeometry.translate(1.8, 110, 0.2);
    roadLineCenterRightGeometry.rotateX(-Math.PI * 0.5);
  
    // Merge all road lines geometries
    const roadLinesConception = [
      roadLineLeftGeometry,
      roadLineRightGeometry,
      roadLineCenterLeftGeometry,
      roadLineCenterRightGeometry,
    ];
    const roadLinesGeometry = mergeBufferGeometries(roadLinesConception, false);
  
    const roadLineMaterial = new THREE.MeshStandardMaterial ({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
    });
  
    useEffect(() => {
      if (!roadLines) {
        const newRoadLines = new THREE.Mesh(roadLinesGeometry, roadLineMaterial);
        setRoadLines(newRoadLines);
      }
    }, [roadLines, roadLinesGeometry, roadLineMaterial]);
  
    if( roadLines ) {
        return (
            <mesh>
                <primitive 
                    object={roadLines} 
                    position={[0, 1, 0.2]}
                    rotation={[0, 0, 0]}
                />
            </mesh>
        );
    } else {
        return null;
    }
    
  };

const Floor = () => {
    const floorGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    floorGeometry.rotateX(-Math.PI * 0.5);

    const floorMaterial = new THREE.MeshStandardMaterial ({
        color: 0xff1e99,
        wireframe: true
    });

    return (
        <mesh 
            position={[10, -10, 0]} 
            geometry={floorGeometry} 
            material={floorMaterial} 
        />
    );
};

const SynthwaveCanvas = () => {
    
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [10, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
                <Glitch
                    delay={[1.5, 3.5]} // min and max glitch delay
                    duration={[0.6, 1.0]} // min and max glitch duration
                    strength={[0.3, 1.0]} // min and max glitch strength
                    mode={GlitchMode.SPORADIC} // glitch mode
                    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                    ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                />
                <BrightnessContrast
                    brightness={0.1} // brightness. min: -1, max: 1
                    contrast={0} // contrast: min -1, max: 1
                />
                <Bloom
                    intensity={1} // The bloom intensity.
                    blurPass={THREE.ReinhardToneMapping} // A blur pass.
                    width={Resizer.AUTO_SIZE} // render width
                    height={Resizer.AUTO_SIZE} // render height
                    kernelSize={KernelSize.LARGE} // blur kernel size
                    luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                />
                <ToneMapping
                    blendFunction={BlendFunction.NORMAL} // blend mode
                    adaptive={true} // toggle adaptive luminance map usage
                    resolution={256} // texture resolution of the luminance map
                    middleGrey={0.6} // middle grey factor
                    maxLuminance={16.0} // maximum luminance
                    averageLuminance={1.0} // average luminance
                    adaptationRate={1.0} // luminance adaptation rate
                />
                <SSAO/>
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={0.56} />
            </EffectComposer>
            
            
            <directionalLight position={[100, 100, 200]} color="white" />
            <Suspense fallback={null}>
            <OrbitControls 
                enableZoom={true}
                // maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 2}
                />
                <Road />
                <Floor/>
                <RoadLines/>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default SynthwaveCanvas;