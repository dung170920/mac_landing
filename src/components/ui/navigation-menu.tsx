"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { cn } from "@/utils"
import { AngleDownSmall } from "magicon"
import { cva } from "class-variance-authority"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"

// Context
const NavigationMenuContext = createContext<{
  activeId: string | null
  setActiveId: (id: string | null) => void
} | null>(null)

const useNavigationMenu = () => {
  const ctx = useContext(NavigationMenuContext)
  if (!ctx) throw new Error("useNavigationMenu must be used inside NavigationMenu")
  return ctx
}

// ItemContext
const ItemContext = createContext<{ id: string }>({ id: "" })
const useItem = () => useContext(ItemContext)

// Hook: click outside
function useClickOutside(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return
      onClose()
    }
    document.addEventListener("mousedown", listener)
    return () => document.removeEventListener("mousedown", listener)
  }, [ref, onClose])
}

// Root
export const NavigationMenu = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <NavigationMenuContext.Provider value={{ activeId, setActiveId }}>
      <div
        className={cn("relative flex max-w-max flex-1 items-center justify-center", className)}
        {...props}
      >
        {children}
      </div>
    </NavigationMenuContext.Provider>
  )
}

// List
export const NavigationMenuList = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={cn("group flex flex-1 list-none items-center justify-center gap-8", className)}
    {...props}
  />
)

// Item
export const NavigationMenuItem = ({
  className,
  children,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) => {
  const id = useId()
  const { activeId, setActiveId } = useNavigationMenu()
  const ref = useRef<HTMLLIElement>(null)

  useClickOutside(ref, () => {
    if (activeId === id) setActiveId(null)
  })

  const handleMouseEnter = () => setActiveId(id)
  const handleMouseLeave = () => setActiveId(null)

  return (
    <ItemContext.Provider value={{ id }}>
      <li
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn("relative flex flex-col", className)}
        {...props}
      >
        {children}
      </li>
    </ItemContext.Provider>
  )
}

// Trigger
const triggerVariants = cva(
  "group inline-flex w-max items-center justify-center rounded-md bg-transparent text-sm font-medium hover:text-primary disabled:pointer-events-none disabled:opacity-50 transition"
)

export const NavigationMenuTrigger = ({
  className,
  children,
  icon = true,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: boolean }) => {
  const { id } = useItem()
  const { activeId, setActiveId } = useNavigationMenu()
  const isActive = activeId === id

  const handleClick = () => {
    setActiveId(isActive ? null : id)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(triggerVariants(), isActive && "text-primary", className)}
      {...props}
    >
      {children}
      {icon && (
        <AngleDownSmall
          variant="filled"
          className={cn("w-4 h-4 transition-transform", isActive && "rotate-180")}
        />
      )}
    </button>
  )
}

// Content
export const NavigationMenuContent = ({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) => {
  const { id } = useItem()
  const { activeId } = useNavigationMenu()
  const isActive = activeId === id

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute top-full mt-1 p-6 bg-white shadow-dialog border border-gray-100 rounded-sm min-w-[200px] z-10",
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

// Link
export const NavigationMenuLink = ({
  className,
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
  <a
    href={href}
    className={cn("block hover:text-primary font-medium text-sm", className)}
    {...props}
  >
    {children}
  </a>
)
