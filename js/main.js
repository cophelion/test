var percentage = document.querySelectorAll(".stats .container .outer .inner .percentage");
percentage.forEach(function (percentage) {
    var counter = 0;
let number = percentage.getAttribute("data-percentage");
    setInterval(() => {
    if (counter == number) {
        clearInterval;
        
    }
    else {
        counter+=100;
    percentage.innerHTML = `${counter} +`;
    }
}, 10000/parseFloat(number))
})
percentage.forEach(function (percentage) {
    var perc = percentage.getAttribute('data-num');
    document.documentElement.style.setProperty("--per", (450 - 450 * parseFloat(perc/100)));
})
var nextbtn = document.getElementById('next');
var prevbtn = document.getElementById('prev');
var back = document.querySelector(".head_bottom");
nextbtn.onclick = next;
prevbtn.onclick = prev;
function next() {
    document.documentElement.style.setProperty("background-image",url("../images/header.jpg")) ;
}
function prev() {
    console.log("previous");
}