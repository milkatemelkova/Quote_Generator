
  var video = document.getElementById("myVideo");
    
 
  var btn = document.getElementById("myBtn");
  
  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause video";
    } else {
      video.pause();
      btn.innerHTML = "Play video";
    }
  }
  
// API
const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

const API = { get }


const quoteP = document.querySelector("h2.text-main")


function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

// FUNCTIONS

function addQuote(quote) {
    quoteP.innerText = quote;

}

const reloadButton = document.querySelector("button#reload")
reloadButton.addEventListener("click", ()=> getQuotes())

// START PAGE
document.body.onload = getQuotes

