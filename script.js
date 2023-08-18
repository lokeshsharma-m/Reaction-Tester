var start = new Date().getTime();


function myfun() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = Math.random() * 400;
    var colors = ["red", "green", "blue", "purple", "yellow", "orange", "pink"];

    if (Math.random() > 0.5) {
        document.getElementById("box").style.borderRadius = "50%";
    }
    else {
        document.getElementById("box").style.borderRadius = "0";

    }
    document.getElementById("box").style.backgroundColor = colors[Math.floor(Math.random() * 7)];
    document.getElementById("box").style.width = width + "px";
    document.getElementById("box").style.height = width + "px";
    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.left = left + "px";
    start = new Date().getTime();
    document.getElementById("box").style.display = "block";
}


document.getElementById("box").onclick = function () {
    document.getElementById("box").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("time").innerHTML = timeTaken + "s";
    setTimeout(myfun, Math.random() * 2000);
}