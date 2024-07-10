// Get all links on the page
const links = document.querySelectorAll('.link');

// Add event listener to each link
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Open link in a new tab
    e.preventDefault();
    window.open(link.href, '_blank');

    // Add smooth scrolling effect
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({
      behavior: 'mooth'
    });

    // Track click using Google Analytics
    ga('send', 'event', 'Link Click', link.textContent);
  });
});