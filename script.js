const main = document.getElementById("app");
Task.mainContainer = main;

const t1 = new Task(`Write a JavaScript program to draw the following rectangular shape.
Expected Output :
https://www.w3resource.com/w3r_images/rectagular-shape.png`)
/** @param {HTMLCanvasElement} canvas */
t1.drawer = (canvas, w, h) => {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(0, 0, w, h); //cover all in black

    let rectSize = Math.min(w, h) / 1.8; //calc rect size in relation to canvas size
    //clear central rect (white)
    ctx.clearRect(
        //calc the X Y pos for an center align req
        w / 2 - rectSize / 2,
        h / 2 - rectSize / 2,
        rectSize,
        rectSize);

    rectSize = Math.min(w, h) / 2; //calc rect size in relation to canvas size
    //set rect path
    ctx.rect(
        //calc the X Y pos for an center align req
        w / 2 - rectSize / 2,
        h / 2 - rectSize / 2,
        rectSize,
        rectSize)
    ctx.stroke() //draw that path
}


const t2 = new Task(`Write a JavaScript program to draw a circle.
Expected Output :
https://www.w3resource.com/w3r_images/circle.png`)
/** @param {HTMLCanvasElement} canvas */
t2.drawer = (canvas, w, h) => {
    const ctx = canvas.getContext("2d");
    const circleR = Math.min(w, h) / 3; //calc rect size in relation to canvas size
    ctx.arc(
        //calc the X Y pos for an center align req
        w / 2,
        h / 2,
        circleR,
        0, 2 * Math.PI)
    ctx.strokeStyle = "red"
    ctx.lineWidth = 1.5
    ctx.stroke()
}


const t3 = new Task(`Write a JavaScript program to draw two intersecting rectangles, one of which has alpha transparency.
https://www.w3resource.com/w3r_images/intersecting-rectangles.png`)
/** @param {HTMLCanvasElement} canvas */
t3.drawer = (canvas, w, h) => {
    const ctx = canvas.getContext("2d");

    let rectSize = Math.min(w, h) / 2; //calc rect size in relation to canvas size

    //set red rect
    ctx.fillStyle = "red"
    ctx.fillRect(
        //calc the X Y pos for an center align req
        ~~(w / 1.75 - rectSize),
        ~~(h / 1.666 - rectSize),
        rectSize,
        rectSize)

    //set blue
    ctx.fillStyle = "rgba(0,0,255,0.5)"
    ctx.fillRect(
        //calc the X Y pos for an center align req
        ~~(w / 1.75 - rectSize / 2),
        ~~(h / 1.666 - rectSize / 2),
        rectSize,
        rectSize)
}


const t4 = new Task(`Write a JavaScript program to draw the following right-angled triangle.
Expected Output :
https://www.w3resource.com/w3r_images/right-angled-triangle.png`)
/** @param {HTMLCanvasElement} canvas */
t4.drawer = (canvas, w, h) => {
    const ctx = canvas.getContext("2d");

    const triangleSize = Math.min(w, h) / 2; //calc rect size in relation to canvas size
    const startPoint = [~~(w / 2 - triangleSize / 2), ~~(h / 2 - triangleSize / 2)]

    ctx.beginPath()
    //set start point for the triangle
    ctx.moveTo(startPoint[0], startPoint[1]);
    //move to the right bottom point
    ctx.lineTo(startPoint[0] + triangleSize,
        startPoint[1] + triangleSize)
    //move to left bottom point 
    ctx.lineTo(startPoint[0],
        startPoint[1] + triangleSize)

    ctx.fill()
}


const t5 = new Task(`Write a JavaScript program to draw the following diagram [use moveto() function].
Expected Output :
https://www.w3resource.com/w3r_images/draw-fun.png`)
/** @param {HTMLCanvasElement} canvas */
t5.drawer = (canvas, w, h) => {
    const ctx = canvas.getContext("2d");

    const size = Math.min(w, h) / 3; //calc rect size in relation to canvas size
    const center = [w / 2, h / 2]
    ctx.beginPath();
    ctx.arc(center[0], center[1], size, 0, 2 * Math.PI) //main circle

    const smileSize = size * 0.75;
    ctx.moveTo(center[0] + smileSize, center[1]) //move to some point on the next circle tp prevent ghost lines from the path
    ctx.arc(center[0], center[1], smileSize, 0, Math.PI) //mouth circle

    const eyeSize = size / 10;
    const eyeOffset = 0.25 * size + eyeSize
    ctx.moveTo(center[0] - eyeOffset - eyeSize, center[1] - eyeSize * 2) //move to some point on the next circle tp prevent ghost lines from the path
    ctx.arc(center[0] - eyeOffset,
        center[1] - eyeSize * 2,
        eyeSize,
        0, 2 * Math.PI) //left eye

    ctx.arc(center[0] + eyeOffset,
        center[1] - eyeSize * 2,
        eyeSize,
        0, 2 * Math.PI) //left eye

    ctx.stroke()
}


const t6 = new Task(`Write a JavaScript program to draw the following diagram [diagonal, white to black circles].
Expected Output :
https://www.w3resource.com/w3r_images/diagonal-white-to-black-circles.png`)
/** @param {HTMLCanvasElement} canvas */
t6.drawer = (canvas, w, h) => {
    const ctx = canvas.getContext("2d");
    const circleCount = 6;
    const size = Math.min(w, h) / circleCount * 0.4;

    for (let i = 0; i < circleCount; i++) {
        ctx.beginPath()


        const circleCenter = [w / 2 - circleCount * size + i * size * 2 + size,
        h / 2 - circleCount * size + i * size * 2 + size]
        ctx.moveTo(circleCenter[0] + size,
            circleCenter[1])
        ctx.arc(circleCenter[0],
            circleCenter[1],
            size, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(0, 0, 0, ${i / (circleCount - 1)})`
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
}