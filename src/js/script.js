// 모든 path 태그를 선택합니다.
const countries = document.querySelectorAll("#worldMap path")

// window.onload 를 통해서 모든 요소가 로드된 후에 코드 실행
window.onload = function () {
    countries.forEach(function (country) {
        country.addEventListener("mouseover", function () {
            this.style.fill = "#3C3B6E"
        })
        country.addEventListener("mouseout", function () {
            this.style.fill = "#88a4bc"
        })
    })
}

// 말풍선 생성
function createTooltip(e, text) {
    const tooltip = document.createElement("div")
    tooltip.style.display = "block"
    tooltip.style.position = "absolute"
    tooltip.style.backgroundColor = "#fff"
    tooltip.style.border = "1px solid #ddd"
    tooltip.style.padding = "10px"
    tooltip.style.borderRadius = "10px"
    tooltip.style.left = `${e.pageX}px`
    tooltip.style.top = `${e.pageY}px`
    tooltip.innerHTML = text
    document.body.appendChild(tooltip)
    return tooltip
}

// 말풍선 제거
function removeTooltip(tooltip, delay) {
    setTimeout(() => {
        tooltip.remove()
    }, delay)
}

// 모든 path에 대해 클릭 이벤트를 추가합니다.
countries.forEach((country) => {
    country.addEventListener("click", (e) => {
        const tooltip = createTooltip(e, "🖕")
        removeTooltip(tooltip, 2000)
    })
})
