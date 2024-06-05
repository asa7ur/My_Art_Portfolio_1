import styled from 'styled-components'
import { FaInstagram, FaEtsy } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <Wrapper className='sidebar'>
      <a href='https://www.etsy.com/shop/ASA7URSHOP' target='_blank'>
        <FaEtsy className='logo' />
      </a>
      <div className='title'>ASA7UR</div>
      <a href='https://www.instagram.com/asa7ur/' target='_blank'>
        <FaInstagram className='logo' />
      </a>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  background-color: black;
  color: white;
  height: 100%;
  padding: 1rem;
  position: fixed;
  opacity: 0;
  z-index: 99;

  .title {
    transform: rotate(-90deg);
  }

  a{
    color: white;
  }

  svg {
    font-size: 1.5rem;
  }
`
