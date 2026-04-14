import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "MERN Stack Learner",
    "React.js Developer"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-white to-white dark:from-primary-900/20 dark:via-slate-900 dark:to-slate-900"></div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-primary-600 to-cyan-400 p-1 mx-auto shadow-xl">
             <img 
               src="/ShubhamPrajapati - Copy.png" 
               alt="Shubham Prajapati" 
               className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-900 bg-gray-200 dark:bg-slate-800"
             />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-semibold mb-4 border border-primary-200 dark:border-primary-800/50">
            👋 Hi, I'm Shubham Prajapati
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-block mb-3">Frontend Developer |</span> <br className="hidden md:block"/>
          <div className="inline-block relative h-[1.3em] overflow-visible w-full text-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={titleIndex}
                className="absolute left-0 right-0 w-full flex justify-center items-center pb-2"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500 dark:from-primary-400 dark:to-cyan-400 whitespace-nowrap">
                  {titles[titleIndex] || titles[0]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build modern, responsive, and scalable web applications.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* View My Work Button */}
          <a href="#projects" className="relative group flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 rounded-full sm:w-auto w-full hover:-translate-y-2">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-primary-600 via-blue-500 to-cyan-400 group-hover:scale-105 transition-all duration-300"></div>
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-primary-600 via-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-80 group-hover:blur-xl group-hover:scale-105 transition-all duration-300 -z-10"></div>
            <span className="relative z-10 flex items-center space-x-2 tracking-wider">
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </a>

          {/* Download Resume Button */}
          <a href="/ShubhamPrajapati_React.pdf" target="_blank" rel="noopener noreferrer" className="relative group flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 rounded-full sm:w-auto w-full hover:-translate-y-2">
            {/* Gradient Outline */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-300 group-hover:scale-105"></div>
            {/* Inner Background (creates the border effect initially) */}
            <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-full group-hover:bg-opacity-0 transition-all duration-300 z-0"></div>
            {/* Hover Glow */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-rose-500 to-orange-400 blur-md opacity-0 group-hover:opacity-60 group-hover:blur-xl group-hover:scale-105 transition-all duration-300 -z-10"></div>
            
            <span className="relative z-10 flex items-center space-x-2 text-gray-800 dark:text-gray-100 group-hover:text-white transition-colors duration-300 tracking-wider">
              <span>Download Resume</span>
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
