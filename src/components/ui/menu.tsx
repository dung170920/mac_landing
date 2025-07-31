"use client"

import React, { useState, type ReactNode } from "react"
import { cn } from "@/utils"
import { AngleDownSmall } from "magicon"

export const Menu = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn("space-y-1", className)}>{children}</div>
}

export const MenuGroup = ({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn("", className)}>
      <div className="text-xs px-2">{label}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
}

export const MenuItem = ({
  label,
  href,
  children,
  className,
}: {
  label: string
  href?: string
  children?: ReactNode
  className?: string
}) => {
  const [open, setOpen] = useState(false)

  if (!children) {
    return (
      <a
        href={href}
        className={cn(
          "flex items-center justify-between w-full rounded-xs h-12 hover:bg-gray-200 px-3",
          className
        )}
      >
        {label}
      </a>
    )
  }

  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "h-12 flex items-center justify-between w-full rounded-xs px-3",
          className
        )}
      >
        <span>{label}</span>
        <AngleDownSmall
          className={cn(
            "h-6 w-6 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <div className="ml-8">{children}</div>}
    </div>
  )
}
