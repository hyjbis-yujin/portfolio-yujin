import { useState, useMemo } from 'react'
import { skills } from '@/data/skills'
import { Code2, Monitor, PenTool } from 'lucide-react'
import React from 'react'

const CATEGORY_CONFIG = {
    language: { label: 'Language', icon: Code2 },
    front: { label: 'Front', icon: Monitor },
    tool: { label: 'Tool', icon: PenTool }
}

/**
 * Custom Hook for managing the Skill section state
 * Handles tab switching and skill filtering.
 */
export const useSkillState = () => {
    const [activeTab, setActiveTab] = useState('language')

    const filteredSkills = useMemo(() => {
        return skills.filter(skill => skill.category === activeTab)
    }, [activeTab])

    const tabs = Object.keys(CATEGORY_CONFIG).map(key => ({
        id: key,
        label: CATEGORY_CONFIG[key].label,
        isActive: activeTab === key
    }))

    return {
        activeTab,
        setActiveTab,
        filteredSkills,
        tabs
    }
}
