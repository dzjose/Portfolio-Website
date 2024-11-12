const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Card Flip
document.querySelectorAll('.services__card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-content').classList.toggle('flip');
  });
});
