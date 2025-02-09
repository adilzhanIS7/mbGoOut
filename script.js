function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");

    yesButton.style.pointerEvents = "none";

    if (!noButton.style.transition) {
        noButton.style.transition = "left 0.3s ease, top 0.3s ease";
    }

    let maxX = window.innerWidth * 0.8 - noButton.clientWidth;
    let maxY = window.innerHeight * 0.8 - noButton.clientHeight;

    let x = Math.random() * maxX + window.innerWidth * 0.1;
    let y = Math.random() * maxY + window.innerHeight * 0.1;

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    setTimeout(() => {
        yesButton.style.pointerEvents = "auto";
    }, 500);
}

document.getElementById("noButton").addEventListener("touchstart", moveButton);
