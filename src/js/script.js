// 말풍선 생성
function createTooltip(e, text) {
    const tooltip = document.createElement("div")
    tooltip.style.display = "block"
    tooltip.style.position = "absolute"
    tooltip.style.backgroundColor = "#fff"
    tooltip.style.border = "1px solid #ddd"
    tooltip.style.padding = "10px"
    tooltip.style.borderRadius = "10px"
    tooltip.style.width = "auto" // width를 auto로 설정
    tooltip.style.maxWidth = "200px" // 최대 너비를 설정
    tooltip.style.opacity = 0 // 초기 투명도를 0으로 설정
    tooltip.style.transform = "scale(0)" // 초기 크기를 0으로 설정
    tooltip.style.transition = "all 0.3s ease-out" // 트랜지션 효과 추가
    tooltip.innerHTML = text
    document.body.appendChild(tooltip)
    // 툴팁의 크기를 계산하여 위치를 조정합니다.
    tooltip.style.left = `${e.pageX - tooltip.offsetWidth / 2}px`
    tooltip.style.top = `${e.pageY - tooltip.offsetHeight}px`
    // 투명도와 크기를 변경하여 툴팁을 부드럽게 나타나게 합니다.
    setTimeout(() => {
        tooltip.style.opacity = 1
        tooltip.style.transform = "scale(1)"
    }, 0)
    return tooltip
}

// 말풍선 제거
function removeTooltip(tooltip, delay) {
    setTimeout(() => {
        // 투명도와 크기를 변경하여 툴팁을 부드럽게 사라지게 합니다.
        tooltip.style.opacity = 0
        tooltip.style.transform = "scale(0)"
        // 툴팁을 완전히 제거하기 전에 애니메이션을 완료할 시간을 줍니다.
        setTimeout(() => {
            tooltip.remove()
        }, 300)
    }, delay)
}

window.onload = function () {
    // 모든 path 태그를 선택합니다.
    const countries = document.querySelectorAll("#worldMap path")

    // 모든 path에 대해 클릭 이벤트를 추가합니다.
    countries.forEach((country) => {
        country.addEventListener("click", (e) => {
            const tooltip = createTooltip(e, "🖕")
            removeTooltip(tooltip, 2000)
        })

        // 색상 변경 이벤트를 추가합니다.
        country.addEventListener("mouseover", function () {
            this.style.fill = "#3C3B6E"
        })
        country.addEventListener("mouseout", function () {
            this.style.fill = "#88a4bc"
        })
    })
}
