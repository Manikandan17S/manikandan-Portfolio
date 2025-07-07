import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Brain, Hand, Mic, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'AI-Powered Finance Advisor',
      description: 'Intelligent financial planning system using machine learning algorithms to provide personalized investment recommendations.',
      tech: ['Flask', 'React', 'Tailwind', 'Python', 'ML'],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      link: '#',
      github: 'https://github.com/Manikandan17S/ai-finance-advisor',
    },
    {
      title: 'Cost-Effective VR Hand Tracking',
      description: 'Revolutionary hand tracking solution using MediaPipe, making VR accessible without expensive hardware.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'VR'],
      icon: <Hand className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Intelligent Voice Assistant',
      description: 'Advanced voice-controlled AI assistant with natural language processing and contextual understanding.',
      tech: ['Python', 'Speech API', 'NLP', 'AI'],
      icon: <Mic className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Face Prediction ML Model',
      description: 'Deep learning model for facial recognition and emotion detection with high accuracy and real-time processing.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      icon: <Eye className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-audiowide">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani font-light">
            Innovative solutions that blend cutting-edge technology with creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-full`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 font-exo text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed font-rajdhani">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.1) }}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30 font-rajdhani"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;