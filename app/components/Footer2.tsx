import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer2() {
  return (
    <footer className="bg-[#2D3748] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Shishir Kumar. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/CoffeeQuotes" target="_blank" rel="noopener noreferrer" className="hover:text-[#E53E3E]">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shishir-kumar-b69b20134/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E53E3E]">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sky8052785942ocean@gmail.com" className="hover:text-[#E53E3E]">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}