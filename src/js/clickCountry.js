import { toggleSidebar } from "./sidebar.js"

const pathTags = Array.from(document.getElementsByClassName("sm_state"))
const endPoint = "https://ig6oli6355.execute-api.ap-northeast-2.amazonaws.com/dev"

const fetchCountryData = async (toCountry) => {
    try {
        const response = await fetch(endPoint + "/countries", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "CSRF-Token": localStorage.getItem("csrfToken"),
            },
            body: JSON.stringify({
                toCountry: toCountry,
            }),
        })

        const data = await response.json()
    } catch (err) {
        console.error(`Error fetching country data: ${err}`)
    }
}

// check where if it is initial visit
const checkInitialVisit = () => {
    const isInitialVisit = localStorage.getItem("isInitialVisit")

    // if isInitialVisit===true -> set isInitialVisit =false, open sidebar
    if (isInitialVisit == null) {
        console.log("in if");
        localStorage.setItem("isInitialVisit", false)
        toggleSidebar()
    }
}

// Loop through every country elements
pathTags.forEach((el) => {
    // Add event on element
    el.addEventListener("click", () => {
        checkInitialVisit()

        // Get el's full country name from class
        // have to get countryName from sm_state_QA
        let toCountry = el.classList[1].split("_")[2]

        // Fetch data
        fetchCountryData(toCountry)
    })
})
