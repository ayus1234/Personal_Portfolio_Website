'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'EcoShift – A Carbon Footprint Tracker App',
    description: 'A web-based application designed to help individuals track sustainable habits and measure real-time CO2 savings. Features include habit logging, profile management, date-range filtering, and CSV/PDF export.',
    imageUrl: '/project3.jpg',
    technologies: ['Node.js', 'Express.js', 'SQLite', 'Chart.js', 'Bootstrap', 'REST API'],
    githubUrl: 'https://github.com/ayus1234/EcoShift---A-Carbon-Footprint-Tracker-App',
  },
  {
    title: 'EV Vehicle Prediction and Forecasting',
    description: 'A complete machine learning pipeline that forecasts electric vehicle (EV) adoption trends by analyzing historical data. Built with a Random Forest Regressor and an interactive Streamlit dashboard.',
    imageUrl: '/project2.jpeg',
    technologies: ['Python', 'Random Forest', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/ayus1234/EV_Vehicle_Prediction',
  },
  {
    title: 'E-DALL-E: Image Generation and Expansion System',
    description: 'Combines DALL-E Mini for text-to-image generation with a novel expansion technique (E-DALL-E) using VQGAN+CLIP to create images with various aspect ratios and cinematic appeal.',
    imageUrl: '/project1.jpeg',
    technologies: ['Python', 'DALL-E Mini', 'VQGAN+CLIP', 'PyTorch', 'Deep Learning'],
    githubUrl: 'https://github.com/ayus1234/E-DALL-E-Image-Generation-and-Expansion-System',
  },
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-screen flex items-center justify-center bg-[#0b1120] overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full animate-pulse" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="relative w-48 h-48 mb-10 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-blue-500/20 bg-white"
              >
                <Image
                  src="/profile-placeholder.png"
                  alt="Ayush Nathani"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl"
              >
                Ayush Nathani
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, type: 'spring' }}
                className="text-lg sm:text-xl text-white/90 mb-12 font-medium tracking-wide"
              >
                Computer Science Student & Developer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, type: 'spring' }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#about"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-xl hover:scale-105 hover:shadow-blue-500/25 transition-all duration-300 font-semibold"
                >
                  About Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-xl shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-20 bg-[#0b1120] relative overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* About Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800 shadow-2xl h-full"
              >
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  I am a Computer Science student currently pursuing my MCA at IIT Patna & IIIT Ranchi. I am passionate about programming and software development, with a strong foundation in multiple programming languages and frameworks. I enjoy creating innovative solutions to real-world problems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl text-sm font-bold tracking-wide">MCA Student</span>
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-xl text-sm font-bold tracking-wide">Developer</span>
                </div>
              </motion.div>

              {/* Skills Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800 shadow-2xl h-full"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-purple-400">🛠️</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
                </h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {[
                    { name: 'Python (Intermediate)', icon: '🐍' },
                    { name: 'C/C++ (Intermediate)', icon: '💻' },
                    { name: 'Java (Basic)', icon: '☕' },
                    { name: 'HTML & CSS (Intermediate)', icon: '🌐' },
                    { name: 'Machine Learning', icon: '🤖' },
                    { name: 'Deep Learning', icon: '🧠' },
                    { name: 'OpenCV', icon: '📷' },
                    { name: 'React.js', icon: '⚛️' }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 text-slate-300">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800 shadow-2xl h-full"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-purple-400">🎓</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
                </h3>
                <div className="space-y-8">
                  {[
                    { title: 'Master of Computer Applications (MCA)', school: 'IIT Patna & IIIT Ranchi', detail: 'August 2025 – Present (Expected: July 2027)' },
                    { title: 'Bachelor of Computer Applications (BCA)', school: 'Amity University Jharkhand', detail: 'July 2021 – June 2024' },
                    { title: 'XIIth Grade', school: 'Trident Public School', detail: 'July 2020' },
                    { title: 'Xth Grade', school: 'Paramount Academy', detail: 'May 2018' }
                  ].map((edu) => (
                    <div key={edu.title} className="relative pl-6 border-l-2 border-purple-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                      <h4 className="text-slate-100 font-bold mb-1">{edu.title}</h4>
                      <p className="text-purple-400 text-sm font-medium mb-1">{edu.school}</p>
                      <p className="text-slate-400 text-xs">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800 shadow-2xl h-full"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-purple-400">📜</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
                </h3>
                <div className="space-y-6">
                  {[
                    { name: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure', issuer: 'LinkedIn Learning', date: 'August 2025', description: 'Introduction to Azure AI workloads and basic machine learning concepts.' },
                    { name: 'Gemini for Google Workspace', issuer: 'Simplilearn Skillup', date: 'August 2025', description: 'Practical application of Gemini AI tools for Google Workspace.' }
                  ].map((cert) => (
                    <div key={cert.name} className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                      <h4 className="text-slate-100 font-bold mb-1">{cert.name}</h4>
                      <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-20 bg-[#0b1120] relative overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-purple-300">My Projects</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience in software development.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-2xl shadow-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 p-0"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-20 bg-[#0b1120] relative overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/15 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-purple-300">Get in Touch</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-slate-800"
            >
              <ContactForm />
              <div className="flex justify-center gap-6 mt-8">
                <a href="mailto:ayushnathani1234@gmail.com" className="text-blue-600 hover:text-pink-500 transition-colors" title="Email">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
                <a href="https://github.com/ayus1234" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-pink-500 transition-colors" title="GitHub">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://linkedin.com/in/ayush-nathani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-pink-500 transition-colors" title="LinkedIn">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
