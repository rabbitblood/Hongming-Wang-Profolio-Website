let background = document.getElementById("background_animation_container");
let mainContent = document.getElementById("main");
let title = document.getElementById("title");

window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;
    var scrollHeight = document.body.offsetHeight;
    var scrollButtom = window.innerHeight;
    var scrollPercent = (scrollTop) / (scrollHeight - scrollButtom);
    var scrollPercentRound = Math.round(scrollPercent * 100);
    scrollChangeBackgroundColor(scrollPercentRound);
    scrollChangeMainContentOpacity(scrollPercentRound);
    scrollChangeTitleOpacity(scrollPercentRound)
})

function scrollChangeBackgroundColor(scrollPercentRound) {
    background.style.backgroundColor = `rgba(${54 - scrollPercentRound/2},
                                             ${72 - scrollPercentRound / 2},
                                             ${107 - scrollPercentRound / 2})`;
}

function scrollChangeMainContentOpacity(scrollPercentRound)
{
    mainContent.style.opacity = scrollPercentRound / 100 /1.5;
}

function scrollChangeTitleOpacity(scrollPercentRound) {
    title.style.opacity = 1 - scrollPercentRound / 100*2;
}