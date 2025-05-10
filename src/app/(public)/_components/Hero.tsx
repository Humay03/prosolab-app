import Container from '@/components/container/Container'
import LineGradient from '@/components/linegradient/LineGradient'
import { Button } from '@/components/ui/button'
import { ArrowRight, PhoneCall } from 'lucide-react'
import React from 'react'



export default function Hero() {
    return (
        <section className="bg-black ">
            <Container className='flex justify-center p-8 text-center items-center  h-[100dvh]'>
                <div className="w-[760px]">
                    <h1 className='text-[60px] font-normal text-white '>
                        Transform
                        <LineGradient variant='text' fromColor='#2E90FA' middleColor='#7c8ced' toColor='#ffffff' as='span'> Your Business  </LineGradient>
                        <div className="relative inline-flex items-center text-center w-[110px] h-[50px] rounded-full bg-[#2E90FA] mr-[18px] ">
                            <div className="w-[114px] absolute left-4 right-10 h-[3px] bg-white rounded-[8px]" />
                            <div className='absolute right-[-28px]'>
                                <ArrowRight className='w-[40px] h-[40px] text-white' />
                            </div>
                        </div>
                        With Cutting-Edge Software
                        <LineGradient variant='text' fromColor='#2E90FA' middleColor='#7c8ced' toColor='#ffffff' as='span'> Development</LineGradient>
                    </h1>
                    <p className='text-[white]'>
                        From web and mobile applications to third-party integrations and Discord bot development, we craft scalable. custom solutions to drive your business
                        forward . Specializing in React and modern technologies. we ensure seamless. future-proof digital experiences.
                    </p>
                    <div className='flex gap-4 mt-8 justify-center'>
                        <Button variant='secondary' className='text-white'>Explore Our Services</Button>
                        <Button variant='first' className='text-white'>Get a Free Consulation <PhoneCall className='h-4 w-4 text-white' /></Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
