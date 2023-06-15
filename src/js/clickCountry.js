const pathTags = document.getElementsByClassName("sm_state");
const jsonPath = "/src/json/countries.json";
let fromCountry = null;

// Get user's country
fetch('http://api.ipapi.com/220.70.232.230?access_key=354b20f8afd1c43661ac7b5262c9aae7')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        return data.country_code;
    }).then(data => {
        fetch(jsonPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status + " " + res.statusText);
                }
                return res.json();
            })
            .then(res => {
                fromCountry = res[data];
            }
            )
    })
    .catch(err => {
        console.error('There has been a problem with your fetch operation:', err);
    });



// Loop through every country elements
for (let i = 0; i < pathTags.length; i++) {
    // Get each element
    const el = pathTags.item(i);

    // Add event on element
    el.addEventListener("click", async () => {
        // Get el's full country name from class
        // have to get countryName from sm_state_QA
        let toCountry = el.classList[1].split("_")[2];

        // Match with countries.json
        await fetch(jsonPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status + " " + res.statusText);
                }
                return res.json();
            })
            .then(data => {
                toCountry = data[toCountry];
            })
            .catch(err => {
                console.log(err);
            })

        // await fetch("https://ig6oli6355.execute-api.ap-northeast-2.amazonaws.com/dev/countries", {
        await fetch("http://127.0.0.1:3000/countries", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "CSRF-Token": localStorage.getItem("csrfToken"),
            },
            body: JSON.stringify({
                "fromCountry": "Korea",
                "toCountry": "United Kingdom",
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
}