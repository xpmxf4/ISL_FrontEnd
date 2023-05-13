setRandomClass();
setInterval(function () {
    setRandomClass();
}, 2000);//number of milliseconds (2000 = 2 seconds)

function setRandomClass() {
    var ul = $("svg");
    var items = ul.find("circle");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.removeClass("banaan");
    items.eq(random).addClass("banaan");
}