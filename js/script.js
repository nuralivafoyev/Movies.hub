"use strict";

const   cardWrapper = document.getElementById("cards"),
        search = document.getElementById("search");
        
const data = movies.splice(0, 100);


//  normalize 

const normalize = data.map(el => {
    return {
        title: el.title,
        year: el.year,
        genres: el.categories,
        id: el.imdbId,
        rating: el.imdbRating,
        time: `${Math.floor(el.runtime / 60)} h ${el.runtime % 60} s`,    
        language: el.language,
        youtube: `https://www.youtube.com/embed/${el.youtubeId}`,
        summary: el.summary,
        imgMax: el.bigThumbnail,
        imgMin: el.smallThumbnail
    }
})


// render data

function renderData(data){

    setTimeout(() => {
        cardWrapper.innerHTML = "";

        if(data.length) {
            data?.forEach(el => {
                const card = createElement("div", "card_wrapper", 
                    `
                    <div class="card">
                        <img src="${el.imgMax}" alt="Photo"></img>
                        
                        <h2>${el.title.substring(0, 14)}...</h2>

                        <ul>
                            <li><strong>Yil: ${el.year}</strong></li>
                            <li><strong>Janr: ${el.genres}</strong></li>
                            <li><strong>Reyting: ${el.rating}</strong></li>
                            <li><strong>Til: ${el.language}</strong></li>
                            <li><strong>Davomiyligi: ${el.runtime}</strong></li>
                        </ul>

                    </div>
                `)
                cardWrapper.append(card)
            });
            
        }
        else {
            cardWrapper.innerHTML = '<p style="color: #fff; font-size: 20px; font-weight: 600;">System Error!</p>'
        }
    }, 1500);
}

renderData(normalize)