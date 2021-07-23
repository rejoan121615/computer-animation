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
            amount: 0.6,
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
    .from("#left__content", {
        opacity: 0,
        stroke: "transparent",
        x: -20,
    })
    .from(gsap.utils.toArray(["#left__content rect","#left__content path"]), {
        width: 0,
        height: 0,
        opacity: 0,
        stagger: {
            amount: 1
        }
    });
// tl.
