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
import { DialogDescription } from "@radix-ui/react-dialog"

import { useTranslations } from "next-intl"

export const SettingsModal = () => {
  const t = useTranslations("SettingsModal")
  const settings = useSettings()

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-medium">
            {t("Title")}
          </DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              {t("Appearence.Label")}
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              {t("Appearence.Description")}
            </span>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              {t("Language.Label")}
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              {t("Language.Description")}
            </span>
          </div>
          <LocaleToggle />
        </div>
      </DialogContent>
    </Dialog>
  )
}