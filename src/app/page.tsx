'use client'

import Image from "next/image";
import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Typewriter from '@/components/Typewriter'

const projects = [
  {
    title: 'EcoShift – A Carbon Footprint Tracker App',
    description: 'A web-based application designed to help individuals track sustainable habits and measure real-time CO2 savings. Features include habit logging, profile management, date-range filtering, and CSV/PDF export.',
    imageUrl: '/project3.jpg',
    technologies: ['Node.js', 'Express.js', 'SQLite', 'Chart.js', 'Bootstrap', 'REST API'],
    githubUrl: 'https://github.com/ayus1234/EcoShift---A-Carbon-Footprint-Tracker-App',
    colorClass: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'EV Vehicle Prediction and Forecasting',
    description: 'A complete machine learning pipeline that forecasts electric vehicle (EV) adoption trends by analyzing historical data. Built with a Random Forest Regressor and an interactive Streamlit dashboard.',
    imageUrl: '/project2.jpeg',
    technologies: ['Python', 'Random Forest', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/ayus1234/EV_Vehicle_Prediction',
    colorClass: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'E-DALL-E: Image Generation and Expansion System',
    description: 'Combines DALL-E Mini for text-to-image generation with a novel expansion technique (E-DALL-E) using VQGAN+CLIP to create images with various aspect ratios and cinematic appeal.',
    imageUrl: '/project1.jpeg',
    technologies: ['Python', 'DALL-E Mini', 'VQGAN+CLIP', 'PyTorch', 'Deep Learning'],
    githubUrl: 'https://github.com/ayus1234/E-DALL-E-Image-Generation-and-Expansion-System',
    colorClass: 'from-orange-400 to-rose-500',
  },
]

export default function Home(): React.ReactNode {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Navigation />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-from to-primary-to origin-left z-[100]"
        style={{ scaleX }}
      />

      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Ambient Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[60%] sm:w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[10%] w-[50%] sm:w-[35%] h-[35%] bg-blue-600/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -100, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[10%] left-[20%] w-[40%] sm:w-[30%] h-[30%] bg-pink-600/5 blur-[120px] rounded-full"
          />
        </div>

        {/* Hero Section */}
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-background/80 to-background -z-10" />
            <div className="absolute top-[10%] right-[5%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-primary-from/5 blur-[120px] rounded-full" />
          </div>

          <div className="container scroll-mt-24 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-6xl">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-8">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-primary-from font-medium tracking-widest text-sm sm:text-lg mb-3 sm:mb-4 uppercase"
                >
                  HI, I AM
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-foreground"
                >
                  Ayush <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">Nathani</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex items-center text-foreground/90"
                >
                  I&apos;m a <Typewriter words={["Developer", "Problem Solver", "Tech Enthusiast"]} />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-muted text-base sm:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed"
                >
                  I build interactive web experiences with a focus on motion, aesthetics, and usability.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary-from to-primary-to text-white rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-primary-from/10 hover:shadow-primary-from/25 transition-shadow duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">View My Work</span>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                    />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 border border-card-border text-foreground rounded-full text-sm sm:text-base font-semibold hover:bg-card transition-colors duration-300"
                  >
                    Contact Me
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Profile Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center lg:justify-end w-full"
              >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-[4px] border-card-border shadow-[0_0_40px_rgba(var(--highlight),0.15)] z-10 bg-card flex items-center justify-center">
                  <Image
                    src="/profile-placeholder.png"
                    alt="Ayush Nathani"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-16 sm:py-24 relative overflow-hidden bg-subtle-bg border-t border-card-border"
        >
          <div className="container scroll-mt-24 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center text-foreground">
              About <span className="text-primary-from">Me</span>
            </h2>

            {/* Top Section: About & Skills horizontally */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-6 sm:mb-8">
              {/* About Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-card-border shadow-2xl relative overflow-hidden group hover:border-primary-from/30 transition-colors h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary-from/5 rounded-bl-full pointer-events-none group-hover:bg-primary-from/10 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 relative z-10">
                  <span className="text-foreground">About Me</span>
                </h3>
                <div className="relative z-10 flex-1">
                  <p className="text-muted leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                    I am a Computer Science student currently pursuing my MCA at IIT Patna & IIIT Ranchi. I am passionate about programming and software development, with a strong foundation in multiple programming languages and frameworks. I enjoy creating innovative solutions to real-world problems.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 sm:px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl text-xs sm:text-sm font-bold tracking-wide">MCA Student</span>
                    <span className="px-3 sm:px-4 py-2 bg-primary-from/10 text-primary-from border border-primary-from/20 rounded-xl text-xs sm:text-sm font-bold tracking-wide">Developer</span>
                  </div>
                </div>
              </motion.div>

              {/* Skills Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-card-border shadow-2xl relative overflow-hidden group hover:border-primary-to/30 transition-colors h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary-to/5 rounded-bl-full pointer-events-none group-hover:bg-primary-to/10 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 relative z-10">
                  <span className="text-primary-to">🛠️</span>
                  <span className="text-foreground">Skills</span>
                </h3>
                <div className="relative z-10 flex-1">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4"
                  >
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
                      <motion.div
                        key={skill.name}
                        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                        className="flex items-center gap-3 text-muted"
                      >
                        <span className="text-lg sm:text-xl">{skill.icon}</span>
                        <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Section: Education & Certifications horizontally */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mt-6 sm:mt-8">
              {/* Education Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-card-border shadow-2xl relative overflow-hidden group hover:border-primary-from/30 transition-colors h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary-from/5 rounded-bl-full pointer-events-none group-hover:bg-primary-from/10 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 relative z-10">
                  <span className="text-primary-from">🎓</span>
                  <span className="text-foreground">Education</span>
                </h3>
                <div className="space-y-6 sm:space-y-8 relative z-10 flex-1">
                  {[
                    { title: 'Master of Computer Applications (MCA)', school: 'IIT Patna & IIIT Ranchi', detail: 'August 2025 – Present (Expected: July 2027)' },
                    { title: 'Bachelor of Computer Applications (BCA)', school: 'Amity University Jharkhand', detail: 'July 2021 – June 2024' },
                    { title: 'XIIth Grade', school: 'Trident Public School', detail: 'July 2020' },
                    { title: 'Xth Grade', school: 'Paramount Academy', detail: 'May 2018' }
                  ].map((edu) => (
                    <div key={edu.title} className="relative pl-5 sm:pl-6 border-l-2 border-primary-from/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-from shadow-lg shadow-primary-from/50" />
                      <h4 className="text-foreground text-base sm:text-lg font-bold mb-1 leading-snug">{edu.title}</h4>
                      <p className="text-primary-from font-medium mb-1 text-xs sm:text-sm">{edu.school}</p>
                      <p className="text-muted text-xs">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-card-border shadow-2xl relative overflow-hidden group hover:border-primary-to/30 transition-colors h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary-to/5 rounded-bl-full pointer-events-none group-hover:bg-primary-to/10 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 relative z-10">
                  <span className="text-primary-to">📜</span>
                  <span className="text-foreground">Certifications</span>
                </h3>
                <div className="space-y-4 sm:space-y-6 relative z-10 flex-1">
                  {[
                    { name: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure', issuer: 'LinkedIn Learning', date: 'August 2025' },
                    { name: 'Gemini for Google Workspace', issuer: 'Simplilearn Skillup', date: 'August 2025' }
                  ].map((cert) => (
                    <div key={cert.name} className="p-4 sm:p-5 bg-subtle-bg rounded-xl sm:rounded-2xl border border-card-border hover:border-primary-to/30 transition-colors">
                      <h4 className="text-foreground text-sm sm:text-base font-bold mb-1 sm:mb-2 leading-snug">{cert.name}</h4>
                      <p className="text-primary-to font-medium mb-1 text-xs sm:text-sm">{cert.issuer}</p>
                      <p className="text-muted text-xs">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-16 sm:py-24 relative overflow-hidden bg-subtle-bg border-t border-card-border"
        >
          <div className="container scroll-mt-24 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center text-foreground">
              Featured <span className="text-primary-from">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-card-border"
        >
          <div className="container scroll-mt-24 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-start">
              {/* Left Info */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground text-left">
                  Connect With <span className="text-primary-from">Me</span>
                </h2>
                <p className="text-muted text-base sm:text-lg mb-8 sm:mb-12 max-w-md leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these platforms.
                </p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                  className="flex flex-col space-y-3 sm:space-y-4"
                >
                  {[
                    { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', url: 'https://github.com/ayus1234' },
                    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/ayush-nathani/' },
                    { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', url: 'https://x.com/AyushNathani2' },
                    { name: 'Email', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', url: 'mailto:ayushnathani1234@gmail.com' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card border border-card-border hover:border-primary-from/30 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-subtle-bg flex items-center justify-center group-hover:bg-primary-from transition-colors">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                        </div>
                        <span className="text-xs sm:text-sm text-foreground font-medium">{social.name}</span>
                      </div>
                      <span className="text-muted group-hover:text-primary-from group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Right Form */}
              <div className="flex items-center justify-center lg:justify-end w-full">
                <div className="w-full max-w-lg p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border border-card-border bg-card">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-primary-from rounded-full flex items-center justify-center text-white hover:bg-primary-to transition-colors z-50 shadow-[0_0_20px_rgba(var(--highlight),0.4)]"
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </motion.button>

      <Footer />
    </>
  );
}
