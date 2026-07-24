// ==========================
// รายชื่อรูปภาพ
// ==========================

const photos = [

    "photo/96524.jpg",
    "photo/96524.jpg",
    "photo/96524.jpg",
    "photo/96524.jpg",
    "photo/96524.jpg",
    "photo/6.jpg",
    "photo/7.jpg",
    "photo/8.jpg",
    "photo/9.jpg",
    "photo/10.jpg",
    "photo/11.jpg",
    "photo/12.jpg",
    "photo/13.jpg",
    "photo/14.jpg",
    "photo/15.jpg",
    "photo/16.jpg",
    "photo/17.jpg",
    "photo/18.jpg",
    "photo/19.jpg",
    "photo/20.jpg",
    "photo/21.jpg",
    "photo/22.jpg",
    "photo/23.jpg",
    "photo/24.jpg",
    "photo/25.jpg",
    "photo/26.jpg",
    "photo/27.jpg",
    "photo/28.jpg",
    "photo/29.jpg",
    "photo/30.jpg"

];


// ==========================
// แสดงรูป
// ==========================

const gallery = document.getElementById("gallery");


photos.forEach((photo)=>{

    const img = document.createElement("img");

    img.src = photo;

    gallery.appendChild(img);

});

const nextButton = document.querySelector('.next-button');
if (nextButton) {
    nextButton.addEventListener('click', () => {
        window.location.href = 'next.html';
    });
}
