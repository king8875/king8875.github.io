window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //전체 스크롤 값
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //
    var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    var navContainer = document.querySelector('header');
    if (scrollTop >= 100) {
        navContainer.style.backgroundColor = 'white';
        // navContainer.addEventListener('mouseenter', function () {
        //     this.style.backgroundColor = 'white';
        // });
    } else if (scrollTop <= 90) {
        navContainer.style.backgroundColor = 'transparent';

    };
});
var navContainer = document.querySelector('header');

navContainer.addEventListener('mouseenter', function () {
    if (document.documentElement.scrollTop >= 100) {
        this.style.backgroundColor = 'white';

    }
});

// 현재 날짜 출력 
var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var date = ('0' + today.getDate()).slice(-2);

var dateString = year + '.' + month + '.' + date;

document.querySelector('.date').innerHTML = dateString;
document.querySelector('.day').innerHTML = dateString;
document.querySelector('.day01').innerHTML = dateString;


console.log(dateString);


function countingType1(num) {
    const element = document.querySelector('.number');
    if (num == 0) {
        element.innerHTML = '0';
    } else {
        const each = Math.ceil(num / 33);
        let time = 0

        for (let i = 0; i < num; i += each) {
            setTimeout(() => {
                element.innerHTML = i;
            }, 20 * time);
            if (i + each > this.maxNum1) {
                setTimeout(() => {
                    element.innerHTML = num;
                }, 20 * (time + 1));
            }
            time++;
        }
    }
}

window.onload = function() {
    countingType1(2116);
}





    // $(window).on('scroll', function() {
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    // })



    // 크리에이터즈 캠페인 이미지
    $('.sec04_item01').mouseover(function () {
        $('.sec04_main_img_01 img').css('transform', 'scale(1.1)');
    });
    $('.sec04_item01').mouseleave(function () {
        $('.sec04_main_img_01 img').css('transform', 'scale(1)');
    });

    $('.sec04_item02').mouseover(function () {
        $('.sec04_main_img_02 img').css('transform', 'scale(1.1)');
    });
    $('.sec04_item02').mouseleave(function () {
        $('.sec04_main_img_02 img').css('transform', 'scale(1)');
    });

    $('.sec04_item03').mouseover(function () {
        $('.sec04_main_img_03 img').css('transform', 'scale(1.1)');
    });
    $('.sec04_item03').mouseleave(function () {
        $('.sec04_main_img_03 img').css('transform', 'scale(1)');
    });

    // 캠페인 둘러보기 이미지 
    $('.li_item_01').mouseover(function() {
        $('#li_item_01_img').css('transform', 'scale(1.1)');
        $('#li_item_01_img').css('transition-duration', '.15s');

    });
    $('.li_item_01').mouseleave(function() {
        $('#li_item_01_img').css('transform', 'scale(1)');
    });

    $('.li_item_03').mouseover(function() {
        $('#li_item_03_img').css('transform', 'scale(1.1)');
        $('#li_item_03_img').css('transition-duration', '.15s');

    });
    $('.li_item_03').mouseleave(function() {
        $('#li_item_03_img').css('transform', 'scale(1)');
    });

    $('.li_item_04').mouseover(function() {
        $('#li_item_04_img').css('transform', 'scale(1.1)');
        $('#li_item_04_img').css('transition-duration', '.15s');

    });
    $('.li_item_04').mouseleave(function() {
        $('#li_item_04_img').css('transform', 'scale(1)');
    });


    const tabItem = document.querySelectorAll('.tab_item');
    const tabContent = document.querySelectorAll('.tab_content');

    tabItem.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            tabContent.forEach((content) => {
                content.classList.remove('active');
            });
            tabItem.forEach((content) => {
                content.classList.remove('active');
            });

            tabItem[index].classList.add('active');
            tabContent[index].classList.add('active');
        });
    });






    let slides = document.querySelector('.swiper_wrapper');
    let slide = document.querySelectorAll('.sec02_item');
    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = 285;
    let slideMargin = 20;
    let prevBtn = document.querySelector('.sec02_pre');
    let nextBtn = document.querySelector('.sec02_next');


    makeClone();

    function makeClone() {
        for (let i = 0; i < slideCount; i++) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add("clone");
            slides.appendChild(cloneSlide);
        }

        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add("clone");
            slides.prepend(cloneSlide);
        }
        updateWidth();
        setinit();
        setTimeout(function () {
            slides.classList.add("animated");
        }, 100);

    }

    function updateWidth() {
        let currentSlides = document.querySelectorAll('.sec02_item');
        let newSlideCount = currentSlides.length;

        let newWidth =
            (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
        slides.style.width = newWidth;
    }

    function setinit() {
        let TranslateValue = -(slideWidth + slideMargin) * slideCount;
        slides.style.transform = "translateX(" + TranslateValue + "px)";
    }

    nextBtn.addEventListener("click", function () {
        moveSlide(currentIdx + 1);
        console.log('121212');
    });

    prevBtn.addEventListener("click", function () {
        moveSlide(currentIdx - 1);
    });

    function moveSlide(num) {
        slides.style.left = -num * (slideWidth + slideMargin) + "px";
        currentIdx = num
        console.log(currentIdx, slideCount);

        if (currentIdx == slideCount || currentIdx == -slideCount) {
            setTimeout(function () {
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            }, 500);

            setTimeout(function () {
                slides.classList.add('animated');
            }, 600);
        }
    }
