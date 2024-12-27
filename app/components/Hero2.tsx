'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Linkedin, Github } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { SectionBackground } from "./ui/section-background"

export default function Hero2() {
  return (
    <SectionBackground
      imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      className="min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <img
            src="https://avatars.githubusercontent.com/u/17348830?v=4"
            alt="Shishir Kumar"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-lg"
          />
          <span className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-primary-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif">
            Crafting Engaging <span className="text-primary">Web Experiences</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Full-Stack Developer | <span className="font-bold text-foreground">React, Laravel, JavaScript</span> | 5+ Years Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            I specialize in{' '}
            <span className="font-semibold text-foreground">
              PHP (Laravel)
            </span>{' '}
            and enjoy creating innovative{' '}
            <TypeAnimation
              sequence={[
                'websites',
                2000,
                'applications',
                2000,
                'user experiences',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-semibold text-primary"
            />
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="#projects">
                Explore My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="default"
              className="rounded-none border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="/professional-cv.docx.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/90 hover:bg-primary/10" asChild>
              <a
                href="https://www.linkedin.com/in/shishir-kumar-b69b20134/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/90 hover:bg-primary/10" asChild>
              <a
                href="https://github.com/CoffeeQuotes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionBackground>
  )
}