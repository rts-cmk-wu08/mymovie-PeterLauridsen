document.addEventListener("DOMContentLoaded", () => {
    let baseurl = "https://api.themoviedb.org/3"
    let apiKey = "f6cd4ea3a6cc09f282a877cc9c2daed4"

    // Her tager vi fat i wrapper som vi har lavet ude i html
    let wrapperElm = document.querySelector(".wrapper")

    // Her laver vi en header og giver den en klasse header
    let headerElm = document.createElement("header")
    headerElm.classList.add("header")
    wrapperElm.append(headerElm)

    // Her laver vi en main
    let mainElm = document.createElement("main")
    wrapperElm.append(mainElm)

    // Her laver vi en footer
    let footerElm = document.createElement("footer")
    wrapperElm.append(footerElm)

    // Her skriver det tekst som skal være i headeren
    headerElm.innerHTML = `
        <h1>MyMovies</h1>
        <button>Switch</button>
    `

    let popularElm = document.createElement("section")
    popularElm.classList.add("popular")
    mainElm.append(popularElm)

    let popularHeader = document.createElement("header")
    popularHeader.classList.add("popular__header")
    popularHeader.innerHTML = `
    <h2>Popular</h2>
    <a href="#">Show more</a>
    `
    popularElm.append(popularHeader)


    let popularMovies = document.createElement("div")
    popularElm.append(popularMovies)

    // Her tager vi fat i vores ønskede url
    fetch(`${baseurl}/movie/popular?api_key=${apiKey}`)


        // Her køre vi json metoden for at hente data fra reponse objeketet
        // og konvetere json objeketet til javascript.
        // Der er et inplicit return immellem fat arrow og response.json, 
        // således at vi kan tage imod data og derfor bruger vi 2 .then funktioner 
        .then(response => response.json())
        .then(data => {

            data.results.forEach(movie => {
                let article = document.createElement("article")
                article.classList.add("movie-article")
                article.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
                    <div class="movie-article-div">
                        <h3>${movie.title}</h3>
                        <p>${movie.vote_average}/10 IMDB</p>
                        <p class="genres"></p>
                    </div>
               
               `
                popularMovies.append(article)
                let genreElm = article.querySelector(".genres")
                movie.genre_ids.forEach(id => {
                    let currentGenre = genres.find(genre => genre.id == id)
                    let genreSpan = document.createElement("span")
                    genreSpan.classList.add("genre__pill")
                    genreSpan.innerText = currentGenre.name
                    genreElm.append(genreSpan)
                })
            })

        })



})