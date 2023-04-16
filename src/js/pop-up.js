import axios from 'axios';

import { BookAPI } from './book-api.js';
import { createModalPopUpCard } from './modal-pop-up-template.js';

const bookAPI = new BookAPI();

const bookCards = document.querySelectorAll('.book-card');

bookCards.forEach(bookCard => {
  bookCard.addEventListener('click', event => {
    event.preventDefault();

    const bookId = bookCard.querySelector('.book-card__id').textContent;
    bookAPI.id = bookId;

    bookAPI.getBookInfo()
      .then(response => {
        const book = response.data;
        const modalPopUp = createModalPopUpCard(book);
        document.body.insertAdjacentHTML('beforeend', modalPopUp);
        const modalElement = document.getElementById(book._id);

        modalElement.style.display = 'block';
        modalElement.addEventListener('click', event => {
          if (event.target === modalElement || event.target.classList.contains('pop-up__btn-close')) {
            modalElement.style.display = 'none';
            modalElement.remove();
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  });
});
