import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const setupGSAPAnimations = (containerRef) => {
  const container = containerRef.current
  const width = container.scrollWidth - window.innerWidth

  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 2,
        pin: true,
        start: 'top top',
        end: () => `+=${width}`,
      },
    })
    .to(container, {
      x: () => -(width) + 'px',
      ease: 'none',
      duration: 1,
    })

  const imageGalleryTrigger = {
    trigger: '.image-gallery',
    start: 'top center',
    end: () => `+=${width}`,
    scrub: 3,
  }

  tl.to('.col-1', {
    y: -250,
    ease: 'none',
    duration: 2,
    scrollTrigger: imageGalleryTrigger,
  })
    .to('.col-2', {
      y: 250,
      ease: 'none',
      duration: 2,
      scrollTrigger: imageGalleryTrigger,
    })
    .to('.col-3', {
      y: -250,
      ease: 'none',
      duration: 2,
      scrollTrigger: imageGalleryTrigger,
    })

  tl.to('.sidebar', {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.sidebar',
      start: () => `center+=${container.scrollWidth / 2} center`,
      scrub: 4,
    },
  })
}
