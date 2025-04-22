'use client'
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils' 


const cartVariants = cva(
  "p-4 rounded-[15px] transition-all", 
  {
    variants: {
      variant: {
        cart: "border border-gray-300 text-gray-700 bg-transparent", 
        largeBorder: "border-4 border-gray-500 text-gray-700 bg-transparent",
      },
    },
    defaultVariants: {
      variant: 'cart',
    },
  }
)

type CartComponentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cartVariants>

const CartComponent: React.FC<CartComponentProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn(cartVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default CartComponent
