"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/utils"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"

type PopoverContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

const PopoverContext = createContext<PopoverContextType | null>(null)

const usePopover = () => {
  const ctx = useContext(PopoverContext)
  if (!ctx) throw new Error("Popover.* must be used inside <Popover>")
  return ctx
}

// Hook: click outside
function useClickOutside(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return
      onClose()
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [ref, onClose])
}

// Root
export const Popover = ({
  children,
  defaultOpen = false,
  className,
}: {
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative inline-flex", className)}>{children}</div>
    </PopoverContext.Provider>
  )
}

// Trigger
export const PopoverTrigger = ({
  children,
  asChild = false,
  className,
  ...props
}: {
  children: React.ReactElement
  asChild?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { open, setOpen } = usePopover()

  const triggerProps: React.HTMLAttributes<HTMLElement> = {
    onClick: () => setOpen(!open),
    className,
    ...props,
  }

  if (asChild && React.isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const child = React.Children.only(children) as React.ReactElement<any>;
    const mergeClassName = cn(
      (children.props as { className?: string }).className,
      triggerProps.className
    );
    return React.cloneElement(child, {
      ...triggerProps,
      className: mergeClassName,
    })
  }

  return (
    <button type="button" {...triggerProps}>
      {children}
    </button>
  )
}

// Content
export const PopoverContent = ({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) => {
  const { open, setOpen } = usePopover()
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -4 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "absolute z-50 mt-2 w-64 rounded-md border bg-white p-4 shadow-lg",
            className
          )}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
