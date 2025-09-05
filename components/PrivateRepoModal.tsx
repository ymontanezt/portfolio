"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Lock, Building2 } from "lucide-react"
import { useI18n } from "@/contexts/I18nContext"

interface PrivateRepoModalProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
}

export default function PrivateRepoModal({ isOpen, onClose, projectTitle }: PrivateRepoModalProps) {
  const { translation } = useI18n()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border-border/50">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
            <Lock className="w-6 h-6 text-muted-foreground" />
          </div>
          <DialogTitle className="text-foreground">{translation.privateModal.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {translation.privateModal.description.replace("{projectTitle}", projectTitle)}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/30">
          <Building2 className="w-5 h-5 text-primary" />
          <div className="text-sm">
            <p className="font-medium text-foreground">{translation.privateModal.reason}</p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button onClick={onClose} className="w-full">
            {translation.privateModal.close}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
