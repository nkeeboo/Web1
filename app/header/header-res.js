function collapseHeader() {
    var x = document.getElementById("navbar");
    // for (i of x) {
    if (x.className === "header__container") {
        x.className += " responsive";
    } else {
        x.className = "header__container";
    }
    // }
    console.log(x);
}