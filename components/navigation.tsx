"use client"

import { ElementRef, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"

import { ClipboardList, LayoutDashboard, LineChart, ListOrdered, MenuIcon, MessageCircleMore, Package, PieChart, Settings, Users } from "lucide-react"

import { NavItem } from "./nav-item"

export function Navigation() {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")

  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRef = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)

  useEffect(() => {
    if (isMobile) {
      collapse()
    } else {
      resetWidth()
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) {
      collapse()
    }
  }, [pathname, isMobile])
  
  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false)
      setIsResetting(true)

      sidebarRef.current.style.width = isMobile ? "100%" : "300px"
      navbarRef.current.style.setProperty("width", isMobile ? "0" : "calc(100% - 300px)")
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "300px")
      setTimeout(() => setIsResetting(false), 300)
    }
  }

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true)
      setIsResetting(true)

      sidebarRef.current.style.width = "0"
      navbarRef.current.style.setProperty("width", "100%")
      navbarRef.current.style.setProperty("left", "0")
      setTimeout(() => setIsResetting(false), 300)
    }
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "h-full min-h-lvh border-r bg-background overflow-y-auto fixed flex w-[300px] flex-col justify-between z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div className="flex flex-col my-7 px-7">
          <h2 className="text-4xl font-bold tracking-tight">
            Dash
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-8 mb-4 text-muted-foreground text-sm tracking-wider">
            MENU
          </p>

          <div className="flex flex-col gap-3">
            <NavItem
              icon={LayoutDashboard}
              title="Dashboard"
              selected
            />

            <NavItem
              icon={PieChart}
              title="Analytics"
            />

            <NavItem
              icon={Package}
              title="Orders"
            />

            <NavItem
              icon={Users}
              title="Customers"
            />

            <NavItem
              icon={MessageCircleMore}
              title="Messages"
              notifications={16}
            />
          </div>

          <p className="mt-8 mb-4 text-muted-foreground text-sm tracking-wider">
            ACCOUNT
          </p>

          <div className="flex flex-col gap-3">
            <NavItem
              icon={Settings}
              title="Settings"
            />
          </div>
        </div>
      </aside>

      <div
        role="button"
        onClick={() => {
          if (isCollapsed) {
            resetWidth()
          } else {
            collapse()
          }
        }}
        className={cn(
          "absolute z-[999999] bg-transparent px-3 py-2 w-min top-3",
          (!isCollapsed && !isMobile) && "opacity-0 hidden",
          (!isCollapsed && isMobile) && "right-0"
        )}
      >
        <MenuIcon className="h-8 w-8 text-primary" />
      </div>

      <div
        ref={navbarRef}
        className={cn(
          "absolute left-20 bg-green-300 w-min",
        )}
      />
    </>
  )
}