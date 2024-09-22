const square = document.getElementById("square");
const coordinates = document.getElementById("coordinates");

square.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;

    coordinates.textContent = `X = ${x}, Y = ${y}`;
});

square.addEventListener("mouseleave", function() {
    coordinates.textContent = "X = 0, Y = 0";
});

