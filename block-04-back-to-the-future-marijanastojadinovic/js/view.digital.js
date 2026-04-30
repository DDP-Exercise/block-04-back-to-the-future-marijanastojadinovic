"use strict";

export let digitalView = {
    init: function () {

        const display = document.createElement("div");
        display.id = "digitalDisplay";

        display.style.fontFamily = "'Courier New', monospace";
        display.style.fontSize = "2rem";
        display.style.color = "#20ccda";
        display.style.backgroundColor = "#111";
        display.style.border = "2px solid #ff2200";
        display.style.padding = "10px 20px";
        display.style.borderRadius = "6px";
        display.style.letterSpacing = "0.2em";
        display.style.marginTop = "20px";
        display.style.textShadow = "0 0 8px #ff2200";
        display.style.display = "inline-block";

        document.body.appendChild(display);


        const saveBtn = document.createElement("button");
        saveBtn.id = "saveTimeBtn";
        saveBtn.textContent = " SAVE TIME";
        saveBtn.style.display = "block";
        saveBtn.style.marginTop = "10px";
        saveBtn.style.padding = "8px 16px";
        saveBtn.style.fontFamily = "'Courier New', monospace";
        saveBtn.style.fontSize = "1rem";
        saveBtn.style.backgroundColor = "#111";
        saveBtn.style.color = "#20ccda";
        saveBtn.style.border = "2px solid #ff2200";
        saveBtn.style.borderRadius = "4px";
        saveBtn.style.cursor = "pointer";
        saveBtn.style.textShadow = "0 0 6px #ff2200";

        saveBtn.addEventListener("click", function () {
            const now = new Date().toLocaleTimeString();
            localStorage.setItem("savedTime", now);
            alert("Time saved: " + now);
        });

        document.body.appendChild(saveBtn);


        const savedTime = localStorage.getItem("savedTime");
        if (savedTime) {
            const savedLabel = document.createElement("p");
            savedLabel.style.color = "#ec5959";
            savedLabel.style.fontFamily = "'Courier New', monospace";
            savedLabel.style.fontSize = "0.85rem";
            savedLabel.textContent = "Last saved: " + savedTime;
            document.body.appendChild(savedLabel);
        }
    },

    update: function (hh, mm, ss) {
        const display = document.getElementById("digitalDisplay");
        if (!display) return;


        const h = String(hh).padStart(2, "0");
        const m = String(mm).padStart(2, "0");
        const s = String(ss).padStart(2, "0");

        display.textContent = h + ":" + m + ":" + s;
    }
};