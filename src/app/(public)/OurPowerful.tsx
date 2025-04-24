
import React from 'react'
import CartComponent from '@/components/cartcomponent/CartComponent'
import Container from '@/components/container/Container'
import LineGradient from '@/components/linegradient/LineGradient'
import Section from '@/components/section/Section'
import { SiNextdotjs, SiReact } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

const cardData = [
    {
        icon: <FaCode className="w-[60px] h-[60px]" />,
        title: 'Backend Development',
        description: 'Scalable backend APIs with C# and .NET.',
    },
    {
        icon: <SiNextdotjs className="w-[60px] h-[60px]" />,
        title: 'Next.js Apps',
        description: 'Create fullstack web apps with the power of Next.js and React.',
    },
    {
        icon: <SiReact className="w-[60px] h-[60px]" />,
        title: 'React Components',
        description: 'Build reusable UI components with React and TypeScript.',
    },
];

export default function OurPowerful() {
    return (
        <section className='container mx-auto py-10 bg-white'>
            <Container>
                <Section
                    header={
                        <div className='flex flex-col items-center justify-center mb-[20px] h-[30dvh]'>
                            <h2 className=" text-[40px] mb-[10px] font-medium">
                                Explore Our Powerful  <LineGradient fromColor='#2E90FA' middleColor='#7c8ced' variant='text'>  Digital Solution</LineGradient>
                            </h2>
                            <p className='text-center w-[660px]'>Our products are built to boost efficiency and innovation, delivering modern web and mobile solutions for growing businesses.</p>
                        </div>
                    }
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {cardData.map((card, index) => (
                            <CartComponent
                                key={index}
                                className="w-[400px] flex flex-col gap-5 justify-center  text-center "
                            >
                                <div className=''>
                                    <div className="h-[250px] inline-flex text-center items-center justify-center">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-[24px] mb-[15px] font-bold">{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </CartComponent>
                        ))}
                    </div>
                </Section>
            </Container>
        </section>
    )
}
