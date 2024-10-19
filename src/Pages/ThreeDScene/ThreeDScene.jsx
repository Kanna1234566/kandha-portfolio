import React, { useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import threed from "../../assets/3D/3DReact.glb";
import threedev from "../../assets/3D/Dev3D.glb";
import githubModel from "../../assets/3D/GitHub.glb"; // Rename to avoid confusion

const Model = ({ modelPath, scale = [1, 1, 1], onHover }) => {
    const gltf = useLoader(GLTFLoader, modelPath);
    const modelRef = useRef();

    // Animation loop to rotate the model
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Rotate model on the y-axis
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={scale}
            onPointerOver={() => onHover(true)}   // When the mouse is over the model
            onPointerOut={() => onHover(false)}   // When the mouse leaves the model
        />
    );
};

const GitHub = () => {
    const [hovered, setHovered] = useState(false); // State to track hover

    // Function to handle hover state
    const handleHover = (isHovered) => {
        setHovered(isHovered);
    };

    return (
        <Canvas style={{ height: '30vh', width: 120 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model 
                modelPath={githubModel} 
                scale={hovered ? [9, 9, 3] : [8, 8, 2]}  
                onHover={handleHover} 
            />
        </Canvas>
    );
};


const JavaScript = () => {
    const [hovered, setHovered] = useState(false); // State to track hover

    // Function to handle hover state
    const handleHover = (isHovered) => {
        setHovered(isHovered);
    };
    return (
        <Canvas style={{ height: '30vh', width: 120 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model modelPath={threedev}    scale={hovered ? [9, 9, 3] : [8, 8, 2]}  
                onHover={handleHover}  />
        </Canvas>
    );
};

const ReactJs = () => {
    const [hovered, setHovered] = useState(false); // State to track hover

    // Function to handle hover state
    const handleHover = (isHovered) => {
        setHovered(isHovered);
    };
    return (
        <Canvas style={{ height: '30vh', width: 120 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model modelPath={threed}   scale={hovered ? [9, 9, 3] : [8, 8, 2]}  
                onHover={handleHover}  />
        </Canvas>
    );
};

// Export the components
export { ReactJs, JavaScript, GitHub };
