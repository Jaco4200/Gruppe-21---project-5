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

let email = [];
email [0] = "e-mail ikke korrekt";
email [1] = "korrekt e-mail";


function myFunction() {
  let at = document.getElementById("email").value.indexOf("@");

  if (at == -1) {
    alert(email [0]);
    submitOK = "false";
  }
  else {
    alert(email [1])
  }

  if (submitOK == "false") {
    return false;
  }
}

output.innerHTML+="<h1>Tilmeld dig nyhedsbrevet</h1>"
email.sort();
for (let i = 0; i < email.length; i++) {
  output.innerHTML+= "<br>" + emailboks[i];
}

email.reverse();
console.log(email);
