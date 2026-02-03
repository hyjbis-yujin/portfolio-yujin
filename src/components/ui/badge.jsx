import * as React from "react"
import { cn } from "@/lib/utils"

// Simplified Badge without variants object, just straightforward class merging
function Badge({ className, variant = "default", ...props }) {
    return (
        <div className={cn(
            "badge",
            variant, // 'default', 'secondary', 'outline', etc. matches SCSS classes
            className
        )} {...props} />
    )
}

export { Badge }
