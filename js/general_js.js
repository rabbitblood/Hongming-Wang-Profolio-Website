let background = document.getElementById("background_animation_container");

window.addEventListener("scroll", function (e) {
    var scrollTop = window.scrollY;
    var scrollHeight = document.body.offsetHeight;
    var scrollButtom = window.outerHeight;
    var scrollPercent = (scrollTop) / (scrollHeight - scrollButtom);
    var scrollPercentRound = Math.round(scrollPercent * 100);
    scrollChangeColor(scrollPercentRound);
})

function scrollChangeColor(scrollBarPercentage) {
    background.style.backgroundColor = `rgba(${54 - scrollBarPercentage/2},
                                             ${72 - scrollBarPercentage / 2},
                                             ${107 - scrollBarPercentage / 2})`;
}