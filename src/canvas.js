
import * as Vector from "models/Vector"

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


// renderScene :: Num a => Context -> Vector a -> Context
export function renderScene(ctx) {
    return function(point) {
        renderBackground(ctx)
        renderPoint(ctx, point)
        return ctx
    }
}


// renderBackground :: (Context, String) -> Context
function renderBackground(ctx, color = "#EEE") {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    return ctx
}


// renderPoint :: (Context, Vector a, String) -> Context
function renderPoint(ctx, point = Vector.origin, color = "#333") {
    const x = point.x * SCALE
    const y = point.y * SCALE
    ctx.fillStyle = color
    ctx.fillRect(x, y, SCALE, SCALE)
    return ctx
}