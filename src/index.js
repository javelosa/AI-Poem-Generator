function makePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-content", {
    strings: ["To be or not to be."],
    autoStart: true,
    delay: 1,
    cursor: null,
  });
  poemGenerator.innherHTML = "To be or not to be.";
}

let poemFormElement = document.querySelector("#poem-creator");
poemFormElement.addEventListener("submit", makePoem);
