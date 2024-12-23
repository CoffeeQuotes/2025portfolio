import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#265952] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Shishir Kumar. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-[#CBD46A]">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shishir-kumar-b69b20134/" target="_blank" rel="noopener noreferrer" className="hover:text-[#CBD46A]">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-[#CBD46A]">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

