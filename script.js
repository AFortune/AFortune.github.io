'use strict';
const addButton = document.querySelector('#add-button');
const allPhotosButton = document.querySelector('#all-photos-button');
const photoTabs = document.querySelector('#photo-tabs');
const gotoImageLinksNodeList = document.querySelectorAll('.image-link');
let gotoImageLinks = Array.from(gotoImageLinksNodeList);
 
let tabs = [];

function createTabObject(img, materialValue) {
    return {
        imgSrc: img,
        materialValue: materialValue,
        editorState: editorState
    };
}
function removePhoto(e) {
    e.target.parentElement.parentElement.remove();
}

function addPhoto() {
    const newPhoto = document.createElement('li');
    const newPhotoLink = document.createElement('a');
    const removePhotoLink = document.createElement('a');
    newPhotoLink.innerHTML = "Photo";
    newPhotoLink.href = "#";
    newPhotoLink.id = tabs.length;
    newPhotoLink.addEventListener('click', gotoExistingTab, false);
    removePhotoLink.innerHTML = "x";
    removePhotoLink.className = 'close-photo';
    removePhotoLink.href = "#";
    removePhotoLink.addEventListener('click', removePhoto, false);
    newPhoto.appendChild(newPhotoLink);
    newPhotoLink.appendChild(removePhotoLink);
    photoTabs.insertBefore(newPhoto, addButton);
}

function gotoNewTab(e) {
    const src = e.target.currentSrc
    document.querySelector('#image-area').style.display = "block";
    document.querySelector('#image-gallery').style.display = "none";
    document.querySelector('#considered-image').src = src;

    addPhoto();
    tabs.push({src});
}

function gotoAllPhotos() {
    document.querySelector('#image-area').style.display = "none";
    document.querySelector('#image-gallery').style.display = "block";
}
function gotoExistingTab(e) {
    document.querySelector('#image-area').style.display = "block";
    document.querySelector('#image-gallery').style.display = "none";
    document.querySelector('#considered-image').src = tabs[Number(e.target.id)].src;

}

addButton.addEventListener('click',addPhoto, false);
gotoImageLinks.forEach((link) => {
    link.addEventListener('click', gotoNewTab, false)
});

allPhotosButton.addEventListener('click', gotoAllPhotos, false);
