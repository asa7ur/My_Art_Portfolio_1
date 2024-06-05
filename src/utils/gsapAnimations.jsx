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
        end: '+=1000',
      },
    })
    .to(container, {
      x: () => -(container.scrollWidth - window.innerWidth) + 'px',
      ease: 'none',
      duration: 1,
    })
}
