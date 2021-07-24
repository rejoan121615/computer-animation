"use strict";



const tl = gsap.timeline();

tl.from("#intro__line", {
    onStart: function () {
        gsap.from("#intro__line", {
            strokeDashoffset: 125,
            duration: 2,
        });
    },
    x: -100 + "%",
    duration: 3,
    delay: 0.3,
})
    .from(
        "#bottom__line",
        {
            strokeDashoffset: 1000,
            duration: 3.7,
        },
        "<"
    )
    .from(
        "#computer .stand__1",
        {
            y: 10,
            opacity: 0,
            duration: 0.8,
        },
        "-=2"
    )
    .from(
        "#computer .stand__2",
        {
            y: 20,
            opacity: 0,
            duration: 1,
        },
        "<"
    )
    .from(
        "#computer .border",
        {
            strokeDashoffset: 1250,
            duration: 1.8,
        },
        "<"
    )
    .from(
        "#computer .frame",
        {
            y: 15,
            opacity: 0,
            duration: 1,
        },
        "-=2"
    )
    .to(
        "#computer .border",
        {
            stroke: "#0ae0e0",
            fill: "#0ae0e0",
            duration: 0.5,
        },
        "-=0.5"
    )
    .to(
        "#screen__cover",
        {
            opacity: 1,
        },
        "-=0.4"
    )
    .to("#screen__cover rect", {
        height: 0,
        stagger: {
            amount: 1.2,
            from: "end",
        },
    })
    .to(
        "#screen__bg",
        {
            opacity: 1,
        },
        "-=1.5"
    )
    .fromTo(
        "#half__circle",
        {
            opacity: 0,
            scale: 0.2,
            x: 150,
            y: 220,
        },
        {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 2.5,
        },
        "-=0"
    );

// mouse click
function mouseClick() {
    gsap.to("#mouse", {
        scale: 0.8,
        duration: 0.4,
    });
    gsap.to("#mouse", {
        scale: 1,
        duration: 0.4,
        delay: 0.4,
    });
}

// // mouse timeline
const mouseTimeline = gsap.timeline();

mouseTimeline
    .to("#mouse", {
        opacity: 1,
        duration: 0.5,
        delay: 7,
    })
    .to("#mouse", {
        x: -230,
        y: 100,
        duration: 2,
        delay: 0.8,
        onComplete: function () {
            mouseClick();
        },
    })
    .to("#mouse", {
        x: "-=30",
        y: "+=15",
        duration: 0.8,
        delay: 2.2,
        onComplete: function () {
            mouseClick();
            setTimeout(() => {
                secounTl.reverse();
            }, 1000);
        },
    });

// // secound timeline

const secounTl = gsap.timeline();
secounTl
    .from(
        "#content__list .list",
        {
            x: 20,
            y: 20,
            scale: 0.5,
            opacity: 0,
            stagger: {
                amount: 1.5,
            },
            duration: 1,
            delay: 6,
        },
        "-=0"
    )
    .to("#content__list", {
        opacity: 0.4,
        duration: 1,
        delay: 2,
    })
    .from("#big__list", {
        x: -50,
        y: 50,
        scale: 0.7,
        opacity: 0,
        onComplete: function () {
            // secListTl();
        },
    });

// third timeline
let secoundListTimeline = gsap.timeline();

function secListTl() {
    console.log("working");
    secoundListTimeline
        .to("#secound__content", {
            opacity: 1,
            delay: 20,
            duration: 1.8,
        })
        .from("#secound__content rect", {
            width: 0,
            height: 0,
            onComplete: function () {
                gsap.fromTo(
                    gsap.utils.toArray([
                        "#secound__content g line",
                        "#secound__content g rect",
                        "#secound__content g circle",
                        "#secound__content g path",
                    ]),
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 2,
                        stagger: {
                            amount: 1.2,
                        },
                    }
                );
            },
        });
}

// secListTl();

gsap.timeline()
    .fromTo(
        "#secound__content",
        {
            opacity: 0,
            scale: 0,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 20,
        }
    )
    .from("#secound__content #list__container #list", {
        opacity: 0,
        y: 25,
        stagger: {
            each: 0.3,
        },
    })
    .fromTo(
        gsap.utils.toArray([
            "#secound__content #circle__container #circle",
            "#secound__content #fight",
        ]),
        {
            opacity: 0,
            scale: 0,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 1.2,
        },
        "<"
    )
    .fromTo(
        "#secound__content #four__corner #element",
        {
            strokeDashoffset: 440,
            strokeDasharray: 440,
        },
        {
            strokeDashoffset: 0,
            duration: 1.6,
            onComplete: function () {},
        },
        "<"
    )
    .fromTo(
        "#secound__content #long__line",
        {
            y: 10,
            opacity: 0,
        },
        {
            opacity: 1,
            y: 0,
            onComplete: function () {
                gsap.to("#mouse", {
                    x: "+=20",
                    y: "-=45",
                    onComplete: function () {
                        // mouseClick();
                    },
                });
                // secContentCard("#world", "-50", "50", 1500, 0.7);
                // secContentCard("#forward__list", "-80", "10", 1500, 9);
                // secContentCard("#massage__list", "100", "10", 1500, 16);
                fullCardAnimation();
            },
        }
    );

// movie mouse automatically
function moveMouse() {
    const mousePosition = document.querySelector("#mouse").getClientRects();
    console.log(mousePosition);
}

console.log(moveMouse());
// secound content opacity

function fullCardAnimation() {
    function secContentCard(card, posX, posY, reverseDealy, delayTime) {
        let cardTl = gsap
            .timeline()
            .to("#secound__content", {
                opacity: 0.15,
                delay: delayTime,
            })
            .fromTo(
                card,
                {
                    opacity: 0,
                    x: posX,
                    y: posY,
                    scale: 0.5,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    delay: 0.4,
                    onComplete: function () {
                        let mouse = document.querySelector("#mouse");

                        gsap.to(mouse, {});
                        setTimeout(() => {
                            cardTl.reverse();
                        }, reverseDealy);
                    },
                }
            );
    }
    // call all card Animation
    secContentCard("#world", "-50", "50", 1500, 0.7);
    secContentCard("#forward__list", "-80", "10", 1500, 9);
    secContentCard("#massage__list", "100", "10", 1500, 16);
}

// bubble animation


const getComputerPosition = document.querySelector("#computer").getClientRects();
console.log(getComputerPosition);
gsap.timeline()
    .fromTo("#bubble circle", {opacity: 0}, { opacity: 1, duration: 0.5 })
    .to("#bubble circle", {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        repeat: -1,
        duration: 10,
        repeatRefresh: true
    });

