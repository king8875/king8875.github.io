


$('.store').mouseover(function () {
    $('.store_pop').css('visibility', 'visible');
    $('#arrow').css('transform', 'rotate(180deg)')
});
$('.store').mouseleave(function () {
    $('.store_pop').css('visibility', 'hidden');
    $('#arrow').css('transform', 'rotate(0deg)')
});

$('.delivery').mouseover(function () {
    $('.delivery_pop').css('visibility', 'visible');
});
$('.delivery').mouseleave(function () {
    $('.delivery_pop').css('visibility', 'hidden');
});


const categoryList = $('.main_category_list li');
const categoryList_a = $('.main_category_list a');

const main = $('.main_category_list').children('li');
const mainList = $('.main_category_list');

mainList.on('mouseover', 'li', function (event) {
    $(this).addClass('selected');
});
mainList.on('mouseleave', 'li', function (event) {
    $(this).removeClass('selected');
});




$(document).ready(function () {
    const slide_track = $('.slide_track');
    const slideWidth = $('.slide_item').width();
    let currentIdx = 0;

    const slideItemLength = $('.slide_item').length;

    $('.next_btn').click(function () {
        if (currentIdx < slideItemLength - 1) {
            currentIdx++;
            updateSlider();
        } else if(currentIdx == slideItemLength - 1 ) {
            currentIdx = 0;
            updateSlider();

        }
    })

    $('.pre_btn').click(function () {
        if (currentIdx > 0) {
            currentIdx--;
            updateSlider();

        }
    })
    function updateSlider() {
        slide_track.css('transform', 'translateX(' + (-slideWidth * currentIdx) + 'px)');
        console.log(currentIdx);
        
    }
});


$('#slide_btn02').on('click', function () {
    $('.slide_track01').css('transform', 'translateX(-1029px)');
    $('.only_olive_btn_item01').removeClass('active');
    $('.only_olive_btn_item02').addClass('active');


});
$('#slide_btn01').on('click', function () {
    $('.slide_track01').css('transform', 'translateX(0px)');
    $('.only_olive_btn_item02').removeClass('active');
    $('.only_olive_btn_item01').addClass('active');
});

$('.sub_btn_item02').on('click', function () {
    $('.sub_wrap').css('transform', 'translateX(-1020px)');
    $('.sub_btn_item02').addClass('active');
    $('.sub_btn_item01').removeClass('active');
    $('.sub_btn_item03').removeClass('active');
});
$('.sub_btn_item01').on('click', function () {
    $('.sub_wrap').css('transform', 'translateX(0px)');
    $('.sub_btn_item01').addClass('active');
    $('.sub_btn_item02').removeClass('active');
    $('.sub_btn_item03').removeClass('active');
});
$('.sub_btn_item03').on('click', function () {
    $('.sub_wrap').css('transform', 'translateX(-2040px)');
    $('.sub_btn_item03').addClass('active');
    $('.sub_btn_item02').removeClass('active');
    $('.sub_btn_item01').removeClass('active');
})







var num = 1;

$('.btn_box').on('click', function () {
    console.log(num);

    if (num == 1) {
        $('.today_update_ul').css('transform', 'translateX(-1020px)');
        $('.num02').html(num + 1);
        num = num + 1;
        return num;
    };
    if (num == 2) {
        $('.today_update_ul').css('transform', 'translateX(-2040px)');
        $('.num02').html(num + 1);
        num = num + 1;
        return num;
    };
    if (num == 3) {
        $('.today_update_ul').css('transform', 'translateX(0px)');
        $('.num02').html('1');
        num = 1;
        return num;
    };
});


for (let i = 0; i < 10; i++) {
    $('.tab_btn').eq(i).on('click', function () {
        $('.tab_btn').removeClass('active');
        $('.tab_btn').eq(i).addClass('active');


    })

};



$(document).ready(function () {
    for (let i = 0; i < 10; i++) {
        $('.tab_btn').eq(i).on('click', function () {
            $('.main_brand').css('transform', `translateX(calc(-1020px * ${i}))`);
        });
    }
});


