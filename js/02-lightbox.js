import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
//console.log(galleryContainer);
const imgMarkup = createImgMarkup(galleryItems);
//console.log(imgMarkup);

galleryContainer.insertAdjacentHTML(`beforeend`, imgMarkup);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" 
  href= "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
   `;
    })
    .join(``);
}

