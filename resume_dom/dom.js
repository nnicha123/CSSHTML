// h1 = document.createElement("h1");
// h1.innerHTML = "hello";
// document.body.appendChild(h1);

function darkMode() {
    document.body.style.backgroundColor = "rgb(25, 39, 51)";
    document.body.style.color = "white";
    document.getElementById("head").style.backgroundColor = "white";
    document.getElementById("head").style.color = "rgb(25, 39, 51)";
    document.getElementsByClassName("social")[0].style.color = "rgb(25, 39, 51)";
    document.getElementsByClassName("social")[0].style.backgroundColor = "whitesmoke";
    document.getElementsByClassName("icon-top")[0].style.color = "rgb(25, 39, 51)";
    document.getElementsByClassName("icon-top")[1].style.color = "rgb(25, 39, 51)";
    document.getElementsByClassName("icon-top")[2].style.color = "rgb(25, 39, 51)";
    document.getElementsByClassName("icon-top")[3].style.color = "rgb(25, 39, 51)";
    document.querySelector("button").style.backgroundColor = "whitesmoke";
    document.querySelector("button").style.color = "rgb(25, 39, 51)";
}
function toggleDark() {
    var element = document.body;
    var newhead = document.getElementsByClassName("header")[0];
    var socialEl = document.getElementsByClassName("social")[0];
    socialEl.classList.toggle("social-dark-mode");
    newhead.classList.toggle("header-dark-mode");
    element.classList.toggle("dark-mode");
}
function inputItems() {
    let text = document.getElementById("experience-input").value;
    let el = document.createElement("p");
    el.innerHTML = text;
    let name;
    if (document.getElementById("work1").selected) {
        name = "workOne";
    } else if (document.getElementById("work2").selected) {
        name = "workTwo";
    } else if (document.getElementById("work3").selected) {
        name = "workThree";
    } else {
        name = "education";
    }

    document.getElementById(name).appendChild(el);
    document.getElementById("experience-input").value = "";
}
// Can remove skills by clicking on them
function removeItem(id) {
    document.getElementById(id).style.display = "none";
}
// Change number via the input box
function changeNumber() {
    let numberValue = document.getElementById("number-input").value;
    let name;
    if (document.getElementById("Number").selected) {
        name = "number";
        document.getElementsByClassName("button-number")[0].innerHTML = "Click to update number";
    } else if (document.getElementById("Email").selected) {
        name = "email";
        document.getElementsByClassName("button-number")[0].innerHTML = "Click to update email";
    } else if (document.getElementById("Location").selected) {
        name = "location";
        document.getElementsByClassName("button-number")[0].innerHTML = "Click to update location";
    }
    document.getElementById(name).innerHTML = numberValue;
}