// Recommended product carousel
const team = document.querySelector("#team");
if (team) {
    const recommended1 = new Carousel(team, {
        slidesPerPage: 1,
        center: false,
        Dots: false,
    });
}

// For product page
if (document.querySelector(".product")) {
    // Product Carousel
    const productCarousel = new Carousel(document.querySelector("#product-carousel"), {
        Dots: false,
    });
    const thumbCarousel = new Carousel(document.querySelector("#product-thumb-carousel"), {
        Sync: {
            target: productCarousel,
            friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: false,
    });
}