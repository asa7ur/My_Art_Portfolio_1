import styled from 'styled-components'
import Sidebar from './Sidebar'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.jpg'

const ContentSection = ({ onShowOverlay }) => {
  return (
    <Wrapper>
      <Sidebar />
      <div className='wrapper'>
        <div className='left'>
          <div className='line-1'>
            <h1>GARIK</h1>
            <div className='copyright'>
              ASA7UR© {new Date().getFullYear()} <br /> MADE WITH PASSION
            </div>
          </div>
          <img src={img_1} alt='John Wick' />
          <div className='line-2'>
            <h1 className='num'>/96</h1>
            <h1>ASATRYAN</h1>
            <button className='loop' onClick={onShowOverlay}>
              <span>COLLECTION</span>
            </button>
            <button className='loop loop2' onClick={onShowOverlay}>
              <span>COLLECTION</span>
            </button>
          </div>
        </div>
        <div className='right'>
          <div className='animate-text'>
            <span>37°23'59.1"N 5°59'35.5"W</span>
          </div>
          <div className='img-container'>
            <img src={img_2} alt='Marilyn Monroe' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default ContentSection

const Wrapper = styled.section`
  transform: translate(5%);

  .wrapper {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .left {
    width: 65%;
    padding-left: 3.8rem;
    padding-right: 0.8rem;
  }

  .left img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  h1 {
    font-size: 3rem;
  }

  .line-1 {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .line-2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }

  .num {
    text-align: left;
    width: 100%;
  }

  .loop {
    height: 3rem;
    width: 8rem;
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    background: none;
    border: 1px solid var(--grey-600);
    position: absolute;
    top: 75%;
    left: 80%;
    cursor: pointer;
  }

  @keyframes loop {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  .loop span {
    animation: loop 10s linear infinite;
    display: inline-block;
    padding-left: 130%;
  }

  .loop2 span {
    animation-delay: 5s;
  }

  .right {
    width: 35%;
  }

  .animate-text{
    height: 6rem;
    background-color: black;
    color: white;
    font-size: 5rem;
    white-space: nowrap;
    overflow: hidden;
  }

  .animate-text span{
    animation: loop 15s linear infinite;
    display: inline-block;
    padding-left: 110%;
  }

  .img-container{
    width: 100%;
    height: 780px;
    padding-left: 0.5rem;
    background-color: black;
  }

  .img-container img{
    width: 100%;
    object-fit: cover;
  }
`
