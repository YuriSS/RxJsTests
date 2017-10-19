
// flip :: (...a -> ...b -> c) -> ...b -> ...a -> c
export const flip = f => (...xs) => (...ys) =>
    f(...ys) (...xs)


// trace :: String -> a -> a
export const trace = msg => x =>
    (console.log(`${msg}: `, x), x)


// pipe :: [(a -> b)] -> a -> b
export const pipe = fs => x =>
    fs.reduce((y,f) => f(y), x)


// compose :: [(a -> b)] -> a -> b
export const compose = fs => x =>
    fs.reduceRight((y,f) => f(y), x)


// identity :: a -> a
export const identity = x => x


// fst :: [a] -> a
export const fst = xs => xs[0]


// scd :: [a] -> a
export const scd = xs => xs[1]


// rand :: Num a => (a, a) -> a
export const rand = (min, max) =>
    Math.floor(Math.random() * max) + min


// execTwice :: (...a -> b) -> ...a -> [b, b]
export const execTwice = f => (...args) =>
    Array(2)
        .fill()
        .map(_ => f.apply(null, args))


// all :: [(a -> Bool)] -> a -> Bool
export const all = fs => x =>
  fs.reduce((res, f) => res && f(x), true)
