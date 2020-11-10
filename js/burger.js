window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.page-header__burger').addEventListener('click', function(event) {
    document.querySelector('.header-nav__list').classList.toggle('header-nav__list_active');
    event.currentTarget.classList.toggle('page-header__burger_active');
  });
});