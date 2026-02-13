function startGame() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
}

function yes() {
    document.body.innerHTML = `
        <div style="margin-top:150px;">
            <h1>LEVEL COMPLETE 💖</h1>
            <h2>You unlocked my heart forever ♾️</h2>
        </div>
    `;
}

function moveButton() {
    const btn = document.querySelector(".no-btn");
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);
