import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Brain, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timeline = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Discovered my passion for coding and AI while exploring creative possibilities.',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      year: '2021',
      title: 'AI & Data Science Focus',
      description: 'Dove deep into machine learning, building models for finance and computer vision.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: '2022',
      title: 'Full Stack Development',
      description: 'Expanded skills to include React, Flask, and complete web application development.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: '2023',
      title: 'Creative Tech Fusion',
      description: 'Started combining technical skills with creative passions in animation and storytelling.',
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const skills = [
    'Problem-solving', 'Teamwork', 'Adaptability', 'Creativity',
    'AI Innovation', 'Data Science', 'Tech Passion', 'Storytelling'
  ];

  return (
    <section id="about" className="py-20 relative z-10">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani font-light">
            Aspiring Artificial Intelligence and Data Science professional with expertise in Python, SQL, and Machine Learning. I'm a passionate Full Stack Developer, AI Developer, and Prompt Engineer who loves building intelligent, interactive web experiences. I also explore creative storytelling through video editing and 3D animation. I strive to turn technology into meaningful, innovative solutions that inspire and perform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 neon-blue">
              <h3 className="text-2xl font-bold mb-6 font-exo text-blue-300">My Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-bold text-blue-300 font-rajdhani">{item.year}</span>
                        <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1"></div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 font-exo">{item.title}</h4>
                      <p className="text-gray-400 font-rajdhani">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 neon-purple">
              <h3 className="text-2xl font-bold mb-6 font-exo text-purple-300">Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-red-400" />
                  <span className="text-lg font-rajdhani">Curiosity 🔍</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-blue-400" />
                  <span className="text-lg font-rajdhani">Integrity 💡</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <span className="text-lg font-rajdhani">Future Vision: Creating anime stories in Blender</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-purple-300 font-exo">Key Strengths</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-3 text-center text-sm font-medium font-rajdhani"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;