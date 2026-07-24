const msg = document.getElementById("message");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

const lines = [
    "Curiosity comes first.",
    "Everything else follows."
];

let current = 0;

function showLine() {

    msg.classList.remove("show");

    setTimeout(() => {

        msg.textContent = lines[current];
        msg.classList.add("show");

        setTimeout(() => {

            msg.classList.remove("show");

            current++;

            if (current < lines.length) {

                setTimeout(showLine, 800);

            } else {

                setTimeout(() => {
                    revealMain();
                }, 300);

            }

        }, 2200);

    }, 350);

}

function revealMain() {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        main.classList.remove("hidden");

        main.style.opacity = "1";

        const logo = document.querySelector(".logo");
        const title = document.querySelector("h1");
        const tagline = document.querySelector(".tagline");
        const comingSoon = document.querySelector(".coming-soon");

        setTimeout(() => {
            if (logo) logo.classList.add("show");
        }, 300);

        setTimeout(() => {
            title.classList.add("show");
        }, 900);

        setTimeout(() => {
            tagline.classList.add("show");
            if (comingSoon) comingSoon.classList.add("show");
        }, 1500);

    }, 1000);

}

setTimeout(showLine, 1800);
