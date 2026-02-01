const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const finalMessage = document.getElementById("final-message");
const body = document.body;

// ==================== No Button Runs Away Across Viewport ====================
function moveNoButton() {
    const buttonRect = noButton.getBoundingClientRect();
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    // Leave some margin so button doesn't go off screen
    const maxX = bodyWidth - buttonRect.width - 20;
    const maxY = bodyHeight - buttonRect.height - 20;

    // Random new position anywhere in the viewport
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Apply absolute positioning
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Desktop hover: move instantly
noButton.addEventListener("mouseover", moveNoButton);

// Mobile touch: move instantly
noButton.addEventListener("touchstart", moveNoButton);

// Extra fun: multiple jumps per hover for faster movement
noButton.addEventListener("mouseover", () => {
    for (let i = 0; i < 2; i++) {
        moveNoButton();
    }
});

// ==================== Yes Button Click ====================
yesButton.addEventListener("click", () => {
    finalMessage.style.display = "block";

    const container = document.querySelector(".container");
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 30; i++) {
        createExplosionHeart(centerX, centerY);
    }
});

// ==================== Floating Background Hearts ====================
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px";

    const size = Math.random() * 20 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.animationDuration = (Math.random() * 5 + 4) + "s";

    body.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 500);

// ==================== Heart Explosion Function ====================
function createExplosionHeart(x, y) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = Math.random() * 20 + 15;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.background = `linear-gradient(45deg, #ff4d79, #ff99cc)`;
    heart.style.left = x - size/2 + "px";
    heart.style.top = y - size/2 + "px";
    heart.style.position = "absolute";
    heart.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";

    body.appendChild(heart);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200 + 100;
    const destX = distance * Math.cos(angle);
    const destY = distance * Math.sin(angle);

    setTimeout(() => {
        heart.style.transform = `translate(${destX}px, ${destY}px) scale(0.5) rotate(${Math.random()*360}deg)`;
        heart.style.opacity = 0;
    }, 50);

    setTimeout(() => heart.remove(), 1600);
}
