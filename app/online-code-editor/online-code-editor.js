function collapseSidebar() {
  var x = document.getElementById("sidebar");
  if (x.className === "menu") {
    x.className += " responsive";
  } 
  else {
    x.className = "menu";
  }
  console.log(x);
}

