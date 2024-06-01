document.querySelector('.header__burger').addEventListener('click', function(event) {
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  const isOpen = burger.getAttribute('data-menu') === 'true';
  
  burger.setAttribute('data-menu', !isOpen);
  menu.classList.toggle('active', !isOpen);
});

document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', function() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');
    
    burger.setAttribute('data-menu', 'false');
    menu.classList.remove('active');
  });
});
