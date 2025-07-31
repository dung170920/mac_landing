"use client"

import React, { useState } from "react"
import { cn } from "@/utils"
import { Minus, Plus } from "magicon"

export interface CollapseProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
  titleClassName?: string
  contentClassName?: string
}

const Collapse = ({
  title,
  children,
  defaultOpen = false,
  className,
  titleClassName,
  contentClassName,
}: CollapseProps) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={cn("first:border-t border-b", className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between py-6 text-left font-medium hover:cursor-pointer gap-4",
          titleClassName
        )}
      >
        <span className="font-semibold text-2xl text-gray-800 group-hover:text-primary transition-colors">
          {title}
        </span>
        {open ? <Minus variant="filled" className="shrink-0" /> : <Plus variant="filled" className="shrink-0" />}
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 text-gray-500 font-medium",
          open ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Collapse
