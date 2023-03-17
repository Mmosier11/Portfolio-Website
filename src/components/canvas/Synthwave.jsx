import React, { Suspense, useEffect, useState, useRef, useCallback, useMemo } from "react";

import { Canvas, useFrame, useThree, extend, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

import { EffectComposer, Noise, Glitch, Bloom, Vignette, ChromaticAberration, SSAO, ToneMapping, Scanline} from "@react-three/postprocessing";
import {GlitchMode} from 'postprocessing';

import { UnrealBloomPass } from "three-stdlib";

import * as THREE from "three";

import { InstancedBufferGeometry, InstancedBufferAttribute } from 'three';

import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js"; // To be able to load SVG graphics

import { OrbitControls, Preload, useGLTF, Effects, Stars, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

extend({ UnrealBloomPass, GlitchPass, FilmPass, RenderPass });



const Road = () => {
    const roadGeometry = new THREE.PlaneGeometry(12, 300, 1, 1);
    roadGeometry.translate(0, 110, 0.1);
    roadGeometry.rotateX(-Math.PI * 0.5);

    const roadMaterial = new THREE.MeshStandardMaterial({
        color: 0x03353b,
        transparent: true,
        opacity: 0.7,
    });

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
            <>
                <ambientLight />
                <mesh>
                    <primitive
                        object={roadLines}
                    />
                </mesh>
            </>
        );
    } else {
        return null;
    }
};

const Floor = () => {
    const materialRef = useRef();
    const [mounted, setMounted] = useState(false);
    const floorGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    floorGeometry.translate(0, 110, 0);
    floorGeometry.rotateX(-Math.PI * 0.5);

    useEffect(() => {
        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xff1e99) },
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
            uniform vec3 color;
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
                vec3 colorMix = mix(vec3(0.5 + 0.5 * sin(time)), base, l) * color;
                gl_FragColor = vec4(colorMix, 1.0);
            }
        `,
        });
        materialRef.current = material;
    }, []);

    useFrame(({ clock }) => {
        if (mounted) {
            if (materialRef.current) {
                materialRef.current.uniforms.time.value = clock.elapsedTime;
            }
        }
    });

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    return (
        <mesh
            geometry={floorGeometry}
            material={materialRef.current}
        />
    );
};

const SideWalk = () => {
    const materialRef = useRef();
    const [mounted, setMounted] = useState(false);

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

    useEffect(() => {
        const material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8,
            uniforms: {
                color: { value: new THREE.Color(0x1be9ff) },
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
            uniform vec3 color;
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
                vec3 colorMix = mix(vec3(0.5 + 0.5 * sin(time)), base, l) * color;
                gl_FragColor = vec4(colorMix, 1.0);
            }
        `,
        });
        materialRef.current = material;
    }, []);

    useFrame(({ clock }) => {
        if (mounted) {
            if (materialRef.current) {
                materialRef.current.uniforms.time.value = clock.elapsedTime;
            }
        }
    });

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if(sideWalkGeometry){
        return (
            <>
                <ambientLight/>
                <mesh
                    geometry={sideWalkGeometry}
                    material={materialRef.current}
                />
            </>
            
        );
    } else {
        return null;
    }
    
};

