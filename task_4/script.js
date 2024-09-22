const resizableBox = document.getElementById('resizable');
const widthSlider = document.getElementById('widthSlider');
const heightSlider = document.getElementById('heightSlider');
const rotateSlider = document.getElementById('rotateSlider');

widthSlider.addEventListener('input', () => {
    const width = widthSlider.value;
    resizableBox.style.width = `${width}px`;
});

heightSlider.addEventListener('input', () => {
    const height = heightSlider.value;
    resizableBox.style.height = `${height}px`;
});

rotateSlider.addEventListener('input', () => {
    const angle = rotateSlider.value;
    resizableBox.style.transform = `rotate(${angle}deg)`;
});
