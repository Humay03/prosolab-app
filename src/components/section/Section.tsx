import React from 'react';

type SectionProps = {
    header?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
};

export default function Section({ header, className, children }: SectionProps) {
    return (
        <section className={`container mx-auto ${className}`}>
            {header && <div className={`${className}`}>{header}</div>}
            <div>
                {children}
            </div>
        </section>
    );
}
