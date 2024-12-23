import { Metadata } from 'next'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'

export const metadata: Metadata = {
  title: 'Shishir Kumar - Full Stack Developer',
  description: 'Portfolio of Shishir Kumar, a skilled full-stack developer with 5 years of experience specializing in PHP (Laravel).'
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

