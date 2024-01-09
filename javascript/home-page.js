
document.addEventListener('DOMContentLoaded', () => {
    function configureSlider(imageArray) {
        const sliderFor = document.getElementById('sliderHomepageBanner');
        const sliderNav = document.createElement('div');
        sliderNav.classList.add('slider-nav');

        imageArray.forEach((imageUrl, index) => {
            const sliderItem = document.createElement('div');
            sliderItem.classList.add('slider-item');

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `book${index + 1}`;

            sliderItem.appendChild(img);
            sliderFor.appendChild(sliderItem);

            if (index < 4) {
                const clonedItem = sliderItem.cloneNode(true);
                sliderNav.appendChild(clonedItem);
            }
        });

        document.body.appendChild(sliderNav);
    }

    const images = [
        'https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg',
        'https://m.media-amazon.com/images/I/71cpL5zOtBL._AC_UL960_FMwebp_QL65_.jpg',
        'https://m.media-amazon.com/images/I/81999o0oq+L._AC_UL480_FMwebp_QL65_.jpg',
        'https://m.media-amazon.com/images/I/81pOIaiJRUL._AC_UL480_FMwebp_QL65_.jpg',
        'https://m.media-amazon.com/images/I/81pF6fAUOOL._SL1500_.jpg',
        'https://m.media-amazon.com/images/I/91lOIcyFBiL._SL1500_.jpg'
    ];

    configureSlider(images);
});



