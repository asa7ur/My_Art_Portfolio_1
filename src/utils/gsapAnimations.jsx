import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const setupGSAPAnimations = (containerRef) => {
  const container = containerRef.current

  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=3300',
      },
    })

    .to(container, {
      x: () => -(container.scrollWidth - window.innerWidth) + 'px',
      ease: 'none',
      duration: 1,
    })

    .to('.col-1', {
      y: -250,
      ease: 'none',
      duration: 2,
      scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top center',
        end: '+=3300',
        scrub: 3,
      },
    })

    .to('.col-2', {
      y: 250,
      ease: 'none',
      duration: 2,
      scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top center',
        end: '+=3300',
        scrub: 3,
      },
    })

    .to('.col-3', {
      y: -250,
      ease: 'none',
      duration: 2,
      scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top center',
        end: '+=3300',
        scrub: 3,
      },
    })

    .to('.sidebar', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.sidebar',
        start: 'center+=3000 center',
        scrub: 4,
      },
    })
}
