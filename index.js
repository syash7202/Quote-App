const apiURL = "https://api.quotable.io/random";

let newQuote = document.querySelector(".quote");
let author = document.querySelector(".author");
const quoteBTN = document.getElementById("new-quote");
const tweetBTN = document.getElementById("tweet");
let bgc = document.querySelector(".body");

async function getQuote() {
  const response = await fetch(apiURL);
  let data = await response.json();
  newQuote.innerHTML = data.content;
  author.innerHTML = data.author;
  bgcChange();
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      newQuote.innerHTML +
      " --" +
      author.innerHTML,
    " tweet window",
    " width = 600px, height = 600px"
  );
}

function bgcChange() {
  let wallpaper = Math.floor(Math.random() * 16 + 1);
  console.log(wallpaper);

  let bgcSrc = `url(wallpapers/${wallpaper}.jpg)`;
  bgc.style.background = bgcSrc;
  bgc.style.backgroundSize = "100vw 100vh";
}

quoteBTN.addEventListener("click", () => {
  getQuote();
});

tweetBTN.addEventListener("click", () => {
  tweet();
});

getQuote(); // intial call
