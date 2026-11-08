const bitmap = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

const row = 2;
const col = 2;

function isWithinBoundary(bitmap, row, col) {
    console.log(row)
    return row >= 0 && row < bitmap.length && col >= 0 && col < bitmap[0].length;
}

function floodFill(bitmap, row, col) {
    if (!isWithinBoundary(bitmap, row, col) || bitmap[row][col]) return;

    bitmap[row][col] = 1;

    floodFill(bitmap, row - 1, col);
    floodFill(bitmap, row + 1, col);
    floodFill(bitmap, row, col - 1);
    floodFill(bitmap, row, col + 1);
}

floodFill(bitmap, row, col)

console.table(bitmap)