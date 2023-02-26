import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


function createGalleryMarcup({ preview, original, description }) {
    return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
}

const galleryList = document.querySelector('.gallery')

const createGallery = galleryItems.map(createGalleryMarcup).join('');
galleryList.insertAdjacentHTML('beforeend', createGallery)


  
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250ms',
})






