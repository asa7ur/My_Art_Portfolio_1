import styled from 'styled-components'
import { FaArrowDown, FaInstagram, FaShoppingCart } from 'react-icons/fa'
import { useState, useEffect } from 'react'
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
    if (screenWidth >= 1024) return 4
    if (screenWidth >= 768) return 3
    return 2
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
          <div className='col' key={index}>
            {column.map((image) => (
              <div className='img-container' key={image.id}>
                <img src={image.image} alt={image.name} />
                <div className='img-overlay'>
                  <a
                    href={image.store_link}
                    target='_blank'
                  >
                    <FaShoppingCart className='logo' />
                  </a>
                  <a href={image.ig_link} target='_blank'>
                    <FaInstagram className='logo' />
                  </a>
                </div>
              </div>
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

  .col {
    flex: 1;
    margin: 0 10px;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container > img {
    width: 100%;
    display: block;
    padding-bottom: 10px;
    transition: all 0.5s ease;
  }

  .img-container > .img-overlay {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 1s ease;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .img-container > .img-overlay > a{
    color: white;
    font-size: 3rem;
  }

  .img-container:hover {
    .img-overlay {
      opacity: 1;
    }
  }
`
