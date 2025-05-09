document.addEventListener("DOMContentLoaded", () => {
    const bottom = document.getElementById("bottom");
    let scrollSpeed = 1; // pixels per frame

    function autoScroll() {
        bottom.scrollLeft += scrollSpeed;

        if (bottom.scrollLeft + bottom.clientWidth >= bottom.scrollWidth) {
            bottom.scrollLeft = 0; // Reset to start
        }
    }

    setInterval(autoScroll, 16); // ~60fps
});
