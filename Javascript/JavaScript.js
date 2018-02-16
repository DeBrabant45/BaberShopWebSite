// Mobile nav
function openNav() {
    document.getElementById("nav-side").style.width = "250px";
}

function closeNav() {
    document.getElementById("nav-side").style.width = "0";
}

// Displaying Todays date with gym time
function ourHours() {
    var date = new Date();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = weekday[date.getDay()];
    if (today == 'Friday') {
        var hours = '8:00AM - 7:30PM';
    }
    else if (today == 'Saturday') {
        var hours = '9:00AM - 5:00PM';
    }
    else {
        var hours = '9:00AM - 8:30PM';
    }
    return today + ' ' + hours;
};

document.getElementById("hours").innerHTML = ourHours();



////Cal Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}