'use strict';
const addButton = document.querySelector('#add-button');
const photoTabs = document.querySelector('#photo-tabs');
 
function removePhoto(e) {
    e.target.parentElement.parentElement.remove()
}

addButton.addEventListener('click', () => {
    const newPhoto = document.createElement('li');
    const newPhotoLink = document.createElement('a');
    const removePhotoLink = document.createElement('a');
    newPhotoLink.innerHTML = "Photo";
    newPhotoLink.href = "#";
    removePhotoLink.innerHTML = "x";
    removePhotoLink.className = 'close-photo';
    removePhotoLink.href = "#";
    removePhotoLink.addEventListener('click', removePhoto, false);
    newPhoto.appendChild(newPhotoLink);
    newPhotoLink.appendChild(removePhotoLink);
    photoTabs.insertBefore(newPhoto, addButton);
}, false);
