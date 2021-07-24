// "use strict";

// const tl = gsap.timeline();

// tl.from("#intro__line", {
//     onStart: function () {
//         gsap.from("#intro__line", {
//             strokeDashoffset: 125,
//             duration: 2,
//         });
//     },
//     x: -100 + "%",
//     duration: 3,
//     delay: 0.3,
// })
//     .from(
//         "#bottom__line",
//         {
//             strokeDashoffset: 1000,
//             duration: 3.7,
//         },
//         "<"
//     )
//     .from(
//         "#computer .stand__1",
//         {
//             y: 10,
//             opacity: 0,
//             duration: 0.8,
//         },
//         "-=2"
//     )
//     .from(
//         "#computer .stand__2",
//         {
//             y: 20,
//             opacity: 0,
//             duration: 1,
//         },
//         "<"
//     )
//     .from(
//         "#computer .border",
//         {
//             strokeDashoffset: 1250,
//             duration: 1.8,
//         },
//         "<"
//     )
//     .from(
//         "#computer .frame",
//         {
//             y: 15,
//             opacity: 0,
//             duration: 1,
//         },
//         "-=2"
//     )
//     .to(
//         "#computer .border",
//         {
//             stroke: "#0ae0e0",
//             fill: "#0ae0e0",
//             duration: 0.5,
//         },
//         "-=0.5"
//     )
//     .to(
//         "#screen__cover",
//         {
//             opacity: 1,
//         },
//         "-=0.4"
//     )
//     .to("#screen__cover rect", {
//         height: 0,
//         stagger: {
//             amount: 1.2,
//             from: "end",
//         },
//     })
//     .to(
//         "#screen__bg",
//         {
//             opacity: 1,
//         },
//         "-=1.5"
//     )
//     .fromTo(
//         "#half__circle",
//         {
//             opacity: 0,
//             scale: 0.2,
//             x: 150,
//             y: 220,
//         },
//         {
//             opacity: 1,
//             scale: 1,
//             x: 0,
//             y: 0,
//             duration: 2.5,
//         },
//         "-=0"
//     );

// // mouse click
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

// // secListTl();

// gsap.timeline()
//     .fromTo(
//         "#secound__content",
//         {
//             opacity: 0,
//             scale: 0,
//         },
//         {
//             opacity: 1,
//             scale: 1,
//             duration: 1.5,
//             delay: 20,
//         }
//     )
//     .from("#secound__content #list__container #list", {
//         opacity: 0,
//         y: 25,
//         stagger: {
//             each: 0.3,
//         },
//     })
//     .fromTo(
//         gsap.utils.toArray([
//             "#secound__content #circle__container #circle",
//             "#secound__content #fight",
//         ]),
//         {
//             opacity: 0,
//             scale: 0,
//         },
//         {
//             opacity: 1,
//             scale: 1,
//             duration: 1.2,
//         },
//         "<"
//     )
//     .fromTo(
//         "#secound__content #four__corner #element",
//         {
//             strokeDashoffset: 440,
//             strokeDasharray: 440,
//         },
//         {
//             strokeDashoffset: 0,
//             duration: 1.6,
//             onComplete: function () {},
//         },
//         "<"
//     )
//     .fromTo(
//         "#secound__content #long__line",
//         {
//             y: 10,
//             opacity: 0,
//         },
//         {
//             opacity: 1,
//             y: 0,
//         }
//     );

// // secound content opacity

// // bubble animation

// const getComputerPosition = document.querySelector("#computer").getClientRects();
// console.log(getComputerPosition);
// gsap.timeline()
//     .fromTo("#bubble circle", {opacity: 0}, { opacity: 1, duration: 0.5 })
//     .to("#bubble circle", {
//         x: 'random(-50, 50)',
//         y: 'random(-50, 50)',
//         repeat: -1,
//         duration: 10,
//         repeatRefresh: true
//     });

// inner content

