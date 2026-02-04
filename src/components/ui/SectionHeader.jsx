import React from 'react'
import { cn } from '@/lib/utils'

const SectionHeader = ({ title, description, align = 'center', className }) => {
    return (
        <div className={cn(
            align === 'center' ? 'text-center' : 'text-left',
            className
        )}>
            <h2 className="section-title">{title}</h2>
            {description && (
                <p className="section-desc">
                    {description}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
