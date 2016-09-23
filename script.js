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

function addPhoto(e) {
    const newPhoto = document.createElement('li');
    const newPhotoLink = document.createElement('a');
    const removePhotoLink = document.createElement('a');
    const tabPhoto = document.createElement('img');
    //newPhotoLink.innerHTML = "Photo";
    newPhotoLink.href = "#";
    newPhotoLink.id = tabs.length;
    //newPhotoLink.addEventListener('click', gotoExistingTab, false);

    removePhotoLink.innerHTML = "x";
    removePhotoLink.className = 'close-photo';
    removePhotoLink.href = "#";
    removePhotoLink.addEventListener('click', removePhoto, false);

    tabPhoto.id = tabs.length;
    tabPhoto.src = e.target.currentSrc;
    tabPhoto.style.height = '100px';
    tabPhoto.addEventListener('click', gotoExistingTab, false)

    newPhoto.appendChild(newPhotoLink);
    newPhotoLink.appendChild(tabPhoto);
    newPhotoLink.appendChild(removePhotoLink);
    photoTabs.insertBefore(newPhoto, addButton);
}

function gotoNewTab(e) {
    const src = e.target.currentSrc;
    document.querySelector('#image-area').style.display = "block";
    document.querySelector('#image-gallery').style.display = "none";
    document.querySelector('#considered-image').src = src;

    addPhoto(e);
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
var upload_link = document.querySelector("#upload_link");
console.log(upload_link);
upload_link.addEventListener('click', function(e){
        e.preventDefault();
        //var Event = new Event('click');
        var test = document.querySelector("#photo-upload");
        console.log(test);
        test.click();
        
        //$("#upload:hidden").trigger('click');
    }, false);

//addButton.addEventListener('click',addPhoto, false);



document.querySelector('#considered-image')
    .addEventListener('click',
                      (e) => {
                          launchEditor(e.target.id, e.target.currentSrc);
                      }, false);

var featherEditor = new Aviary.Feather({
    //9adbf6c2812742938dcbd3cceb3f19d7
    apiKey: '9adbf6c2812742938dcbd3cceb3f19d7',
    apiVersion: 3,
    tools: ['draw', 'stickers','crop'],
    
    onSave: function(imageID, newURL) {
        console.log("save");
        // var img = document.getElementById(imageID);
        // //var oldSrc = img.src;
        // var filename = uniquifyFileName(stripFileName(img.src));
        // img.src = newURL;
        // jQuery.post('/photoUpload.php', {url: img.src, postdata: filename})
        
        // jQuery('#photo-url-parent input').val('/photos/' + filename);
        // featherEditor.close();
    },
    // onSaveButtonClicked: function(imageID) {
    //     console.log("hiyah mico");
    // }
});

function launchEditor(id, src) {
    featherEditor.launch({
        image: id,
        url: src
    });
    return false;
}





gotoImageLinks.forEach((link) => {
    link.addEventListener('click', gotoNewTab, false)
});

allPhotosButton.addEventListener('click', gotoAllPhotos, false);

