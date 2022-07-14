//================================================================
//Слайдер Swiper
//================================================================
// Слайдер full screen
const fullSlider = document.querySelector('.fullscreen__swiper');
if(fullSlider){
    const fullSwiper = new Swiper(fullSlider,{
        observer: true,
        observerParents: true,
        observerSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: '.fullscreen__button-prev',
            nextEl: '.fullscreen__button-next',
        },
        pagination: {
            el: '.fullscreen__progress',
            type: 'progressbar',
        },
        thumbs:{
            swiper:{
                el: '.thumbs-fullscreen__swiper',
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            }
        },
    });
}
// Слайдер "Производители"
const brends = document.querySelector('.brends-index__swiper');
if(brends){
    const brend = new Swiper(brends,{
        observer: true,
        observerParents: true,
        observerSlideChildren: true,
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            prevEl: '.controls-brends__button-prev',
            nextEl: '.controls-brends__button-next',
        },
        pagination: {
            el: '.brends-index__pagination',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            680: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
}
//================================================================
//Карта
//================================================================
const mapBlock = document.getElementById('map');
if(mapBlock){
    ymaps.ready(function (){
        let map = new ymaps.Map('map', {
            center: mapBlock.dataset.gps.split(','),
            zoom: mapBlock.dataset.zoom.split(',')
        });
        let placemark = new ymaps.Placemark(mapBlock.dataset.placemark.split(','), {
            balloonContentHeader: mapBlock.dataset.balloonHeader,
            balloonContentBody: mapBlock.dataset.balloonBody
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/marker.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-10, -20]
        });
        map.geoObjects.add(placemark);
        map.behaviors.disable(['scrollZoom']);
    });
}
