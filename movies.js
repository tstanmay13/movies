const apiLink = "http://www.omdbapi.com/?apikey=93f3f842&";
const resultsListEl = document.querySelector(".results__container");

async function main(){
    const results = await fetch("https://www.omdbapi.com/?apikey=93f3f842&s=what");
    const resultData = await results.json();
    // resultsListEl.innerHTML = 

    
}

function getResultHTML(result){
    return `<div class="result">
    <div class="result--wrapper">
      <figure class="poster__wrapper">
        <img src="./assets/poster.jpg" alt="" class="poster">
      </figure>
      <div class="result__description">
        <p class="result__title"> Blade Runner </span>
        <p class="result__year"> 2014 </p>
        <p class="result__type"> Movie</p>
        <p class="result__imdb"> tt0207201</p>
      </div>
    </div>
  </div>
    
    
    `
}
main();