import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'Web Development',
      icon: Globe,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application using OpenAI API with real-time messaging, conversation history, and responsive design.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'OpenAI API', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'AI/ML',
      icon: Brain,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'Mobile Development',
      icon: Smartphone,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with 3D animations, dark mode, and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      category: 'Web Development',
      icon: Code,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'A collaborative task management platform with real-time updates, team collaboration, and project tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebSocket'],
      category: 'Web Development',
      icon: Globe,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Prediction ML',
      description: 'Machine learning model for weather prediction using historical data and neural networks.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      category: 'AI/ML',
      icon: Brain,
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.filter(project => project.featured).map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </motion.div>

          {/* All Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-8">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(project => !project.featured).map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, featured }) => {
  const Icon = project.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group ${
        featured ? 'lg:col-span-1' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
        <Icon className="h-16 w-16 text-purple-400" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex space-x-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              <Github className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

