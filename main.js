var shapes = ['Square', 'Oval', 'Circle', 'Triangle'];
var lastClicked;

document.getElementById('startGame').addEventListener('click', timeDelay);
document.getElementById('divShape').addEventListener('click', reactionTime);
document.getElementById('divShape').addEventListener('click', timeDelay);

function timeDelay(){
  document.getElementById('divShape').className = "";
  var delay = Math.random()*5000;
  var interval = setTimeout(divShape, delay);
}

function divShape(){
  var shape = Math.floor(Math.random()*4);
  var left = Math.round(Math.random()*75);
  var top = Math.round(Math.random()*375);
  document.getElementById('divShape').className = "shapeShifter" + shapes[shape];
  document.getElementById('divShape').style.top = top + "px";
  document.getElementById('divShape').style.left = left + "%";
  lastClicked = new Date().getTime();
}

function reactionTime(){
  var timeOfClick = new Date().getTime();
  document.getElementById('reactionTime').innerHTML = "Your Reaction Time is: <b>" + ((timeOfClick - lastClicked)/1000 + "</b> seconds");
}
