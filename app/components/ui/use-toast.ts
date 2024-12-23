"use client"

import { useState } from 'react'

export function useToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')

  const toast = ({ title, description }: { title: string; description?: string }) => {
    setMessage(description || title)
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 3000)
  }

  return { toast }
} 