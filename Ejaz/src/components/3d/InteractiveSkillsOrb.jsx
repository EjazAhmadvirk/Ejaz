import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

// 3D Skill Orb Component
function SkillOrb({ position, color, skill, isHovered, onHover }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.scale.setScalar(isHovered ? 1.2 : 1);
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 32, 32]}
        onPointerEnter={() => onHover(skill)}
        onPointerLeave={() => onHover(null)}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
}

// Main Interactive Skills Orb Component
const InteractiveSkillsOrb = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skills = [
    { name: 'React', position: [2, 1, 0], color: '#61DAFB' },
    { name: 'Node.js', position: [-2, 1, 0], color: '#339933' },
    { name: 'Python', position: [0, 2, 1], color: '#3776AB' },
    { name: 'AI/ML', position: [1, -1, 2], color: '#FF6B6B' },
    { name: 'Three.js', position: [-1, -1, -1], color: '#000000' },
    { name: 'MongoDB', position: [0, -2, 0], color: '#47A248' },
  ];

  return (
    <div className="relative w-full h-96">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        {skills.map((skill, index) => (
          <SkillOrb
            key={index}
            position={skill.position}
            color={skill.color}
            skill={skill.name}
            isHovered={hoveredSkill === skill.name}
            onHover={setHoveredSkill}
          />
        ))}
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {/* Skill Info Overlay */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-purple-500/50 rounded-lg p-4"
        >
          <h3 className="text-white font-bold text-lg">{hoveredSkill}</h3>
          <p className="text-gray-300 text-sm">
            {getSkillDescription(hoveredSkill)}
          </p>
        </motion.div>
      )}
      
      {/* Instructions */}
      <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
        <p>Drag to rotate • Hover to explore</p>
      </div>
    </div>
  );
};

// Helper function to get skill descriptions
function getSkillDescription(skill) {
  const descriptions = {
    'React': 'Modern frontend library for building user interfaces',
    'Node.js': 'JavaScript runtime for building scalable server applications',
    'Python': 'Versatile programming language for AI, web development, and data science',
    'AI/ML': 'Artificial Intelligence and Machine Learning technologies',
    'Three.js': '3D graphics library for creating immersive web experiences',
    'MongoDB': 'NoSQL database for modern applications'
  };
  return descriptions[skill] || 'Advanced technology skill';
}

export default InteractiveSkillsOrb;

