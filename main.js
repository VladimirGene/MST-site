let header = document.querySelector('.header-fixed');
let scroll = 0;


window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY; 
  if (currentScroll > scroll) {
    header.classList.add('active');
  } else if (currentScroll === 0) {
    header.classList.remove('active');
  }
  else {
    header.classList.add('active');
  }
  scroll = currentScroll; 
});