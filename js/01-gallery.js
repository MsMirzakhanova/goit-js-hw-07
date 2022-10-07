import { galleryItems } from "./gallery-items.js";
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

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const url = event.target.getAttribute("data-source");
  //console.log(url);
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  instance.show();
}
