import { motion } from 'framer-motion'

const CareerItem = ({ id, org, desc, badges = [], variants }) => {
    return (
        <div className="info-item" aria-label={`${org} - ${desc}`}>
            <motion.span className="item-org" variants={variants}>
                {org}
            </motion.span>
            <motion.p className="item-desc" variants={variants}>
                {desc}
            </motion.p>
            <motion.div className="item-badges" role="list" variants={variants}>
                {badges.map((badge, idx) => (
                    <span
                        key={`${id}-badge-${idx}`}
                        className="badge-pill"
                        role="listitem"
                    >
                        {badge}
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

export default CareerItem
