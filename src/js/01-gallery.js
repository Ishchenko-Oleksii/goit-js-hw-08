// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const galleryPictures = galleryPicturesMark();
gallery.insertAdjacentHTML('beforeend', galleryPictures);
function galleryPicturesMark() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
             <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
         </a>
         </div>`;
    })
    .join('');
}
let galleryPic = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
});
console.log(galleryItems);
