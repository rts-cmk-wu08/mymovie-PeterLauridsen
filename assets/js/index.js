fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f6cd4ea3a6cc09f282a877cc9c2daed4&language=en-US&page=1')
.then(nowPlaying => nowPlaying.json())
.then(nowPlay => {
    console.log(nowPlay)

    let body = document.querySelector("body")
    let section = document.createElement("section")
    
    section.classList.add("sliding")
    body.append(section)

    nowPlay.results.forEach(nowPlaying => {
            let div = document.createElement("div")
            div.classList.add("cards")
            div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path}" alt="">
            
            `
            section.append(div)

    })

    
})