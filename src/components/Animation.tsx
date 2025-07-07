import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, Film, Edit, Palette, Zap } from 'lucide-react';

const Animation: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Anime Story Concept',
      description: 'Original anime story development with character design and world-building.',
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Blender', 'Character Design', 'Storytelling'],
      status: 'In Development',
    },
    {
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics for social media and promotional content.',
      image: 'https://images.pexels.com/photos/7130587/pexels-photo-7130587.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['After Effects', 'Motion Design', 'Typography'],
      status: 'Completed',
    },
    {
      title: '3D Animation Reel',
      description: 'Showcase of 3D animation skills including character rigging and scene composition.',
      image: 'https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Blender', '3D Modeling', 'Animation'],
      status: 'Portfolio',
    },
    {
      title: 'Video Editing Projects',
      description: 'Professional video editing for various clients and personal projects.',
      image: 'https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['DaVinci Resolve', 'Color Grading', 'Audio'],
      status: 'Ongoing',
    },
  ];

  const skills = [
    { name: 'Adobe After Effects', level: 85, icon: <Edit className="w-6 h-6" /> },
    { name: 'DaVinci Resolve', level: 90, icon: <Film className="w-6 h-6" /> },
    { name: 'Blender 3D', level: 80, icon: <Palette className="w-6 h-6" /> },
    { name: 'Motion Design', level: 75, icon: <Zap className="w-6 h-6" /> },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="animation" className="py-20 relative z-10">
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
              Animation & Editing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani font-light">
            Bringing stories to life through animation, motion graphics, and video editing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 neon-purple">
              <h3 className="text-2xl font-bold mb-6 font-exo text-purple-300">
                Featured Work
              </h3>
              
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <img
                      src={projects[currentSlide].image}
                      alt={projects[currentSlide].title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-300 bg-black/50 px-2 py-1 rounded-full font-rajdhani">
                          {projects[currentSlide].status}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
                        >
                          <Play className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-1 font-exo">
                        {projects[currentSlide].title}
                      </h4>
                      <p className="text-gray-300 text-sm font-rajdhani">
                        {projects[currentSlide].description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={prevSlide}
                    className="bg-purple-500/20 hover:bg-purple-500/30 p-2 rounded-full transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-purple-300" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentSlide ? 'bg-purple-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="bg-purple-500/20 hover:bg-purple-500/30 p-2 rounded-full transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-purple-300" />
                  </button>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {projects[currentSlide].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium font-rajdhani"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills & Future Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 neon-blue">
              <h3 className="text-2xl font-bold mb-6 font-exo text-blue-300">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium font-rajdhani">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-rajdhani">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        style={{ 
                          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 neon-cyan">
              <h3 className="text-2xl font-bold mb-4 font-exo text-cyan-300">
                Future Vision
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 font-rajdhani font-light">
                "My dream is to create my own anime story using Blender, combining traditional 
                storytelling with cutting-edge 3D animation. I want to build a bridge between 
                technology and emotion, creating characters that feel real and stories that 
                touch hearts."
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-exo font-bold text-center cursor-pointer"
              >
                Coming Soon: Original Anime Series
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Animation;