//lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 600); // Convert time from seconds to milliseconds
});
gsap.ticker.lagSmoothing(0);

//preloader
var animation = $('.preloader-block .lottie')[0];
animation.addEventListener('complete',function(){ gsap.to('.preloader-block',{autoAlpha:0}); });

$('a').on('click', function(event) {
    event.preventDefault(); 
});
//swiper js
const swiper01 = new Swiper(".swiper01", {
    navigation: {
      nextEl: "#service-item01 .swiper-button-next",
      prevEl: "#service-item01 .swiper-button-prev",
    },
    loop: true 
});
const swiper02 = new Swiper(".swiper02", {
    navigation: {
      nextEl: "#service-item02 .swiper-button-next",
      prevEl: "#service-item02 .swiper-button-prev",
    },
    loop: true 
});
const swiper03 = new Swiper(".swiper03", {
    navigation: {
      nextEl: "#service-item03 .swiper-button-next",
      prevEl: "#service-item03 .swiper-button-prev",
    },
    loop: true 
});
const swiper04 = new Swiper(".swiper04", {
    navigation: {
      nextEl: "#service-item04 .swiper-button-next",
      prevEl: "#service-item04 .swiper-button-prev",
    },
    loop: true 
});


//header gsap
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
const currentScrollY = window.scrollY;

if (currentScrollY > lastScrollY) {
    gsap.to(header, { y: '-200%', duration: 1 });
    } else {
    gsap.to(header,{ y: '0%', duration: 1 });
}
lastScrollY = currentScrollY; 
});

headerWidthMotion =  gsap.to('.header-inner',{ width:'90%' });
ScrollTrigger.create({
    animation:headerWidthMotion,
    trigger: ".hero-section",
    start:"0% 0%", 
    end:"50% 0%", 
    scrub: 1,
    onEnter:function(){
        gsap.to('.header-inner',{
            backgroundColor:"#26282ccc"
        })
    },
    onLeaveBack:function(){
        gsap.to('.header-inner',{
            backgroundColor:"transparent"
        })
    },
});
// 스타 아이콘 애니메이션
gsap.to(".star-icon", {
    rotate: 360,  
    duration: 5,  
    ease: "none",  
    repeat: -1
});
gsap.to($(".upper-star, .lower-star-block"), {
    rotate: 360,  
    duration: 5,  
    ease: "none",  
    repeat: -1, 
});
gsap.to($(".footer-top-icon-star"), {
    rotate: 360,  
    duration: 5,  
    ease: "none",  
    repeat: -1,  
});
gsap.to($(".slider-item:nth-child(4) .single-star-icon:nth-child(3)"), {
    rotate: 360,  
    duration: 5,  
    ease: "none",  
    repeat: -1,  
});




//hero gsap
gsap.set('.hero-section',{ padding:0 })
gsap.set('.hero-wrapper',{ height:"100vh", borderRadius:"0px" })
gsap.set('.hero-content-bot',{ scale:1.5, x:300, y:-150 })
gsap.set($('.hero-content-top .first-text h1, .hero-content-top .second-text h1'),{ y:100 })

const herocontent = gsap.timeline();
herocontent.to('.hero-content-bot',{ x:200, duration:2 })
herocontent.to('.hero-content-bot',{ y:50, duration:1 },"<")
herocontent.to('.hero-content-bot',{ scale:1, x:0, y:0 })
herocontent.to($('.hero-content-top .first-text h1, .hero-content-top .second-text h1'),{ y:0 })
herocontent.to('.hero-section',{ padding:"10px" })
herocontent.to('.hero-wrapper',{ height:"95vh", borderRadius:"80px" })


const herotext = gsap.timeline({repeat:-1 });
herotext.to('.subtitle-text.one p', {
    width: function(){
        return $('.subtitle-text.one span').outerWidth();
    },       
    duration: 1.5,   
    ease: "power2.inOut"
})
herotext.to('.subtitle-text.one p', { width: 0, duration: 1, delay:1 })
herotext.to('.subtitle-text.two p', {
    width: function(){
        return $('.subtitle-text.two span').outerWidth();
    },      
    duration: 1.5, 
    ease: "power2.inOut",
})
herotext.to('.subtitle-text.two p', { width: 0, duration: 1, delay:1 })
herotext.to('.subtitle-text.three p', {
    width: function(){
        return $('.subtitle-text.three span').outerWidth();
    },       
    duration: 1.5,    
    ease: "power2.inOut",
});
herotext.to('.subtitle-text.three p', { width: 0, duration: 1, delay:1 });





