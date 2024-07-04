"use strict";

const   cardWrapper = document.getElementById("cards"),
        search = document.getElementById("search"),
        perfectSearchFilm = document.getElementById("search_film"),
        perfectGenreFilm = document.getElementById("genre_film");
        
const data = movies.splice(0, 300);


//  normalize 

const normalize = data.map(el => {
    return {
        title: el.title,
        year: el.year,
        genres: el.categories,
        id: el.imdbId,
        rating: el.imdbRating,
        time: `${Math.floor(el.runtime / 60)} h ${el.runtime % 60} m`,    
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
                            <li><strong>Davomiyligi: ${el.time}</strong></li>
                            <li><strong><a href="${el.youtube}" target="_blank" >Read more</a></strong></li>
                        </ul>
                    </div>
                `)
                cardWrapper.append(card)
            });
            
        }
        else {
            cardWrapper.innerHTML = '<p style="color: #fff; font-size: 20px; font-weight: 600;">Sorry! Something was wrong(</p>';
        }
    }, 1500);
}

renderData(normalize)



// search

search.addEventListener('keyup', () =>{
    const value = search.value.toLowerCase();
    const filteredData = normalize.filter(el => el.title.toLocaleLowerCase().includes(value));
    renderData(filteredData)
})




// render options

const genres = [];

function renderedOptions(data){
    data.forEach(movie => {
        movie.genres.forEach(genre => {
            if(!genres.includes(genre)){
                genres.push(genre)
            }
        })
    })
    genres.forEach(genre => {
        const options = createElement('option', 'options-item', genre);
        perfectGenreFilm.append(option)
    });
}

renderedOptions(normalize)

// perfect search

function perfectSearch (data){
    const valueRating = Math.floor(Number(perfectSearchFilmRating.value));

    const newData = data.filter(el => el.title.toLocaleLowerCase().includes(perfectSearchFilm.value.toLowerCase)) && el.genres.includes(perfectGenreFilm.value);
    renderData(newData);
    console.log(newData);
}