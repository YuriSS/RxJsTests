
import "./index.html"
import * as cns from "./canvas"


const [ canvas, ctx ] = cns.createCanvas()
document.getElementById("app").append(canvas)


cns.renderScene(ctx)()