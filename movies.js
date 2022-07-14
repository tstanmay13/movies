// const apiLink = "http://www.omdbapi.com/?apikey=93f3f842&";
const resultsListEl = document.querySelector(".results__container");
const key = localStorage.getItem("key");
const searchEl = document.querySelector(".search__result");
const maxCounter = 12;

async function renderResults(search_key, y1 = 1945, y2 = 2022) {
  resultsListEl.innerHTML = "";
  let counter = 0;

  searchEl.innerHTML = `<div class="light inline" > "${search_key}"</div>`;
  document.querySelector('.spinner').classList += " movies__loading";
    setTimeout(() => {
    }, 1000);
  const htmlAdd = ``;
  for (let i = y2; i >= y1; --i) {
    if (counter < maxCounter) {
      console.log();
      const results = await fetch(
        `https://www.omdbapi.com/?apikey=93f3f842&s=${search_key}&y=${i}`
      );
      const resultData = await results.json();
      
      if (resultData.Response == "True") {
        // console.log("true")
        counter += Object.keys(resultData.Search).length;
        // console.log(counter);
        document.querySelector('.spinner').classList.remove("movies__loading");
        resultsListEl.innerHTML += resultData.Search.map((result) =>
          getResultHTML(result)
        ).join("");
      }
    }
  }

  document.querySelector('.spinner').classList.remove("movies__loading");
  
  

  changenPlaceholder(search_key);
}
renderResults(key);


function gohome(){
  window.location.href = `${window.location.origin}/index.html`
}

function changenPlaceholder(placeholder) {
  document.querySelector(".input__box2").placeholder = placeholder;
}

async function searchAgain(event) {
  if (event.key === "Enter") {
    const searchKey = document.querySelector(".input__box2").value;
    renderResults(searchKey);
  }
}

function getResultHTML(result) {
  return `<div class="result">
    <div class="result--wrapper">
      <figure class="poster__wrapper">
        <img src="${result.Poster}" alt="" class="poster">
      </figure>
      <div class="result__description">
        <p class="result__title"> ${result.Title} </span>
        <p class="result__year"> ${result.Year} </p>
        <p class="result__type"> ${result.Type}</p>
        <p class="result__imdb"> ${result.imdbID}</p>
      </div>
    </div>
  </div>`;
}

window.onload = function () {
  slideOne();
  slideTwo();
};

/*

SLIDERS

*/

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
let sliderMinValue = document.getElementById("slider-1").min;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
  console.log(sliderOne.value);
}

function readjust() {
  console.log("readjusting here")
  renderResults(
    document.querySelector(".input__box2").placeholder,
    sliderOne.value,
    sliderTwo.value
  );
  resultsListEl.innerHTML = ""
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  const firstValue = sliderOne.value - sliderMinValue;
  const interval = sliderMaxValue - sliderMinValue;
  const secondValue = sliderTwo.value - sliderMinValue;
  percent1 = (firstValue / interval) * 100;
  percent2 = (secondValue / interval) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
