'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "./ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 font-serif text-foreground">About Me</h2>
          <Card className="bg-card/10 border-none shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                After earning a degree in Computer Applications, I followed my passion for programming. 
                I completed a coding bootcamp and became proficient in full-stack web development. 
Solving complex problems is what excites me the most in programming. I thrive on the 
satisfaction of finding elegant solutions to challenging problems.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My expertise in PHP (Laravel) and the MERN stack allows me to build robust, scalable 
applications. I'm constantly learning and adapting to new technologies, with a 
particular interest in AI tools and their integration into web development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

