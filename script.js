wrapper = document.getElementsByClassName("vp-flex-wrapper")[0];
let index = 0;
rightcontrol = document.getElementsByClassName("vp-right-control")[0];
leftcontrol = document.getElementsByClassName("vp-left-control")[0];

rightcontrol.addEventListener("click",()=>{
    rightcontrol.style.transition= "all 0.3s ease";
    leftcontrol.style.transition= "all 0.3s ease";
    wrapper.scrollLeft += 2000;
    rightcontrol.style.display = "none";
    rightcontrol.style.opacity= 0;
    leftcontrol.style.display = "flex";
    setTimeout(()=>{
        leftcontrol.style.opacity= 0.9
        leftcontrol.style.transition = "none"
    },300)
})

leftcontrol.addEventListener("click",()=>{
    rightcontrol.style.transition= "all 0.3s ease";
    leftcontrol.style.transition= "all 0.3s ease";
    wrapper.scrollLeft -= 2000;
    leftcontrol.style.display = "none";
    leftcontrol.style.opacity= 0;
    rightcontrol.style.display = "flex";
    setTimeout(()=>{
        rightcontrol.style.opacity= 0.9;
        rightcontrol.style.transition= "none";
    },300)
})

//spawn cards animation
var cardArray = Array.from(document.querySelectorAll(".cl-grid-item-wrapper"));
for (i = 0; i < cardArray.length; i++) {
    cardArray[i].style.animationDelay = i / 6 + "s";
    if (i >= 6){
        cardArray[i].style.animationDelay = (i-6) / 8 + "s";
    }
}

// showall btn

showAllBtn = document.querySelector(".cl-show-all-btn");


showAllBtn.addEventListener("click",()=>{
    showAllBtn.style.display = "none";
    cardArray.forEach((card)=>{
        card.style.display = "grid";
    })
})

// card animations on hover

cardArray.forEach((card)=>{
    card.addEventListener("mouseover",(e)=>{
        card.children[1].style.width = "110%";
        card.children[1].style.backgroundColor = "var(--blue)";
        card.children[1].children[1].firstElementChild.style.backgroundColor = "#222";
        card.children[0].style.scale = "1.05";
    })
    card.addEventListener("mouseout",(e)=>{
        card.children[1].style.width = "95%";
        card.children[1].style.backgroundColor = "#222";
        card.children[1].children[1].firstElementChild.style.backgroundColor = "var(--blue)";
        card.children[0].style.scale = "1";
    })
})

// carrousel js

var tnChevronLeft = document.getElementsByClassName("tn-chevron")[0];
var tnChevronRight = document.getElementsByClassName("tn-chevron")[1];
var imgOptions = Array.from(document.getElementsByClassName("tn-img"));
var tnWrapper = document.querySelector(".tn-wrapper");
console.log(imgOptions);

imgOptions.forEach(img => {
    img.addEventListener("click",(e)=>{
        slideGlider(imgOptions.indexOf(e.target));
        clearInterval(autoSlide);
    })
});

tnChevronLeft.addEventListener("click",()=>{
    index--
    slideGlider(index);
    clearInterval(autoSlide);
})

tnChevronRight.addEventListener("click",()=>{
    index++
    slideGlider(index);
    clearInterval(autoSlide);
})

var innerSlider = document.querySelector(".tn-wrapper-inner");

function slideGlider(ind){
    index = ind;
    if(ind >= 5){index = 0};
    if(ind <= -1){index = 4};
    percentage = index * -100;
    innerSlider.style.transform = "translateX("+percentage+"%)";

    imgOptions.forEach(option =>{
        option.classList.remove("dataSelected")
    })
    imgOptions[index].classList.add("dataSelected");
}

autoSlide = setInterval(()=>{
    index++;
    slideGlider(index);
},3000)

// Buttons Spawn Delay

    buttonsDelay = document.querySelectorAll(".ct-button-icon");
    var buttonsDelaySeconds = 0;
    buttonsDelay.forEach((btn)=>{
        buttonsDelaySeconds+=0.2
        btn.style.animationDelay = buttonsDelaySeconds+"s";
    })

// Intersection Observers

const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            document.querySelectorAll(".ct-button-icon").forEach((el) => {
                el.style.animationName = "buttonSpawn"
            })
        }
    })
})
observer1.observe(document.querySelector(".ct-button-icon"));

const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            setTimeout(()=>{
                document.querySelector(".ct-mail-vector").style.opacity = 1
            }, 400);
        }
    })
})

observer2.observe(document.querySelector(".ct-mail-vector"));

// Cards Redirect To Videos

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".vp-card");

    cards.forEach(function (card) {
        const cardTitle = card.querySelector(".vp-card-title");

        card.addEventListener("click", function () {
            const cardTitleHref = cardTitle.getAttribute("href");
            if (cardTitleHref) {
                window.open(cardTitleHref, "_blank");
            }
        });
    });
});

/* EMBEDDED VIDEO EN VEZ DE ABRIRLO EN YOUTUBE

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".vp-card");

    cards.forEach(function (card) {
        const iframe = card.querySelector(".vp-card-img");

        card.addEventListener("click", function () {
            const iframeSrc = iframe.getAttribute("src");
            if (iframeSrc) {
                window.open(iframeSrc, "_blank");
            }
        });
    });
});

*/


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


//      ARTIFICIAL JS ANCHORTAGS  ON VP CARDS       //

cardArray.forEach((card)=>{
    card.addEventListener("click",(c)=>{
        console.log(card.children[1].children[0].innerText);
        window.location.pathname += "videoPages/" + card.children[1].children[0].innerText + ".html";
    })
})

// DETECTAR PX PANTALLA

window.addEventListener('resize',()=>{
    document.querySelector(".vp-h4").innerHTML = window.innerWidth;
});