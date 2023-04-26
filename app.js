const backToTop = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
   if (window.pageYOffset > 200) {
      backToTop.classList.add('show');
   } else {
      backToTop.classList.remove('show');
   }
});

backToTop.addEventListener('click', (event) => {
   event.preventDefault();
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});