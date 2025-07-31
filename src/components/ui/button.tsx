import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        filled: "",
        outline: "border border-gray-800 bg-transparent hover:bg-accent",
        link: "text-primary underline-offset-4 underline",
        text: "bg-transparent",
      },
      color: {
        primary: "",
        dark: "",
        light: ""
      },
      size: {
        xs: "px-3 py-1 h-8 text-xs",
        sm: "px-3 py-2 h-10 text-sm",
        md: "px-5 py-2 h-12 text-sm",
        lg: "px-8 py-2 h-14 text-base",
      },
    },
    compoundVariants: [
      { variant: "filled", color: "primary", className: "bg-primary text-gray-800 hover:bg-primary/90" },
      { variant: "outline", color: "primary", className: "border border-primary text-primary hover:bg-primary/10" },
      { variant: "link", color: "primary", className: "text-primary hover:text-primary/90 p-0" },
      { variant: "text", color: "primary", className: "text-primary hover:text-primary/90 p-0" },

      { variant: "filled", color: "dark", className: "bg-gray-800 text-white hover:bg-gray-800/90" },
      { variant: "outline", color: "dark", className: "border border-gray-800 text-gray-800 hover:bg-gray-800/10" },
      { variant: "link", color: "dark", className: "text-gray-800 hover:text-gray-800/60 p-0" },
      { variant: "text", color: "dark", className: "text-gray-800 hover:text-gray-800/60 p-0" },

      { variant: "filled", color: "light", className: "bg-white text-gray-800 hover:bg-white/90" },
      { variant: "outline", color: "light", className: "border border-white text-white hover:bg-white/10" },
      { variant: "link", color: "light", className: "text-white hover:text-white/90 p-0" },
      { variant: "text", color: "light", className: "text-white hover:text-white/90 p-0" },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
    },
  }
)

type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>

export interface ButtonProps
  extends NativeButtonProps,
  VariantProps<typeof buttonVariants> {
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
}

const Button = ({
  className = '',
  variant,
  size,
  color,
  href,
  icon,
  iconPosition = 'start',
  children,
  ...props
}: ButtonProps) => {
  const iconOnly = !!icon && !children
  const classes = cn(
    buttonVariants({ variant, size, color }),
    iconOnly && 'px-0 aspect-square',
    className
  )

  const content = (
    <>
      {iconPosition === 'start' && icon}
      {children}
      {iconPosition === 'end' && icon}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}

export { Button, buttonVariants }
