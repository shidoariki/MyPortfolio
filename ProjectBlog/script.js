const buttons = document.querySelectorAll('.read-more-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const article = btn.parentElement;
    const shortText = article.querySelector('.short-text');
    const fullText = article.querySelector('.full-text');

    if (fullText.style.display === 'none') {
      fullText.style.display = 'inline';
      shortText.style.display = 'none';
      btn.textContent = 'Show Less';
    } else {
      fullText.style.display = 'none';
      shortText.style.display = 'inline';
      btn.textContent = 'Read More';
    }
  });
});
