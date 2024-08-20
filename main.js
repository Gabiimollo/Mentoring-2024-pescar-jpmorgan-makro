import './style.css'
import SweetScroll from 'sweet-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const sweetScroll = new SweetScroll({
    speed: 800,
    easing: 'easeInOutCubic'
  });

  window.scrollToSection = function (sectionId) {
    sweetScroll.to(`#${sectionId}`);
  };
});