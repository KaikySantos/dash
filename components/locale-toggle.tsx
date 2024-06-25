"use client"

import * as React from "react"

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LocaleToggle() {  
  const t = useTranslations("SettingsModal.LanguageOptions")

  const locale = useLocale()
  
  const pathname = usePathname()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="uppercase">{locale}</span>
          <span className="sr-only">Toggle locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push(pathname, { locale: "en" })}>
          {t("English")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(pathname, { locale: "pt" })}>
          {t("Portuguese")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
