'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { formatDistanceToNow, format } from 'date-fns'
import { SectionBackground } from "./ui/section-background"

type BlogPost = {
  title: string
  link: string
  content: string
  pubDate: string
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        
        if (data.status === 'success') {
          setPosts(data.posts.slice(0, 3))
        } else {
          setError(data.message || 'Failed to fetch blog posts')
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        setError('Failed to fetch blog posts')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Function to create excerpt from content
  const createExcerpt = (content: string) => {
    // Remove HTML tags and get first 150 characters
    const plainText = content.replace(/<[^>]+>/g, '')
    return plainText.slice(0, 150) + '...'
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const distance = formatDistanceToNow(date, { addSuffix: true })
    const fullDate = format(date, 'MMMM d, yyyy')
    return `${distance} (${fullDate})`
  }

  return (
    <SectionBackground 
      imageUrl="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop"
      className="min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-8 text-center font-serif text-foreground">Latest Blog Posts</h2>
      
      {error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
          <p className="text-sm mt-2">Please check back later</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, i) => (
              <Card key={i} className="bg-background/80 dark:bg-background/60 border-primary/20 backdrop-blur-sm animate-pulse">
                <CardHeader className="space-y-2">
                  <div className="h-6 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-4 bg-primary/20 rounded w-1/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded"></div>
                    <div className="h-4 bg-primary/20 rounded"></div>
                    <div className="h-4 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-background/80 dark:bg-background/60 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                    <CardDescription>
                      {formatDate(post.pubDate)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {createExcerpt(post.content)}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read More <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      )}
    </SectionBackground>
  )
} 