
// COLS :: Num
const COLS = 50

// ROWS :: Num
const ROWS = 30

// SCALE :: Num
const SCALE = 10

// WIDTH :: Num
const WIDTH = COLS * SCALE

// HEIGHT :: Num
const HEIGHT = ROWS * SCALE


// createCanvas :: _ -> [Canvas, Context]
export function createCanvas() {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = WIDTH
    canvas.height = HEIGHT
    return ([ canvas, ctx ])
}


// renderScene :: Context -> ? -> Context
export function renderScene(ctx) {
    return function(_) {
        renderBackground(ctx)
        return ctx
    }
}


// renderBackground :: (Context, String) -> Context
function renderBackground(ctx, color = "#EEE") {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    return ctx
}