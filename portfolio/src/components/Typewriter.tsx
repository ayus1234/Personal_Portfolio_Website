'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
    words: string[]
    typingSpeed?: number
    deletingSpeed?: number
    delayBetweenWords?: number
}

export default function Typewriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
}: TypewriterProps) {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [reverse, setReverse] = useState(false)

    // typing effect
    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed + Math.random() * 50);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className="text-purple-400 ml-2">
            {`${words[index].substring(0, subIndex)}`}
            <span className="inline-block w-[2px] h-8 bg-purple-400 animate-pulse ml-[2px] align-middle mb-1"></span>
        </span>
    )
}
