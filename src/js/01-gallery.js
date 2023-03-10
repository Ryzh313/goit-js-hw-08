import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const divRef = document.querySelector('.gallery');
const addGallaryMarkup = createGalleryMarkup(galleryItems);
divRef.insertAdjacentHTML('beforeend', addGallaryMarkup);

function createGalleryMarkup(items) {
    return items.map(
        (item) => {
        return `
        <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {    
    captionsData: 'alt',
    captionDelay: 250,
    fadeSpeed:	150,  
});