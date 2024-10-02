import "./style.css";

const render = document.querySelector("#render");
const ctx = render.getContext("2d");

ctx.clearRect(0, 0, 400, 400);
ctx.strokeStyle = "white";

let i = 0;
function draw() {
  // clear the canvas
  ctx.clearRect(0, 0, 400, 400);

  const head = new Path2D();
  head.arc(i, 125, 25, 0, 2 * Math.PI);
  ctx.stroke(head);

  const body = new Path2D();
  body.rect(i - 1, 150, 3, 100);
  ctx.stroke(body);

  const leftArm = new Path2D();
  leftArm.moveTo(i, 150);
  leftArm.lineTo(-50 + i, 200);
  ctx.stroke(leftArm);

  const rightArm = new Path2D();
  rightArm.moveTo(i, 150);
  rightArm.lineTo(50 + i, 200);
  ctx.stroke(rightArm);

  const leftLeg = new Path2D();
  leftLeg.moveTo(i, 250);
  leftLeg.lineTo(-50 + i, 350);
  ctx.stroke(leftLeg);

  const rightLeg = new Path2D();
  rightLeg.moveTo(i, 250);
  rightLeg.lineTo(50 + i, 350);
  ctx.stroke(rightLeg);

  i++;
  if (i > 400) {
    i = -0;
  }

  // call the function again
  requestAnimationFrame(draw);
}

// call the function for the first time
draw();
