"use client"

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type ReactNode,
} from "react"
import { cn } from "@/utils"
import { AnimatePresence, motion } from "framer-motion"

type DrawerContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

export const useDrawer = () => {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error("useDrawer must be used within Drawer")
  return ctx
}

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
export const Drawer = ({
  children,
  defaultOpen = false,
  className
}: {
  children: ReactNode
  defaultOpen?: boolean,
  className?: string
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative", className)}>{children}</div>
    </DrawerContext.Provider>
  )
}

// Trigger
export const DrawerTrigger = ({
  children,
  asChild = false,
  className,
  ...props
}: {
  children: React.ReactElement
  asChild?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { open, setOpen } = useDrawer()

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
    <button onClick={() => setOpen(!open)}>
      {children}
    </button>
  )
}

// Content
export const DrawerContent = ({
  children,
  className,
  side = "left",
}: {
  children: ReactNode
  className?: string
  side?: "left" | "right"
}) => {
  const { open, setOpen } = useDrawer()
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            ref={ref}
            className={cn(
              "fixed top-0 bottom-0 z-50 w-64 bg-white shadow-lg",
              side === "left" ? "left-0" : "right-0",
              className
            )}
            initial={{ x: side === "left" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: side === "left" ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
