export function createBookCard(book) {
  const { book_image, title, author } = book;
  return `<li class="book-card">
    <a href="" class="book-card__link">
    <div class="book-card__thumb">
    <img class="book-card__image" src="${book_image}" alt="${author} ${title}" loading="lazy" width="100%">
    <p class="book-card__notification">Quick view</p>
    </div>
    <div class="book-card__info">
    <p class="info-item__title">${title}</p>
    <p class="info-item__author">${author}</p>
    </div></a>
    </li>`;
}