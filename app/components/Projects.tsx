'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    title: "Donear",
    description: "B2B e-commerce platform for fashion and lifestyle products",
    details: [
      "Large catalog with products from over 100 brands",
      "Advanced search and filtering capabilities",
      "Secure checkout process and order management"
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis"]
  },
  {
    title: "Eicher Truck and Buses",
    description: "Modern website for Eicher's truck and bus products",
    details: [
      "Clean and modern layout with high-quality media",
      "User-friendly features like product filters and dealer locator",
      "Mobile-responsive design with enhanced security"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "SCIMOOC",
    description: "Massive Open Online Course (MOOC) platform for science education",
    details: [
      "Interactive course content with video lectures and quizzes",
      "User progress tracking and certificate generation",
      "Discussion forums for student-teacher interaction"
    ],
    technologies: ["Django", "React", "PostgreSQL", "AWS"]
  },
  {
    title: "Fractify",
    description: "AI-powered image processing tool for fractal generation",
    details: [
      "Utilizes deep learning models for fractal pattern recognition",
      "Real-time fractal generation and manipulation",
      "Cloud-based processing for high-resolution outputs"
    ],
    technologies: ["Python", "TensorFlow", "Flask", "WebGL"]
  }
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title)
  }

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif text-foreground">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="bg-background/80 dark:bg-background/60 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {expandedProject === project.title && (
                  <ul className="list-disc list-inside mb-4 text-foreground">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary text-primary-foreground">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  onClick={() => toggleProject(project.title)} 
                  className="text-foreground hover:text-primary hover:bg-card/20"
                >
                  {expandedProject === project.title ? (
                    <>Less Info <ChevronUp className="ml-2 h-4 w-4" /></>
                  ) : (
                    <>More Info <ChevronDown className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

