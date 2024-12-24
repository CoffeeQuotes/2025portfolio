'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "./ui/card"
import { Button } from "@/components/ui/button"; // Import Button

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
                My journey into web development began with a fascination for how things work online.
                After earning a degree in Computer Applications, that curiosity led me to a coding bootcamp where I truly discovered my passion for building things from scratch. There's a real thrill in tackling a complex problem and crafting an elegant, efficient solution - that's what truly excites me about programming.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My expertise in PHP (Laravel) and the <span className="font-semibold">MERN stack (MongoDB, Express.js, React, Node.js)</span> allows me to build robust, scalable
                applications that not only meet client needs but also provide seamless user experiences. I'm passionate about crafting efficient and maintainable code, ensuring projects are built for long-term success. I'm constantly learning and adapting to new technologies, with a
                particular interest in AI tools and their integration into web development, which I believe can bring innovative solutions to complex challenges.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-6 text-center"
              >
                <Button asChild>
                  <a href="#projects">See My Projects</a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}