import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'

const ProductsSection = ({ isVisible, onClose }) => (
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
    <div className='content'>Products will be shown here...</div>
  </Wrapper>
)

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
`
