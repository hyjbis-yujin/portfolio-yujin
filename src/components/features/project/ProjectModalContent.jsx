import React from 'react'
import { Check } from 'lucide-react'
import MetaGrid from '@/components/ui/MetaGrid'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
}

const ProjectModalContent = ({ project }) => {
    // Localized meta items
    const metaItems = [
        { label: '분류', value: project.meta?.main },
        { label: '기여도', value: project.meta?.contribution },
        { label: '규모', value: project.meta?.scale },
        { label: '기술 스택', value: project.meta?.stack },
        { label: '프레임워크', value: project.meta?.framework },
        { label: '라이브러리', value: project.meta?.library }
    ].filter(item => item.value && String(item.value).trim() !== '')

    return (
        <motion.div
            className="modal-right-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* Header */}
            <motion.div className="modal-header-group" variants={itemVariants}>
                <h2 id="modal-title" className="modal-title">{project.title}</h2>
            </motion.div>

            {/* Meta Grid */}
            <motion.div variants={itemVariants}>
                <MetaGrid items={metaItems} />
            </motion.div>


            {/* Highlights */}
            <motion.div className="modal-highlights" variants={itemVariants}>
                <h3 className="highlight-title">주요 기능</h3>

                <div className="highlight-list">
                    {(project.highlights || []).slice(0, 4).map((text, idx) => (
                        <div key={idx} className="highlight-item">
                            <Check strokeWidth={3} />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Actions (Moved to bottom) */}
            <motion.div className="modal-actions" variants={itemVariants}>
                <a
                    href={project.links?.git || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-action"
                >
                    Git
                </a>
                <a
                    href={project.links?.demo || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-action"
                >
                    Demo
                </a>
            </motion.div>

        </motion.div>
    )
}

export default ProjectModalContent
