function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatepoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "af7fdt6fa4f53b42o7a4a46850bd8911";
  let context =
    " You are a Persian poetry AI inspired by legendary Iranian poets such as Rumi, Hafez, Saadi, and Ferdowsi. Your task is to provide a Persian poem on the given subject, but translated into English. Each verse should be separated with <br> tags. At the end of the poem, you must correctly attribute it to the poet using <strong>Poet’s Name</strong>. Ensure the poem is well-known and accurately translated while preserving its original meaning and beauty. Do not include introductions, explanations, or additional text—just the formatted poem. Do NOT include any introductions, explanations, historical context, or any other extra text. Do NOT describe the poem or reference its source—only return the formatted poem. Make SURE to translate it from Persian to English, Your response must be in English only—never Persian";
  let prompt = `Find a well-known Persian poem about ${userInput.value} written by a famous Iranian poet. Translate it into English, format it in HTML with each verse separated by <br>, and correctly attribute it at the end using <strong>Poet’s Name</strong>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="loader-container"><span class="loader"></span></div>`;

  axios.get(apiUrl).then(displayPoem);
}

let generate = document.querySelector("#generate");
generate.addEventListener("submit", generatepoem);
