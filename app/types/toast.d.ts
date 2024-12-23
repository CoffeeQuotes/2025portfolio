import { ToastProps } from "@/components/ui/toast"

declare module "@/components/ui/use-toast" {
  interface ToastProps {
    duration?: number
    variant?: "default" | "destructive"
    action?: React.ReactNode
  }
} 