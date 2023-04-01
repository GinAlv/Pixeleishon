const drawingGrid = document.getElementById("drawing-grid");
const colorPicker = document.getElementById("color-picker");
const restart = document.getElementById("restart");
const download = document.getElementById("download");

// Create grid
for (let i = 0; i < 30 * 30; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    drawingGrid.appendChild(pixel);
}

// Color pixels
drawingGrid.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = colorPicker.value;
    }
});

// Restart drawing
restart.addEventListener("click", () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
});

// Download image
download.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 30 * 20;
    canvas.height = 30 * 20;

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel, index) => {
        const row = Math.floor(index / 30);
        const col = index % 30;
        ctx.fillStyle = pixel.style.backgroundColor;
        ctx.fillRect(col * 20, row * 20, 20, 20);
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "pixel-drawing.png";
    link.click();
});
