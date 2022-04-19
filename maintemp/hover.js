console.log("js is running :)");

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

document.getElementById("readmore").onmouseover = function() {mouseOver()};
document.getElementById("readmore").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("readmore").style.color = "purple";
}

function mouseOut() {
  document.getElementById("readmore").style.color = "blue";
}