const PalmTrees = () => {
    const materialRef = useRef();
    
    const [mounted, setMounted] = useState(false);

    let palmTreeConception = [];

    var logGeometry = new THREE.CylinderGeometry(0.25, 0.125, 10, 5, 4, true);
    logGeometry.translate(0, 5, 0);

    palmTreeConception.push(logGeometry);

    // palm tree leaves
    for(let i = 0; i < 35; i++ ){
        let leafGeometry = new THREE.CircleGeometry(1.25, 4);
        leafGeometry.translate(0, 1.25, 0);
        leafGeometry.rotateX(-Math.PI * 0.5);
        leafGeometry.scale(0.25, 1, THREE.MathUtils.randFloat(1, 1.5));
        leafGeometry.attributes.position.setY(0, 0.25);
        leafGeometry.rotateX(THREE.MathUtils.randFloatSpread(Math.PI * 0.5));
        leafGeometry.rotateY(THREE.MathUtils.randFloat(0, Math.PI * 2));
        leafGeometry.translate(0, 10, 0);
        palmTreeConception.push(leafGeometry);
    }

    var palmTree = mergeBufferGeometries(palmTreeConception, false);

    palmTree.rotateZ(THREE.MathUtils.degToRad(-1.5));

    var palmTreeInstance = new THREE.InstancedBufferGeometry();
    palmTreeInstance.attributes.position = palmTree.attributes.position;
    palmTreeInstance.attributes.uv = palmTree.attributes.uv;
    palmTreeInstance.index = palmTree.index;

    var palmTreePosition = [];

    for(let i = 0; i < 40; i++){
        var resultLeft = randomize(-25, -200, 1);
        var resultRight = randomize(0, 160, 1);

        palmTreePosition.push(-10, 0, i * 2 * 15 - 10 - 50);
		palmTreePosition.push(10, 0, i * 2 * 15 - 50);
		palmTreePosition.push(resultLeft, 0, i * 2 * 15 - resultLeft - 50);
		palmTreePosition.push(resultRight, 0, i * 2 * 15 + resultRight - 50);
    }

    palmTreeInstance.setAttribute('instPosition', new THREE.InstancedBufferAttribute(new Float32Array(palmTreePosition), 3));

    useEffect(() => {
        const material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            wireframe: true,
            
            uniforms: {
                color: { value: new THREE.Color(0x056023) },
                speed: { value: 15},
                time: { value: 0 },
                value1: { value: 950.0 },
                value2: { value: 800.0 },
                scale: { value: 0.5 },
                transformedY: { value: 0.5 },
                transformedX: { value: 0.5 },
                emissiveIntensity: { value: 3.5 },
            },
            vertexShader: `
            uniform float speed;
            uniform float time;
            uniform float value1;
            uniform float value2;
            uniform float scale;
            uniform float transformedY;
            uniform float transformedX;
            uniform vec3 color;
            attribute vec3 instPosition;

            void main() {
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_Position = projectionMatrix * mvPosition;
                
                float value1 = 1250.0;
                float value2 = 1100.0;
                float transformedX = 1.0;

                vec3 ip = instPosition;
                ip.z = mod(ip.z + time * speed, value1) - value2;
                mvPosition.xyz *= transformedX;
                mvPosition.xyz += ip;
                gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
            }
            `,
            fragmentShader: `
            
            uniform vec3 color;
            uniform float emissiveIntensity;

            void main() {
                gl_FragColor = vec4(color * emissiveIntensity, 1.0);
            }
            `,
        });
        materialRef.current = material;
    }, [])

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])
    
    useFrame(({ clock }) => {
        if (mounted) {
            if (materialRef.current) {
                materialRef.current.uniforms.time.value = clock.elapsedTime;
            }
        }
    });

    return (
        <>
            <ambientLight/>
            <mesh
                geometry={palmTreeInstance}
                material={materialRef.current}
            />
            
        </>
    )
};

const SkyBox = () => {

    const texture = useTexture('/skybox/2048/px.png')

    return (
        <>
            <ambientLight/>
            <mesh position={[0, 0, -520]}>
            <planeGeometry args={[1024, 1024]}/>
            <meshBasicMaterial map={texture} />
        </mesh>
        </>
        
    )
};

