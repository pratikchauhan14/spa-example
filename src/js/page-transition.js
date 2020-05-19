import {gsap} from 'gsap';

export const pageTransition = () => {

  var tl = gsap.timeline();
  
  tl.set('#layer',()=>{

  })

  tl.set('#layer li', { transformOrigin: "bottom left"});
  
  tl.to('#layer li', { duration: .3, scaleY: 1 , stagger:0.2});
  tl.to('#layer li', { duration: .3, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power4.out", delay: 0.2 , stagger:0.1 });
}
