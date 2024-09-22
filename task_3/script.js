function generateGrid() {
    const input = document.getElementById("binaryInput").value.trim();
    const container = document.getElementById("gridContainer");
    container.innerHTML = '';

    const isValid = /^[01\s]+$/.test(input);

    if (!isValid) {
        alert("Введені неприпустимі символи. Використовуйте тільки 0 і 1!");
        return;
    }

    const rows = input.split('\n');
    const columns = Math.max(...rows.map(row => row.length));

    if (rows.length > 5) {
        alert("Можна вводити не більше 5 рядків!");
        return;
    }

    for (let row of rows) {
        if (row.length > 10) {
            alert("У кожному рядку повинно бути не більше 10 символів!");
            return;
        }
    }

    container.style.gridTemplateColumns = `repeat(${columns}, 20px)`;

    rows.forEach(row => {
        for (let char of row) {
            const square = document.createElement("div");
            square.classList.add("square");

            if (char === '1') {
                square.classList.add("black"); // Якщо 1, квадрат синій
            } else if (char === '0') {
                square.classList.add("white"); // Якщо 0, квадрат білий
            }

            container.appendChild(square);
        }
    });
}
