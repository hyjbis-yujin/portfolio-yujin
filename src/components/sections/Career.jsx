import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import CareerItem from '@/components/ui/CareerItem'
import ScrollReveal from '@/components/common/ScrollReveal'

import { useCareerState } from '@/hooks/useCareerState'

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Faster stagger
      delayChildren: 0.1     // Shorter initial delay
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "circOut" // Sharper, faster starting feel
    }
  }
}

const Career = () => {
  const { categories } = useCareerState()

  return (
    <Section id="career">
      <div className="career-container">
        <SectionHeader title="Career" />

        <div className="career-grid">
          {categories.map((category, catIdx) => (
            <div key={`cat-${catIdx}`} className="info-card-container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
              >
                <h3 className="container-title">
                  {category.name}
                </h3>
                <div className="info-items">
                  {category.items.map((item) => (
                    <CareerItem
                      key={item.id}
                      id={item.id}
                      org={item.org}
                      desc={item.desc}
                      badges={item.badges}
                      variants={itemVariants}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Career
