
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

// UPLEFT_DIR :: Num a => Vector a
const UPLEFT_DIR = UP_DIR.concat(LEFT_DIR)

// UPRIGHT_DIR :: Num a => Vector a
const UPRIGHT_DIR = UP_DIR.concat(RIGHT_DIR)

// DOWNLEFT_DIR :: Num a => Vector a
const DOWNLEFT_DIR = DOWN_DIR.concat(LEFT_DIR)

// DOWNRIGHT_DIR :: Num a => Vector a
const DOWNRIGHT_DIR = DOWN_DIR.concat(RIGHT_DIR)

// NEUTRAL_DIR :: Num a => Vector a
const NEUTRAL_DIR = Vector.origin


// concat :: Num a => Vector a -> Direction b -> Direction b
export const concat = p => ({ d, name, i }) =>
    Direction(i) (name, p.concat(d))


// fold :: Num a => [([ String, Vector a ] -> c)] -> Direction b -> c
export const fold = (...args) => ({ name, d, i }) =>
    args[i] && args[i]([ name, d ])


// Direction :: Num a => a -> (String, Vector a) -> Direction b
const Direction = i => (name, d) => (
    { name
    , d
    , i
    , concat: h.flip(concat)({ d, name, i })
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
export const UpLeft = Direction(4) ("UpLeft", UPLEFT_DIR)

// DownLeft :: Direction a
export const DownLeft = Direction(5) ("DownLeft", DOWNLEFT_DIR)

// UpRight :: Direction a
export const UpRight = Direction(7) ("UpRight", UPRIGHT_DIR)

// DownRight :: Direction a
export const DownRight = Direction(8) ("DownRight", DOWNRIGHT_DIR)

// Neutral :: Direction a
export const Neutral = Direction(9) ("Neutral", NEUTRAL_DIR)