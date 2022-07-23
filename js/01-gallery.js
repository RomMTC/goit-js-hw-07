import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg= document.querySelector('.gallery');

let div, img, a;
{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

galleryItems.forEach(({ preview, original, description }) => {

  div = document.createElement("div");
  a = document.createElement("a");
  img = document.createElement("img");

  div.classList.add("gallery__item");
  img.classList.add("gallery__image");

    a.href = preview;
    img.src = preview;
    img.dataset.source = original;
    img.alt = description;

  a.appendChild(img);
  div.appendChild(a);
 
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
      instance.show(() => window.addEventListener('keydown', onKeyDown));

function onKeyDown(e) {
    if (e.key === 'Escape') {
        instance.close(() => window.removeEventListener('keydown', onKeyDown));
        // console.log(e.key);
        return;
    }
    return;
};
};

containerImg.addEventListener('click', handleClick);


// console.log(galleryItems);
