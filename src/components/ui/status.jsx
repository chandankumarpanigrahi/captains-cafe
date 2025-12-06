import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "text-md inline capitalize font-semibold",
  {
    variants: {
      variant: {
        default:
          "text-green-600",
        scheduled:
          "text-blue-600",
        archived:
          "text-amber-500",
        none: "text-purple-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Status({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Status, badgeVariants }
