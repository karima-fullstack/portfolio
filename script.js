function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const navLinks = document.querySelectorAll('#desktop-nav .nav-links a');
const sections = document.querySelectorAll('section');

function updateActiveLink() {
  let currentSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section;
    }
  });

  navLinks.forEach(link => link.classList.remove('active'));

  if (currentSection) {
    const activeLink = document.querySelector(`#desktop-nav .nav-links a[href="#${currentSection.id}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
