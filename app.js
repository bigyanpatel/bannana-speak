var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL (input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(input) {
    console.log("error occured", error);
    alert("something is wrong with the server! Try agian after some time")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
         .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);