import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useGSAP } from '@gsap/react'
import HeroSection from './HeroSection'
import ContentSection from './ContentSection'
import ProductsSection from './ProductsSection'
import { setupGSAPAnimations } from '../utils/gsapAnimations'

const Main = () => {
  const containerRef = useRef(null)
  const [isOverlayVisible, setOverlayVisible] = useState(false)

  useGSAP(() => {
    setupGSAPAnimations(containerRef)
  }, [])

  const handleShowOverlay = () => {
    setOverlayVisible(true)
  }

  const handleCloseOverlay = () => {
    setOverlayVisible(false)
  }

  return (
    <Wrapper>
      <div className='container' ref={containerRef}>
        <HeroSection />
        <ContentSection onShowOverlay={handleShowOverlay} />
        <ProductsSection
          isVisible={isOverlayVisible}
          onClose={handleCloseOverlay}
        />
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
