import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg= document.querySelector('.gallery');

let div, img, a;

galleryItems.forEach(({ preview, original, description }) => {
    // создание элемента
  div = document.createElement("div");
  a = document.createElement("a");
  img = document.createElement("img");

  // добавление классов
  div.classList.add("gallery__item");
  img.classList.add("gallery__image");

  // установка атрибутов и текста
    a.href = preview;
    img.src = preview;
    img.dataset.source = original;
    img.alt = description;

  // внутрь элемента a добавить элемент img
  a.appendChild(img);
  // внутрь элемента div добавить элемент a
  div.appendChild(a);
  // внутрь элемента body добавить элемент div
  containerImg.appendChild(div)
});

const handleClick = (e) => {
    e.preventDefault();
    const imgSelected = e.target.classList.contains('gallery__image');

if (!imgSelected) {
    return;
} 
//   if (e.nodeName !== 'BUTTON') {
//     return;
//   }
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
    // console.log(e.target.dataset.source);
    instance.show();
};

containerImg.addEventListener('click', handleClick);


// console.log(galleryItems);
