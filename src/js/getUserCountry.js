const jsonPath = "/src/json/countries.json";

// get user's country from IP
const getUserCountry = async () => {
    try {
        const ipResponse = await fetch(
            "http://api.ipapi.com/220.70.232.230?access_key=354b20f8afd1c43661ac7b5262c9aae7"
        );
        if (!ipResponse.ok) {
            throw new Error("Network response was not ok");
        }
        const ipData = await ipResponse.json();
        const code = ipData.country_code;

        const jsonResponse = await fetch(jsonPath);
        if (!jsonResponse.ok) {
            throw new Error(jsonResponse.status + " " + jsonResponse.statusText);
        }
        const jsonData = await jsonResponse.json();
        return jsonData[code];
    } catch (error) {
        console.error("error : ", error);
        return null;
    }
};

export default getUserCountry;
