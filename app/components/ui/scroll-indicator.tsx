'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
]

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Track all visible sections
    const visibleSections = new Set<string>()
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id)
          } else {
            visibleSections.delete(entry.target.id)
          }

          // Find the topmost visible section from our ordered sections array
          const currentSection = sections.find(section => 
            visibleSections.has(section.id)
          )

          // If we found a visible section, set it as active
          if (currentSection) {
            setActiveSection(currentSection.id)
          } else if (window.scrollY === 0) {
            // If we're at the top of the page, set home as active
            setActiveSection('home')
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px', // Slightly adjusted margins
        threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for better detection
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Add scroll event listener for top of page detection
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('home')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleDotClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleDotClick(id)}
            className="group relative p-2"
            aria-label={`Scroll to ${label}`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 
                ${activeSection === id 
                  ? 'bg-primary border-primary scale-125' 
                  : 'border-primary/50 hover:border-primary hover:scale-110'
                }`}
              initial={false}
              animate={{
                scale: activeSection === id ? 1.25 : 1
              }}
            />
            <span className="absolute left-8 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/80 
              backdrop-blur-sm rounded text-sm opacity-0 -translate-x-2 transition-all duration-300 
              pointer-events-none whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0">
              {label}
            </span>
          </button>
        ))}
        <div className="absolute top-0 left-1/2 h-full w-px bg-primary/20 -z-10 transform -translate-x-1/2" />
      </div>
    </div>
  )
} 