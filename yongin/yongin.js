// //lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 900); 
});
gsap.ticker.lagSmoothing(0);


$(document).ready(function(){
    // 화면 줌, 줌아웃
    let scale = 1; 
    $('.zoomin').on('click', function () {
        scale += 0.1; 
        $('.container').css({
            transform: `scale(${scale})`,
            transformOrigin: 'center' 
        });
    });
    $('.zoomout').on('click', function () {
        scale -= 0.1; 
        $('.container').css({
            transform: `scale(${scale})`,
            transformOrigin: 'center' 
        });
    });

    // side 메인 소식 행정 스크롤 
    $('#admin').click(function(e){
        e.preventDefault();
        gsap.to(window, {
            duration: 0.7,
            scrollTo: { y: "#footer" },
        });
    });
    $('#news').click(function(e){
        e.preventDefault();
        gsap.to(window, {
            duration: 0.7,
            scrollTo: { y: "#news-tab" },
        });
    });

    //header 스와이퍼 기능
    const FamilyPopSwiper = new Swiper('.familyPop__swiper.swiper',{
        slidesPerView: 1,
        loop:true,  
        autoplay:{ delay:2000, },
    });
    // header 언어 드롭다운
    $('.lang__btn').click(function(){
        $('.lang__dropdown').addClass('active');
    });
    $('.close').click(function(){
        $('.lang__dropdown').removeClass('active');
    });

    // header navi js
    $('.header__item').hover(function(){
        $('.dimmed').addClass('active');
        $('.header__item').removeClass('active');
        $(this).addClass('active');
        $('.tab__item').removeClass('active');
        const tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });
    $('.header__list, .tab__item').mouseleave(function() {
        $('.dimmed').removeClass('active');
        $('.header__list').removeClass('active');
        $('.tab__item').removeClass('active');
    });

    // visual swiper js
    const VisualSwiper = new Swiper('.visual-swiper.swiper',{
        loop:true,
        slidesPerView: 1,
        centeredSlides : true,
        spaceBetween : 15,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.visual-btn.next',
            prevEl: '.visual-btn.prev',
        },
        autoplay:{
            delay:3000,
        },
    });
    let isPlaying = true;
    
    $('.swiper-play-pause').on('click', function () {
        if (isPlaying) {
            VisualSwiper.autoplay.stop(); 
            $('.swiper-play-pause .play-ic').addClass('off');
        } else {
            VisualSwiper.autoplay.start(); 
            $('.swiper-play-pause .play-ic').removeClass('off');
        }
        isPlaying = !isPlaying; 
    });


    $('.news-tab-item-link').on('click',function(e){
        e.preventDefault(); 
    
        $('.news-tab-item-link').removeClass('on');
        $(this).addClass('on');
    
        const target = $(this).attr('href');
        $('.news-tab-pane').removeClass('active');
        $(target).addClass('active');
    });

    const News01Swiper = new Swiper('.news01-content.swiper',{
        loop:true,
        slidesPerView: 5,
        
        navigation: {
            nextEl: '.news01-content .next',
            prevEl: '.news01-content .prev',
        },

        breakpoints:{
            970: {
                slidesPerView:3
            },
            580:{
                slidesPerView:1
            }
        }
       
    });

    const AdminSwiper = new Swiper('.admin-tab-swiper.swiper',{
        slidesPerView: 7,
        navigation: {
            nextEl: '.admin-tab-swiper .next',
            prevEl: '.admin-tab-swiper .prev',
        },
    });
    
    $('.admin-tab-item').on("click",function(e){
        e.preventDefault();
    
        $('.admin-tab-item').removeClass('active');
        $(this).addClass('active');
    });
    // side js
    $('.side-navi-item').on("click",function(e){

        $('.side-navi-item').removeClass('on');
        $(this).addClass('on');
    });
});















