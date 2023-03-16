import React, { Suspense, useEffect, useState, useRef } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import {
    EffectComposer, 
    DepthOfField,
    Bloom,
    Noise,
    Vignette,
    ToneMapping,
    Glitch,
    BrightnessContrast,
    SSAO,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import {
    BlendFunction,
    BlurPass,
    Resizer,
    KernelSize,
    GlitchMode,
} from "postprocessing";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";



const Road = () => {
    const roadGeometry = new THREE.PlaneGeometry(12, 300, 1, 1);
    roadGeometry.translate(0, 110, 0.1);
    roadGeometry.rotateX(-Math.PI * 0.5);

    const roadMaterial = new THREE.MeshStandardMaterial({
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

    const roadLineCenterLeftGeometry = new THREE.PlaneGeometry(0.15, 300, 1, 1);
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

    const roadLineMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
    });

    useEffect(() => {
        if (!roadLines) {
            const newRoadLines = new THREE.Mesh(
                roadLinesGeometry,
                roadLineMaterial
            );
            setRoadLines(newRoadLines);
        }
    }, [roadLines, roadLinesGeometry, roadLineMaterial]);

    if (roadLines) {
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

const Floor2 = () =>{
    const materialRef = useRef();
    const floorGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    floorGeometry.translate(0, 110, 0);
    floorGeometry.rotateX(-Math.PI * 0.5);

    useEffect(() => {
        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xff1e99) },
                time: { value: 0.0 },
                speed: { value: 15.0 },
            },
            vertexShader: `
            uniform float time;
    
            void main() {
              vec3 pos = position;
              pos.y += 0.1 * sin(pos.x * 5.0 + time * 3.0);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
            fragmentShader: `
            uniform float time;
    
            void main() {
              vec3 color = vec3(0.5 + 0.5 * sin(time), 0.0, 0.5 + 0.5 * cos(time));
              gl_FragColor = vec4(color, 1.0);
            }
          `,
        });
        materialRef.current = material;
    }, []);

    return (
        <mesh position={[0, 0, 0]} geometry={floorGeometry} material={materialRef.current} />
    );
};

const Floor3 = () => {
    const materialRef = useRef();
    const floorGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    floorGeometry.translate(0, 110, 0);
    floorGeometry.rotateX(-Math.PI * 0.5);
  
    useEffect(() => {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
          speed: { value: 10.0 },
        },
        vertexShader: `
          uniform float time;
          uniform float speed;
          varying vec3 vPos;
  
          void main() {
            vec3 pos = position;
            pos.y += 0.1 * sin(pos.x * 5.0 + time * 3.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            vec2 tuv = uv;
            float t = time * 0.001 * speed;
            vPos = pos;
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float speed;
          varying vec3 vPos;
  
          float line(vec3 position, float width, vec3 step){
            vec3 tempCoord = position / step;
  
            vec2 coord = tempCoord.xz;
            coord.y -= time * speed / 2.;
  
            vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord * width);
            float line = min(grid.x, grid.y);
  
            return min(line, 1.0);
          }
  
          void main() {
            float l = line(vPos, 1.0, vec3(2.0)); // grid line width
            vec3 base = mix(vec3(0, 0.75, 0), vec3(0), smoothstep(0., 0., abs(vPos.x))); //ROAD COLOR
            vec3 color = mix(vec3(0.5 + 0.5 * sin(time)), base, l);
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      });
      materialRef.current = material;
    }, []);
  
    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.uniforms.time.value = clock.elapsedTime;
      }
    });
  
    return (
      <mesh position={[0, 0, 0]} geometry={floorGeometry} material={materialRef.current} />
    );
  };

const Floor = () => {
    const floorGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    floorGeometry.rotateX(-Math.PI * 0.5);

    const material = new THREE.MeshStandardMaterial({
        color: 0xff1e99,
    });

    const synthwaveGridShader = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            resolution: { value: new THREE.Vector2() },
            color1: { value: new THREE.Color(0x00ffff) },
            color2: { value: new THREE.Color(0x3d6347) },
            color3: { value: new THREE.Color(0x0099ff) },
            thickness: { value: 0.1 },
            speed: { value: 15.0 },
            amplitude: { value: 0.1 },
        },
        vertexShader:`
        uniform float speed;
uniform float time;
varying vec3 vPos;
void main() {
    vec2 tuv = uv;
    float t = time * 0.001 * speed;
    vPos = transformed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

    `,
    
    fragmentShader: `
        
    `,
    });

    return (
        <mesh
            position={[0, 0, 0]}
            geometry={floorGeometry}
            material={synthwaveGridShader}
        />
    );
};

const MyComponent = () => {
    const {scene, animation} = useThree();
    let floorGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    floorGeometry.translate(0, 110, 0);
    floorGeometry.rotateX(-Math.PI * 0.5);

    let floorMaterial = new THREE.MeshBasicMaterial({
      color: 0xff1e99,
    });

    createGridMaterial(floorMaterial, animation);
    return(
        <mesh
            position={[0, 0, 0]}
            geometry={floorGeometry}
            material={floorMaterial}
        />
    )
};

