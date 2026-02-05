import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Get My Resume
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my education, experience, projects, and skills.
              Feel free to reach out if you have any opportunities or questions!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
              onClick={() => {
                alert('Resume download will be available soon. Please contact me directly at yashikamule219@gmail.com');
              }}
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </motion.button>

            <div className="mt-6 text-sm text-gray-500">
              Last Updated: February 2026
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
