import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgGallery = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
    }).join('');
};

imgGallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));
// console.log(galleryItems);
const gallery = new SimpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });