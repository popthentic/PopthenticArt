document.querySelectorAll('.filters img').forEach(logo => {
  logo.addEventListener('click', () => {
    const filter = logo.getAttribute('data-filter');
    document.querySelectorAll('.gallery .item').forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});