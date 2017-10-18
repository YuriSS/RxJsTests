
import "index.html"
import * as cns from "canvas"
import * as Vector from "models/Vector"
import * as h from "helpers"
import * as Direction from "models/Direction"
import { Observable, BehaviorSubject } from "rxjs"


const [ canvas, ctx ] = cns.createCanvas()
document.getElementById("app").append(canvas)


const render = cns.renderScene(ctx)

// randomBehavior :: _ -> Num
const randomBehavior = _ => h.execTwice(h.rand) (0, 30)


// randomPoint$ :: Num a => Observable (Vector a)
const randomPoint$ = new BehaviorSubject(randomBehavior())
    .map(([ x, y ]) => Vector.of(x, y))


// player$
const player$ = Observable.interval(1000 / 60)
    .withLatestFrom(randomPoint$)
    .map(h.scd)
    .scan
        ( (point, enemy) =>
            Direction.of(point.concat(enemy))
                .move(point)
        , Vector.origin
        )


const scene$ = player$
    .combineLatest(randomPoint$)


// nextRandomPoint$ :: Num a => Folded (Observable (Vector a))
const nextRandomPoint$ = Observable.interval(1000)
    .mapTo(randomBehavior)
    .do(f => randomPoint$.next(f()))
    .subscribe()


scene$.subscribe(render)