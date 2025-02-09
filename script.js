function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let button = document.getElementById("noButton");

    if (!button.style.transition) {
        button.style.transition = "left 0.3s ease, top 0.3s ease";
    }

    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.getElementById("noButton").addEventListener("touchstart", moveButton);
