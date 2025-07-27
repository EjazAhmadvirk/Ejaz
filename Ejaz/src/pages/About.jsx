import { motion } from 'framer-motion';
import { Code, Database, Brain, Rocket, Award, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code },
    { name: 'Backend Development', level: 85, icon: Database },
    { name: 'AI/Machine Learning', level: 75, icon: Brain },
    { name: 'Problem Solving', level: 95, icon: Rocket },
  ];

  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development projects and mentoring junior developers.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2021 - 2022',
      description: 'Developed responsive web applications using React and Node.js.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2020 - 2021',
      description: 'Built and maintained various web applications and learned industry best practices.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Hello, I'm Ejaz Ahmad
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate web developer and computer science graduate with a strong foundation in modern web technologies. 
                My journey in tech began with curiosity about how websites work, and it has evolved into a deep passion for creating 
                innovative digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I'm expanding my expertise into artificial intelligence and machine learning, combining my web development 
                skills with cutting-edge AI technologies to build intelligent systems that solve real-world problems.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">CS Graduate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Team Player</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Code className="h-24 w-24 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-300">Professional Photo Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="h-6 w-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-purple-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

