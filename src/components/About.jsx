import { motion } from 'framer-motion';
import { Container, Code2, Database, Layout, Smartphone, Wrench } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Layout className="w-6 h-6" />, desc: 'React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS' },
  { name: 'Backend', icon: <Code2 className="w-6 h-6" />, desc: 'Node.js, Express.js (Basic)' },
  { name: 'Database', icon: <Database className="w-6 h-6" />, desc: 'MongoDB (Basic)' },
  { name: 'Tools & Languages', icon: <Wrench className="w-6 h-6" />, desc: 'Git, GitHub, VS Code, Netlify | JavaScript, C++' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Bio Data */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m Shubham Prajapati, a B.Tech Computer Science student and a passionate Frontend Developer who enjoys building clean, responsive, and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. I focus on creating reusable components, improving UI design, and integrating REST APIs to build dynamic and efficient applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Along with frontend development, I am also exploring Node.js, Express.js, and MongoDB to grow as a full-stack developer. I am passionate about building real-world projects, improving problem-solving skills, and continuously learning modern technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 group overflow-hidden z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl -z-10"></div>
                
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-primary-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
