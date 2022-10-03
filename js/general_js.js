//-------------------------------------for scroll effects---------------------------------------
const background = document.getElementById("background_animation_container");
const mainContent = document.getElementById("main");
const title = document.getElementById("title");
const header = document.getElementById("header");

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
let currentScroll = 0;
let bodyHeight = document.documentElement.scrollHeight - viewportHeight;

init();

function init(){

    if(window.location.href.indexOf("/htmls/index.html") > -1){
        scrollChangeHeaderOpacity();
        mainContent.style.marginTop ="100vh";
    }
    else
    {
        mainContent.style.marginTop ="50px";
    }


}

window.addEventListener("scroll", function () {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    bodyHeight = document.documentElement.scrollHeight - viewportHeight;

    currentScroll = this.scrollY;

    scrollChangeBackgroundColor();
    if(title != null){

        scrollChangeTitleOpacity();
    }
    if(window.location.href.indexOf("/htmls/index.html") > -1){
        scrollChangeHeaderOpacity();
        scrollChangeMainContentOpacity();
        mainContent.style.opacity = 0.9;
    }
})


function scrollChangeBackgroundColor() {
    var scrollPercent = currentScroll / bodyHeight;
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

function scrollChangeHeaderOpacity(){
    var finalOpacityRatio = 0.9;
    var calculatedScrollValue = 0;
    if(currentScroll > viewportHeight){
        calculatedScrollValue = viewportHeight;
    }
    else{
        calculatedScrollValue = currentScroll;
    }
    var opacityPercent = (calculatedScrollValue/viewportHeight) * finalOpacityRatio;
    header.style.opacity = opacityPercent * 2;

    if(opacityPercent == 0){
        header.style.pointerEvents = "none"
    }
    else{
        header.style.pointerEvents = "all"
    }
}

function scrollChangeTitleOpacity() {
    var calculatedScrollValue = 0;
    if(currentScroll > viewportHeight){
        calculatedScrollValue = viewportHeight;
    }
    else if(currentScroll < 0){
        calculatedScrollValue = 0;
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