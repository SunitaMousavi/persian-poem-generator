function generatepoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Listen to this reed as it is grieving",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let generate = document.querySelector("#generate");
generate.addEventListener("submit", generatepoem);
