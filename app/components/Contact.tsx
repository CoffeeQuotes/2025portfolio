'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"
import { Loader2, CheckCircle2, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
    setIsSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSuccess(true)
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
        action: {
          altText: "Success",
          action: (
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          )
        }
      })
      
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif text-foreground">Contact Me</h2>
        <Card className="bg-card/10 border-muted hover:bg-card/20 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">Get in Touch</CardTitle>
                <CardDescription className="text-muted-foreground">I'd love to hear from you!</CardDescription>
              </div>
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            {isSuccess && (
              <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-500">
                <CheckCircle2 className="h-5 w-5" />
                <span>Message sent successfully!</span>
              </div>
            )}
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
                    disabled={isLoading}
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground"
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
                    disabled={isLoading}
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <CardFooter className="px-0 pt-4">
                <Button 
                  type="submit" 
                  className={`w-full transition-colors duration-300 ${
                    isSuccess 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

