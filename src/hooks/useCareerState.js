import { useMemo } from 'react'
import { careerData } from '@/data/career'

export const useCareerState = () => {
    const categories = useMemo(() => {
        const groups = careerData.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = []
            }
            acc[item.category].push(item)
            return acc
        }, {})

        return Object.entries(groups).map(([name, items]) => ({
            name,
            items
        }))
    }, [])

    return {
        categories
    }
}
