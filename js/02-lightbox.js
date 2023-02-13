import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems.reduce((html, { original, preview, description}) =>
    html + `<a class="gallery__item" href="${original}">
    <img class= "gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>`, '');


let imgBox = new SimpleLightbox(".gallery a", {captionDelay:250, captionsData: "alt" });
