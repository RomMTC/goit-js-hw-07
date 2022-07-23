import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg = document.querySelector('gallery');

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__card"><a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
    }).join('');
};
containerImg.insertAdjacentHTML('beforeend', createGallery(galleryItems));


console.log(galleryItems);
