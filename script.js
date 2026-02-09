const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts");

/* NO click messages */
const noMessages = [
    "Are you sure? 🥺",
    "Really sure?? 😢",
    "Think again 💔",
    "Pleaseeee 🥹",
    "Don’t break my heart 💘",
    "Last chance 😭",
    "I’ll be sad forever 😞"
];

let noCount = 0;

/* Move NO button + change question */
noBtn.addEventListener("click", () => {
    question.innerText = noMessages[Math.min(noCount, noMessages.length - 1)];
    noCount++;

    const maxX = 260;
    const maxY = 80;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
});

/* YES click */
yesBtn.addEventListener("click", () => {
    question.classList.add("hidden");
    document.querySelector(".buttons").classList.add("hidden");
    message.classList.remove("hidden");
});

/* ❤️ Hearts animation ❤️ */
const heartEmojis = ["❤️", "💖", "💘", "💝", "💕", "💞"];
const heartColors = ["#ff4d6d", "#ff6f91", "#ff85a1", "#ff1493", "#ff69b4"];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 20 + Math.random() * 30 + "px";
    heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.style.animationDuration = 3 + Math.random() * 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 120);