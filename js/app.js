const dictionaryLoad = (word) => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayDictionary(data))
    .catch((err) => console.log(err));
};
// --------------display show section---------------
const displayDictionary = (data) => {
  // word text added
  const details = document.getElementById("div");
  details.innerHTML = "";
  const wordField = document.getElementById("word-filed");
  wordField.innerHTML = `${data[0].word}`;
  //   meanings section
  const loop = data[0].meanings;
  loop.forEach((element) => {
    console.log(element.synonyms);
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    detailsDiv.innerHTML = `
    <div class="noun">
        <div class="noun-design">
            <h4>${element.partOfSpeech}</h4>
            <div class="samp"></div>
        </div>
        <div class="noun-text">
            <p><samp class="bold">Meaning : </samp>${
              element.definitions[0].definition
            }</p>
            <p><samp class="bold">Synonyms : </samp>${
              element.synonyms ? element.synonyms : "No Synonyms"
            }</p>
            <p><samp class="bold">Antonyms : </samp></p>
         </div>
    </div>
    `;
    details.appendChild(detailsDiv);
  });
};

// -------------search btn section-------------

const searchBtn = () => {
  const inputField = document.getElementById("inp-word");
  const inputFieldValue = inputField.value;
  dictionaryLoad(inputFieldValue);
  inputField.value = "";
};
dictionaryLoad("hello");
