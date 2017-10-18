
import "index.html"
import * as cns from "canvas"
import * as Vector from "models/Vector"
import * as h from "helpers"


const [ canvas, ctx ] = cns.createCanvas()
document.getElementById("app").append(canvas)


// createPoint :: String a => a -> Vector a
const createPoint = str =>
    Vector.of.apply(null, str.split(" "))
        .map(([x, y]) => [ Number(x), Number(y) ])
        .concat(Vector.of(2, 2))
        .map(h.trace("Vector of"))


// move :: Num a => Vector a -> Vector a -> Context
const move = d => p =>
    cns.renderScene(ctx)(p.concat(d))

// point :: Num a => Vector a
const point = createPoint("1 1")

cns.renderScene(ctx)(point)

setTimeout(move(Vector.of(-1, -1)), 1000, point)

setTimeout(move(Vector.of(-2, -2)), 2000, point)

setTimeout(move(Vector.of(-3, -3)), 3000, point)