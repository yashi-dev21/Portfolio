import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      skills: ["Python", "Flask"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      skills: ["Python", "Java", "C"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data",
      skills: ["Pandas", "NumPy", "Excel", "Matplotlib"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "Canva"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Core",
      skills: ["Problem Solving", "Analytical Thinking", "Communication"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white shadow-sm`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
