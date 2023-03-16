import React, { Suspense, useEffect, useState, useRef } from "react";

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

import { EffectComposer, Noise, Glitch} from "@react-three/postprocessing";
import {GlitchMode} from 'postprocessing';

import { UnrealBloomPass } from "three-stdlib";

import * as THREE from "three";

import { InstancedBufferGeometry, InstancedBufferAttribute } from 'three';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

import { OrbitControls, Preload, useGLTF, Effects } from "@react-three/drei";

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
                        position={[0, 1, 0.2]}
                        rotation={[0, 0, 0]}
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
        if (materialRef.current) {
            materialRef.current.uniforms.time.value = clock.elapsedTime;
        }
    });

    return (
        <mesh
            position={[0, 0, 0]}
            geometry={floorGeometry}
            material={materialRef.current}
        />
    );
};

const SideWalk = () => {
    const materialRef = useRef();
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
        if (materialRef.current) {
            materialRef.current.uniforms.time.value = clock.elapsedTime;
        }
    });



    return (
        <>
            <ambientLight/>
            <mesh
                position={[0, 1, 0.5]}
                geometry={sideWalkGeometry}
                material={materialRef.current}
            />
        </>
        
    );
};

const GroupedPyramids = () => {
    let randomSize, translateX, translateZ, rotatePyramid;

    let pyramidGeometry, pyramidInstance, pyramidMaterial, pyramid;

    let pyramidWireframe, wireframeMaterial;

    const pyramidGroupConception = [];

    let minRandomSize, maxRandomSize, minTranslateX, maxTranslateX;

    let minRotatePyramid = 0;
    let maxRotatePyramid = 2;
    let minTranslateZ = 0;
    let maxTranslateZ = 80;

    for (let i = 0; i < 80; i++){
        let ignoreGeometry = false;

        if (i < 60) {
			// Furthest
			minRandomSize = 5;
			maxRandomSize = 25;
			minTranslateX = 27;
			maxTranslateX = 120;
		} else if (i >= 60) {
			// Closest pyramids
			minRandomSize = 3;
			maxRandomSize = 8;
			minTranslateX = 10;
			maxTranslateX = 32;
		}

		if (i % 2 == 0) {
			// For left side, make translateX negative as 0 is the center
			minTranslateX *= -1;
			maxTranslateX *= -1;
		}

        randomSize = randomize(minRandomSize, maxRandomSize, "int");
		translateX = randomize(minTranslateX, maxTranslateX, "float");
		translateZ = randomize(minTranslateZ, maxTranslateZ, "float");
		rotatePyramid = randomize(minRotatePyramid, maxRotatePyramid, "float");
    }

};

const randomize = ( min, max, setting ) => {

    let randomResult;

    if (setting == "float") {
		// Get random float
		randomResult = Math.random() * (max - min + 1) + min;

		if (randomResult == this.previousRandomFloat) {
			do {
				randomResult = Math.random() * (max - min + 1) + min;
			} while (randomResult == this.previousRandomFloat);
			this.previousRandomFloat = randomResult;
		}
	} else if (setting == "int") {
		// Get random integer
		randomResult = Math.floor(Math.random() * (max - min + 1)) + min;

		if (randomResult == this.previousRandomInteger) {
			do {
				randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
			} while (randomResult == this.previousRandomInteger);
			this.previousRandomInteger = randomResult;
		}
	} else if (setting == 1 || setting == 2) {
		// Get random integer (Odd or Even)
		randomResult = Math.floor(Math.random() * (max - min + 1)) + min;

		if (
			randomResult == this.previousOddRandomInteger ||
			randomResult == this.previousEvenRandomInteger
		) {
			if (setting == 1) {
				if (
					randomResult < this.previousOddRandomInteger + 1 &&
					randomResult > this.previousOddRandomInteger - 1
				) {
					do {
						randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
					} while (
						randomResult < this.previousOddRandomInteger + 1 &&
						randomResult > this.previousOddRandomInteger - 1
					);
				}

				this.previousOddRandomInteger = randomResult;
			} else if (setting == 2) {
				if (
					randomResult < this.previousEvenRandomInteger + 1 &&
					randomResult > this.previousEvenRandomInteger - 1
				) {
					do {
						randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
					} while (
						randomResult < this.previousEvenRandomInteger + 1 &&
						randomResult > this.previousEvenRandomInteger - 1
					);
				}

				this.previousEvenRandomInteger = randomResult;
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
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    );
    camera.position.set(0, 4.8, 15);

    return (
        <Canvas
            camera={camera}
            gl={{
                toneMapping: THREE.ReinhardToneMapping,
                toneMappingExposure: Math.pow(1, 4.0),
            }}
        >
            <Effects disableGamma>
                {/* threshhold has to be 1, so nothing at all gets bloom by default  */}
                {/* <glitchPass />  */}
                <unrealBloomPass threshold={0} strength={1.5} radius={0.8} />
                <filmPass args={[0.2, 0.75, 2048, false]} />
            </Effects> 
            <ambientLight />
            <Suspense fallback={null}>
                {/* TODO: remove orbit controls */}
                <OrbitControls
                    enableZoom={true}
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 2}
                />
                <Road />
                <Floor />
                <RoadLines />
                <SideWalk />
                {/* <GroupedPyramids /> */}
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default SynthwaveCanvas;
