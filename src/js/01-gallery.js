import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


function createGalleryMarcup({ preview, original, description }) {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
}

const galleryList = document.querySelector('.gallery')

const createGallery = galleryItems.map(createGalleryMarcup).join('');
galleryList.insertAdjacentHTML('beforeend', createGallery)


galleryList.addEventListener('click', onImageClick)


function onImageClick(event) {
  event.preventDefault();
    // const examination = event.target.classList.contains('gallery__image')
  const examination = event.target.nodeName === 'IMG';
  
    if (!examination) {
        return
    }
  
  
      event.target.src = event.target.dataset.source; 
      const instance = basicLightbox.create(
    `
  <img src="${event.target.src}" width="800" height="600">
  `
  );
  instance.show();
  
  galleryList.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        instance.close();
      }
    })
} 


  



