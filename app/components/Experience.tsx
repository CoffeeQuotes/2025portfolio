'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const experiences = [
  {
    title: "Software Developer",
    company: "IT Data Solutions (Remote)",
    period: "April 2023 - Present",
    achievements: [
      "Led the development of scalable web applications, improving system efficiency by 25%.",
      "Implemented advanced API integrations, enhancing data processing speed by 30%.",
      "Collaborated with cross-functional teams to deliver high-quality solutions within tight deadlines."
    ]
  },
  {
    title: "Laravel Developer",
    company: "grapes, New Delhi",
    period: "February 2022 - March 2023",
    achievements: [
      "Developed and launched a Laravel-based web application in 3 months, increasing user engagement by 20%.",
      "Created and maintained 3 dynamic web applications, resulting in a 40% increase in user engagement over 8 months."
    ]
  },
  {
    title: "PHP Developer",
    company: "DIAM RESOURCES PRIVATE LIMITED, Noida",
    period: "July 2021 - January 2022",
    achievements: [
      "Improved PHP application performance by 25% in 3 months, reducing page load time by 1.5 seconds.",
      "Migrated a legacy PHP application to a cloud-based platform, resulting in significant cost savings and performance improvements."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 text-center font-serif text-foreground">Experience</h2>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 md:mb-20"
            >
              {/* Timeline dot with pulse effect - improved positioning */}
              <div className="absolute top-6 left-0 w-6 h-6 transform -translate-x-1/2 z-10">
                {/* Solid dot */}
                <div className="absolute inset-0 bg-background border-4 border-primary rounded-full" />
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
              </div>

              {/* Card content */}
              <Card className="relative bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300 ml-8">
                <CardHeader>
                  <div className="space-y-1">
                    <Badge variant="outline" className="w-fit mb-2 border-primary/50 text-primary">
                      {exp.period}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                    <CardDescription className="text-muted-foreground font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="relative pl-6 text-justify before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-primary"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

