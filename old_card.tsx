"use client";


import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;

  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,

  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'tween' }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col h-full bg-slate-900"
    >
      {/* Top Section: GitHub Style Header */}
      <div className="bg-white p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <p className="text-slate-600 text-sm font-medium mb-1">ayus1234 /</p>
            <h4 className="text-slate-900 text-sm font-bold leading-tight break-words">
              {title.replace(/\s+/g, '_\u200B').replace(/-/g, '\u2011')}
            </h4>
          </div>
        </div>

        <p className="text-slate-500 text-xs mb-6 line-clamp-2">
          This project implements a {description.toLowerCase()}
        </p>

        <div className="flex items-center gap-4 text-slate-400 text-[10px] font-medium">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            <span>1 Contributor</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>0 Issues</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            <span>0 Stars</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.5-7.5M13 7l5 5-5 5" /></svg>
            <span>0 Forks</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
      </div>

      {/* Bottom Section: Project Details */}
      <div className="flex-1 flex flex-col p-6 bg-slate-900">
        <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 text-sm mb-6 flex-1 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-[10px] font-medium border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-4 border-t border-slate-800">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              GitHub ΓåÆ
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors flex items-center gap-2"
            >
              Live Demo ΓåÆ
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 
