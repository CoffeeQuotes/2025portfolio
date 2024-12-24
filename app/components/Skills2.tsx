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

const keySkills = ["Laravel" , "PHP", "JavaScript", "MySQL", "Git", "OpenAI GPT"]; // Example of defining key skills

export default function Skills2() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif text-foreground">Skills & Technologies</h2>
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
                className="h-full bg-background/80 dark:bg-background/60 backdrop-blur-sm border-none hover:bg-background/90 dark:hover:bg-background/70 transition-colors duration-300"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-sm py-1 px-2 ${
                          hoveredCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : (keySkills.includes(skill) // Check if it's a key skill
                                ? 'bg-primary/80 text-primary-foreground'
                                : 'bg-card/40 text-foreground dark:text-foreground')
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