// script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');

  // Highlight current section on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        currentSection = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
});
