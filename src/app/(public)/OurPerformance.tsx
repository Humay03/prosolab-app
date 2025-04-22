import Container from '@/components/container/Container'
import LineGradient from '@/components/linegradient/LineGradient'
import Section from '@/components/section/Section'
import React from 'react'


const performanceList = [
    {
        number: '98',
        utilities:'%',
        description: 'Client retentation rate, driven by our commitment to delivering tailored solutions.',
        title: 'Customer Satisfaction',
    },
    {
        number: '500',
        utilities:'+',
        description: 'Over 500 businesses transformed through our digital solutions, resulting in measurable growth.',
        title: 'Business Impact',
    },
    {
        number: '40',
        utilities:'%',
        description: 'Our solutions reduce operational complexity, increasing business efficiency by 40% on average.',
        title: 'Efficiency ',
    }
]
export default function OurPerformance() {
    return (
        <Container>
            <Section
                header={
                    <div className='flex items-center justify-center h-[20dvh]'>
                        <h2 className=" text-[36px] font-medium">
                            <LineGradient fromColor='#2E90FA' middleColor='#7c8ced' toColor='#ffffff' as='text'>Our Performance</LineGradient> at a Glance
                        </h2>
                    </div>
                }
                className='h-[60dvh]'
            >
                <div className='grid grid-cols-3 gap-10 justify-items-center'>
                    {performanceList.map((item, index) => (
                        <div key={index} className='flex flex-col items-center justify-center text-center'>
                            <div className='flex items-center text-center '>
                                <h3 className='text-[70px] font-medium'>{item.number}</h3>
                                <LineGradient  fromColor='#2E90FA' middleColor='#7c8ced' toColor='#ffffff' as='text'><p className='text-[70px] font-medium'>{item.utilities}</p></LineGradient>
                            </div>
                            <p className='text-[14px] text-gray-400 w-[250px] mb-[20px]'>{item.description}</p>
                            <p className='text-[13px] text-blue-400 font-semibold'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </Container>
    )
}
