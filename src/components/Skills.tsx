import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette,
  Heart,
  Users,
  Zap,
  Target
} from 'lucide-react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const technicalSkills = [
    { name: 'Frontend Development', level: 90, icon: <Code className="w-6 h-6" />, color: 'from-blue-400 to-cyan-400' },
    { name: 'Backend Development', level: 85, icon: <Database className="w-6 h-6" />, color: 'from-green-400 to-emerald-400' },
    { name: 'Mobile Development', level: 75, icon: <Smartphone className="w-6 h-6" />, color: 'from-purple-400 to-pink-400' },
    { name: 'Cloud & DevOps', level: 80, icon: <Cloud className="w-6 h-6" />, color: 'from-orange-400 to-red-400' },
    { name: 'AI & Machine Learning', level: 88, icon: <Brain className="w-6 h-6" />, color: 'from-violet-400 to-indigo-400' },
    { name: 'UI/UX Design', level: 82, icon: <Palette className="w-6 h-6" />, color: 'from-pink-400 to-rose-400' },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95, icon: <Target className="w-6 h-6" />, color: 'from-cyan-400 to-blue-400' },
    { name: 'Teamwork', level: 90, icon: <Users className="w-6 h-6" />, color: 'from-green-400 to-teal-400' },
    { name: 'Adaptability', level: 92, icon: <Zap className="w-6 h-6" />, color: 'from-yellow-400 to-orange-400' },
    { name: 'Creativity', level: 88, icon: <Heart className="w-6 h-6" />, color: 'from-pink-400 to-purple-400' },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani font-light">
            A comprehensive skill set spanning technical expertise and essential soft skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 neon-blue">
              <h3 className="text-2xl font-bold mb-8 font-exo text-blue-300 text-center">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-r ${skill.color} p-2 rounded-full`}>
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
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ 
                          boxShadow: `0 0 10px rgba(59, 130, 246, 0.5)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 neon-purple">
              <h3 className="text-2xl font-bold mb-8 font-exo text-purple-300 text-center">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-6 text-center relative overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-full w-fit mx-auto mb-4`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-white font-semibold mb-2 font-exo">{skill.name}</h4>
                      <div className="relative w-16 h-16 mx-auto">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
                          <circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-gray-600"
                          />
                          <motion.circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 12}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 12 }}
                            animate={isInView ? { 
                              strokeDashoffset: 2 * Math.PI * 12 * (1 - skill.level / 100) 
                            } : { strokeDashoffset: 2 * Math.PI * 12 }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-white font-rajdhani">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;