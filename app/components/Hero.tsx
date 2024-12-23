'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Linkedin, Github } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-background via-background/95 to-background/90 dark:from-background dark:via-background/95 dark:to-muted">
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
            className="w-32 h-32 rounded-full border-4 border-[#CBD46A] shadow-lg"
          />
          <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#CBD46A] rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-[#265952]"
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
            Hello, I'm <span className="text-[#CBD46A]">Shishir</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            a skilled{' '}
            <span className="font-bold text-foreground">
              full-stack developer
            </span>{' '}
            with 5 years of experience
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
            <Button size="lg" className="rounded-none bg-[#CBD46A] text-[#265952] hover:bg-[#CBD46A]/90" asChild>
              <a href="#contact">
                Contact me here <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-[#CBD46A] text-[#265952] hover:bg-[#CBD46A] hover:text-white" asChild>
              <a href="/professional-cv.docx.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="ghost" size="icon" className="text-[#CBD46A] hover:text-[#CBD46A]/90 hover:bg-[#CBD46A]/10" asChild>
              <a
                href="https://www.linkedin.com/in/shishir-kumar-b69b20134/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#CBD46A] hover:text-[#CBD46A]/90 hover:bg-[#CBD46A]/10" asChild>
              <a
                href="https://github.com/yourgithub"
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
    </section>
  )
}

