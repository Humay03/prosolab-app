import Container from '@/components/container/Container'
import LineGradient from '@/components/linegradient/LineGradient'
import Section from '@/components/section/Section'
import { Button } from '@/components/ui/button'
import { Bot, Laptop, Plug, Server, Smartphone } from 'lucide-react'
import React from 'react'
import { BiDesktop } from 'react-icons/bi'



const expertServices = [
    {
        icon: <Bot className="w-6 h-6" />,
        title: 'Bot Development',
        description: 'Develop AI-powered chatbots to automate customer service and improve user engagement.'
    },
    {
        icon: <BiDesktop className="w-6 h-6" />,
        title: 'Web App Development',
        description: 'We create dynamic and responsive web applications using the latest technologies.'
    },
    {
        icon: <Laptop className="w-6 h-6" />,
        title: 'Desktop Development',
        description: 'Building cross-platform desktop applications with a focus on performance and user experience.'
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Mobile App Development',
        description: 'Designing mobile-first applications that work seamlessly on both Android and iOS.'
    },
    {
        icon: <Plug className="w-6 h-6" />,
        title: 'Extension Development',
        description: 'Developing browser extensions that enhance user productivity and functionality.'
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: 'API Development',
        description: 'We specialize in building robust and scalable APIs for seamless integration with other systems.'
    },
];

export default function OurExpertServices() {
    return (
        <Container>
            <Section
                header={
                    <div className='flex flex-col items-center justify-center text-center h-[30dvh]'>
                        <h2 className=" text-[36px] font-medium mb-[10px] w-[600px]">
                            Our Expert Services: <LineGradient fromColor='#2E90FA' middleColor='#7c8ced' toColor='#ffffff' as='text'>Taioled for Your Success</LineGradient>
                        </h2>
                        <p className='text-center w-[660px] text-gray-500 text-[14px]'>At Prosolab, we provide a wide range of digital services designed to elevate your business. From software development to seamless
                            integrations, we ensure every solution is customized to meet your specific needs. Explore our 8 core services below
                        </p>
                    </div>
                }
                className='h-[60dvh]'
            >
                <div>
                    {expertServices.map((item, index) => (
                        <div key={index}>
                            <Button variant='secondary'>{item.icon}</Button>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </Container>
    )
}
