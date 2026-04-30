"use strict";

export let analogueView = {
    init: function () {
        const CLOCKSIZE = 200;
        const HHANDSIZE = 8;
        const MHANDSIZE = 6;
        const SHANDSIZE = 4;

        const aClock = document.getElementById("aClock");

        aClock.style.width = CLOCKSIZE + "px";
        aClock.style.height = CLOCKSIZE + "px";
        aClock.style.backgroundColor = "blue";
        aClock.style.borderRadius = "50%";
        aClock.style.position = "relative";
        aClock.style.border = "3px solid black";

        aClock.innerHTML = `
            <div id="hHand"></div>
            <div id="mHand"></div>
            <div id="sHand"></div>
        `;

        const hHand = document.getElementById("hHand");
        const mHand = document.getElementById("mHand");
        const sHand = document.getElementById("sHand");

        function styleHand(hand, length, thickness) {
            hand.style.width = CLOCKSIZE * length + "px";
            hand.style.height = thickness + "px";
            hand.style.backgroundColor = "black";
            hand.style.transformOrigin = "0% 50%";
            hand.style.position = "absolute";
            hand.style.top = (CLOCKSIZE / 2 - thickness * 0.5) + "px";
            hand.style.left = CLOCKSIZE / 2 + "px";
        }

        styleHand(hHand, 0.25, HHANDSIZE);
        styleHand(mHand, 0.35, MHANDSIZE);

        // Second hand is red
        styleHand(sHand, 0.40, SHANDSIZE);
        sHand.style.backgroundColor = "orange";
    },

    update: function (hh, mm, ss) {
        const rotation = this.calculateRotation(hh, mm, ss);
        this.rotateHands(rotation);
    },

    calculateRotation: function (hh, mm, ss) {
        return {

            hour:   (hh % 12) * (360 / 12) + mm * (360 / 12 / 60) - 90,
            minute: mm * 6 + ss * (6 / 60) - 90,
            second: ss * (360 / 60) - 90
        };
    },

    rotateHands: function (degrees) {
        const hHand = document.getElementById("hHand");
        const mHand = document.getElementById("mHand");
        const sHand = document.getElementById("sHand");


        hHand.style.transform = "rotate(" + degrees.hour + "deg)";
        mHand.style.transform = "rotate(" + degrees.minute + "deg)";
        sHand.style.transform = "rotate(" + degrees.second + "deg)";
    }
};