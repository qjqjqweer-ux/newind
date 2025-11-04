const images = ["🍎", "🍌", "🍇", "🍒", "🍍"];
let currentRound = 0;

function startGame() {
    const name = document.getElementById("username").value.trim();
    if (!name){
        return alert("Введи ім’я!");
    }
    document.getElementById("greeting").textContent = `Привіт, ${name}!`;
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("result").textContent = "";
    currentRound = 0;
    nextRound();
}

function nextRound() {
    if (currentRound >= 3) return;

    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    const round = [[], [], []]; // 3 рядки
    const usedInColumns = [new Set(), new Set(), new Set()]; // для вертикальної унікальності

    for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        let img;
        let attempts = 0;
        do {
        img = images[Math.floor(Math.random() * images.length)];
        attempts++;
        if (attempts > 50) break;
        } while (
        usedInColumns[col].has(img)
        );

        usedInColumns[col].add(img);
        round[row].push(img);

        const cell = document.createElement("div");
        cell.textContent = img;
        grid.appendChild(cell);
    }
    }

    currentRound++;
    checkWin(round);
}

function checkWin(round) {
    const result = document.getElementById("result");

    for (let row = 0; row < 3; row++) {
    const [a, b, c] = round[row];
    if (a === b && b === c) {
        result.textContent = "Перемога!";
        return;
    }
    }

    if (currentRound === 3) {
    result.textContent = "Немає виграшного ряду.";
    }
}
