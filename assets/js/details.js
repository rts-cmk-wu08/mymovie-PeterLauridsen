document.addEventListener("DOMContentLoaded", () => {

    let baseUrl = "https://api.themoviedb.org/3"
    let apiKey = "f6cd4ea3a6cc09f282a877cc9c2daed4"

    // Her tager vi fat i wrapper som vi har lavet ude i html
    let wrapperElm = document.querySelector(".wrapperDetails")

    // Her laver vi en header og giver den en klasse header
    let headerElm = document.createElement("header")
    headerElm.classList.add("header")
    wrapperElm.append(headerElm)

    // Her laver vi en main
    let mainElm = document.createElement("main")
    wrapperElm.append(mainElm)

    // Her laver vi vores slider objekt
    let showingElm = document.createElement("section")
    mainElm.append(showingElm)

    // Her laver vi en footer
    let footerElm = document.createElement("footer")
    wrapperElm.append(footerElm)

    // Her skriver det tekst som skal være i headeren
    headerElm.innerHTML = `
        <h1 class="myMovies">MyMovies</h1>
        <button>Switch</button>
    `

})