var inputText = document.querySelector(".text-input");
var btnTranslate = document.querySelector(".translate");
var outputBox = document.querySelector(".translated-output");
var resetBtn = document.querySelector(".reset");

var url = "https://api.funtranslations.com/translate/dolan.json?text=";

function translateText() {
  fetch(url + inputText.value)
    .then((res) => res.json())
    .then((res) => (outputBox.innerText = res.contents.translated))
    .catch((err) => (outputBox.innerText = err));
}

btnTranslate.addEventListener("click", translateText);
resetBtn.addEventListener("click", () => {
  inputText.value = "";
  outputBox.innerText = "";
});
