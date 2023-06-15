const pathTags = document.getElementsByClassName("sm_state");

// Loop through every country elements
for (let i = 0; i < pathTags.length; i++) {
    // Get each element
    const el = pathTags.item(i);

    // Add event on element
    el.addEventListener("click", async () => {
        // Get el's full country name from class
        // have to get countryName from sm_state_QA
        let toCountry = el.classList[1].split("_")[2];
        console.log(toCountry)

        // await fetch("https://ig6oli6355.execute-api.ap-northeast-2.amazonaws.com/dev/countries", {
        await fetch("http://127.0.0.1:3000/countries", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "CSRF-Token": localStorage.getItem("csrfToken"),
            },
            body: JSON.stringify({
                "toCountry": toCountry,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
}