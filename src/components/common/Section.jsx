import React from 'react';

/**
 * Common Section Layout Wrapper
 * @param {string} id - Section ID for navigation
 * @param {string} className - Additional classes
 * @param {React.ReactNode} children - Section content
 */
const Section = React.forwardRef(({ id, className = '', children }, ref) => {
    return (
        <section id={id} className={`section ${className}`} ref={ref}>
            {children}
        </section>
    );
});

Section.displayName = 'Section';

export default Section;
