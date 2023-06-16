const api = "http://127.0.0.1:3000";

fetch(api + "/statistics/top5")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })