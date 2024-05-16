const btnEL = document.getElementById("btn")

const apiKey = "tnyduVrv7KpMS0bMfG+omg==cN5W9gPxay9fdBgf";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes"

async function getJoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    console.log(data);
}

btnEL.addEventListener("click", getJoke);