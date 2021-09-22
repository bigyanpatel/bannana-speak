var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

function clickEventHandler() {
    console.log("clicked!!")
    console.log("Input is:", txtInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler)