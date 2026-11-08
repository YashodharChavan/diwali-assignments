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

function floodFill(bitmap, row, col) {
    if(bitmap[row][col]) return;

    bitmap[row][col] = 1;

    floodFill(bitmap, row-1, col);
    floodFill(bitmap, row+1, col);
    floodFill(bitmap, row, col-1);
    floodFill(bitmap, row, col+1);
}

floodFill(bitmap, row, col)

console.table(bitmap)