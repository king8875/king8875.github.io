history.scrollRestoration = "manual"

// //lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 900);
});
gsap.ticker.lagSmoothing(0);


// Lottie 애니메이션 로드 및 설정
gsap.set('.header', { autoAlpha: 0 });
gsap.set('.footer', { autoAlpha: 0 });
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/assets/video/lottie.json',
});
animation.addEventListener('complete', function () {
    gsap.to('#lottie-container', { autoAlpha: 0, duration: 1 });
    gsap.to('.header', { autoAlpha: 1 });
    gsap.to('.footer', { autoAlpha: 1 });
    gsap.from('.hero-laser-block #letter-l', { autoAlpha: 0, x: -100, duration: 1 });
    gsap.from('.hero-laser-block #letter-a', { autoAlpha: 0, x: -100, duration: 1 });
    gsap.from('.hero-laser-block #letter-s', { autoAlpha: 0, x: -100, duration: 1 });
    gsap.from('.hero-laser-block #letter-e', { autoAlpha: 0, x: -100, duration: 1 });
    gsap.from('.hero-laser-block #letter-r', { autoAlpha: 0, x: -100, duration: 1 });
});

$('.header .header-content .header-util-item-link').click(function (e) {
    e.preventDefault();
    gsap.to(window, {
        duration: 0.7,
        scrollTo: { x: "#footer" },
    });
});



//text분리 함수
const splitTextH2 = new SplitType('[data-text="split"]', { types: 'chars' });
$('[data-text="split"]').find('.char').wrapInner('<div class="char-wrap">')
$('[data-text="split"]').find('.char-wrap').each(function (index) {
    // 홀수 인덱스에는 -100%, 짝수 인덱스에는 100%를 적용
    const transformValue = index % 2 === 0 ? '100%' : '-100%';
    $(this).css('transform', `translateX(${transformValue})`);
});

// 배경 이미지 비디오 gsap
gsap.set('.video-container .first_img', { autoAlpha: 0 });
gsap.set('.video-container .second_img', { autoAlpha: 0 });
gsap.set('.video-container .third_img', { autoAlpha: 0 });
gsap.to('.video-container video', {
    scrollTrigger: {
        trigger: 'body',
        start: "0% 0%",
        end: "10% 100%",
        scrub: 1,
    },
    opacity: 0,
});


//footer gsap
gsap.to('.footer-progress-curr', {
    scrollTrigger: {
        trigger: '.main-wrapper',
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
    width: "100vw",
});
gsap.to('.footer-progress-curr-back', {
    scrollTrigger: {
        trigger: '.main-wrapper',
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
    width: "100vw",
});

// header gsap
document.querySelectorAll('.header-util-item-link').forEach(element => {
    wrapEachCharacter(element);
    element.addEventListener('mouseenter', () => {
        gsap.fromTo(
            element.querySelectorAll('span'),
            { opacity: 1, y: 0, },
            {
                opacity: 0,
                y: 0,
                stagger: 0.05,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(element.querySelectorAll('span'), {
                        opacity: 1,
                        y: 0,
                        stagger: 0.05,
                    });
                }
            }
        );
    });
    element.addEventListener('mouseleave', () => {
        gsap.to(element.querySelectorAll('span'), {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.3,
        });
    });
});


const LoginsplitText = new SplitType('.header-login-tx', { types: 'chars' });

$('.header-login-link').on('mouseenter', function () {
    gsap.to('.header-login-ic-block .header-login-ic:first-child', { x: 10, y: -10 });
    gsap.to('.header-login-ic-block .header-login-ic:last-child', { x: 0, y: 0 });

}).on('mouseleave', function () {
    gsap.to('.header-login-ic-block .header-login-ic:first-child', { x: 0, y: 0 });
    gsap.to('.header-login-ic-block .header-login-ic:last-child', { x: -10, y: 10 });

});




// 텍스트 분리 함수
function wrapEachCharacter(element) {
    const text = element.textContent;
    element.innerHTML = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        element.appendChild(span);
    });
};
$('.header-util-item-link').each(function () {
    $(this).on('mouseover', function () {
        gsap.to($(this).siblings('.tx-bottom-line'), { x: 0 });
    });
    $(this).on('mouseleave', function () {
        gsap.to($(this).siblings('.tx-bottom-line'), { x: -100 });
    });
});



