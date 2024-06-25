"use client"

import { ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { useTheme } from "next-themes"
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export function UserDropdownMenu() {
  const userDropdownTranslations = useTranslations("Navbar.UserDropdown")

  const { theme, setTheme } = useTheme()
  const locale = useLocale()

  const pathname = usePathname()
  const router = useRouter()

  function onChangeTheme(theme: string) {
    setTheme(theme)
  }

  function onChangeLocale(locale: string) {
    router.push(pathname, { locale: locale as "en" | "pt" })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center gap-2 cursor-pointer hover:bg-primary/20 p-2"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <p className="text-primary text-sm font-medium">Kaiky Santos</p>
            <p className="text-muted-foreground text-xs">carlos.kaiky62@gmail.com</p>
          </div>

          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-medium">
          {userDropdownTranslations('Theme.Label')}
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={onChangeTheme}>
          <DropdownMenuRadioItem className="gap-2" value="light">
            {userDropdownTranslations('Theme.Options.Light')}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="gap-2" value="dark">
            {userDropdownTranslations('Theme.Options.Dark')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="font-medium">
          {userDropdownTranslations('Language.Label')}
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup value={locale} onValueChange={onChangeLocale}>
          <DropdownMenuRadioItem className="gap-2" value="en">
            {userDropdownTranslations('Language.Options.English')}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="gap-2" value="pt">
            {userDropdownTranslations('Language.Options.Portuguese')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer flex items-center py-1">
          <LogOut className="mr-2 ml-2 h-4 w-4" />
          <span>
            {userDropdownTranslations('Log Out')}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}