const GroupedPyramids = () => {
    const material1Ref = useRef();
    const material2Ref = useRef();
    const pyramidRef = useRef();

    const [mounted, setMounted] = useState(false);

    let randomSize, translateX, translateZ, rotatePyramid;

    let pyramidWireframe, wireframeMaterial;

    let pyramidGeometry, pyramidInstance, pyramidMaterial, pyramid;

    let pyramidGroupConception = [];

    let positionHistory = [];

    let count = 0;

    let minRandomSize, maxRandomSize, minTranslateX, maxTranslateX;

    let minRotatePyramid = 0, maxRotatePyramid = 2, minTranslateZ = 0, maxTranslateZ = 2;

    for( let i = 0; i < 80; i++ ){
        let ignoreGeometry = false;

        if( i < 60 ) {
            // Furthest
            minRandomSize = 5;
            maxRandomSize = 25;
            minTranslateX = 27;
            maxTranslateX = 120;
        } else if ( i >= 60 ) {
            // Closest Pyramids
            minRandomSize = 3;
            maxRandomSize = 8;
            minTranslateX = 10;
            maxTranslateX = 32;
        }

        if( i % 2 == 0 ) {
            // For left side, make translateX negative as 0 is the center
			minTranslateX *= -1;
			maxTranslateX *= -1;
        }

        randomSize = randomize(minRandomSize, maxRandomSize, "int");
        translateX = randomize(minTranslateX, maxTranslateX, "float");
        translateZ = randomize(minTranslateZ, maxTranslateZ, "float");
        rotatePyramid = randomize(minRotatePyramid, maxRotatePyramid, "float");

        count = 0;
        
        // Check pyramid history
        let checkHistory = checkPositionHistory(randomSize, translateX, translateZ, positionHistory);
        if( checkHistory ) {
            count++;
            randomSize = randomize(minRandomSize, maxRandomSize, "int");
            translateX = randomize(minTranslateX, maxTranslateX, "float");
            translateZ = randomize(minTranslateZ, maxTranslateZ, "float");
            if( count < 5000){
                checkHistory = checkPositionHistory(randomSize, translateX, translateZ, positionHistory);
            }
        } else {
            ignoreGeometry = true;
        }

        
            
            pyramidGeometry = new THREE.ConeGeometry(randomSize, randomSize, 4, 1, true, rotatePyramid);
            pyramidGeometry.translate(translateX, 0, translateZ);

            positionHistory.push({size: randomSize, positionX: translateX, positionZ: translateZ});
            pyramidGroupConception.push(pyramidGeometry);
         
        
    }

    let pyramidGroupGeometry;
    let pyramidGroupInstance;
    if(pyramidGroupConception.length > 0){
        pyramidGroupGeometry = mergeBufferGeometries(pyramidGroupConception, false);
        pyramidGroupInstance = new THREE.InstancedBufferGeometry();
        // pyramidGroupInstance.copy(pyramidGroupGeometry);

        pyramidGroupInstance.attributes.position = pyramidGroupGeometry.attributes.position;
        pyramidGroupInstance.attributes.uv = pyramidGroupGeometry.attributes.uv;
        pyramidGroupInstance.index = pyramidGroupGeometry.index;

        let pyramidGroupPosition = [
            [0,0,0],
            [0,0,200],
            [0, 0, 520],
            [0, 0, 780],
        ];

        pyramidGroupInstance.setAttribute('instPosition', new THREE.InstancedBufferAttribute(new Float32Array(pyramidGroupPosition), 3));
    }
    
    



        useEffect(() => {
            const material1 = new THREE.ShaderMaterial({
                
                uniforms: {
                    color: { value: new THREE.Color(0x000000) },
                    speed: { value: 15},
                    time: { value: 0 },
                    value1: { value: 950.0 },
                    value2: { value: 800.0 },
                    scale: { value: 0.5 },
                    transformedY: { value: 0.5 },
                    transformedX: { value: 0.5 },
                },
                vertexShader: `
                uniform float speed;
                uniform float time;
                uniform float value1;
                uniform float value2;
                uniform float scale;
                uniform float transformedY;
                uniform float transformedX;
                uniform vec3 color;
                attribute vec3 instPosition;

                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_Position = projectionMatrix * mvPosition;
                    
                    float value1 = 1250.0;
                    float value2 = 1100.0;
                    float transformedX = 1.0;

                    vec3 ip = instPosition;
                    ip.z = mod(ip.z + time * speed, value1) - value2;
                    mvPosition.xyz *= transformedX;
                    mvPosition.xyz += ip;
                    gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
                }
                `,
                fragmentShader: `
                
                uniform vec3 color;

                void main() {
                    gl_FragColor = vec4(color, 1.0);
                }
                `,
            });

            const material2 = new THREE.ShaderMaterial({
                wireframe: true,
                polygonOffset: true,
                polygonOffsetFactor: 1,
                polygonOffsetUnits: 1,
                uniforms: {
                    color: { value: new THREE.Color(0x1be9ff) },
                    value1: { value: 950.0 },
                    value2: { value: 800.0 },
                    speed: { value: 15},
                    time: { value: 0 },
                    scale: { value: 0.5 },
                    transformedY: { value: 0.5 },
                    transformedX: { value: 0.5 },
                },
                vertexShader: `
                uniform float speed;
                uniform float time;
                uniform float value1;
                uniform float value2;
                uniform float scale;
                uniform float transformedY;
                uniform float transformedX;
                uniform vec3 color;
                attribute vec3 instPosition;

                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_Position = projectionMatrix * mvPosition;
                    
                    float value1 = 1250.0;
                    float value2 = 1100.0;
                    float transformedX = 1.0;

                    vec3 ip = instPosition;
                    ip.z = mod(ip.z + time * speed, value1) - value2;
                    mvPosition.xyz *= transformedX;
                    mvPosition.xyz += ip;
                    gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
                }
                `,
                fragmentShader: `
                
                uniform vec3 color;

                void main() {
                    gl_FragColor = vec4(color, 1.0);
                }
                `,
            });

            
            material1Ref.current = material1;
            material2Ref.current = material2;
        }, []);

        const material = new THREE.MeshBasicMaterial({
            color: 0xff0000, // red
          });
        //Create multi mesh object

        const geometry = new THREE.BoxGeometry(10, 10, 10);

        useFrame(({ clock }) => {
            if (mounted) {
                material1Ref.current.uniforms.time.value = clock.elapsedTime;
                material2Ref.current.uniforms.time.value = clock.elapsedTime;
            }
        });
    
        useEffect(() => {
            setMounted(true)
            return () => setMounted(false)
        }, [])


        if(material1Ref.current && material2Ref.current && pyramidGroupInstance){
            console.log("Grouped Pyramids Not Null");
            console.log(pyramidGroupInstance);
            return (
                
        <>
            <ambientLight/>
            <mesh
                geometry={pyramidGroupInstance}
                material={material}
            />
            
        </>
    
            );
        } else {
            console.log("Grouped Pyramids Null");
            return null;
        }
        
};

