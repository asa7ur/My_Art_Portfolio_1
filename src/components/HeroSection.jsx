import styled from 'styled-components'
import ImageGallery from './ImageGallery'
import { images } from '../constants'

const HeroSection = () => {
  return (
    <Wrapper>
      <div className='left'>
        <h1>ASA7UR</h1>
      </div>
      <div className='right'>
        <ImageGallery images={images} />
      </div>
    </Wrapper>
  )
}
export default HeroSection

const Wrapper = styled.section`
  display: flex;

  .left {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .left h1{
    font-size: 7rem;
  }

  .right{
    width: 35%;
  }
`
