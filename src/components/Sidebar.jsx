import styled from 'styled-components'
import { FaInstagram, FaEtsy } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <Wrapper className='sidebar'>
      <FaEtsy />
      <div className='title'>ASA7UR</div>
      <FaInstagram />
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

  .title{
    transform: rotate(-90deg);
  }

  svg{
    font-size: 1.5rem;
  }
`