//가로 스크롤 gsap

const service = gsap.timeline({
    scrollTrigger:{
        trigger:'.service-section',
        start:"0% 100%",
        end:"100% 100%",
    },
})
service.from('.service-title-block',{
    yPercent:20,
    opacity:0
})

gsap.to(".slider-item:nth-child(2) .single-star-icon.v1",{ opacity:1 })
gsap.set('.slider-item:nth-child(n+2)',{ opacity:0, scale:0 })
const sliderintro = gsap.timeline({
    scrollTrigger: {
        trigger: $('.slider-container .intro'), 
        start: "0% 80%",
        end:"100% 100%",
        scrub:1, 
    }
});
sliderintro.from('.slider-container .intro .content',{
    scale : 0.5,
})


const slider = gsap.timeline({
    scrollTrigger: {
        trigger: $('.slider-container'), 
        start: "0% 0%",
        end:"100% 100%",
        scrub:1, 
        onEnter:function(){
            gsap.to('.slider-container .intro',{ autoAlpha:0})
            gsap.to('.slider-container .slider-content-block',{ autoAlpha:1})
        },
        onLeaveBack:function(){
            gsap.to('.slider-container .intro',{ autoAlpha:1})
            gsap.to('.slider-container .slider-content-block',{ autoAlpha:0})
        }
    }
});
slider.to($('.slider-item')[0],{ scale:1, opacity:1,
    onStart:function(){
        console.log($('.slider-item')[0])
        $('.slider-item:nth-child(1)').addClass('active');
    }
},'<')
slider.to($('.slider-item')[0],{ scale:0, opacity:0 })
slider.to($('.slider-item')[1],{ scale:1, opacity:1, },"<")
slider.to($('.slider-item')[1],{ scale:1, opacity:1, })
slider.to($('.slider-item')[1],{ scale:0, opacity:0 })
slider.to($('.slider-item')[2],{ scale:1, opacity:1 },"<")
slider.to($('.slider-item')[2],{ scale:1, opacity:1 })
slider.to($('.slider-item')[2],{ scale:0, opacity:0 })
slider.to($('.slider-item')[3],{ scale:1, opacity:1 },"<")
slider.to($('.slider-item')[3],{ scale:1, opacity:1 })
slider.to($('.slider-item')[3],{ scale:0, opacity:0 })
slider.to($('.slider-item')[4],{ scale:1, opacity:1 },"<")
slider.to($('.slider-item')[4],{ scale:1, opacity:1 })
slider.to($('.slider-item')[4],{ scale:0, opacity:0 })
slider.to($('.slider-item')[5],{ scale:1, opacity:1 },"<");

gsap.to('.slider-collaps-block',{
    scrollTrigger: {
        trigger: $('.slider-collaps-block-wrap'), 
        start: "0% 0%",
        end:"100% 100%",
        scrub:1, 
    },
    scale:0.3,
});

gsap.set('.slider-item:nth-child(5) .slider-star-grid-block',{
    gridTemplateColumns:"repeat(1,1fr)",
    gridTemplateRows: "repeat(1,auto)"
});
const slider05 = gsap.timeline();

slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(1)',{
    x:130
})
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(2)',{
    y:-130
})
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(3)',{
    y:-130,
    x:130
},"<")
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(4)',{
    y:-260,
    x:130
})
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(5)',{
    y:-130,
    x:130
},"<")
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(6)',{
    y:-130,
    x:130
},"<")
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(7)',{
    y:-130,
    x:130
},"<")
slider05.to('.slider-item:nth-child(5) .single-star-icon:nth-child(8)',{
    y:-130,
    x:130
},"<")




//stick gsap
const stick = gsap.timeline({
    scrollTrigger: {
        trigger: $('.stick-single-block'), 
        start: "top 80%", 
        once: true, 
    }
});

stick.from($('.stick-single-block')[0].querySelector('.stick-black-block'), { xPercent: -100, duration:1})
stick.from($('.stick-single-block')[0].querySelector('.stick-green-block'), { xPercent: -100})
stick.to($('.stick-single-block')[0].querySelector('.stick-percent-block'),{ opacity:1, })

