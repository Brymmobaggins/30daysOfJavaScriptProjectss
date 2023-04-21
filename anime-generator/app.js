
const animeContainer = document.getElementById('anime-result')
const animeButton = document.getElementById('anime-btn')

animeButton.addEventListener('click', getAnime)


function getAnime() {
    fetch('https://nekos.best/api/v2/neko')
        .then(response => response.json())
        .then(data => {
            animeContainer.innerHTML = `<img src="${data.results[0].url}"/> `;
        })
}