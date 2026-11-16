// Opens and closes the menu on small screens.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Content stays visible if JavaScript does not run.
document.documentElement.classList.add('js');

// Shows each ".reveal" element when it scrolls into view.
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add('visible'));
}

// Shows all items after 2 seconds if the observer does not fire.
setTimeout(() => items.forEach((el) => el.classList.add('visible')), 2000);
