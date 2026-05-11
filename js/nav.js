// Navbar active link highlight
(function() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath ||
        (currentPath === '' || currentPath === 'index.html') && href === '/') {
      a.classList.add('active');
    }
  });
})();

// Reveal animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('show'), index * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  reveals.forEach((el) => observer.observe(el));
});
