var player = new Vimeo.Player("video-background", {
    url: "https://vimeo.com/835147882",
    background: true,
    autoplay: true,
    loop: true,
    byline: false,
    title: false,
    portrait: false
});

window.addEventListener("scroll", function () {
    var scrollingBox = document.getElementById("scrolling-box");

    if (window.scrollY > 0) {
        scrollingBox.classList.add("show");
        player.pause();
    } else {
        scrollingBox.classList.remove("show");
        player.play();
    }
});
