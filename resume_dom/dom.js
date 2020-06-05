// h1 = document.createElement("h1");
// h1.innerHTML = "hello";
// document.body.appendChild(h1);
document.querySelector("body").style.backgroundColor = rgb(25, 39, 51);
document.getElementById("head").style.backgroundColor = "red";
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