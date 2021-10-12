const closeModalBtn = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.getElementById('modal');
const details = document.querySelectorAll('.main-btn[data-modal=details]');
const body = document.body;

function openModal() {
  overlay.classList.add('active');
  modal.classList.add('active');
  // body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  modal.classList.remove('active');
  // body.style.overflow = 'initial';
}



details.forEach(button => { // --- открытие модалки кнопкой связаной дата атрибутом
  button.onclick = openModal;
});

closeModalBtn.forEach(button => { // --- закрытие модалки по крестику
    button.onclick = closeModal;
});

window.onclick = (e) => { // --- закрытие модалки по клику на серый фон
  if (e.target === overlay) {
    closeModal();
  }
}

