import { gsap } from 'gsap';

export const headingAnimation = () =>{
  var tl = new gsap.timeline();

  tl.staggerFrom('span', 0.5, {
    y: -20,
    opacity:0,
    yoyo: true,
    
  },0.1);
}
