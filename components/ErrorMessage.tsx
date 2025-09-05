"use client"

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ErrorMessageProps {
  message: string
  className?: string
}

export default function ErrorMessage({ message, className = "" }: ErrorMessageProps) {
  return (
    <Alert variant="destructive" className={`bg-destructive/10 border-destructive/20 ${className}`}>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-destructive">{message}</AlertDescription>
    </Alert>
  )
}
