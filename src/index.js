function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function makePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#topic-instructions");
  let poemElement = document.querySelector("#poem");
  let apiKey = "04a6b97ba438oct66060d748685ff445";
  let context =
    "You are an AI poet and everytime gives you a topic, you tell a four line poem about the topic. Separate each line with a <br />. Make sure to follow the topic instructions.";
  let prompt = `Topic instructions: Generate a poem about ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating poem about <strong>${instructionsInput.value}</strong><span class="loading-dots"><span>.</span><span>.</span><span>.</span>
  </span>`;

  //build API URL
  //Make a call to the API
  axios.get(apiUrl).then(displayPoem);
  //Display the generate poem
}

let poemFormElement = document.querySelector("#poem-creator");
poemFormElement.addEventListener("submit", makePoem);
