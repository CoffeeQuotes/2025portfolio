'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  className?: string
}

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const defaultMessage = "Hello! I'd like to know more about your services."
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full hover:opacity-80 transition-opacity",
        className
      )}
      aria-label="Chat on WhatsApp"
    >
    <Image
        src="/img/whatsapp-icon.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className="object-contain"/>

    </button>
  )
} 