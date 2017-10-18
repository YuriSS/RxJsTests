
// flip :: (a -> b -> c) -> b -> a -> c
export const flip = f => x => y =>
    f(y) (x)


// trace :: String -> a -> a
export const trace = msg => x =>
    (console.log(`${msg}: `, x), x)