const createGridMaterial = (materialVar) => {
    console.log(materialVar);
    materialVar.onBeforeCompile = (shader) => {
      shader.uniforms.speed = {
        value: 15,
      };
      shader.uniforms.time = {
        value: 0,
      };
      shader.vertexShader =
        `
        uniform float speed;
        uniform float time;
        varying vec3 vPos;
        ` + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>

          vec2 tuv = uv;
          float t = time * 0.001 * speed;
          vPos = transformed;
          `
      );
      shader.fragmentShader =
        `
        

        uniform float speed;
        uniform float time;
        varying vec3 vPos;

        float line(vec3 position, float width, vec3 step){
          vec3 tempCoord = position / step;

          vec2 coord = tempCoord.xz;
          coord.y -= time * speed / 2.;

          vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord * width);
          float line = min(grid.x, grid.y);

          return min(line, 1.0);
        }
        ` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        `gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
        `
          float l = line(vPos, 1.0, vec3(2.0)); // grid line width
          vec3 base = mix(vec3(0, 0.75, 0), vec3(0), smoothstep(0., 0., abs(vPos.x))); //ROAD COLOR
          vec3 c = mix(outgoingLight, base, l);
          gl_FragColor = vec4(c, diffuseColor.a);
          `
      );
    };
  };

const SideWalk = () => {
    const sidewalkTopLeftGeometry = new THREE.PlaneGeometry(8, 300, 1, 1);
    sidewalkTopLeftGeometry.translate(-10, 110, 0.5);
    sidewalkTopLeftGeometry.rotateX(-Math.PI * 0.5);

    const sidewalkSideLeftGeometry = new THREE.PlaneGeometry(0.5, 300, 1, 1);
    sidewalkSideLeftGeometry.translate(0.06, 110, 6);
    sidewalkSideLeftGeometry.rotateX(-Math.PI * 0.5);
    sidewalkSideLeftGeometry.rotateZ(Math.PI * 0.49);

    const sidewalkTopRightGeometry = new THREE.PlaneGeometry(8, 300, 1, 1);
    sidewalkTopRightGeometry.translate(10, 110, 0.5);
    sidewalkTopRightGeometry.rotateX(-Math.PI * 0.5);

    const sidewalkSideRightGeometry = new THREE.PlaneGeometry(0.5, 300, 1, 1);
    sidewalkSideRightGeometry.translate(0.44, 110, -6);
    sidewalkSideRightGeometry.rotateX(-Math.PI * 0.5);
    sidewalkSideRightGeometry.rotateZ(Math.PI * 0.49);

    const sideWalkConception = [
        sidewalkTopLeftGeometry,
        sidewalkSideLeftGeometry,
        sidewalkTopRightGeometry,
        sidewalkSideRightGeometry,
    ];

    const sideWalkGeometry = mergeBufferGeometries(sideWalkConception, false);

    const sideWalkMaterial = new THREE.MeshStandardMaterial({
        color: 0x1be9ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
    });

    return (
        <mesh
            position={[0, 1, 0.5]}
            geometry={sideWalkGeometry}
            material={sideWalkMaterial}
        ></mesh>
    );
};

const SynthwaveCanvas = () => {
    const camera = new THREE.PerspectiveCamera(
        75,
		window.innerWidth / window.innerHeight,
		0.1,
		2000);
    camera.position.set(0, 1.8, 7)
    const cameraRef = useRef();
    const sceneRef = useRef();
    const rendererRef = useRef();

    const setPostProcessing = (composer) => {
        const renderScene = new RenderPass(sceneRef.current, cameraRef.current);
    
        composer.renderer.toneMapping = THREE.ReinhardToneMapping;
        composer.renderer.toneMappingExposure = Math.pow(1, 4.0);
    
        const bloomPass = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          1.5,
          0,
          0.8
        );
        bloomPass.strength = 1.5;
        bloomPass.threshold = 0;
        bloomPass.radius = 0.8;
    
        const glitchPass = new GlitchPass();
    
        const effectFilm = new FilmPass(
          0.2,
          0.75,
          2048,
          false
        );
    
        composer.addPass(renderScene);
        composer.addPass(bloomPass);
        composer.addPass(glitchPass);
        glitchPass.enabled = false;
        composer.addPass(effectFilm);
      };
    
     

    return (
        <Canvas
            camera={camera}
        >
            <directionalLight position={[100, 100, 200]} color="white" />
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={true}
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 2}
                />
                <Road />
                <Floor3 />
                <RoadLines />
                <SideWalk />
            </Suspense>
            <Preload all />
            <EffectComposer ref={rendererRef} onCreated={setPostProcessing} />
        </Canvas>
    );
};

export default SynthwaveCanvas;