let mm = gsap.matchMedia();
//pc 버전
mm.add("(min-width: 1001px)", function () {
    if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', true); // 새로고침 확인용 플래그 설정
        location.reload(); // 새로고침
    }
    // 첫번째 가로 스크롤 gsap
    const hori1 = gsap.to('.scroll-content', {
        scrollTrigger: {
            trigger: '.main-inner',
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
            invalidateOnRefresh: true,

        },
        ease: "none",
        xPercent: -100,
        x: function () {
            return window.innerWidth;
        }
    });

    // 첫번째 section gsap
    const hero = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-hero',
            containerAnimation: hori1,
            start: "0% 0%",
            end: '100% 50%',
            scrub: 0,
        },
    });
    hero.to('.hero-laser-block #letter-l', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-a', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-s', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-e', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-r', { autoAlpha: 0, x: -100, duration: 1 });


    //2번째 section gsap
    const breek = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-breek',
            containerAnimation: hori1,
            start: "0% 0%",
            end: '100% 100%',
            scrub: 0,
            invalidateOnRefresh: true,
        },
    });
    breek.to('.breek-inner', {
        ease: "none",
        x: function () {
            return $('.sec-breek').outerWidth() - $('.breek-inner').outerWidth()
        }
    });
    breek.to('.breek-bot-block h2', {
        xPercent: -100,
        x: function () {
            return window.innerWidth
        }
    }, "<");

    const breekText = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-breek',
            start: "0% 70%",
            end: '20% 70%',
            containerAnimation: hori1,
            toggleActions: "play none none reverse",
            onLeave: function () {
                gsap.to('.breek-sticky-block p .char-wrap', { x: 0 });
            },

            // onEnter
            // onLeave 
            // onEnterBack
            // onLeaveBack
        },
    });
    breekText.to('.breek-sticky-block h2 .char-wrap', { x: 0 });



    // waar gsap
    const waar = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-waar',
            containerAnimation: hori1,
            start: "0% 70%",
            end: '20% 70%',
            toggleActions: "play none none reverse",
        },
    });
    waar.to('.waar-sticky-block h2 .char-wrap', { x: 0 });
    waar.to('.waar-bot-list .waar-bot-item:nth-child(1) .waar-tx-small h3 .char-wrap', { x: 0 }, "<");
    waar.to('.waar-bot-list .waar-bot-item:nth-child(1) .waar-tx-small p .char-wrap', { x: 0 }, "<");
    waar.from('.waar-bot-list .waar-bot-item:nth-child(1) .waar-tx-big', { x: 100, autoAlpha: 0 });
    const waar2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-waar',
            containerAnimation: hori1,
            start: "50% 70%",
            end: '100% 70%',
            toggleActions: "play none none reverse",
        },
    });
    waar2.to('.waar-sticky-block p .char-wrap', { x: 0 });
    waar2.to('.waar-bot-list .waar-bot-item:nth-child(2) .waar-tx-small h3 .char-wrap', { x: 0 }, "<");
    waar2.to('.waar-bot-list .waar-bot-item:nth-child(2) .waar-tx-small p .char-wrap', { x: 0 }, "<");
    waar2.from('.waar-bot-list .waar-bot-item:nth-child(2) .waar-tx-big', { x: 100, autoAlpha: 0 });



    // card gsap
    const card = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-card',
            containerAnimation: hori1,
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
        },
    });
    card.to('.sec-card .box', {
        x: () => gsap.utils.random(-10, 10),
        scaleX: 0,
        stagger: 0.1,
        roundProps: 'x, y'
    });
    card.to('.scroll-content', {
        backgroundColor: "#fff",
        duration: 1
    });

    const space01 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space',
            containerAnimation: hori1,
            start: "0% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
        },
    });
    space01.to('.space-inner h2 .char-wrap', { x: 0 });
    space01.to('.space-inner p .char-wrap', { x: 0 });

    // circle gsap
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(1)', { rotate: "315deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(2)', { rotate: "0deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(3)', { rotate: "45deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(4)', { rotate: "90deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(5)', { rotate: "135deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(6)', { rotate: "180deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(7)', { rotate: "225deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(8)', { rotate: "270deg", });
    gsap.set('.hero02-point-item .point', { scale: 0 });
    gsap.set('.hero02-service-item', { opacity: 0 });

    let lastScroll = 0;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".vertical-inner",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            onUpdate: function (self) {
                idx = Math.floor(self.progress * 7);
                idx2 = Math.floor(self.progress * 8);
                gsap.to('.hero02-bignum-item', { yPercent: 100 * -idx });
                gsap.to('.circle-top-cur-tx p', { yPercent: 100 * -idx });
                gsap.to('.circle-bot-tx', { yPercent: 100 * -idx });
                pointList = document.querySelectorAll('.hero02-point-item');
                serviceItem = document.querySelectorAll('.hero02-service-item');

                // 스크롤이 내려갈 때
                if (self.direction > 0) {
                    gsap.to(pointList[idx2].querySelector('.point'), 1, { scale: 1, duration: 2 });
                    gsap.to($('.hero02-service-item')[idx], { opacity: 1 });
                }
                // 스크롤이 올라갈 때
                else {
                    // 인덱스 범위를 확인하여 투명도 조절
                    if (idx2 + 1 < pointList.length) {
                        gsap.to(pointList[idx2 + 1].querySelector('.point'), 1, { scale: 0, duration: 2 });
                        gsap.to($('.hero02-service-item')[idx], { opacity: 0 });
                    }
                }
            }
        }
    });

    tl.to(".js-circle-line", {
        ease: 'none',
        strokeDashoffset: 0,
    }, 'line');

    // 두번째 가로 스크롤 gsap
    const hori2 = gsap.to('.scroll-content02', {
        scrollTrigger: {
            trigger: '.horizontal-container',
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        ease: "none",
        xPercent: -100,
        x: function () {
            return window.innerWidth;
        }
    });

    const space02 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space02',
            containerAnimation: hori2,
            start: "0% 0%",
            end: '100% 100%',
            scrub: 0,
            invalidateOnRefresh: true,
        },
    });
    space02.to('.space02-inner', {
        ease: "none",
        x: function () {
            return $('.sec-space02').outerWidth() - $('.space02-inner').outerWidth()
        }
    });

    const space02Text = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space02',
            containerAnimation: hori2,
            start: "0% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
        },
    });
    space02Text.to('.space02-left-title-block .sub-tx .char-wrap', { x: 0 });
    space02Text.to('.space02-left-list-tx .char-wrap ', { x: 0 });
    space02Text.from('.space02-left-block .space02-arrow-block .arrow-ic ', { opacity: 0 }, "<");

    const space02Text02 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space02',
            containerAnimation: hori2,
            start: "30% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",

        },
    });
    space02Text02.to('.space02-right-block .space02-left-title-block .sub-tx .char-wrap', { x: 0 });
    space02Text02.to('.space02-right-block .space02-left-list-tx .char-wrap ', { x: 0 });


    //space02 gsap
    $('.space02-left-block').on('mouseenter', function () {
        gsap.to('.space02-right-block .space02-left-title-block', { opacity: 0.3, duration: 0.5 });
        gsap.to('.space02-right-block .space02-left-list', { opacity: 0.3, duration: 0.5 });
    });
    $('.space02-left-block').on('mouseleave', function () {
        gsap.to('.space02-right-block .space02-left-title-block', { opacity: 1, duration: 0.5 });
        gsap.to('.space02-right-block .space02-left-list', { opacity: 1, duration: 0.5 });
    });

    $('.space02-right-block').on('mouseenter', function () {
        gsap.to('.space02-left-block .space02-left-title-block', { opacity: 0.3, duration: 0.5 });
        gsap.to('.space02-left-block .space02-left-list', { opacity: 0.3, duration: 0.5 });
    });
    $('.space02-right-block').on('mouseleave', function () {
        gsap.to('.space02-left-block .space02-left-title-block', { opacity: 1, duration: 0.5 });
        gsap.to('.space02-left-block .space02-left-list', { opacity: 1, duration: 0.5 });
    });


    gsap.set('.arrow-ic:last-child', { x: 20, y: 20 });

    $('.space02-left-item').on('mouseenter', function () {
        const arrowLast = $(this).find('.arrow-ic:last-child');
        const arrowFirst = $(this).find('.arrow-ic:first-child');
        const txBar = $(this).find('.tx-bar');

        gsap.to(arrowLast, { x: 0, y: 0, scrub: 1 });
        gsap.to(arrowFirst, { x: 20, y: 20, scrub: 1 });
        gsap.to(txBar, { width: "100%", duration: 0.6 })
    });
    $('.space02-left-item').on('mouseleave', function () {
        const arrowLast = $(this).find('.arrow-ic:last-child');
        const arrowFirst = $(this).find('.arrow-ic:first-child');
        const txBar = $(this).find('.tx-bar');

        gsap.to(arrowLast, { x: 20, y: 20, scrub: 1 });
        gsap.to(arrowFirst, { x: 0, y: 0, scrub: 1 });
        gsap.to(txBar, { width: "0%", duration: 0.6 })
    });

    $('.space02-left-block .space02-left-item').on('mouseenter', function () {
        gsap.to('.space02-right-block .space02-left-title-block', { opacity: 0 });
        gsap.to('.space02-right-block .space02-left-list', { opacity: 0 });
    });
    $('.space02-right-block .space02-left-item').on('mouseenter', function () {
        gsap.to('.space02-left-block .space02-left-title-block', { opacity: 0 });
        gsap.to('.space02-left-block .space02-left-list', { opacity: 0 });
    });


    // space02 hidden block gsap
    $('.space02-left-block .space02-left-item').each(function (index) {
        $(this).on('mouseenter', function () {
            gsap.to(`.space02-right-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 1, duration: 1 });
        });

        $(this).on('mouseleave', function () {
            gsap.to(`.space02-right-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 0, duration: 1 });
        });
    });
    $('.space02-right-block .space02-left-item').each(function (index) {
        $(this).on('mouseenter', function () {
            gsap.to(`.space02-left-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 1, duration: 1 });
        });

        $(this).on('mouseleave', function () {
            gsap.to(`.space02-left-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 0, duration: 1 });
        });
    });



    // studio gsap
    const Studio = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-studio',
            containerAnimation: hori2,
            start: "0% 0%",
            end: '100% 100%',
            scrub: 0,
            invalidateOnRefresh: true,
        },
    });
    Studio.to('.studio-inner', {
        ease: "none",
        x: function () {
            return $('.sec-studio').outerWidth() - $('.studio-inner').outerWidth()
        }
    });


    const StudioView = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-studio',
            containerAnimation: hori2,
            start: "0% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
            scrub: 1,
        },
    });

    StudioView.to('.first_img', { autoAlpha: 1 });
    StudioView.to('.first_img', { autoAlpha: 0, duration: 0 })
    StudioView.to('.second_img', { autoAlpha: 1 })
    StudioView.to('.second_img', { autoAlpha: 0, duration: 0 })
    StudioView.to('.third_img', { autoAlpha: 1 })
    StudioView.to('.third_img', { autoAlpha: 0 });


    const StudioView01 = gsap.timeline({
        scrollTrigger: {
            trigger: '.studio-inner01',
            containerAnimation: hori2,
            start: "0% 0%",
            end: '100% 100%',
            toggleActions: "play none none reverse",
        },
    });
    StudioView01.to('.video-container video', { opacity: 1 });

});

