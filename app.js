const apiLink = "http://www.omdbapi.com/?apikey=93f3f842&";



async function searchAgain(event){
    if (event.key === 'Enter') {
        const searchKey = document.querySelector('#input__box').value;
        localStorage.setItem("key", searchKey);
        window.location.href = `${window.location.origin}/movies.html`
    }
}

function search(){
    const searchKey = document.querySelector('#input__box').value;
    localStorage.setItem("key", searchKey);
    // console.log(window);
    window.location.href = `${window.location.origin}/movies.html`
}

function gohome(){
    window.location.href = `${window.location.origin}/index.html`
}