stick.from($('.stick-single-block')[1].querySelector('.stick-black-block'), { xPercent: -100, duration:1},"<")
stick.from($('.stick-single-block')[1].querySelector('.stick-green-block'), { xPercent: -100})
stick.to($('.stick-single-block')[1].querySelector('.stick-percent-block'),{ opacity:1, })

stick.from($('.stick-single-block')[2].querySelector('.stick-black-block'), { xPercent: -100, duration:1},"<")
stick.from($('.stick-single-block')[2].querySelector('.stick-green-block'), { xPercent: -100})
stick.to($('.stick-single-block')[2].querySelector('.stick-percent-block'),{ opacity:1, })

stick.from($('.stick-single-block')[3].querySelector('.stick-black-block'), { xPercent: -100, duration:1},"<")
stick.from($('.stick-single-block')[3].querySelector('.stick-green-block'), { xPercent: -100})
stick.to($('.stick-single-block')[3].querySelector('.stick-percent-block'),{ opacity:1, })


//email alert
gsap.to('.email-alert-block',{
    scrollTrigger:{
        trigger:'.hero03-section',
        start:"0% 0%",
        once:true,
        onEnter: function() {
            gsap.set('.email-alert-block', { autoAlpha: 1, }); 
        }
    },
});
$('.form-close-btn').on('click', function() {
    gsap.set('.email-alert-block', { autoAlpha: 0,});
});

const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: $('.hero03-title-block'), 
        start: "top 80%", 
        once: true, 
    }
});
t2.from('.hero03-title-text',{ yPercent:20, duration:1, autoAlpha:0 })


const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: $('.hero03-content-list'), 
        start: "top 80%", 
        once: true, 
    }
});
t3.from('.hero03-item-title strong',{ yPercent:100, duration:1, })
t3.from('.hero03-item-info p',{ yPercent:100, duration:1, })



const team = gsap.timeline({
    scrollTrigger: {
        trigger: $(".team-section"),
        start:"30% 80%",
        once: true,
    }
});
team.from('.service-title-block-head.team-v',{ yPercent:100, duration:1 })
team.from('.service-title-block-main.team-v',{ yPercent:100, duration:1 },"<")



const headline = gsap.timeline({
    scrollTrigger: {
        trigger: $('.headline-section'), 
        start: "top 80%", 
        once: true, 
    }
});
headline.from('.headline-star-icon',{ y:100, duration:1 })
headline.to('.headline-star-icon',{ x:600, scale:3, duration:2 })




const Reviewswiper = new Swiper('.review-inner.swiper', {
    loop:true,
    slidesPerView: 2.5, 
    spaceBetween:30,

});
const Postsswiper = new Swiper('.posts-content-block.swiper', {
    slidesPerView: 'auto',
    spaceBetween:30,

});
// const Skillswiper = new Swiper('.skill-section .swiper', {
//     slidesPerView: 2,

// });

//화살표 애니메이션
const postsItem = $(".posts-item");

postsItem.each(function (index, item) {
    const arrow = $(item).find('.posts-arrow-icon')[0];
    const arrow01 = $(item).find('.posts-arrow-icon')[1];
 
    $(item).on('mouseenter', () => {
        gsap.to(arrow, { x: 50, y: -50, duration: 1, });
        gsap.to(arrow01, { x: 25, y: -25, duration: 1, });
    });
    $(item).on('mouseleave', () => {
        gsap.to(arrow, { x: 0, y: 0, duration: 1, });
        gsap.to(arrow01, { x: 0, y: 0, duration: 1, });
    });
});

//반응형
let mm = gsap.matchMedia();
//pc

