import React, { useRef } from 'react'
import styled from 'styled-components'
import { useGSAP } from '@gsap/react'
import HeroSection from './HeroSection'
import ContentSection from './ContentSection'
import { setupGSAPAnimations } from '../utils/gsapAnimations'

const Main = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    setupGSAPAnimations(containerRef)
  }, [])

  return (
    <Wrapper>
      <div className='container' ref={containerRef}>
        <HeroSection />
        <ContentSection />
      </div>
    </Wrapper>
  )
}
export default Main

const Wrapper = styled.div`
  .container{
    display: flex;
  }
`
