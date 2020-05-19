import { gsap } from 'gsap';

export const contentAnimation = () => {
  var tl = gsap.timeline();
  tl.from('h1', { duration: .5, translateY: 20, opacity: 0, stagger: 0.4 });
  tl.from('.body-container a', { duration: .2, translateY: 20, opacity: 0, stagger: 0.4 });
  tl.from('.header', { duration: .3, translateY: -20, opacity: 0});
}