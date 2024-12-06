
//lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 900); 
});
gsap.ticker.lagSmoothing(0);

// header js
$('.header__list .header__item:last-child').on('click', function(){
    $('.header__lang-dropdown').toggleClass('active');
});
//intro gsap
const intro = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-sec",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        onLeave:function(){ $('.intro__ic-scrolldown').addClass('hide'); },
        onEnterBack:function(){ $('.intro__ic-scrolldown').removeClass('hide'); },
    },
});
intro.to('.intro-sec .dimmed', { autoAlpha: 1, })
intro.to($('.intro-text-item')[0], { opacity: 1 },"<")
intro.to($('.intro-text-item')[0], { 
    opacity: 0,
    onStart: function(){ $("#header").addClass('show'); },
    onReverseComplete:function(){ $("#header").removeClass('show'); }
});

intro.to($('.intro-text-item')[1],{opacity:1})
intro.to($('.intro-text-item')[1],{opacity:0})
intro.to($('.intro-text-item')[2],{opacity:1})
intro.to($('.intro-text-item')[2],{opacity:0})
intro.to($('.intro-text-item')[3],{opacity:1});


//showcase gsap
const showcase = gsap.timeline({
    scrollTrigger: {
        trigger: ".showcase-sec",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
    },
});
showcase.to('.showcase__intro--inner', { opacity: 1, })
showcase.to('.showcase-sec .dimmed', { autoAlpha: 1, },"<")
showcase.to('.sc-item01', { xPercent: 100 })
showcase.to('.sc-item03', { xPercent: -100 }, "<")
showcase.to('.showcase-sec .dimmed', { autoAlpha: 0, },"<")
showcase.to('.showcase__intro--inner', { opacity: 0, })
showcase.to($('.showcase-sec .showcase__img .img')[2], { height: 0, })
showcase.to($('.showcase-sec .showcase__img .img')[1], { height: 0, })
showcase.to('.dimmed', { autoAlpha: 1})
showcase.to('.showcase__main', { opacity: 1, },"<")



ScrollTrigger.create({
    trigger: ".challenge-sec",
    start:"0% 5%",
    endTrigger:".possibility-sec",
    end:"0% 50%",
    toggleClass: {
        targets:"#header",
        className:"dark"
    },
})

//prove gsap
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".prove-sec01",
        start: "0% 70%",
        end: "100% 80%",
        scrub: 0,
    }
});
tl4.from('.prove-sec01 .prove-text',{x:0})
tl4.from('.prove-sec01 .pr-block',{'--x':1},"<")
ScrollTrigger.create({
    trigger: `[data-dark="true"]`,
    start:"0% 50%",
    end:"100% 50%",
    toggleClass: {
        targets:"body",
        className:"dark"
    },
});



// feature gsap
const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-sec",
        start: "0% 95%",
        end: "100% 80%",
        scrub: true,
    }
});
tl5.to('.feature__item', {
    transform: "translateX(0%)",
});

const tl5_1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-sec",
        start: "0% 40%",
        end: "100% 30%",
        scrub: 0,
        onEnter: () => { document.querySelector('.feature__content').classList.add('opacity'); },
        onLeaveBack: () => { document.querySelector('.feature__content').classList.remove('opacity'); }
    }
});
tl5_1.to('.feature__title', { opacity: 1, });

const titleScroll = gsap.timeline({
    scrollTrigger: {
        trigger: "#serviceArea1", 
        start: "0% 0%",
        end:"100% 100%",
        scrub: 1,  
        invalidateOnRefresh:true,
    },
});
titleScroll.to("#serviceArea1 .sticky-content", {
    x: function(){
        return -(document.querySelector("#serviceArea1 .ser__head").scrollWidth);
    },
});
titleScroll.to(".ser__body .card__item",1, {
    xPercent: (index) => -100 * index,  
    x:(index) => -40 * index,
});
titleScroll.to(".icon-card-img",0.5, { autoAlpha:0 },'b-=1');
titleScroll.to(".icon-card-img-active",0.5, { autoAlpha: 1 },'b-=0.7');

gsap.set('#serviceArea2 .service__main--title',{autoAlpha:0});
ScrollTrigger.create({
    trigger: "#serviceArea2",
    start:"0% 0%",
    end:"100% 50%",
    onEnter:function(){
        gsap.set('#serviceArea1 .card__list',{autoAlpha:0})
        gsap.set('#serviceArea2 .service__main--title',{autoAlpha:1})
    },
    onLeaveBack:function(){
        gsap.set('#serviceArea1 .card__list',{autoAlpha:1})
        gsap.set('#serviceArea2 .service__main--title',{autoAlpha:0})
    }
});

const titleScroll03 = gsap.timeline({
    scrollTrigger: {
        trigger: ".service__slide03", 
        start: "0% 0%",
        end:"100% 100%",
        scrub: 0,  
    }
});

titleScroll03.to(".slide03__item", { xPercent: (index) => -105 * index, });
titleScroll03.to(".service__slide03-wrap .right", { opacity:1, });
titleScroll03.to('slide03__item',{autoAlpha:0});

gsap.set('#serviceArea3 .first_card',{autoAlpha:0});
ScrollTrigger.create({
    trigger: "#serviceArea3",
    start:"0% 0%",
    end:"100% 50%",
    onEnter:function(){
        gsap.set('#serviceArea2 .service__main--title',{autoAlpha:0})
        gsap.set('#serviceArea3 .first_card',{autoAlpha:1})
    },
    onLeaveBack:function(){
        gsap.set('#serviceArea2 .service__main--title',{autoAlpha:1})
        gsap.set('#serviceArea3 .first_card',{autoAlpha:0})
    }
});


