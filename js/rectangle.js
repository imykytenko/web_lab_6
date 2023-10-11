function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (!isNaN(length) && !isNaN(width)) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        const diagonal = Math.sqrt(length ** 2 + width ** 2);

        document.getElementById('perimeterResult').textContent = perimeter;
        document.getElementById('areaResult').textContent = area;
        document.getElementById('diagonalResult').textContent = diagonal.toFixed(2);
    } else {
        document.getElementById('perimeterResult').textContent = '';
        document.getElementById('areaResult').textContent = '';
        document.getElementById('diagonalResult').textContent = '';
    }
}
