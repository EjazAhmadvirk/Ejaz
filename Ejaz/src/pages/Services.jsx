import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Database, Palette, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Vue.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility'],
      price: 'Starting at $1,500',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['Cross-platform Development', 'Native Performance', 'App Store Deployment', 'Push Notifications'],
      price: 'Starting at $2,500',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence and machine learning capabilities into your existing applications.',
      features: ['ChatBot Development', 'Data Analysis', 'Predictive Models', 'API Integration'],
      price: 'Starting at $2,000',
      popular: false
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust backend systems with APIs, databases, and server infrastructure for scalable applications.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Deployment', 'Security Implementation'],
      price: 'Starting at $1,800',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
      price: 'Starting at $1,200',
      popular: false
    },
    {
      icon: Zap,
      title: 'Consulting',
      description: 'Technical consulting and code reviews to help optimize your existing projects and workflows.',
      features: ['Code Review', 'Architecture Planning', 'Performance Audit', 'Technology Stack Advice'],
      price: '$100/hour',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We discuss your project requirements, goals, and timeline to create a detailed plan.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'I create wireframes and mockups to visualize the solution before development begins.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Clean, efficient code is written with regular updates and feedback throughout the process.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final testing, deployment, and handover with documentation and ongoing support.'
    }
  ];

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
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to bring your ideas to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-6 group transition-all duration-300 ${
                      service.popular 
                        ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                        : 'border-white/10 hover:border-purple-500/50'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}

                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-purple-400 font-semibold">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">My Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                onClick={() => window.location.href = '/contact'}
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3"
                onClick={() => window.location.href = '/projects'}
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

