import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2.5, 1]} />
                <meshStandardMaterial
                    color="#FF4A57"
                    wireframe={true}
                    emissive="#FF4A57"
                    emissiveIntensity={0.6}
                />
            </mesh>

            {/* Inner glowing sphere */}
            <Sphere args={[1.4, 32, 32]}>
                <MeshDistortMaterial
                    color="#1B1F2D"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    emissive="#FF4A57"
                    emissiveIntensity={0.2}
                    wireframe={false}
                />
            </Sphere>
        </Float>
    );
};

export default function Hero3D() {
    return (
        <div className="absolute right-0 top-0 w-full h-full z-0 opacity-80 pointer-events-none md:w-3/5">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AbstractShape />
            </Canvas>
        </div>
    );
}
