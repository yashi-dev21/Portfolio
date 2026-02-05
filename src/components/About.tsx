import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Rocket, Lightbulb, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Final Year Student",
      description: "B.Tech Computer Engineering (CGPA 8.0)"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Python, Flask, React, HTML/CSS/JavaScript"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Learning DevOps",
      description: "Currently expanding skills in DevOps practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical and problem-solving skills"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Placement Ready",
      description: "Actively preparing for opportunities"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Computer Engineering student with a strong foundation in full-stack development
                and a keen interest in building innovative solutions. My journey has been enriched through
                hands-on experience in both frontend and backend technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in Python and Flask for backend development, combined with modern frontend
                technologies like React, I enjoy creating seamless user experiences backed by robust server-side logic.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently, I'm expanding my skill set in Data Structures & Algorithms and DevOps practices,
                preparing myself for a successful career in the software industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-200"
                >
                  <div className="text-blue-600 mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
