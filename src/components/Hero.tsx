import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Download, MessageSquare } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Yashika Mule
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Final Year Computer Engineering Student | Python Developer | Aspiring Software / DevOps Engineer
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-8 text-gray-600 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bhilai, Chhattisgarh, India</span>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I'm a final-year Computer Engineering student with experience in frontend development, Python, and Flask.
            I've worked on full-stack and ML-based projects and completed internships in data analysis and frontend development.
            I'm actively seeking internships and entry-level roles in Software / IT.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold border-2 border-gray-300 hover:border-purple-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="mailto:yashikamule219@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yashika-mule"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/yashi-dev21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="tel:+919302994828"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
