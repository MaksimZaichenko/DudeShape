const text = document.querySelectorAll('.features__item');

text.forEach(item => {
  item.addEventListener('click', () => {
    text.forEach(i => {
      i.style.color = ''; 
      i.classList.remove('active');
    });

    item.classList.add('active');
  });
});