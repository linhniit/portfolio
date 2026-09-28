// Content and links work without JavaScript. JS only enhances mobile navigation.
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('is-open', !expanded);
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.querySelector('span').textContent = expanded ? '+' : '−';
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !navigation.classList.contains('is-open')) return;
  closeMenu();
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-inner')) closeMenu();
});

window.matchMedia('(min-width: 581px)').addEventListener('change', () => closeMenu());
document.querySelector('#year').textContent = new Date().getFullYear();
