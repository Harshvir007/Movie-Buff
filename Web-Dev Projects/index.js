//v1.1

/*

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");


//function to fetch the api from the database

let getMovie = () => {

    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;   //It will fetch the api key

    //if movie name is empty

    if (movieName.length <= 0) {

        result.innerHTML = `<h3 class="msg">Please Enter a movie name</h3>`;
    }


    //if the movie name is not empty

    else {

        fetch(url).then((resp) => resp.jason()).then((data) => {
            //If movie exists in database

            if (data.Response == "True") {
                result.innerHTML = `
                    < div class ="info" >
                        <img src=${data.Poster}> class="poster"
                            <div>
                                <h2> ${data.Title}</h2>
                                <div class = "rating">
                                    <img src="star-icon.svg">
                                    <h4>{data.imdbRating}</h4>
                                </div>
                                <div class "details">
                                <span> ${data.Rated}</span>
                                <span> ${data.Year}</span>
                                <span> ${data.Runtime}</span>
                                </div>
                            </div>

                            <div class="genere">
                            <div>${data.Genere.split(",").join("</div><div>")}</div>
                            </div>

                            <h3>Plot:</h3>
                            <p>${data.Plot}</p>
                            <h3>Cast:</h3>
                            <p>${data.Actors}</p>

                    `;

            }

            else {
                result.innerHTML = `<h3 class = "msg">${data.Error}</h3>`;
            }
        })

            //if error occures
            .catch(() => {
                result.innerHTML = `<h3 class ="msg">Error Occured</h3>`;
            });
    }



};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
*/



//v1.2

/*

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch the api from the database
let getMovie = () => {
    let movieName = movieNameRef.value;
    //let key = "70c5b207"; // Replace with your OMDB API key
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;   //It will fetch the api key

    //if movie name is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter a movie name</h3>`;
    }
    //if the movie name is not empty
    else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                //If movie exists in database
                if (data.Response == "True") {
                    result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                            <div>
                                <h2> ${data.Title}</h2>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                                <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                                </div>
                            </div>
                            <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                            <h3>Plot:</h3>
                            <p>${data.Plot}</p>
                            <h3>Cast:</h3>
                            <p>${data.Actors}</p>
                    </div>`;
                } else {
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                }
            })
            //if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie); */


//v1.3
// Below code to add the event listner (Enter key) to search the movie 


let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch the api from the database
let getMovie = () => {
    let movieName = movieNameRef.value;
    //let key = "70c5b207"; // Replace with your OMDB API key
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;   //It will fetch the api key

    //if movie name is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter a movie name</h3>`;
    }
    //if the movie name is not empty
    else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                //If movie exists in database
                if (data.Response == "True") {
                    result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                            <div>
                                <h2> ${data.Title}</h2>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                                <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                                </div>
                            </div>
                            <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                            <h3>Plot:</h3>
                            <p>${data.Plot}</p>
                            <h3>Cast:</h3>
                            <p>${data.Actors}</p>
                    </div>`;
                } else {
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                }
            })
            //if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
            });
    }
};

// add event listener to the input field that detects "Enter" key press
movieNameRef.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);



