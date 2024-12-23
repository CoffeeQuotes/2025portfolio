'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif text-[#265952]">Contact Me</h2>
        <Card className="bg-[#CBD46A]/10 border-[#265952]">
          <CardHeader>
            <CardTitle className="text-[#265952]">Get in Touch</CardTitle>
            <CardDescription className="text-[#265952]/80">I'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-[#265952] text-[#265952] placeholder-[#265952]/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-[#265952] text-[#265952] placeholder-[#265952]/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-[#265952] text-[#265952] placeholder-[#265952]/50"
                  />
                </div>
              </div>
              <CardFooter className="px-0 pt-4">
                <Button type="submit" className="w-full bg-[#265952] text-white hover:bg-[#265952]/90">Send Message</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

