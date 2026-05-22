import Section from '@/components/common/Section'
import { motion } from 'framer-motion'
import { cinematicReveal } from '@/styles/animations'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const Contact = () => {
    const handleCopyEmail = () => {
        const email = "frontend-dev@email.com"
        navigator.clipboard.writeText(email)
        alert(`이메일이 복사되었습니다! ${email}`)
    }

    return (
        <>
            <Section id="contact" className="contact-section-overflow">
                <motion.div
                className="contact-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4, margin: "-10% 0px -10% 0px" }}
            >
                <div className="contact-message-box">
                    <motion.h2 className="contact-title" variants={itemVariants}>
                        감사합니다.
                    </motion.h2>
                    <motion.p className="contact-desc" variants={itemVariants}>
                        실제 사용 환경을 고려해 구조와 구현을 단계적으로 정리한 프로젝트들입니다.<br />
                        이러한 경험을 바탕으로 더 안정적인 결과를 만들어가고자 합니다.
                    </motion.p>
                </div>

                <motion.div className="contact-buttons" variants={itemVariants}>
                    <button
                        onClick={handleCopyEmail}
                        className="btn-contact email"
                        aria-label="이메일 주소 복사하기"
                    >
                        <span>E-Mail</span>
                    </button>

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-contact github"
                        aria-label="깃허브 방문하기"
                    >
                        <span>GitHub</span>
                    </a >
                </motion.div>
                </motion.div>
                
                <footer>
                    <div className="footer-container">
                        본 사이트는 개인 포트폴리오 목적으로 제작되었으며, 상업적 용도로 사용하지 않습니다.
                        <br /> Copyright ⓒ YUJIN
                    </div>
                </footer>
            </Section>
        </>
    )
}

export default Contact
