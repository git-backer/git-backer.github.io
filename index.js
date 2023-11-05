document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    function checkSlide() {
        features.forEach((feature) => {
            const slideInAt = window.scrollY + window.innerHeight - feature.clientHeight / 2;
            const featureBottom = feature.offsetTop + feature.clientHeight;
            const isHalfShown = slideInAt > feature.offsetTop;
            const isNotScrolledPast = window.scrollY < featureBottom;

            if (isHalfShown && isNotScrolledPast) {
                feature.style.transform = "translateY(0)";
                feature.style.opacity = 1;
            }
        });
    }

    window.addEventListener("scroll", checkSlide);
    window.addEventListener("resize", checkSlide);

    checkSlide();
});
