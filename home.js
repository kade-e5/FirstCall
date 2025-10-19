const accordionItems = document.querySelectorAll('.accordion-item');
const breakpoint = 767;

const isMobile = () => window.innerWidth <= breakpoint;

const initializeAccordions = () => {
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.collapsible-content');
    const icon = header.querySelector('.icon');

    header.onclick = null; // Remove existing handlers

    if (isMobile()) {
      content.style.display = 'none';
      content.style.maxHeight = '0';
      icon.textContent = '+';

      header.onclick = () => {
        const isCollapsed = content.style.display === 'none';
        if (isCollapsed) {
          content.style.display = 'block';
          content.style.maxHeight = content.scrollHeight + 'px'; // Full height
          icon.textContent = '-';
        } else {
          content.style.maxHeight = '0';
          setTimeout(() => {
            content.style.display = 'none';
          }, 300); // Match transition duration
          icon.textContent = '+';
        }
      };
    } else {
      content.style.display = 'block';
      content.style.maxHeight = 'none';
      icon.textContent = '';
    }
  });
};

window.addEventListener('load', initializeAccordions);
window.addEventListener('resize', initializeAccordions);