ScrollTrigger.create({
    trigger: ".challenge-sec.v3",
    start:"0% 5%",
    endTrigger:".footer",
    end:"0% 0%",
    toggleClass: {
        targets:"#header",
        className:"dark"
    },
})

//prove gsap
const tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".prove-sec02",
        start: "0% 70%",
        end: "100% 80%",
        scrub: 0,
    }
});
tl6.from('.prove-sec02 .prove-text',{x:0})
tl6.from('.prove-sec02 .pr-block',{'--x':1},"<")


//slide01 gsap
gsap.to(".slide01 .slide01__inner", {
    scrollTrigger: {
        trigger: ".slide01",
        start: "0% 0%",
        end:"100% 100%",
        scrub: true,
        invalidateOnRefresh:true,
        toggleClass:{
            targets:".slide01 .slide01__down",
            className: "show"
        },
    },
    xPercent:-100,
    x: function(){
        return (window.innerWidth - 160);
    }
});

const slide01 = gsap.timeline({
    scrollTrigger:{
        trigger:'.slide01',
        start:'0% 0%',
        end:"100% 100%",
        scrub:1,
    },
});
slide01.set('.down__title span:nth-child(2)',{opacity:0});
slide01.to('.down__title span:nth-child(1)',{opacity:0});
slide01.to('.down__title span:nth-child(2)',{opacity:1});



const creater = gsap.timeline({
    scrollTrigger: {
        trigger: ".creater-sec",
        start: "0% 0%",
        end: "50% 50%",
        scrub: 0,
    }
});
creater.to('.creater__intro', { opacity: 1, })

gsap.to(".creater__slide-inner", {

    scrollTrigger: {
        trigger: ".creater__slide",
        start: "0% 0%",
        end:"100% 100%",
        scrub: 0,
        invalidateOnRefresh:true,
    },
    xPercent:-100,
    x:function(){
        return (window.innerWidth - 160 );
    },
});

gsap.to(".banner__inner", {
    xPercent: -100,
    duration: 30,
    ease: "linear",
    repeat: -1,
    modifiers: {
        x: gsap.utils.wrap(-document.querySelector(".banner__inner").scrollWidth / 1, 0) 
    }
});

const footbanner = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,
    }
});

footbanner.to('.footer__banner-sec', { y: 0, });


let isAnimated = false;
gsap.set('.header__sidemenu',{autoAlpha:0});
$('.header__hamburger').on('click',function(){
    if (!isAnimated){
        gsap.to('.header__hamburger--item',{backgroundColor:"#000"})
        gsap.to('.header__hamburger--item.top',{
            duration:0.1,
            autoAlpha:0
        });
        gsap.to('.header__hamburger--item.mid',{
            x:1,
            y:5,
            duration:0.1,
            rotation:45
        });
        gsap.to('.header__hamburger--item.bot',{
            duration:0.1,
            rotation:-45
        });
        gsap.to('.header__sidemenu',{ autoAlpha:1 });
        isAnimated = true;
    } else{
        gsap.to('.header__hamburger--item.top',{ autoAlpha:1 });
        gsap.to('.header__hamburger--item.mid',{
            x:0,
            y:0,
            duration:0.1,
            rotation:0
        });
        gsap.to('.header__hamburger--item.bot',{
            duration:0.1,
            rotation:0
        });
        gsap.to('.header__sidemenu',{ autoAlpha:0 });
        gsap.to('.header__hamburger--item',{backgroundColor:"#fff"})

        isAnimated = false;
    }
});



const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", function(){
    //possibility gsap
    gsap.to(".possibility-sec .slider__inner", {
        scrollTrigger: {
            trigger: ".possibility-sec",
            start: "0% 0%",
            end:"100% 100%",
            scrub: true,
            invalidateOnRefresh:true,
        },
        xPercent:-100,
        x: function(){
            return window.innerWidth - 160;
        }
    });
})




//mobile
mm.add("(max-width: 768px)", () => {
    const mobileScroll03 = gsap.timeline({
        scrollTrigger: {
            trigger: ".service__slide03",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
        },
    });
  
    mobileScroll03.to(".service__slide03-wrap .right", { opacity:1, });


    //possibility gsap
    gsap.to(".possibility-sec .slider__inner", {
        scrollTrigger: {
            trigger: ".possibility-sec",
            start: "0% 0%",
            end:"100% 100%",
            scrub: true,
            invalidateOnRefresh:true,
        },
        xPercent:-100,
        x: function(){
            return window.innerWidth - 220;
        }
    });

    const titleScroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#serviceArea1", 
            start: "0% 0%",
            end:"100% 100%",
            scrub: 1,  
            invalidateOnRefresh:true,
        },
    });
    titleScroll.to("#serviceArea1 .sticky-content", {
        x: function(){
            return -(document.querySelector("#serviceArea1 .ser__head").scrollWidth );
        },
    });
    titleScroll.to(".ser__body .card__item",1, {
        xPercent: (index) => -100 * index,  
        x:(index) => -40 * index,
    });
    titleScroll.to(".icon-card-img",0.5, { autoAlpha:0 },'b-=1');
    titleScroll.to(".icon-card-img-active",0.5, { autoAlpha: 1 },'b-=0.7');
});