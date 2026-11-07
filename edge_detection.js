const r = require("raylib")
const { bitmap } = require("./bitmap")

function setup() {
    const world = {
        screen: {},
        cellSize: 40,
        threshold: 10
    }

    world.screen.width = bitmap.width * world.cellSize;
    world.screen.height = bitmap.height * world.cellSize;

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(world.screen.width, world.screen.height, "EDGE DETECTION")
    r.SetTargetFPS(60)

    return world;
}

function isRunning() {
    return !r.WindowShouldClose()
}

function teardown() {
    r.CloseWindow()
}

function grayscale(brightness) {
    return {
        r: brightness,
        g: brightness,
        b: brightness,
        a: 255
    }
}

function drawPixel(brightness, x, y, size) {
    const posX = x * size;
    const posY = y * size;
    const color = grayscale(brightness);

    r.DrawRectangle(posX, posY, size, size, color)
}

function drawBitmap(world, bitmap) {
    const { points } = bitmap;

    for (let y = 0; y < bitmap.height; y++) {
        for (let x = 0; x < bitmap.width; x++) {
            drawPixel(points[y][x], x, y, world.cellSize);
        }
    }
}

function highlightVerticalEdge(world, bitmap) {
    const { points } = bitmap;
    const size = world.cellSize;

    for (let y = 0; y < bitmap.height; y++) {
        for (let x = 1; x < bitmap.width; x++) {
            const prevPoint = points[y][x - 1];
            const currPoint = points[y][x];

            if (Math.abs(prevPoint - currPoint) > world.threshold) {
                r.DrawRectangle(x * size, y * size, 3, size, r.RED);
            }
        }
    }
}

function highlightHorizontalEdge(world, bitmap) {
    const { points } = bitmap;
    const size = world.cellSize;

    for (let x = 0; x < bitmap.width; x++) {
        for (let y = 1; y < bitmap.height; y++) {
            const prevPoint = points[y - 1][x];
            const currPoint = points[y][x];
            
            if (Math.abs(prevPoint - currPoint) > world.threshold) {
                r.DrawRectangle(x * size, y * size, size, 4, r.RED);
            }
        }
    }
}

function highlightEdges(world, bitmap) {
    highlightVerticalEdge(world, bitmap);
    highlightHorizontalEdge(world, bitmap);
}

function draw(world) {
    r.BeginDrawing();
    drawBitmap(world, bitmap);

    highlightEdges(world, bitmap)

    r.EndDrawing();
}

function update() {

}

function loop(world) {
    while (isRunning()) {
        update(world);
        draw(world)
    }
}

function main() {
    const world = setup();
    loop(world)
    teardown();
}


main();
