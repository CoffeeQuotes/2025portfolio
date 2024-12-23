'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Frontend": ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  "Backend": ["Laravel", "Node.js", "PHP", "Express.js", "RESTful APIs"],
  "Database": ["MySQL", "MongoDB", "PostgreSQL"],
  "DevOps": ["Git", "Docker", "CI/CD", "AWS"],
  "AI & Tools": ["TensorFlow", "PyTorch", "OpenAI GPT", "Jupyter Notebooks"]
}

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 bg-[#265952] dark:bg-[#1a1a1a]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif text-white">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                className="h-full bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors duration-300"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        variant="secondary" 
                        className={`text-sm py-1 px-2 ${
                          hoveredCategory === category
                            ? 'bg-[#CBD46A] text-[#265952] dark:text-[#1a1a1a]'
                            : 'bg-white/20 text-white'
                        } transition-colors duration-300`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

