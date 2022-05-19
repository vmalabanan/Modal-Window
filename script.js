'use strict';

// Select elements and save to variables
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Function to remove the class 'hidden' from the modal and overlay elements
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to add the class 'hidden' to the modal and overlay elements
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Show modal when you click on any of the three show-modal buttons
for (let i = 0; i < btnsOpenModal.length; ++i)
  btnsOpenModal[i].addEventListener('click', openModal);

// Hide modal when you click on the close-modal button or anywhere on the overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Hide modal when the escape key is pressed
document.addEventListener('keydown', function (event) {
  if (
    event.key === 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlay.classList.contains('hidden')
  )
    closeModal();
});
