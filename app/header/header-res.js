function collapseHeader(id) {
    var x = document.getElementById(id);
    // for (i of x) {
    if (x.className === "header__container") {
        x.className += " responsive";
    } else {
        x.className = "header__container";
    }

    // console.log(x);
}

function dropdownClick() {
    document.getElementById("dropdownAccount").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.btn-user')) {
        var dropdowns = document.getElementsByClassName("dropdown-user");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}