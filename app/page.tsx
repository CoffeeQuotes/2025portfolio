import { Metadata } from 'next'
import Header from './components/Header'
import Hero2 from './components/Hero2'
import About2 from './components/About2'
import Experience2 from './components/Experience2'
import Skills2 from './components/Skills2'
import Projects2 from './components/Projects2'
import Contact2 from './components/Contact2'
import Footer2 from './components/Footer2'
import Blog from './components/Blog'
import { ScrollIndicator } from './components/ui/scroll-indicator'
import Services from './components/Services'

export const metadata: Metadata = {
  title: 'Shishir Kumar - Full Stack Developer',
  description: 'Portfolio of Shishir Kumar, a skilled full-stack developer with 5 years of experience specializing in PHP (Laravel).',
  icons: {
    icon: '/favicon.ico',  // Path relative to the public directory
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ScrollIndicator />
      <main>
        <Hero2 />
        <About2 />
        <Services />
        <Experience2 />
        <Skills2 />
        <Projects2 />
        <Blog />
        <Contact2 />
      </main>
      <Footer2 />
    </div>
  )
}

