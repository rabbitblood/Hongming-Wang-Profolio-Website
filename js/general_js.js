//-------------------------------------for scroll effects---------------------------------------
const background = document.getElementById("background_animation_container");
const mainContent = document.getElementById("main");
const title = document.getElementById("title");

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
let currentScroll = 0;
let bodyHeight = document.documentElement.scrollHeight - viewportHeight;

window.addEventListener("scroll", function () {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    bodyHeight = document.documentElement.scrollHeight - viewportHeight;

    currentScroll = this.scrollY;
    console.log(this.scroll.innerHeight);

    scrollChangeBackgroundColor();
    scrollChangeMainContentOpacity();
    scrollChangeTitleOpacity();
})


function scrollChangeBackgroundColor() {
    var scrollPercent = currentScroll / bodyHeight;
    console.log(bodyHeight +", "+currentScroll);
    var scrollPercentRound = Math.round(scrollPercent * 100);

    background.style.backgroundColor = `rgba(${54 - scrollPercentRound/2},
                                             ${72 - scrollPercentRound / 2},
                                             ${107 - scrollPercentRound / 2})`;
}

function scrollChangeMainContentOpacity(){
    var finalOpacityRatio = 0.9;
    var calculatedScrollValue = 0;
    if(currentScroll > viewportHeight){
        calculatedScrollValue = viewportHeight;
    }
    else{
        calculatedScrollValue = currentScroll;
    }
    var opacityPercent = (calculatedScrollValue/viewportHeight) * finalOpacityRatio;
    mainContent.style.opacity = opacityPercent;
}

function scrollChangeTitleOpacity() {
    var calculatedScrollValue = 0;
    if(currentScroll > viewportHeight){
        calculatedScrollValue = viewportHeight;
    }
    else{
        calculatedScrollValue = currentScroll;
    }
    var opacityPercent = viewportHeight/calculatedScrollValue/2 -1;
    title.style.opacity = opacityPercent;
}

//-------------------------------------for menu button effect---------------------------------------
const navBar = document.getElementById("navBar");
navBar.style.animationName = "none";

let menuExpanded = false;

function menuButtonClick(){
    if(menuExpanded){
        navBar.style.animationName = "menu_shrink";
        menuExpanded = false;
    }
    else{
        navBar.style.animationName = "menu_expand";
        menuExpanded = true;
    }
}