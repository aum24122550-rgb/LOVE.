// ==========================
// รายชื่อรูปภาพ
// ==========================

const photos = [

    "photo/96524.jpg",
    "photo/96526.jpg",
    "photo/96555.jpg",
    "photo/96556.jpg",
    "photo/96557.jpg",
    "photo/96558.jpg",
    "photo/96559.jpg",
    "photo/96560.jpg",
    "photo/96561.jpg",
    "photo/96562.jpg",
    "photo/96563.jpg",
    "photo/96564.jpg",
    "photo/96565.jpg",
    "photo/96566.jpg",
    "photo/96567.jpg",
    "photo/96568.jpg",
    "photo/96569.jpg",
    "photo/96570.jpg",
    "photo/96571.jpg",
    "photo/96572.jpg",
    "photo/96573.jpg",
    "photo/96574.jpg",
    "photo/96575.jpg",
    "photo/96576.jpg",
    "photo/96577.jpg",
    "photo/96578.jpg",
    "photo/96579.jpg",
    "photo/96580.jpg",
    "photo/96581.jpg",
    "photo/96582.jpg"

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
