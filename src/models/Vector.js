
import * as h from "helpers.js"


// concat :: Num a => Vector a -> Vector a -> Vector a
export const concat = ({ x, y }) => ({ x: x2, y: y2 }) =>
    Vector(x + x2, y + y2)


// map :: ([a, a] -> [b, b]) -> Vector a -> Vector b
export const map = f => ({ x, y }) =>
    Vector.apply(Vector, f([ x, y ]))


// Vector :: (a, a) -> Vector a
const Vector = (x, y) => (
    { x
    , y
    , concat: concat({ x, y })
    , map: h.flip(map) ({ x, y })
    }
)


// of :: (a, a) -> Vector a
export const of = Vector


// origin :: Num a => Vector a
export const origin = of(0, 0)