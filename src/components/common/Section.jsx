import React from 'react';

/**
 * Common Section Layout Wrapper
 * @param {string} id - Section ID for navigation
 * @param {string} className - Additional classes
 * @param {React.ReactNode} children - Section content
 */
const Section = ({ id, className = '', children }) => {
    return (
        <section id={id} className={`section ${className}`}>
            {children}
        </section>
    );
};

export default Section;
