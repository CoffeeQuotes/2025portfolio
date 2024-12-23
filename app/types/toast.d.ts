import { ToastProps } from "@/components/ui/toast"

declare module "@/components/ui/use-toast" {
  interface ToastActionElement {
    altText: string;
    action: React.ReactElement;
  }

  interface Toast {
    title: string;
    description?: string;
    duration?: number;
    variant?: "default" | "destructive";
    action?: ToastActionElement;
  }
} 