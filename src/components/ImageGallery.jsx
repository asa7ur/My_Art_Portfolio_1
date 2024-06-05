import styled from 'styled-components'

const ImageGallery = ({ images }) => {
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
    opacity: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .col-1 {
    animation: fadeIn 500ms ease-in forwards;
  }

  .col-2 {
    animation: fadeIn 500ms ease-in forwards;
    animation-delay: 200ms;
  }

  .col-3 {
    animation: fadeIn 500ms ease-in-out forwards;
    animation-delay: 400ms;
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
