import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const ProductsSection = ({ isVisible, onClose }) => {
  const [images, setImages] = useState([])

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

  const chunkArray = (array, chunkSize) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const calculateColumns = () => {
    const screenWidth = window.innerWidth
    if (screenWidth >= 1024) return 5
    if (screenWidth >= 768) return 4
    return 3
  }

  const columns = chunkArray(
    images,
    Math.ceil(images.length / calculateColumns())
  )

  return (
    <Wrapper className={isVisible ? 'visible' : ''}>
      <div className='navbar'>
        <div className='nav-container'>
          <div className='search'>
            <input
              type='text'
              name='text'
              placeholder='Search'
              className='search-input'
            />
          </div>
          <button className='close-button' onClick={onClose}>
            <FaArrowDown />
          </button>
        </div>
      </div>
      <div className='content'>
        {columns.map((column, index) => (
          <div className={`col-${index + 1}`} key={index}>
            {column.map((image) => (
              <img src={image.image} alt={image.name} key={image.id} />
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default ProductsSection

const Wrapper = styled.div`
  position: fixed;
  top: 100%;
  left: 105%;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  transition: top 0.5s ease;

  &.visible {
    top: 0;
  }

  .navbar {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: black;
  }

  .nav-container {
    width: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }

  .search-input {
    display: block;
    font-size: 1rem;
    padding: 0.5rem;
    color: black;
  }

  .search-input::placeholder {
    text-transform: capitalize;
    color: black;
    font-size: 1rem;
  }

  .close-button {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid var(--grey-600);
    color: var(--grey-600);
    background-color: white;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    padding: 0 2rem;
    overflow-y: auto;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5 {
    flex: 1;
    margin: 0 10px;
  }

  img {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
`
