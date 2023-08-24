//mobile menu
document.getElementById("mobile-menu-trigger").addEventListener("click", function () {
    let myDiv = document.getElementById("nav-links");
    if (myDiv.style.display === "flex") {
        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
});

//slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItem = document.querySelector('.slider-item');
    const sliderWrapper = document.querySelector('.slider-wrapper');

    const containerWidth = sliderContainer.clientWidth;
    const itemWidth = sliderItem.offsetWidth;
    const itemsCount = sliderWrapper.children.length;
    const wrapperWidth = itemWidth * itemsCount;
    const visibleItems = Math.floor(containerWidth / itemWidth);
    const visibleWidth = visibleItems * itemWidth;
    let position = 0;

    sliderWrapper.style.width = wrapperWidth + 'px';


    function moveSliderPrev() {
        if (position !== 0) {
            position += itemWidth;
            sliderWrapper.style.transform = 'translateX(' + position + 'px)';
        }
    }

    function moveSliderNext() {
        if (position !== -(wrapperWidth - visibleWidth)) {
            position -= itemWidth;
            sliderWrapper.style.transform = 'translateX(' + position + 'px)';
        }
    }

    // Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('mousedown', function (event) {
        touchStartX = event.pageX;
    });

    sliderWrapper.addEventListener('touchstart', function (event) {
        touchStartX = event.touches[0].pageX;
    });

    sliderWrapper.addEventListener('mousemove', function (event) {
        touchEndX = event.pageX;
    });

    sliderWrapper.addEventListener('touchmove', function (event) {
        touchEndX = event.touches[0].pageX;
    });

    sliderWrapper.addEventListener('mouseup', function () {
        if (touchEndX < touchStartX) {
            moveSliderNext();
        } else if (touchEndX > touchStartX) {
            moveSliderPrev();
        }
    });

    sliderWrapper.addEventListener('touchend', function () {
        if (touchEndX < touchStartX) {
            moveSliderNext();
        } else if (touchEndX > touchStartX) {
            moveSliderPrev();
        }
    });
});

// map configuration
if (ApiKEY === undefined) {
    var ApiKEY = ""
}

let latAndLong = [22, 50.4]
const map = tt.map({
    key: ApiKEY,
    container: "map",
    center: latAndLong,
    zoom: 10
})

var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);

var popupOffsets = {
    top: [0, 0],
    bottom: [0, -50],
    'bottom-right': [0, -70],
    'bottom-left': [0, -70],
    left: [25, -35],
    right: [-25, -35]
}

var popup = new tt.Popup({offset: popupOffsets}).setHTML('Polish your English, ul.Szkolna 20');
marker.setPopup(popup).togglePopup();
window.scrollTo(0, 0);


// swiper configuration
var swiper = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
