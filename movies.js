// const apiLink = "http://www.omdbapi.com/?apikey=93f3f842&";
const resultsListEl = document.querySelector(".results__container");
const key = localStorage.getItem("key");
const searchEl = document.querySelector(".search__tag");

async function renderResults(search_key){
    const results = await fetch(`https://www.omdbapi.com/?apikey=93f3f842&s=${search_key}`);
    const resultData = await results.json();
    console.log(resultData)
    resultsListEl.innerHTML = resultData.Search.map((result) => getResultHTML(result)).join("");
    searchEl.innerHTML += `<div class="light inline" > "${search_key}"</div>`
}
renderResults(key);

async function searchAgain(event){
    if (event.key === 'Enter') {
        const searchKey = document.querySelector('.input__box2').value;
        renderResults(searchKey);
    }
}

function getResultHTML(result){
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
  </div>`
}
