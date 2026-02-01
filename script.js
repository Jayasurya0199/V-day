const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const finalMessage = document.getElementById("final-message");
const buttonsContainer = document.querySelector(".buttons");

// ==================== No Button Runs Away ====================
function moveNoButton() {
    const containerRect = buttonsContainer.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Max positions inside container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    // Random new position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Apply new position
    noButton.style.left = `${newX}px`;
    noButton.style.top  = `${newY}px`;
}

// Desktop hover
noButton.addEventListener("mouseover", moveNoButton);

// Mobile touch
noButton.addEventListener("touchstart", moveNoButton);

// Extra speed (optional: multiple moves per hover)
noButton.addEventListener("mouseover", () => {
    for (let i = 0; i < 2; i++) moveNoButton();
});
