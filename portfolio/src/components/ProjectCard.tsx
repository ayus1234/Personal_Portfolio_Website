"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
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
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.15)' }}
      className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-gray-800 flex flex-col h-full"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-2xl border-b-4 border-blue-200 dark:border-blue-900 shadow-md"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-purple-300">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Live Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300 font-medium"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 