history.scrollRestoration = "manual"
//lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 700); // Convert time from seconds to milliseconds
});
gsap.ticker.lagSmoothing(0);

// 마우스 커스텀 커서
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

//text분리 함수
const splitText = new SplitType('[data-text="split"]', { types: 'chars' });
$('[data-text="split"]').find('.char').wrapInner('<div class="char-wrap">')
$('[data-text="split"]').find('.char-wrap').each(function (index) {
    // 홀수 인덱스에는 -100%, 짝수 인덱스에는 100%를 적용
    const transformValue = index % 2 === 0 ? '100%' : '-100%';
    $(this).css('transform', `translateX(${transformValue})`);
});

// lenis scrollTo
$('.header-quick-item:nth-child(3)').click(function(e){
    e.preventDefault();
    gsap.to(window,{
        duration:1,
        scrollTo: { y: ".projects-sec"}
    });
});
$('.header-quick-item:last-child').click(function(e){
    e.preventDefault();
    gsap.to(window,{
        duration:1,
        scrollTo: { y: ".contact-address-block"}
    });
});


// header gsap
let lastScrollY = window.scrollY;
const header = $('.header');
window.addEventListener('scroll',function(){
    const currentScrollY = window.scrollY;
    if(currentScrollY > lastScrollY){
        gsap.to(header, {y:'-100%', duration: 1});
    } else {
        gsap.to(header, {y:'0%', duration: 1});
    }
    lastScrollY = currentScrollY; 
});
$('.header-quick-item').on('click',function(){
    $('.header-quick-item').removeClass("on");
    $(this).addClass('on');
});



// about gsap
gsap.set('.about-left-block',{autoAlpha:0});
gsap.set('.about-right-block',{autoAlpha:0});
const about = gsap.to('.about-left-block',{
    scrollTrigger : {
        trigger :'.about-sec',
        start:"0% 50%",
        end: "100% 100%",
        scrub:1,
    },
    autoAlpha:1,
    y:50,
    duration:1
});
const about02 = gsap.to('.about-right-block',{
    scrollTrigger : {
        trigger :'.about-sec',
        start:"70% 70%",
        end: "100% 100%",
        scrub:1,
    },
    autoAlpha:1,
    y:20,
    duration:1
});

// mainprojects gsap
const projects = gsap.to('.projects-list',{
    scrollTrigger: {
        trigger: '.projects-sec',
        start:"0% 0%",
        end: "100% 100%",
        scrub: 1,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x:function(){ return (window.innerWidth - 200); }
});



gsap.set('.contact-tit',{autoAlpha:0});
const contact = gsap.timeline({
    scrollTrigger: {
        trigger :'.contact-intro-block',
        start: "40% 50%",
        end: "40% 50%",
        scrub:1,
        // markers:true
    }
});
contact.to('.contact-tit',{
    autoAlpha:1,
    duration:0.5
});

gsap.set('.footer-marquee-block',{y:100});
const marquee = gsap.to('.footer-marquee-block',{
    scrollTrigger:{
        trigger:'.contact-address-block',
        start:"0% 0%",
        end:"100% 100%",
        scrub:1,
        onEnter:function(){
            gsap.to('.footer-marquee-block',{
                y:0,
            });
        },
        onLeaveBack:function(){
            gsap.to('.footer-marquee-block',{y:100});
        }
    }
});


let mm = gsap.matchMedia();

//pc
mm.add("(min-width:769px)",function(){
    ScrollTrigger.create({
        trigger:'.sidepj-sec',
        start:"0% 30%",
        end:"100% 100%",
        toggleClass: {
            targets:"body",
            className:"begie"
        },
    });
    // intro gsap
    gsap.set('.intro-tx .char-wrap',{autoAlpha:0});
    const intro = gsap.timeline();
    intro.to('.intro-tx .char-wrap',{ 
        x:0,
        duration:0.8,
        autoAlpha:1,
        delay:1
    })
    intro.from('.header',{autoAlpha:0});
    intro.from('.intro-tx',{
        y:-300,
        duration:1
    })
    const introtx = gsap.to('.intro-tx .char-wrap',{
        scrollTrigger : {
            trigger :'.intro-sec',
            start:"50% 50%",
            end: "100% 50%",
            scrub:1,
        },
        y:-100
    });
    // sidepj gsap
    const sidepj = gsap.timeline({
        scrollTrigger: {
            trigger:'.sidepj-sec',
            start:"0% 0%",
            end:"100% 100%",
            scrub:1,
            onEnter: function(){
                gsap.to('.bottom-overlay',{autoAlpha:0});
                $('.custom-cursor').addClass('white');
            },
            onLeaveBack: function(){
                gsap.to('.bottom-overlay',{autoAlpha:1});
            }
        },
    });
    sidepj.from('.sidepj-content-list .sidepj-item:first-child',{y:150});
    sidepj.from('.sidepj-content-list .sidepj-item:nth-child(2)',{y:250});
    sidepj.from('.sidepj-content-list .sidepj-item:last-child',{y:300});
    
    gsap.set('.sidepj-content-list .sidepj-item:first-child .sidepj-subtit',{autoAlpha:0});
    const sidepj02 = gsap.timeline({
        scrollTrigger:{
            trigger: '.sidepj-item',
            start: "0% 50%",
            end:"0% 50%",
            onEnter:function(){
                gsap.to('.sidepj-content-list .sidepj-item:first-child .sidepj-subtit',{
                    autoAlpha:1,
                    y:10
                });
            },
            onLeaveBack: function(){
                gsap.to('.sidepj-content-list .sidepj-item:first-child .sidepj-subtit',{
                    autoAlpha:0,
                    y:0
                })
            }
        },
    });
});
//mobie
mm.add("(max-width:768px)",function(){
    
    // intro gsap
    gsap.set('.intro-tx .char-wrap',{autoAlpha:0});
    const intro = gsap.timeline();
    intro.to('.intro-tx .char-wrap',{ 
        x:0,
        duration:0.8,
        autoAlpha:1,
        delay:1
    })
    intro.from('.header',{autoAlpha:0});
    intro.from('.intro-tx',{
        y:-400,
        duration:1
    });
    const introtx = gsap.to('.intro-tx .char-wrap',{
        scrollTrigger : {
            trigger :'.intro-sec',
            start:"50% 50%",
            end: "100% 50%",
            scrub:1,
        },
        y:-100
    });

    // mainprojects gsap
    const projects = gsap.to('.projects-list',{
        scrollTrigger: {
            trigger: '.projects-sec',
            start:"0% 0%",
            end: "100% 100%",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        xPercent: -100,
        x:function(){ return (window.innerWidth - 50); }
    });

   
});