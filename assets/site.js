document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    menuButton.querySelector('span').textContent = open ? '−' : '＋';
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
}

// Basic harvesting deterrent only: this public script does not keep the address secret.
const contactReveal = document.querySelector('.contact-reveal');
if (contactReveal) {
  contactReveal.hidden = false;
  contactReveal.addEventListener('click', () => {
    const mailbox = ['azami', 'to', 'heath'].join('.');
    const domain = ['gmail', 'com'].join('.');
    const address = [mailbox, domain].join('@');
    const link = document.createElement('a');
    link.href = 'mailto:' + address;
    link.textContent = address;
    link.className = 'contact-email';
    contactReveal.replaceWith(link);
    link.focus();
  }, { once: true });
}