const SVGS = () => {
    const sun = [`/scenery/sun.svg`, -62.5, 90, -500, 0.11, "sun"];
    const city_far = [`/scenery/city_far.svg`, -68.5, 45, -450, 0.4, "cityFar"];
    const city_close = [`/scenery/city_close.svg`, -30.5, 45, -300, 0.2, "cityClose"];
  
    // SVGURL | X | Y | Z | SCALE | objectName
  
    const SVGLoaderComponent = ({ url, position, scale, name }) => {
      const {paths} = useLoader(SVGLoader, url);
    
      if (!paths) {
        return null;
      }

      return (
        <>
            <ambientLight/>
            <group position={position} scale={[scale, -scale, scale]} name={name}>
          {paths.map((path, index) => (
            <mesh
              key={index}
              geometry={new THREE.ShapeGeometry(path.toShapes(true))}
              material={
                new THREE.MeshStandardMaterial({
                  color: path.color,
                  side: THREE.DoubleSide,
                  depthWrite: false,
                })
              }
            />
          ))}
        </group>
        </>
        
      );
    };
  
    return (
      <>
        <SVGLoaderComponent url={sun[0]} position={[sun[1], sun[2], sun[3]]} scale={sun[4]} name={sun[5]} />
        <SVGLoaderComponent url={city_far[0]} position={[city_far[1], city_far[2], city_far[3]]} scale={city_far[4]} name={city_far[5]} />
        <SVGLoaderComponent url={city_close[0]} position={[city_close[1], city_close[2], city_close[3]]} scale={city_close[4]} name={city_close[5]} />
      </>
    );
  };

