import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Zap, Eye, Lightbulb, Rocket, Shield } from 'lucide-react';

const Innovation: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const innovations = [
    {
      title: 'Neural Network Optimization',
      description: 'Advanced algorithms for improving AI model performance with reduced computational overhead.',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      status: 'Active Research',
    },
    {
      title: 'Quantum-Inspired Computing',
      description: 'Exploring quantum computing principles for next-generation AI applications.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      status: 'Prototype Phase',
    },
    {
      title: 'Computer Vision Enhancement',
      description: 'Revolutionary approaches to real-time image processing and object recognition.',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      status: 'In Development',
    },
    {
      title: 'Creative AI Solutions',
      description: 'AI systems that can generate and enhance creative content for animation and storytelling.',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      status: 'Conceptual',
    },
    {
      title: 'Ethical AI Framework',
      description: 'Developing responsible AI practices and bias detection mechanisms.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      status: 'Research',
    },
    {
      title: 'Future Tech Integration',
      description: 'Bridging current AI capabilities with emerging technologies.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      status: 'Vision',
    },
  ];

  return (
    <section id="innovation" className="py-20 relative z-10">
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
              AI & Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani font-light">
            Pushing the boundaries of artificial intelligence and exploring the future of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 45 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${innovation.color} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    {innovation.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-full font-rajdhani">
                    {innovation.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 font-exo text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-rajdhani">
                  {innovation.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                      />
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-rajdhani"
                  >
                    Explore →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 neon-cyan">
            <h3 className="text-2xl font-bold mb-4 font-exo text-cyan-300">
              Future Vision
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-rajdhani font-light">
              "Building AI that doesn't just process data, but understands emotion and creativity. 
              My goal is to create technology that bridges the gap between human imagination and digital reality, 
              bringing anime stories to life through intelligent 3D animation."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;