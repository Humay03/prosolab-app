import Container from '@/components/container/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function PublicHeader() {
  return (
    <header className=' bg-black'>
      <Container className="flex justify-between items-center h-[70px]">
        <h1 className="text-white text-2xl">Prosolab</h1>
        <nav></nav>
        <Button variant="first">Request a Quote </Button>
      </Container>
    </header>
  )
}


