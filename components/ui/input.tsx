import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon, LucideProps } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.FC<LucideProps>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon: LeftIcon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            LeftIcon && "pl-8",
            className
          )}
          ref={ref}
          {...props}
        />

        {LeftIcon && (
          <LeftIcon className="w-5 h-5 absolute text-muted-foreground left-2" />
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
