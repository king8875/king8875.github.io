


// var time = 5;

// setInterval(timeout, 1000);

// function timeout() {
//     time = time - 1;
//     if (time >= 0) {
//         $('#num').html(time);
//         // $('.timeout').hide();
//         clearTimeout(time);
//     } else if (time == 1) {
//         $('.timeout').hide();
//         // clearInterval(time);
//     }
//     console.log(time);


// };




$('form').submit(function (e) {
    if ($('#id').val() === '') {
        e.preventDefault()
        alert('please write ID!')
    }
    else if ($('#password').val() === '') {
        e.preventDefault()
        alert('please write password!')
    }

    else if ($('#password').val().length < 6) {
        e.preventDefault()
        alert('6자리 이상으로 ㄱㄱ')
    }
});

document.getElementById('id').addEventListener('change', function () {
    console.log('sdfdsd');
});

setTimeout(function () { }, 1000)












$('.navbar-toggler').on('click', function () {
    $('.sub-menu').toggleClass('show');
});

$('.modal-btn').on('click', function () {
    $('.modal-bg').addClass('show-modal');
});
$('.close-btn').on('click', function () {
    $('.modal-bg').removeClass('show-modal');
});


var imgnum = 1;


$('.slide-1').on('click', function () {
    $('.main-banner').css('transform', 'translateX(0vw)');
})
$('.slide-2').on('click', function () {
    $('.main-banner').css('transform', 'translateX(-100vw)');
})
$('.slide-3').on('click', function () {
    $('.main-banner').css('transform', 'translateX(-200vw)');
})

setInterval(function () {
    $('.main-banner').css('transform', 'translateX(-100vw)');
}, 2000);

$('.next').on('click', function () {
    if (imgnum == 1) {
        $('.main-banner').css('transform', 'translateX(-100vw)');
        imgnum = imgnum + 1;
    }
    else if (imgnum == 2) {
        $('.main-banner').css('transform', 'translateX(-200vw)');
        imgnum = imgnum + 1;
    }
    else if (imgnum == 3) {
        $('.main-banner').css('transform', 'translateX(0vw)');
        imgnum = 1;
    }
})


$('.pre').on('click', function () {
    if (imgnum == 1) {
        $('.main-banner').css('transform', 'translateX(-200vw)');
        imgnum = imgnum + 1;
    }
    else if (imgnum == 2) {
        $('.main-banner').css('transform', 'translateX(-100vw)');
        imgnum = imgnum + 1;
    }
    else if (imgnum == 3) {
        $('.main-banner').css('transform', 'translateX(0vw)');
        imgnum = 1;
    }
})





$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.logo').css('font-size', '40px');
        $('.nav-bar').css('height', '60px');
        $('.input_search').css('visibility', 'hidden');
        $('.top-icon').removeClass('top-icon');
    }
    if (scroll < 100) {
        $('.logo').css('font-size', '70px');
        $('.nav-bar').css('height', '100px');
        $('.input_search').css('visibility', 'visible');
        $('i').addClass('top-icon');

    }
    // console.log($(window).scrollTop());

});




var count = 0;

$('.search-btn').on('click', function () {
    if ($('.search-input').val() == '') {
        alert('No result');

    } else {
        alert('검색결과를 찾을 수 없습니다.')
    }
});


//탭 버튼 기능

// for (let i = 0; i < tabButton.length; i++) {
//     tabButton.eq(i).on('click', function () {
//         openTab(i)
//     });
// };
var tabButton = $('.tab-btn');

$('.menu-wrap').click(function(e) {
    openTab(e.target.dataset.id)

  
   
});

function openTab(i) {
    tabButton.removeClass('orange');
    tabButton.eq(i).addClass('orange');
}




//로그인시 다른곳 클릭하면 히든되는 기능
$('.modal-bg').on('click', function(e) {
    if($(e.target).is($('.modal-bg'))) {
        $('.modal-bg').removeClass('show-modal');

    };
});