//Declaring Variables
var inputText = document.querySelector("#inputText");
var btn = document.querySelector("#btn");
var output = document.querySelector(".output");

//Implementing Server URL
var serverURL = "https://api.funtranslations.com/translate/navi.json";

function translatedUrl(text){
    return serverURL + "?" + "text=" + text;
}

function clickHandler(){
    var txtInput = inputText.value;
    fetch(translatedUrl(txtInput))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        output.innerText = outputText;
    });
}

btn.addEventListener("click", clickHandler);