const contentList = gsap.timeline();
contentList
    //     .from("#content__list .list", {
    //         x: 20,
    //         y: 20,
    //         scale: 0.5,
    //         opacity: 0,
    //         stagger: {
    //             amount: 1.5,
    //         },
    //         duration: 1,
    //         delay: 0.5,
    //     })
    //     .to("#mouse", {
    //         x: -250,
    //         y: 100,
    //         duration: 1.5,
    //         onComplete: function () {
    //             mouseClick();
    //         },
    //     })
    //     .to("#content__list", {
    //         opacity: 0.4,
    //         duration: 0.5,
    //         delay: 0.8,
    //     })
    //     .fromTo(
    //         "#big__list",
    //         {
    //             x: -50,
    //             y: 50,
    //             scale: 0.7,
    //             opacity: 0,
    //         },
    //         {
    //             scale: 1,
    //             opacity: 1,
    //             x: 0,
    //             y: 0,
    //             duration: 1.5,
    //         }
    //     )
    //     .to("#mouse", {
    //         x: "-=5",
    //         y: "+=18",
    //         onComplete: function () {
    //             mouseClick();
    //         },
    //     })
    //     .to("#big__list", {
    //         x: -50,
    //         y: 50,
    //         scale: 0.7,
    //         opacity: 0,
    //         delay: 0.8,
    //         duration: 1.2,
    //     })
    //     .to("#content__list", {
    //         opacity: 1,
    //         duration: 0.8,
    //     })
    //     .to("#content__list .list", {
    //         x: 20,
    //         y: 20,
    //         scale: 0.5,
    //         opacity: 0,
    //         duration: 1,
    //         delay: 0.5,
    //         stagger: {
    //             amount: 1.5,
    //             from: "end",
    //         },
    //     })
    //     .fromTo(
    //         "#secound__content",
    //         {
    //             opacity: 0,
    //             scale: 0,
    //         },
    //         {
    //             opacity: 1,
    //             scale: 1,
    //             duration: 1.5,
    //         }
    //     )
    //     .from("#secound__content #list__container #list", {
    //         opacity: 0,
    //         y: 25,
    //         stagger: {
    //             each: 0.3,
    //         },
    //     })
    //     .fromTo(
    //         gsap.utils.toArray([
    //             "#secound__content #circle__container #circle",
    //             "#secound__content #fight",
    //         ]),
    //         {
    //             opacity: 0,
    //             scale: 0,
    //         },
    //         {
    //             opacity: 1,
    //             scale: 1,
    //             duration: 1.2,
    //         },
    //         "<"
    //     )
    //     .fromTo(
    //         "#secound__content #four__corner #element",
    //         {
    //             strokeDashoffset: 440,
    //             strokeDasharray: 440,
    //         },
    //         {
    //             strokeDashoffset: 0,
    //             duration: 1.6,
    //         },
    //         "<"
    //     )
    //     .fromTo(
    //         "#secound__content #long__line",
    //         {
    //             y: 10,
    //             opacity: 0,
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //         }
    //     )
    //     .to("#mouse", {
    //         x: "+=10",
    //         y: "-=65",
    //         onComplete: function () {
    //             mouseClick();
    //         },
    //     })

    //     .to("#secound__content", {
    //         opacity: 0.15,
    //     })

    .fromTo(
        "#world",
        {
            opacity: 0,
            x: "-50",
            y: "50",
            scale: 0.7,
        },
        {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay: 0.8,
            duration: 1.2,
        }
    )
    .to("#mouse", {
        x: -310,
        y: 100,
        onComplete: function () {
            mouseClick();
        },
    })
    .to("#world", {
        opacity: 0,
        x: "-50",
        y: "50",
        scale: 0.7,
        duration: 1.2,
        delay: 0.8,
    })

    .fromTo(
        "#forward__list",
        {
            opacity: 0,
            x: "-50",
            y: "50",
            scale: 0.7,
        },
        {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay: 0.8,
            duration: 1.2,
        }
    )
    .to("#mouse", {
        x: -310,
        y: 100,
        onComplete: function () {
            mouseClick();
        },
    })
    .to("#forward__list", {
        opacity: 0,
        x: "-50",
        y: "50",
        scale: 0.7,
        duration: 1.2,
        delay: 0.8,
    })

    .fromTo(
        "#massage__list",
        {
            opacity: 0,
            x: "-50",
            y: "50",
            scale: 0.7,
        },
        {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay: 0.8,
            duration: 1.2,
        }
    )
    .to("#mouse", {
        x: -310,
        y: 100,
        onComplete: function () {
            mouseClick();
        },
    })
    .to("#massage__list", {
        opacity: 0,
        x: "-50",
        y: "50",
        scale: 0.7,
        duration: 1.2,
        delay: 0.8,
    })

    .to("#secound__content", {
        opacity: 1,
        duration: 1.5,
    })
    .to("#secound__content #list__container #list", {
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
            opacity: 1,
            scale: 1,
        },
        {
            opacity: 0,
            scale: 0,
            duration: 1,
        },
        "<"
    )
    .to("#secound__content #four__corner #element", {
        strokeDashoffset: 440,
        strokeDasharray: 440,
    })
    .to("#secound__content #long__line", {
        y: 10,
        opacity: 0,
    })
    .to("#secound__content", {
        opacity: 0,
        scale: 0,
        duration: 1.5,
    });

// call all card Animation
// secContentCard("#world", "-50", "50", 1500, 0.7);
// secContentCard("#forward__list", "-80", "10", 1500, 9);
// secContentCard("#massage__list", "100", "10", 1500, 16);

// function secContentCard(card, posX, posY, reverseDealy, delayTime) {
//         .to("#secound__content", {
//             opacity: 0.15,
//             delay: delayTime,
//         })
//         .fromTo(
//             card,
//             {
//                 opacity: 0,
//                 x: posX,
//                 y: posY,
//                 scale: 0.5,
//             },
//             {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//                 scale: 1,
//                 duration: 0.7,
//                 delay: 0.4,
//             }
//         );
// }

// first mouse move
// gsap.to('#mouse', {
//     x: -250,
//     y: 100,
//     duration: 1.5,
//     delay: 2.2,
//     onComplete: function () {
//         mouseClick()
//     }
// })
