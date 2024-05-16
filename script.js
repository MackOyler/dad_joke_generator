const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "tnyduVrv7KpMS0bMfG+omg==cN5W9gPxay9fdBgf";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes"

async function getJoke() {
  try {
    jokeEL.innerText = "Loading...";
    btnEL.disable = true;
    btnEL.innerText = "maximizing cringe...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEL.disable = false;
    btnEL.innerText = "TELL ME A JOKE!";

    jokeEL.innerText = data[0].joke;
  } catch (error) {
    jokeEL.innerText = "An error happened, try again.";
    btnEL.disable = false;
    btnEL.innerText = "TELL ME A JOKE!";
    console.log(error);
  }       
}

btnEL.addEventListener("click", getJoke);