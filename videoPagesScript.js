//      CHECKED NAVBAR MOBILE //

checkbox = document.querySelector(".movbar-checkbox");
movbar = document.querySelector(".movbar-wrapper");
movbarAnchor = Array.from(document.querySelectorAll(".movbar-a"));
movbar.style.left = "-120%";

checkbox.addEventListener("click",()=>{
    if(movbar.style.left == "-120%"){
        movbar.style.left = "0";
    }
    else{
        movbar.style.left = "-120%";
    }
});

movbarAnchor.forEach((anchor)=>{
    anchor.addEventListener("click",()=>{
        movbar.style.left = "-120%";
    })
})