const randomize = (min, max, setting) => {
    const [previousRandomFloat, setPreviousRandomFloat] = useState(0);
    const [previousRandomInteger, setPreviousRandomInteger] = useState(0);
    const [previousOddRandomInteger, setPreviousOddRandomInteger] = useState(0);
    const [previousEvenRandomInteger, setPreviousEvenRandomInteger] = useState(0);
  
    let randomResult;
  
    if (setting === 'float') {
      // Get random float
      randomResult = Math.random() * (max - min + 1) + min;
  
      if (randomResult === previousRandomFloat) {
        do {
          randomResult = Math.random() * (max - min + 1) + min;
        } while (randomResult === previousRandomFloat);
        setPreviousRandomFloat(randomResult);
      }
    } else if (setting === 'int') {
      // Get random integer
      randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if (randomResult === previousRandomInteger) {
        do {
          randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (randomResult === previousRandomInteger);
        setPreviousRandomInteger(randomResult);
      }
    } else if (setting === 1 || setting === 2) {
      // Get random integer (Odd or Even)
      randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if (
        randomResult === previousOddRandomInteger ||
        randomResult === previousEvenRandomInteger
      ) {
        if (setting === 1) {
          if (
            randomResult < previousOddRandomInteger + 1 &&
            randomResult > previousOddRandomInteger - 1
          ) {
            do {
              randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (
              randomResult < previousOddRandomInteger + 1 &&
              randomResult > previousOddRandomInteger - 1
            );
          }
  
          setPreviousOddRandomInteger(randomResult);
        } else if (setting === 2) {
          if (
            randomResult < previousEvenRandomInteger + 1 &&
            randomResult > previousEvenRandomInteger - 1
          ) {
            do {
              randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (
              randomResult < previousEvenRandomInteger + 1 &&
              randomResult > previousEvenRandomInteger - 1
            );
          }
  
          setPreviousEvenRandomInteger(randomResult);
        }
        }
    }
    return randomResult;
};

const checkPositionHistory = (sizeOfGeometry, currentPositionX, currentPositionZ, positionHistory) => {
    let overlapDetected = false;
    let currentSize;

    if (sizeOfGeometry !== undefined) {
        currentSize = sizeOfGeometry;
    } else {
        currentSize = 1;
    }
    if(!positionHistory){
        return false;
    }
    for (let i = 0; i < positionHistory.length; i++) {
        if(
            // if current position + current size overlaps with previously set positions (-/+) their own size
            currentPositionX + currentSize > positionHistory[i].positionX - positionHistory[i].size &&
            currentPositionZ + currentSize > positionHistory[i].positionZ - positionHistory[i].size &&
            currentPositionX - currentSize < positionHistory[i].positionX + positionHistory[i].size &&
            currentPositionZ - currentSize < positionHistory[i].positionZ + positionHistory[i].size
        ) {
            overlapDetected = true;
        }
    }

    return overlapDetected;
};


// --------------------------------- Synthwave Canvas --------------------------------- //

const SynthwaveCanvas = () => {

    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    );
    camera.position.set(0, 10.0, 45.0);


    return (
        <Canvas
            camera={camera}
        >
            {/* <Effects disableGamma>
                <glitchPass delay={10} duration={0} strength={0.01} attachArray="passes" />
                <unrealBloomPass threshold={0} strength={0.1} radius={0} />
                <filmPass args={[0.3, 0.5, 2048, false]} />
            </Effects>  */}
            <EffectComposer>

                {/* Can only pick the Glitch affect or Chromatic Aberration */}
                {/* <Glitch delay={[2, 4]} duration={[0.5, 1]} strength={[0.04, 0.04]} /> */}
                {/* <ChromaticAberration offset={[0.001, 0.007]} />  */}

                {/* I dont think this does anything for this scene */}
                {/* <SSAO /> */}

                {/* <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0}
                    height={300}
                    opacity={2.0}
                />  */}
                {/* <Scanline density={0.7} opacity={0.3} /> */}
  
                {/* <Noise opacity={0.25} /> */}

                {/* <Vignette eskil={false} offset={0.1} darkness={0.9} />  */}


                {/*  Tone Mapping: https://threejs.org/docs/index.html#api/en/constants/Renderer*/}
                {/* <ToneMapping exposure={Math.pow(1, 4.0)} toneMapping={THREE.ReinhardToneMapping} whitePoint={1.0}/> */}

                {/* <ToneMapping
                    exposure={0.1}
                    toneMapping={THREE.Uncharted2ToneMapping}
                    whitePoint={2.0}
                /> */}
            </EffectComposer>
            
            <ambientLight />
            <Suspense fallback={null}>
                {/* TODO: remove orbit controls */}
                <OrbitControls
                    enableZoom={true}
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 2}
                />
                {/* <Stars/> */}
                <SkyBox />
                <Road />
                <Floor />
                <RoadLines />
                <SideWalk />
                <GroupedPyramids />
                <PalmTrees/>
                <SVGS/>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default SynthwaveCanvas;
