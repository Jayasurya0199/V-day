const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const finalMessage = document.getElementById("final-message");
const body = document.body;

// ==================== No Button Runs Away (Faster & Smoother) ====================
function moveNoButton() {
    const buttonRect = noButton.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();

    // Max X and Y so button stays inside viewport
    const maxX = bodyRect.width - buttonRect.width - 20; // 20px margin
    const maxY = bodyRect.height - buttonRect.height - 20;

    // Generate random new position (farther jumps for faster movement)
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Apply transform for smooth GPU-accelerated movement
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Desktop: move on mouseover
noButton.addEventListener("mouseover", moveNoButton);

// Mobile: move on touch
noButton.addEventListener("touchstart", moveNoButton);

// Optional: extra speed by moving multiple times per hover
noButton.addEventListener("mouseover", () => {
    for (let i = 0; i < 2; i++) moveNoButton();
});

// ==================== Yes Button Click ====================
yesButton.addEventListener("click", () => {
    finalMessage.style.display = "block";

    // Center of container
    const container = document.querySelector(".container");
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Explosion of 30 hearts
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

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

// ==================== Heart Explosion Function ====================
function createExplosionHeart(x, y) {
    const heart = document.createEle
