import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Content Categorizer & Summarizer',
    desc: 'Built a built a responsive dashboard using React.js. Implemented reusable components, added search/filter functionality, and integrated REST APIs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'REST APIs', 'Tailwind CSS'],
    demo: '#',
    code: '#'
  },
  {
    title: 'AI Chat Application',
    desc: 'Developed an AI chat interface using JavaScript and the Gemini API. Features real-time API calls and a clean, responsive chat UI.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['JavaScript', 'Gemini API', 'HTML/CSS'],
    demo: 'http://shubhamchatgpt.netlify.app',
    code: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works. Each project was built to solve a specific problem or explore a new technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 border border-gray-100 dark:border-slate-800 flex flex-col hover:-translate-y-2 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
            >
              {/* Animated Glow Border Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-500/0 group-hover:to-primary-500/5 dark:group-hover:to-cyan-400/5 transition-all duration-500 pointer-events-none z-0"></div>

              <div className="h-60 overflow-hidden relative z-10 w-full m-2 rounded-2xl max-w-[calc(100%-16px)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-primary-600 rounded-full text-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.code} className="p-3 bg-white hover:bg-primary-600 rounded-full text-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
