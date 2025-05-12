'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'Traffic Sign Classification with Deep Learning',
    description: 'Implemented a traffic sign classification system using Convolutional Neural Networks (CNNs) with Keras and TensorFlow. The system can identify and categorize various traffic signs from images.',
    imageUrl: '/project3.jpg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    githubUrl: 'https://github.com/ayus1234/traffic-sign-classification',
  },
  {
    title: 'Interactive Color Recognition',
    description: 'Developed a Python application for recognizing colors in images using OpenCV and a color database. Allows users to interactively explore color information in real-time.',
    imageUrl: '/project2.jpeg',
    technologies: ['Python', 'OpenCV', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/ayus1234/color-recognition',
  },
  {
    title: 'Age-Gender Detection System',
    description: 'Implemented a real-time age and gender detection system using OpenCV and pre-trained deep learning models. Identifies faces, estimates age range and gender, and displays results with bounding boxes.',
    imageUrl: '/project1.jpeg',
    technologies: ['Python', 'OpenCV', 'Deep Learning'],
    githubUrl: 'https://github.com/ayus1234/age-gender-detection',
  },
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 overflow-hidden"
        >
          {/* Animated background shapes */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-0 right-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-500/30"
              >
                <Image
                  src="/profile-placeholder.jpg"
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
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
              >
                Ayush Nathani
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, type: 'spring' }}
                className="text-xl sm:text-2xl text-white/90 dark:text-gray-300 mb-8 font-medium drop-shadow"
              >
                Computer Science Student & Developer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, type: 'spring' }}
                className="flex gap-4"
              >
                <a
                  href="#about"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  About Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border-2 border-white/80 text-white rounded-lg shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-200"
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
          className="py-20 bg-white dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 lg:grid-rows-2"
            >
              {/* About Card */}
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-100 dark:border-gray-700 h-full"
              >
                <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-purple-300">About Me</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  I am a Computer Science student at Amity University Jharkhand, passionate about programming and software development. With a strong foundation in multiple programming languages and frameworks, I enjoy creating innovative solutions to real-world problems.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">BCA Student</span>
                  <span className="inline-block bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">Developer</span>
                </div>
              </motion.div>
              {/* Skills Card */}
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span>🛠️</span> Skills
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>🐍 Python (Intermediate)</li>
                  <li>💻 C/C++ (Intermediate)</li>
                  <li>☕ Java (Basic)</li>
                  <li>🌐 HTML & CSS (Intermediate)</li>
                  <li>🤖 Machine Learning</li>
                  <li>🧠 Deep Learning</li>
                  <li>📷 OpenCV</li>
                  <li>⚛️ React.js</li>
                </ul>
              </motion.div>
              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span>🎓</span> Education
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>
                    <span className="font-semibold">Bachelor of Computer Application (BCA)</span> — Amity University Jharkhand<br />
                    <span className="text-xs">CGPA: 8.7 | 2021-2024</span>
                  </li>
                  <li>
                    <span className="font-semibold">XIIth Grade (CBSE)</span> — Trident Public School<br />
                    <span className="text-xs">Percentage: 76.4% | 2020</span>
                  </li>
                  <li>
                    <span className="font-semibold">Xth Grade (CBSE)</span> — Paramount Academy<br />
                    <span className="text-xs">Percentage: 72.8% | 2018</span>
                  </li>
                </ul>
              </motion.div>
              {/* Certifications Card */}
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span>📜</span> Certifications
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Machine Learning with Python - YHills (01/2024)</li>
                  <li>Front End Web Development with ReactJS and JavaScript - DevTown (07/2023)</li>
                </ul>
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
          className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-blue-950"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-purple-300">My Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience in software development.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-800 p-0"
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
          className="py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-purple-300">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 border border-blue-100 dark:border-gray-800 backdrop-blur-md"
            >
              <ContactForm />
              <div className="flex justify-center gap-6 mt-8">
                <a href="mailto:ayushnathani1234@gmail.com" className="text-blue-600 hover:text-pink-500 transition-colors" title="Email">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
                <a href="https://github.com/ayus1234" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-pink-500 transition-colors" title="GitHub">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                </a>
                <a href="https://linkedin.com/in/ayush-nathani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-pink-500 transition-colors" title="LinkedIn">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
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
