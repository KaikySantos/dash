"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"

import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleToggle } from "@/components/locale-toggle"

export const SettingsModal = () => {
  const settings = useSettings()

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-medium">
            Settings
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              Appearence
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Anotai looks on your device
            </span>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              Language
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Anotai looks on your device
            </span>
          </div>
          <LocaleToggle />
        </div>
      </DialogContent>
    </Dialog>
  )
}