// profile.js

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs span');
  const items = document.querySelectorAll('.item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.textContent.toLowerCase();
      items.forEach(item => {
        const isSold = item.querySelector('.sold');
        const isBought = item.querySelector('.bought');

        if (filter.includes('sold')) {
          item.style.display = isSold ? 'block' : 'none';
        } else {
          item.style.display = isBought ? 'block' : 'none';
        }
      });
    });
  });

  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.addEventListener('click', () => {
    alert('Loading more transactions... (This can be replaced with real data)');
  });
});

// profile.js