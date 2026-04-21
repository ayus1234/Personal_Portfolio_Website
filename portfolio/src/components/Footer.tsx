'use client'

export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-card-border flex flex-col items-center">
      <p className="text-muted text-sm font-medium mb-2">© {new Date().getFullYear()} Ayush Nathani. All rights reserved.</p>
      <p className="text-muted text-sm">Contact: (+91) 6200509101</p>
    </footer>
  )
}