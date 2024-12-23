'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Linkedin, Github } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <img
            src="https://avatars.githubusercontent.com/u/17348830?v=4"
            alt="Shishir Kumar"
            className="w-32 h-32 rounded-full border-4 border-[#B4ADD9] shadow-lg"
          />
          <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#B4ADD9] rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-[#565F63]"
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
            Hello, I'm <span className="text-[#B4ADD9]">Shishir</span>
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
            <Button size="lg" className="rounded-none bg-[#B4ADD9] text-[#565F63] hover:bg-[#B4ADD9]/90" asChild>
              <a href="#contact">
                Contact me here <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-[#B4ADD9] text-[#565F63] hover:bg-[#B4ADD9] hover:text-white" asChild>
              <a href="/professional-cv.docx.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="ghost" size="icon" className="text-[#B4ADD9] hover:text-[#B4ADD9]/90 hover:bg-[#B4ADD9]/10" asChild>
              <a
                href="https://www.linkedin.com/in/shishir-kumar-b69b20134/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#B4ADD9] hover:text-[#B4ADD9]/90 hover:bg-[#B4ADD9]/10" asChild>
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

