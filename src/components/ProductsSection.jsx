import styled from 'styled-components'

const ProductsSection = ({ isVisible, onClose }) => (
  <Wrapper className={isVisible ? 'visible' : ''}>
    <button className='close-button' onClick={onClose}>
      Close
    </button>
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

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
  }
`