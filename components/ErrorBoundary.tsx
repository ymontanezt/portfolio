"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home, Bug, Code } from "lucide-react"
import Link from "next/link"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // Here you could also log to an error reporting service
    // Example: logErrorToService(error, errorInfo)
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-destructive/5 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl w-full"
          >
            <Card className="border-destructive/20 shadow-2xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-4"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="text-6xl md:text-7xl font-bold text-destructive/20 select-none"
                    >
                      ⚠️
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Bug className="w-12 h-12 text-destructive animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>

                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  ¡Ups! Algo salió mal
                </CardTitle>
                <p className="text-muted-foreground">
                  Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Error Details */}
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Card className="bg-muted/50 border-destructive/20">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-4 h-4 text-destructive" />
                          <span className="text-sm font-semibold text-destructive">
                            Detalles del Error (Solo en desarrollo)
                          </span>
                        </div>
                        <div className="text-xs font-mono text-muted-foreground space-y-2">
                          <div>
                            <strong>Error:</strong> {this.state.error.message}
                          </div>
                          {this.state.error.stack && (
                            <div>
                              <strong>Stack:</strong>
                              <pre className="mt-1 p-2 bg-muted rounded text-xs overflow-x-auto">
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button 
                    onClick={this.handleRetry}
                    size="lg" 
                    className="group"
                  >
                    <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    Intentar de Nuevo
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="group">
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Ir al Inicio
                    </Link>
                  </Button>
                </motion.div>

                {/* Help Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center space-y-2"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="w-4 h-4" />
                    <span>¿El problema persiste?</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Contacta conmigo en{" "}
                    <a 
                      href="mailto:yuri.montanez@example.com" 
                      className="text-primary hover:underline"
                    >
                      yuri.montanez@example.com
                    </a>
                    {" "}para reportar el problema.
                  </p>
                </motion.div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-20 left-10 text-destructive/20 text-2xl select-none pointer-events-none"
            >
              &lt;!&gt;
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute bottom-20 right-10 text-destructive/20 text-2xl select-none pointer-events-none"
            >
              { }
            </motion.div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
