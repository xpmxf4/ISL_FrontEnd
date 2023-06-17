const toggleButton = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const statistics = document.getElementsByClassName('statistics')
const worldMap = document.getElementById('worldMap');
const endPoint = "https://ig6oli6355.execute-api.ap-northeast-2.amazonaws.com/dev"

let isOpen = false;

export function toggleSidebar() {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
    worldMap.classList.toggle("dimmed");
    for (let stat of statistics) {
        stat.classList.toggle('open')
    }

    isOpen = !isOpen;

    if (isOpen) {
        fetch(endPoint + "/statistics/top5")  // API URL로 fetch 요청
            .then(response => response.json())  // JSON 형태로 응답을 받음
            .then(data => {

                const statisticsContainer = document.getElementById('statisticsContainer');
                const keys = ['daily', 'weekly', 'monthly', 'all']

                keys.forEach((key, index) => {
                    let html = `<p>${key.toUpperCase()}</p>`
                    data[key].forEach(el => {
                        html += `<p>${el["to_country"]} : ${el["count"]}</p>`
                    })
                    statisticsContainer.children[index].innerHTML = html
                });
            })
            .catch(error => console.error('Error:', error));
    }
}

toggleButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);