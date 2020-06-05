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
function inputItems(){
    let text = document.getElementById("experience-input").value;
    let el = document.createElement("p");
    el.innerHTML = text;
    let name;
    if(document.getElementById("work1").selected){
        name = "workOne";
    }else if(document.getElementById("work2").selected){
        name = "workTwo";
    }else if(document.getElementById("work3").selected){
        name = "workThree";
    }else{
        name = "education";
    }

    document.getElementById(name).appendChild(el);
    document.getElementById("experience-input").value = "";
}
// Can remove skills by clicking on them
function removeItem(id){
    document.getElementById(id).style.display = "none";
}
// Change number via the input box
function changeNumber(){
    let numberValue = document.getElementById("number-input").value;
    document.getElementById("number").innerHTML = numberValue;
}