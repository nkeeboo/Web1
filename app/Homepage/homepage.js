// Get the popup
var popup = document.getElementById("myPopup");

// Get the button that opens the popup
var btn = document.getElementById("myCreateTopicBtn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the popup
btn.onclick = function () {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function () {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Điểm danh khi đăng nhập account
function checkin() {
    let today = new Date();
    let date = today.getDay(),
        dateId = "login";
    //   console.log(date);
    // alert("Bạn đã đăng nhập hôm nay!");
    switch (date) {
        case 0:
            dateId += "Sun"; break;
        case 1:
            dateId += "Mon"; break;
        case 2:
            dateId += "Tue"; break;
        case 3:
            dateId += "Wed"; break;
        case 4:
            dateId += "Thu"; break;
        case 5:
            dateId += "Fri"; break;
        case 6:
            dateId += "Sat"; break;
    }
    //   console.log(dateId);
    document.getElementById(dateId).style.background = "var(--button-color)"
}