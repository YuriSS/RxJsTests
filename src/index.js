
import "index.html"
import * as cns from "canvas"
import * as Vector from "models/Vector"
import * as h from "helpers"
import * as Direction from "models/Direction"


const [ canvas, ctx ] = cns.createCanvas()
document.getElementById("app").append(canvas)


// createPoint :: String a => a -> Vector a
const createPoint = str =>
    Vector.of.apply(null, str.split(" "))
        .map(([x, y]) => [ Number(x), Number(y) ])
        .concat(Vector.of(2, 2))
        .map(h.trace("Vector of"))


const render = cns.renderScene(ctx)

// point :: Num a => Vector a
const point = createPoint("1 1")

render(Direction.Neutral.concat(point).d)