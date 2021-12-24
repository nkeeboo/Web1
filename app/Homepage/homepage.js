function popUp() {
    // Get the popup
    var popup = document.getElementById("popup");
    var btnClose = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup
        popup.style.display = "block";

        btnClose.onclick = function () {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
        window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
    console.log(popup);
}
function changeNumber(){
    var num = document.getElementById('number').value.trim();
    if (num == "") {
        document.getElementById("goalNumber").innerText = 0;
    }
    else
        document.getElementById("goalNumber").innerText = num;
}
function changeType(){
    var list = document.getElementsByName("type");
    var num = document.getElementById('number').value.trim();
    if (num)
    document.getElementById("goalType").innerText = " " + (num > 1 ? list[0].value + "s" : list[0].value);
    console.log(list[0]);
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