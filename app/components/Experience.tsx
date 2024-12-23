import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

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
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif text-[#265952]">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-[#CBD46A]/10 border-[#265952]">
              <CardHeader>
                <CardTitle className="text-[#265952]">{exp.title}</CardTitle>
                <CardDescription className="text-[#265952]/80">{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#265952]/70 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-[#265952]">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

