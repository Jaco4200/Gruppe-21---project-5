console.log("js is running :)");

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
}

function on3() {
  document.getElementById("overlay3").style.display = "block";
}

function off3() {
  document.getElementById("overlay3").style.display = "none";
}

function on4() {
  document.getElementById("overlay4").style.display = "block";
}

function off4() {
  document.getElementById("overlay4").style.display = "none";
}



function myFunction() {
  let at = document.getElementById("email").value.indexOf("@");

  if (at == -1) {
    alert("e-mail ikke korrekt!");
    submitOK = "false";
  }
  else {
    alert("korrekt e-mail")
  }

  if (submitOK == "false") {
    return false;
  }
}
