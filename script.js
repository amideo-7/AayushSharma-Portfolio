Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    images: ["images/DA.jpg", "images/ML.jpg", "images/DS.jpg", "images/personalProjects.jpg"],
});

// Shery.hoverWithMediaCircle(".hvr1", {
//     images: ["images/education.jpg"],
// });

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
Shery.textAnimate(".nlink", {
    style: 2,
    delay: 0.1,
    duration: 1,
    multiplier: 0.1,
});


const myText = new SplitType('.anm')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.1,
    duration: .1
})


let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.text1',
        start: '35% 100%',
        end: 'bottom 70%',
        scrub: true,
        markers: false
    }
})

tl1.to('.text1', {
    x:800
})


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.text2',
        start: '35% 100%',
        end: 'bottom 70%',
        scrub: true,
        markers: false
    }
})

tl2.to('.text2', {
    x:800
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.text3',
        start: '35% 100%',
        end: 'bottom 70%',
        scrub: true,
        markers: false
    }
})

tl3.to('.text3', {
    x:800
})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.text4',
        start: '35% 100%',
        end: 'bottom 70%',
        scrub: true,
        markers: false
    }
})

tl4.to('.text4', {
    x:800
})


gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type1')

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})


const lenis1 = new Lenis()

lenis1.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis1.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const splitTypes1 = document.querySelectorAll('.reveal-type2')

splitTypes1.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})

const splitTypes12 = document.querySelectorAll('.reveal-type3')

splitTypes12.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 100%',
                end: 'top 50%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})


const lenis2 = new Lenis()

lenis2.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis2.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



$(document).ready(function() {
	$(window).on('scroll', function() {
		let scrollPos = $(window).scrollTop();
		$('.bg').css({
			'height': `${scrollPos}px`
		});
	});
});

function fadeInImage1() {
    document.getElementById("bottomimg1").style.opacity = 1;
}

function fadeOutImage1() {
    document.getElementById("bottomimg1").style.opacity = 0;
}

function fadeInImage2() {
    document.getElementById("bottomimg2").style.opacity = 1;
}

function fadeOutImage2() {
    document.getElementById("bottomimg2").style.opacity = 0;
}

function fadeInImage3() {
    document.getElementById("bottomimg3").style.opacity = 1;
}

function fadeOutImage3() {
    document.getElementById("bottomimg3").style.opacity = 0;
}

function fadeInImage4() {
    document.getElementById("bottomimg4").style.opacity = 1;
}

function fadeOutImage4() {
    document.getElementById("bottomimg4").style.opacity = 0;
}

function fadeInImage5() {
    document.getElementById("bottomimg5").style.opacity = 1;
}

function fadeOutImage5() {
    document.getElementById("bottomimg5").style.opacity = 0;
}


// New


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

