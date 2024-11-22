let allImages = document.querySelectorAll("img");
let dummyBG = document.querySelector(".dummy-bg");

for(const img of allImages){
    img.onclick = function(){
        img.classList.toggle("fullscreen");
        dummyBG.classList.toggle("fullscreen");
    };
}