import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { setupGSAPAnimations } from '../utils/gsapAnimations'

const ImageGallery = () => {
  const [images, setImages] = useState([])
  const containerRef = useRef(null)

  const fecthImages = async () => {
    try {
      const response = await axios('/.netlify/functions/images')
      const fetchedImages = response.data
      setImages(fetchedImages)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fecthImages()
  }, [])

  useEffect(()=>{
    if(images.length > 0){
      setupGSAPAnimations(containerRef)
    }
  }, [images])

  const groupedImages = images.reduce((acc, image, index) => {
    const colIndex = Math.floor(index / 6)
    if (!acc[colIndex]) acc[colIndex] = []
    acc[colIndex].push(image)
    return acc
  }, [])

  return (
    <Wrapper className='image-gallery'>
      {groupedImages.map((column, colIndex) => (
        <div className={`col col-${colIndex + 1}`} key={colIndex}>
          {column.map((img) => (
            <img src={img.image} alt={img.name} key={img.id} />
          ))}
        </div>
      ))}
    </Wrapper>
  )
}

export default ImageGallery

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    min-height: 300px;
    height: auto;
    width: 200px;
    object-fit: cover;
    background-color: black;
  }

  .col-1 img,
  .col-3 img {
    padding: 0.2rem 0.5rem;
  }

  .col-2 img {
    padding: 0.2rem 0;
  }
`
