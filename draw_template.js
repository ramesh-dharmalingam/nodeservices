const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(320,320)
const ctx = canvas.getContext('2d')
const results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];
function draw(templId) {
    template(templId);
    return canvas;
  }

function template(templId) {

  var total = results.reduce((sum, {count}) => sum + count, 0);
  var currentAngle = -0.5 * Math.PI;
  for (let result of results) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(100, 100, 100,currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    ctx.lineTo(100, 100);
    ctx.fillStyle = result.color;
    ctx.fill();
  }
  ctx.font = "20px Georgia";
  ctx.fillStyle = "#000000";
  ctx.fillText(templId, 30, 32);
}

module.exports = draw;