$(document).ready(function () {
    const sliderWrap = $('.main_brand');
    const slider = document.querySelectorAll('.brand_img');
    const sliderBtnPrev = document.querySelector('#brand_pre');
    const sliderBtnNext = document.querySelector('#brand_next');
    let currentIndex = 0;
    const slideWidth = 1020; // 각 슬라이드의 너비

    sliderBtnNext.addEventListener('click', function () {
        if (currentIndex < slider.length - 1) {
            currentIndex++;
            sliderWrap.css('transform', `translateX(-${slideWidth * currentIndex}px)`);
        }

    });

    sliderBtnPrev.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            sliderWrap.css('transform', `translateX(-${slideWidth * currentIndex}px)`);
        }
    });
});




$(document).ready(function () {
    const sliderUl = $('.live_item_ul_left');
    const sliderLi = $('.live_itemli');
    const sliderLiSec = $('.live_area_list');

    const slideHeight = 236;
    let liveCurrentIndex = 0;

    setInterval(function () {
        liveCurrentIndex++;
        if (liveCurrentIndex >= sliderLi.length) {
            liveCurrentIndex = 0;
        }
        sliderUl.css('transform', `translateY(-${slideHeight * liveCurrentIndex}px)`);

        sliderLiSec.removeClass('live_area_item_list_active');
        sliderLiSec.eq(liveCurrentIndex).addClass('live_area_item_list_active');

    }, 3000);
});



$(document).ready(function () {
    const categories = ['오특', '랭킹', '헬스+', 'LUXE EDIT', '기획전', '세일', '기프트카드', '멤버십/쿠폰', '이벤트'];
    const categoryMenuList = $('.category_menu_list');
    const topUtil = ['회원가입', '로그인', '장바구니', '주문배송', '고객센터', '매장안내', 'Global'];
    const topUtilClass = $('.top_util_ul');
    const mainCategories = ['스킨케어', '메이크업/네일', '미용소품', '더모코스메틱', '멘즈케어','향수/디퓨저', '헤어케어', '바디케어', '건강식품', '푸드','구강/건강용품', '여성/위생용품', '라이프/팬시'];
    const mainCategoriesClass = $('.main_category_list');


    categories.forEach(function (category) {
        categoryMenuList.append(
            `<li><a href="#"><span>${category}</span></a></li>`
        )
    });

    topUtil.forEach(function (a) {
        topUtilClass.append(
            `<li><a herf="#">${a}</a></li>`
        )
    });

    mainCategories.forEach(function (a) {
        mainCategoriesClass.append(
            `<li><a href="#">${a}</a></li>`
        )
    });
    mainCategoriesClass.append(
        `<li class="lst">
            <a href="#">
                <span>AWARDS</span>
                <i class="fa-solid fa-trophy" id="awards_icon"></i>
            </a>
        </li>`
    );
});

var products = [
    { 
        id : 0,
        title : '[슈브데 선착순 4종 증정]설화수 퍼펙팅쿠션 에어리 (본품 15g+리필 15g)',
        originPrice : "89,000",
        currentPrice : "79,000",
        textColor : "#000"
    },
    { 
        id : 1,
        title : '[레오제이/디렉터파이/인씨 추천] 아떼 비건 릴리프 선크림/선에센스 40ml 택1',
        originPrice : "27,000",
        currentPrice : "10,000",
        textColor : "#000"
    },
    { 
        id : 2,
        title : '[5월 올영픽] 이니스프리 레티놀 시카 흔적 앰플 30mL 기획',
        originPrice : "40,000",
        currentPrice : "29,000",
        textColor : "#000"
    },
    { 
        id : 3,
        title : '다슈 보이 파란 수분초 스킨/로션 150mL 4종 기획 (스킨150mL+로션150mL+수분크림50mL + 세럼20mL)',
        originPrice : "35,000",
        currentPrice : "28,900",
        textColor : "#000"
    },


];

// $('.itemli_01 .title p').html(products[0].title);
// $('.itemli_01 .price_ori p').html(products[0].originPrice);
// $('.itemli_01 .price_cur p').html(products[0].currentPrice);

// $('.itemli_02 .title p').html(products[1].title);
// $('.itemli_02 .price_ori p').html(products[1].originPrice);
// $('.itemli_02 .price_cur p').html(products[1].currentPrice);

products.forEach(function(product, index) {
    var itemClass = '.itemli_0' + (index + 1);
    $(itemClass + ' .title p').html(product.title);
    $(itemClass + ' .price_ori p').html(product.originPrice);
    $(itemClass + ' .price_cur p').html(product.currentPrice);
  });


