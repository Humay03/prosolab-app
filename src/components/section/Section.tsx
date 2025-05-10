import React, { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
    header?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
    as: keyof JSX.IntrinsicElements;
};


export default function Section({ header, className, children, as }: SectionProps) {
    const Tag = as;
    return (
        <section className={twMerge(className)}>
            {header && <div >{header}</div>}
            <Tag >
                {children}
            </Tag>
        </section>
    );
}
