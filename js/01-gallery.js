import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems.reduce((html, { original, preview, description}) =>
    html + `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class= "gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
    </div>`, '');



gallery.addEventListener('click', onGalleryImgClickHandler);


function onGalleryImgClickHandler(event) { 
    event.preventDefault();
    if (!event.target.dataset.source) { 
        return
    }
    console.log(event.target);
    const imgBox = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600"/>`);
    imgBox.show();
}