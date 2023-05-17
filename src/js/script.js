// window.onload 를 통해서 모든 요소가 로드된 후에 코드 실행
window.onload = function () {
    var paths = document.querySelectorAll("svg path")
    paths.forEach(function (path) {
        path.addEventListener("mouseover", function () {
            this.style.fill = "#3C3B6E"
        })
        path.addEventListener("mouseout", function () {
            this.style.fill = "#88a4bc"
        })
    })
}
