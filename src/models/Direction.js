
import * as Vector from "models/Vector"
import * as h from "helpers"

// LEFT_DIR :: Num a => Vector a
const LEFT_DIR = Vector.of(-1, 0)

// RIGHT_DIR :: Num a => Vector a
const RIGHT_DIR = Vector.of(1, 0)

// UP_DIR :: Num a => Vector a
const UP_DIR = Vector.of(0, -1)

// DOWN_DIR :: Num a => Vector a
const DOWN_DIR = Vector.of(0, 1)

// NEUTRAL_DIR :: Num a => Vector a
const NEUTRAL_DIR = Vector.origin


// fold :: Num a => [([ String, Vector a ] -> c)] -> Direction b -> c
export const fold = (...args) => ({ name, d, i }) =>
    args[i] && args[i]([ name, d ])


// Direction :: Num a => a -> (String, Vector a, Bool) -> Direction b
const Direction = i => (name, d, neutral = false) => (
    { name
    , d
    , i
    , isNeutral: neutral
    , move: Vector.concat(d)
    , fold: h.flip(fold)([ name, d ])
    }
)


// Left :: Direction a
export const Left = Direction(0) ("Left", LEFT_DIR)

// Right :: Direction a
export const Right = Direction(1) ("Right", RIGHT_DIR)

// Up :: Direction a
export const Up = Direction(2) ("Up", UP_DIR)

// Down :: Direction a
export const Down = Direction(3) ("Down", DOWN_DIR)

// UpLeft :: Direction a
export const UpLeft = Direction(4) ("UpLeft", UP_DIR.concat(LEFT_DIR))

// DownLeft :: Direction a
export const DownLeft = Direction(5) ("DownLeft", DOWN_DIR.concat(LEFT_DIR))

// UpRight :: Direction a
export const UpRight = Direction(7) ("UpRight", UP_DIR.concat(RIGHT_DIR))

// DownRight :: Direction a
export const DownRight = Direction(8) ("DownRight", DOWN_DIR.concat(RIGHT_DIR))

// Neutral :: Direction a
export const Neutral = Direction(9) ("Neutral", NEUTRAL_DIR, true)


// validateRight :: Num a => Vector a -> Bool
const validateRight = distance => distance.x < 0


// validateLeft :: Num a => Vector a -> Bool
const validateLeft = distance => distance.x > 0


// validateUp :: Num a => Vector a -> Bool
const validateUp = distance => distance.y > 0


// validateDown :: Num a => Vector a -> Bool
const validateDown = distance => distance.y < 0


// metas :: Num a => [[ (Vector a -> Bool), Direction b ]]
const metas =
    [ [ h.all([ validateUp, validateLeft ]), UpLeft ]
    , [ h.all([ validateUp, validateRight ]), UpRight ]
    , [ h.all([ validateDown, validateLeft ]), DownLeft ]
    , [ h.all([ validateDown, validateRight ]), DownRight ]
    , [ validateRight, Right ]
    , [ validateLeft, Left ]
    , [ validateUp, Up ]
    , [ validateDown, Down ]
    ]


// of :: Num a => Vector a -> Direction a
export const of = v =>
    metas.reduce
        ( (dirAcc, [ f, dir ]) =>
            (dirAcc.isNeutral && f(v)) ? dir : dirAcc
        , Neutral
        )
