import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea(
  { className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:ring-ring/50 focus-visible:ring-offset-0 focus-visible:ring-offset-background dark:border-input dark:focus-visible:ring-ring/50 dark:focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }