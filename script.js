'use strict';

// const showModalEl = document.querySelector('.show-modal');
const showModal1El = document.querySelector('.show-1');
const showModal2El = document.querySelector('.show-2');
const showModal3El = document.querySelector('.show-3');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeModalEl = document.querySelector('.close-modal');

// Function to remove the class 'hidden' from the modal and overlay elements
const showModalFunction = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

// Function to add the class 'hidden' to the modal and overlay elements
const hideModalFunction = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Show modal when you click on any of the three show-modal buttons
showModal1El.addEventListener('click', showModalFunction);
showModal2El.addEventListener('click', showModalFunction);
showModal3El.addEventListener('click', showModalFunction);

// Hide modal when you click on the close-modal button or anywhere on the overlay
closeModalEl.addEventListener('click', hideModalFunction);
overlayEl.addEventListener('click', hideModalFunction);

// Hide modal when you press the escape key
// document.addEventListener('keydown', function(event) {
//   if (event.key === )
// });
