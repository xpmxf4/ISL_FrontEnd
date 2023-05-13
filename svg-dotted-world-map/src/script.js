setRandomClass();

setInterval(function () {
    setRandomClass();
    console.log("fuck")
}, 3000); // number of milliseconds (1000 = 1 seconds)

function setRandomClass() {
    var ul = document.querySelector("svg");
    var items = ul.querySelectorAll("circle");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.forEach(function (item) {
        item.classList.remove("banaan");
    });
    items[random].classList.add("banaan");
}
