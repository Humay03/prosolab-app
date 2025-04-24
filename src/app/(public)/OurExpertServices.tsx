import CartComponent from '@/components/cartcomponent/CartComponent'
import Container from '@/components/container/Container'
import LineGradient from '@/components/linegradient/LineGradient'
import Section from '@/components/section/Section'
import { AppWindow, Bot, FolderCode, Laptop, PanelsTopLeft, Smartphone } from 'lucide-react'
import React from 'react'




const expertServices = [
    {
        icon: <Bot className="w-[30px] h-[30px]  text-[#2e90fa]" />,
        title: 'Bot Development',
        description: 'Create custom Discord.WhatsApp and Telegram bots to automate tasks and enhance user engagement across platforms.'
    },
    {
        icon: <FolderCode className="w-[30px] h-[30px]  text-[#2e90fa]" />,
        title: 'Web App Development',
        description: 'Build fast, scalable web applications using React, Next.js, and TalilwindCSS to meet modern business needs.'
    },
    {
        icon: <Laptop className="w-[30px] h-[30px]  text-[#2e90fa]" />,
        title: 'Desktop Development',
        description: 'Develop powerful desktop applications using NET. ElectronJ$, and React for cross-platform efficiency.'
    },
    {
        icon: <Smartphone className="w-[30px] h-[30px]  text-[#2e90fa]" />,
        title: 'Mobile App Development',
        description: 'Create feature-rich mobile applications with ReactNative and Android Native (amarin) for seamless user experiences.'
    },
    {
        icon: <PanelsTopLeft className="w-[30px] h-[30px]  text-[#2e90fa]" />,
        title: 'Extension Development',
        description: "Develop browser extensions for Microsoft Edge and Google Chrome to expand your software's capabilities."
    },
    {
        icon: <AppWindow className="w-[30px] h-[30px]  text-[#2e90fa]" />,
        title: 'API Development',
        description: 'Build secure, scalable APIs with NodeJS, REST APL, GraphOL. and WebSockets to power your digital ecosystem.'
    },
];

export default function OurExpertServices() {
    return (
        <section className='py-10'>
            <Container >
                <Section
                    header={
                        <div className='flex flex-col items-center justify-center text-center h-[30dvh] mb-[40px]'>
                            <h2 className=" text-[40px] font-medium mb-[10px] w-[600px]">
                                Our Expert Services: <LineGradient fromColor='#2E90FA' middleColor='#7c8ced' toColor='#ffffff' as='text'>Taioled for Your Success</LineGradient>
                            </h2>
                            <p className='text-center w-[660px] text-gray-500 text-[14px]'>At Prosolab, we provide a wide range of digital services designed to elevate your business. From software development to seamless
                                integrations, we ensure every solution is customized to meet your specific needs. Explore our 8 core services below
                            </p>
                        </div>
                    }
                    className=''
                >
                    <div className='grid grid-cols-3 gap-10 justify-items-center'>
                        {expertServices.map((item, index) => (
                            <CartComponent variant={'cart'} key={index} className='h-[250px] flex flex-col  justify-start text-start gap-14 mb-[20px]'>
                                <div>
                                    <span className='inline-flex items-center justify-center border border-gray-300 p-2 rounded-[8px]' >{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className='font-medium text-[18px] mb-[8px]'>{item.title}</h3>
                                    <p className='text-[15px] text-gray-500 font-sans'>{item.description}</p>
                                </div>
                            </CartComponent>
                        ))}
                    </div>
                </Section>
            </Container>
        </section>
    )
}
