
// flip :: (a -> b -> c) -> b -> a -> c
export const flip = f => x => y =>
    f(y) (x)


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


// scd :: [a] -> a
export const scd = xs => xs[1]