mm.add("(min-width: 1010px)", () => {

   

    //card gsap
    gsap.set('.card-item',{y:1000});
    gsap.set($('.card-item .card-back'),{ transform: "rotateY(180deg)"});

    const card = gsap.timeline({
        scrollTrigger: {
            trigger: ".problem-wrapper", 
            start: "0% 80%", 
            end: "100% 100%", 
            scrub: 1,
            onUpdate:function(self){
                if (self.progress >= 0.6) {
                    $('.problem-inner').addClass('up')
                }else{
                    $('.problem-inner').removeClass('up')
                }
            }
        },
    })

    card.to($(".card-item")[0], { y: "0%"})
    card.to($(".card-item")[1], { y: "10%"},)
    card.to($(".card-item")[2], { y: "20%"},)
    card.to($(".card-item")[3], { y: "30%"},)
    card.to($(".card-item")[4], { y: "40%"},)
    card.to($('.card-overlay'),{ xPercent: -100, autoAlpha:0 })
    card.to($('.problem-video-wrap'),{ opacity:1 },"<")
    card.to($(".card-item")[0], { x:500, y:-100, scale:1 },"<")
    card.to($(".card-item")[1], { x:500, y:400, scale:1 },"<")
    card.to($(".card-item")[2], { x:0, y:-150, scale:1 },"<")
    card.to($(".card-item")[3], { x:-500, y:400, scale:1 },"<")
    card.to($(".card-item")[4], { x:-500, y:-100, scale:1 },"<")
    card.to('.problem-title-block',{ opacity:1 },"<")
    card.to('.card-item .card-front',{ rotateY:'180deg' })
    card.to('.card-item .card-back',{ rotateY:'0deg' },"<")
    card.to('.problem-section',{ backgroundColor:"var(--bg-color)" });



    gsap.to(".service-section .service-list", {
        scrollTrigger: {
            trigger: ".service-section",
            start: "0% 100%",
            end:"100% 100%",
            scrub: 0,
            invalidateOnRefresh:true,
        },
        xPercent:-100,
    });


    $('.first-text, .second-text').removeClass('mo-v');
    $('.hero-wrapper .star-icon').removeClass('mo-v');
    $('.header-nav').removeClass('mo-v');
    $('.service-title').removeClass('mo-v');
});

//tablet
mm.add("(max-width: 1000px)", () => {
    $('.first-text, .second-text').addClass('mo-v');
    $('.hero-wrapper .star-icon').addClass('mo-v');
    $('.header-nav').addClass('mo-v');
    $('.service-title').addClass('mo-v');
});


mm.add("(max-width: 600px)", () => {
    $('.header .header-inner').addClass('mo-v');

    //card gsap
    gsap.set('.card-item',{y:1000});
    gsap.set($('.card-item .card-back'),{ transform: "rotateY(180deg)"});
    const card = gsap.timeline({
        scrollTrigger: {
            trigger: ".problem-wrapper", 
            start: "0% 80%", 
            end: "100% 100%", 
            scrub: 1,
            onUpdate:function(self){
                if (self.progress >= 0.6) {
                    $('.problem-inner').addClass('up')
                }else{
                    $('.problem-inner').removeClass('up')
                }
            }
        },
    })

    card.to($(".card-item")[0], { y: "0%"})
    card.to($(".card-item")[1], { y: "10%"},)
    card.to($(".card-item")[2], { y: "20%"},)
    card.to($(".card-item")[3], { y: "30%"},)
    card.to($(".card-item")[4], { y: "40%"},)
    card.to($('.card-overlay'),{ xPercent: -100, autoAlpha:0 })
    card.to($('.problem-video-wrap'),{ opacity:1 },"<")
    card.to($(".card-item")[0], { x:100, y:400, scale:1 },"<")
    card.to($(".card-item")[1], { x:-100, y:400, scale:1 },"<")
    card.to($(".card-item")[2], { x:0, y:-150, scale:1 },"<")
    card.to($(".card-item")[3], { x:150, y:-50, scale:1 },"<")
    card.to($(".card-item")[4], { x:-150, y:-50, scale:1 },"<")
    card.to('.problem-title-block',{ opacity:1 },"<")
    card.to('.card-item .card-front',{ rotateY:'180deg' })
    card.to('.card-item .card-back',{ rotateY:'0deg' },"<")
    card.to('.problem-section',{ backgroundColor:"var(--bg-color)" });

    

    gsap.to(".service-section .service-list", {
        scrollTrigger: {
            trigger: ".service-section",
            start: "0% 100%",
            end:"100% 100%",
            scrub: 0,
            invalidateOnRefresh:true,
        },
    });

    const Reviewswiper = new Swiper('.review-inner.swiper', {
        loop:true,
        slidesPerView: 1, 
        spaceBetween:0,
    
    });

});

