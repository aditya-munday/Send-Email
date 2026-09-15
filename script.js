var btn = document.getElementById("btn");
var out = document.getElementById("out");

btn.addEventListener("click", function() {
  var to = document.getElementById("to").value;
  var subject = document.getElementById("subject").value;
  var msg = document.getElementById("msg").value;
  
  if (to === "") {
    out.innerHTML = "Enter email!";
    return;
  }
  
  var link = "mailto:" + to + "?subject=" + subject + "&body=" + msg;
  window.location.href = link;
  out.innerHTML = "Done!";
});