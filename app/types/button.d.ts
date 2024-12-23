import { ButtonProps } from "@/components/ui/button"

declare module "@/components/ui/button" {
  interface ButtonProps {
    variant?: "default" | "ghost" | "outline"
  }
} 