//모바일 버전
mm.add("(max-width: 1000px)", function () {
    if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', true); // 새로고침 확인용 플래그 설정
        location.reload(); // 새로고침
    }

    const HeaderSidebar = $('.header-menu');
    let isSidebarOpen = false;
    gsap.set('.header-sidebar-block', { autoAlpha: 0 });
    gsap.set('.header-menu-tx p:nth-child(1)', { autoAlpha: 1 });
    gsap.set('.header-menu-tx p:nth-child(2)', { autoAlpha: 0 });
    $(HeaderSidebar).on('click', function () {
        if (!isSidebarOpen) {
            gsap.to('.header-sidebar-block', { yPercent: 0, autoAlpha: 1, });
            gsap.to('.main-wrapper', { autoAlpha: 0 });
            gsap.to('.header-menu-tx p:nth-child(1)',{autoAlpha:0});
            gsap.to('.header-menu-tx p:nth-child(2)',{autoAlpha:1});
            gsap.to('.header-menu-lines .menu-line:first-child',{
                clipPath: "inset(0% 0% 0% 0%)",
                duration:1,
                ease: "power1.inOut" 
            });
            isSidebarOpen = true;
        } else {
            gsap.to('.header-sidebar-block', { yPercent: -100, autoAlpha: 0, });
            gsap.to('.main-wrapper', { autoAlpha: 1 });
            gsap.to('.header-menu-tx p:nth-child(1)',{autoAlpha:1});
            gsap.to('.header-menu-tx p:nth-child(2)',{autoAlpha:0});
            gsap.to('.header-menu-lines .menu-line:first-child',{
                clipPath: "inset(100% 0% 0% 0%)",
                duration:1,
                ease: "power1.inOut" 

            });
            isSidebarOpen = false;
        }
    });



    // 첫번째 가로 스크롤 gsap
    const hori1 = gsap.to('.scroll-content', {
        scrollTrigger: {
            trigger: '.main-inner',
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        ease: "none",
        xPercent: 0,
    });

    // 첫번째 section gsap
    const hero = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-hero',
            start: "10% 0%",
            end: '100% 50%',
            scrub: 0,
        },
    });
    hero.to('.hero-laser-block #letter-l', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-a', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-s', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-e', { autoAlpha: 0, x: -100, duration: 1 });
    hero.to('.hero-laser-block #letter-r', { autoAlpha: 0, x: -100, duration: 1 });




    //2번째 section gsap
    const breek = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-breek',
            start: "0% 0%",
            end: '100% 100%',
            scrub: 0,
            invalidateOnRefresh: true,
        },
    });
    breek.to('.breek-inner', { ease: "none", });
    breek.to('.breek-bot-block h2', { xPercent: 0, }, "<");

    const breekText = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-breek',
            start: "0% 70%",
            end: '20% 70%',
            toggleActions: "play none none reverse",
            onLeave: function () {
                gsap.to('.breek-sticky-block p .char-wrap', { x: 0 });
            },
        },
    });
    breekText.to('.breek-sticky-block h2 .char-wrap', { x: 0 });


    // 스크롤에 따라 애니메이션 활성화/비활성화
    ScrollTrigger.create({
        trigger: '.sec-breek',
        start: "30% 50%",
        end: '100% 50%',
        onEnter: function () {
            gsap.to('.breek-bot-tx', { x: -300 });
        },
        onLeave: function () {
            gsap.to('.breek-bot-tx', { x: 0 });
        }
    });

    // waar gsap
    const waar = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-waar',
            start: "0% 70%",
            end: '20% 70%',
            toggleActions: "play none none reverse",
        },
    });
    waar.to('.waar-sticky-block h2 .char-wrap', { x: 0 });
    waar.to('.waar-bot-list .waar-bot-item:nth-child(1) .waar-tx-small h3 .char-wrap', { x: 0 }, "<");
    waar.to('.waar-bot-list .waar-bot-item:nth-child(1) .waar-tx-small p .char-wrap', { x: 0 }, "<");
    waar.from('.waar-bot-list .waar-bot-item:nth-child(1) .waar-tx-big', { x: 100, autoAlpha: 0 });
    const waar2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-waar',
            start: "50% 70%",
            end: '100% 70%',
            toggleActions: "play none none reverse",
        },
    });
    waar2.to('.waar-sticky-block p .char-wrap', { x: 0 });
    waar2.to('.waar-bot-list .waar-bot-item:nth-child(2) .waar-tx-small h3 .char-wrap', { x: 0 }, "<");
    waar2.to('.waar-bot-list .waar-bot-item:nth-child(2) .waar-tx-small p .char-wrap', { x: 0 }, "<");
    waar2.from('.waar-bot-list .waar-bot-item:nth-child(2) .waar-tx-big', { x: 100, autoAlpha: 0 });



    // card gsap
    const card = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-card',
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
        },
    });
    card.to('.sec-card .box', {
        x: () => gsap.utils.random(-10, 10),
        scaleX: 0,
        stagger: 0.1,
        roundProps: 'x, y'
    });
    card.to('.scroll-content', {
        backgroundColor: "#fff",
        duration: 1
    });


    const space01 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space',
            start: "0% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
        },
    });
    space01.to('.space-inner h2 .char-wrap', { x: 0 });
    space01.to('.space-inner p .char-wrap', { x: 0 });

    // circle gsap
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(1)', { rotate: "315deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(2)', { rotate: "0deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(3)', { rotate: "45deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(4)', { rotate: "90deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(5)', { rotate: "135deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(6)', { rotate: "180deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(7)', { rotate: "225deg", });
    gsap.set('.hero02-point-list .hero02-point-item:nth-child(8)', { rotate: "270deg", });



    gsap.set('.hero02-point-item .point', { scale: 0 });
    gsap.set('.hero02-service-item', { opacity: 0 });

    let lastScroll = 0;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".vertical-inner",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            onUpdate: function (self) {
                idx = Math.floor(self.progress * 7);
                idx2 = Math.floor(self.progress * 8);
                gsap.to('.hero02-bignum-item', { yPercent: 100 * -idx });
                gsap.to('.circle-top-cur-tx p', { yPercent: 100 * -idx });
                gsap.to('.circle-bot-tx', { yPercent: 100 * -idx });
                pointList = document.querySelectorAll('.hero02-point-item');
                serviceItem = document.querySelectorAll('.hero02-service-item');

                // 스크롤이 내려갈 때
                if (self.direction > 0) {
                    gsap.to(pointList[idx2].querySelector('.point'), 1, { scale: 1, duration: 2 });
                    gsap.to($('.hero02-service-item')[idx], { opacity: 1 });
                }
                // 스크롤이 올라갈 때
                else {
                    // 인덱스 범위를 확인하여 투명도 조절
                    if (idx2 + 1 < pointList.length) {
                        gsap.to(pointList[idx2 + 1].querySelector('.point'), 1, { scale: 0, duration: 2 });
                        gsap.to($('.hero02-service-item')[idx], { opacity: 0 });
                    }
                }
            }
        }
    });

    tl.to(".js-circle-line", {
        ease: 'none',
        strokeDashoffset: 0,
    }, 'line');

    // 두번째 가로 스크롤 gsap
    const hori2 = gsap.to('.scroll-content02', {
        scrollTrigger: {
            trigger: '.horizontal-container',
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        ease: "none",
        xPercent: 0,
    });

    const space02 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space02',
            start: "0% 0%",
            end: '100% 100%',
            scrub: 0,
            invalidateOnRefresh: true,
        },
    });
    space02.to('.space02-inner', { ease: "none", });

    const space02Text = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space02',
            start: "0% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
        },
    });
    space02Text.to('.space02-left-title-block .sub-tx .char-wrap', { x: 0 });
    space02Text.to('.space02-left-list-tx .char-wrap ', { x: 0 });
    space02Text.from('.space02-left-block .space02-arrow-block .arrow-ic ', { opacity: 0 }, "<");

    const space02Text02 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-space02',
            start: "30% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
        },
    });
    space02Text02.to('.space02-right-block .space02-left-title-block .sub-tx .char-wrap', { x: 0 });
    space02Text02.to('.space02-right-block .space02-left-list-tx .char-wrap ', { x: 0 });


    //space02 gsap
    $('.space02-left-block').on('mouseenter', function () {
        gsap.to('.space02-right-block .space02-left-title-block', { opacity: 0.3, duration: 0.5 });
        gsap.to('.space02-right-block .space02-left-list', { opacity: 0.3, duration: 0.5 });
    });
    $('.space02-left-block').on('mouseleave', function () {
        gsap.to('.space02-right-block .space02-left-title-block', { opacity: 1, duration: 0.5 });
        gsap.to('.space02-right-block .space02-left-list', { opacity: 1, duration: 0.5 });
    });

    $('.space02-right-block').on('mouseenter', function () {
        gsap.to('.space02-left-block .space02-left-title-block', { opacity: 0.3, duration: 0.5 });
        gsap.to('.space02-left-block .space02-left-list', { opacity: 0.3, duration: 0.5 });
    });
    $('.space02-right-block').on('mouseleave', function () {
        gsap.to('.space02-left-block .space02-left-title-block', { opacity: 1, duration: 0.5 });
        gsap.to('.space02-left-block .space02-left-list', { opacity: 1, duration: 0.5 });
    });


    gsap.set('.arrow-ic:last-child', { x: 20, y: 20 });

    $('.space02-left-item').on('mouseenter', function () {
        const arrowLast = $(this).find('.arrow-ic:last-child');
        const arrowFirst = $(this).find('.arrow-ic:first-child');
        const txBar = $(this).find('.tx-bar');

        gsap.to(arrowLast, { x: 0, y: 0, scrub: 1 });
        gsap.to(arrowFirst, { x: 20, y: 20, scrub: 1 });
        gsap.to(txBar, { width: "100%", duration: 0.6 })
    });
    $('.space02-left-item').on('mouseleave', function () {
        const arrowLast = $(this).find('.arrow-ic:last-child');
        const arrowFirst = $(this).find('.arrow-ic:first-child');
        const txBar = $(this).find('.tx-bar');

        gsap.to(arrowLast, { x: 20, y: 20, scrub: 1 });
        gsap.to(arrowFirst, { x: 0, y: 0, scrub: 1 });
        gsap.to(txBar, { width: "0%", duration: 0.6 })
    });

    $('.space02-left-block .space02-left-item').on('mouseenter', function () {
        gsap.to('.space02-right-block .space02-left-title-block', { opacity: 0 });
        gsap.to('.space02-right-block .space02-left-list', { opacity: 0 });
    });
    $('.space02-right-block .space02-left-item').on('mouseenter', function () {
        gsap.to('.space02-left-block .space02-left-title-block', { opacity: 0 });
        gsap.to('.space02-left-block .space02-left-list', { opacity: 0 });
    });

    // space02 hidden block gsap
    $('.space02-left-block .space02-left-item').each(function (index) {
        $(this).on('mouseenter', function () {
            gsap.to(`.space02-right-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 1, duration: 1 });
        });
        $(this).on('mouseleave', function () {
            gsap.to(`.space02-right-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 0, duration: 1 });
        });
    });
    $('.space02-right-block .space02-left-item').each(function (index) {
        $(this).on('mouseenter', function () {
            gsap.to(`.space02-left-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 1, duration: 1 });
        });
        $(this).on('mouseleave', function () {
            gsap.to(`.space02-left-block .space02-hidden-item:nth-child(${index + 1})`, { opacity: 0, duration: 1 });
        });
    });

    // studio gsap
    const Studio = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-studio',
            start: "0% 0%",
            end: '100% 100%',
            scrub: 0,
            invalidateOnRefresh: true,
        },
    });
    Studio.to('.studio-inner', { ease: "none", });

    const StudioView = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec-studio',
            start: "0% 50%",
            end: '100% 50%',
            toggleActions: "play none none reverse",
            scrub: 1,
        },
    });
    StudioView.to('.first_img', { autoAlpha: 1 });
    StudioView.to('.first_img', { autoAlpha: 0, duration: 0 })
    StudioView.to('.second_img', { autoAlpha: 1 })
    StudioView.to('.second_img', { autoAlpha: 0, duration: 0 })
    StudioView.to('.third_img', { autoAlpha: 1 })
    StudioView.to('.third_img', { autoAlpha: 0 });

    const StudioView01 = gsap.timeline({
        scrollTrigger: {
            trigger: '.studio-inner01',
            start: "0% 0%",
            end: '100% 100%',
            toggleActions: "play none none reverse",
        },
    });
    StudioView01.to('.video-container video', { opacity: 1 });
});







