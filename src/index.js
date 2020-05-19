import { $ ,$$ } from './js/util'
import barba from '@barba/core';
import gsap from 'gsap';
import { splitText } from './js/splitText';
import { delay } from './js/delay';
import { headingAnimation } from './js/heading-animation';
import { pageTransition } from './js/page-transition';
import { contentAnimation } from './js/content-animation';

const text = $$('h1');
text.forEach(e=>splitText(e));

// Initial Page Load
headingAnimation();
pageTransition();

barba.init({
    sync: true,
    transitions: [{
    name: 'opacity-transition',
    async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        
        done();
    },
    async enter(data) {
      const el = $$('h1');
      el.forEach(e=>splitText(e));
      setTimeout(()=>{
        headingAnimation();
      },500)
      contentAnimation();
      
    },
    async once(data) {
        
        contentAnimation(); 
    }
  }]
});




