import './style.css'
import SweetScroll from 'sweet-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

document.addEventListener('DOMContentLoaded', () => {
  const sweetScroll = new SweetScroll({
    speed: 800,
    easing: 'easeInOutCubic'
  });

  window.scrollToSection = function (sectionId) {
    sweetScroll.to(`#${sectionId}`);
  };
});
const video = document.getElementById('video').volume = 0.05;

console.dir(video)