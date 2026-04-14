import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    title: 'B.Tech Computer Science',
    company: 'Malwa Institute of Technology',
    date: 'Expected 2026',
    desc: 'Pursuing Bachelor of Technology in Computer Science. Current CGPA: 7.51.',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: 'Class 12',
    company: 'Higher Secondary Education',
    date: 'Completed',
    desc: 'Passed with 82%.',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: 'Class 10',
    company: 'Secondary Education',
    date: 'Completed',
    desc: 'Passed with 92.5%.',
    icon: <GraduationCap className="w-5 h-5" />
  }
];

const certifications = [
  {
    title: 'Foundation of Cloud, IoT & Edge ML',
    company: 'IIT Kanpur',
    icon: <Award className="w-5 h-5" />
  },
  {
    title: 'Cyber Security Practitioner',
    company: 'IIT Kanpur',
    icon: <Award className="w-5 h-5" />
  }
];

const Experience = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Education Timeline */}
          <div className="w-full lg:w-1/2 relative">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
               <GraduationCap className="w-6 h-6 mr-3 text-primary-500" />
               Education
             </h3>
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 dark:bg-slate-800 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                      {edu.icon}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900 dark:text-slate-100">{edu.title}</div>
                        <time className="text-xs font-medium text-primary-600 dark:text-primary-400">{edu.date}</time>
                      </div>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{edu.company}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">{edu.desc}</div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Certifications */}
          <div className="w-full lg:w-1/2">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
               <Award className="w-6 h-6 mr-3 text-primary-500" />
               Certifications
             </h3>
             <div className="grid grid-cols-1 gap-6">
               {certifications.map((cert, index) => (
                 <motion.div
                   key={index}
                   className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 flex items-center shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.15 }}
                 >
                   <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-cyan-400/5 transition-all duration-300"></div>
                   <div className="p-4 bg-primary-50 dark:bg-slate-800 rounded-xl text-primary-600 dark:text-primary-400 group-hover:bg-gradient-to-tr group-hover:from-primary-600 group-hover:to-cyan-500 group-hover:text-white shadow-sm mr-6 transition-all duration-300 group-hover:scale-110">
                     {cert.icon}
                   </div>
                   <div className="relative z-10">
                     <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                     <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{cert.company}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
