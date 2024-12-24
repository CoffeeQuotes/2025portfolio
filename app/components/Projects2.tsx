'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    title: "Donear",
    description: "Developed a B2B e-commerce platform for fashion and lifestyle products, focusing on efficient catalog management and secure transactions.",
    details: [
      "Architected the product catalog module with over 100 brands, enabling efficient data management and search functionality.",
      "Implemented advanced search and filtering capabilities using Elasticsearch, improving product discovery by 40%.",
      "Developed a secure checkout process using Stripe API and integrated an order management system, reducing order processing time by 20%."
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
    githubLink: "https://donear.com/" // Replace with your actual link
  },
  {
    title: "Eicher Truck and Buses",
    description: "Developed the modern website for Eicher's truck and bus products, emphasizing a clean user experience and enhanced product showcasing.",
    details: [
      "Designed and implemented a clean and modern layout with high-quality images and videos to showcase Eicher's product line.",
      "Integrated user-friendly product filters and a dealer locator using the Google Maps API, improving user navigation and information access.",
      "Ensured a mobile-responsive design and implemented enhanced security measures, including input sanitization and protection against common web vulnerabilities."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://www.eichertrucksandbuses.com/" // Replace with your actual link
  },
  {
    title: "SCIMOOC",
    description: "Contributed to the development of SCIMOOC, a Massive Open Online Course (MOOC) platform designed to deliver engaging science education.",
    details: [
      "Developed interactive course content components using React, incorporating video lectures, quizzes, and progress tracking features.",
      "Implemented user progress tracking and certificate generation functionalities, providing learners with tangible rewards for their achievements.",
      "Built discussion forums using a real-time communication library, facilitating student-teacher interaction and collaborative learning."
    ],
    technologies: ["Django", "React", "PostgreSQL", "AWS"],
    githubLink: "https://scimooc.org/" // Replace with your actual link
  },
  {
    title: "Fractify",
    description: "Engineered Fractify, an AI-powered image processing tool for generating and manipulating fractal art in real-time.",
    details: [
      "Implemented deep learning models using TensorFlow for identifying and generating complex fractal patterns from user inputs.",
      "Developed a real-time fractal generation and manipulation interface using WebGL, allowing users to interactively explore and customize fractals.",
      "Utilized Flask for creating a cloud-based processing backend, enabling high-resolution fractal output without straining local resources."
    ],
    technologies: ["Python", "TensorFlow", "Flask", "WebGL"],
    githubLink: "https://www.fractify.io/" // Replace with your actual link
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
              <CardFooter className="flex justify-between items-center">
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
                {project.githubLink && (
                  <Button asChild variant="outline" className="text-foreground hover:text-primary border-primary hover:bg-card/20">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Site
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}