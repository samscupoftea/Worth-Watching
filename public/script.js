let searchBtn = document.getElementById("searchButton");
let movieInp = document.getElementById("movieName");
let resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", () => {
    let movieName = movieInp.value.trim();
    if (movieName) {
        let finalURL = `/search-movie?name=${encodeURIComponent(movieName)}`;
        console.log(finalURL); // Good for debugging

        fetch(finalURL)
            .then(response => response.json())
            .then(json => console.log(json))
            .then(data => {
                console.log(JSON.stringify(data, null, 2)); // You need to define this function
            })
            .catch(error => {
                console.error('Error:', error);
                // It would be good to inform the user of the error as well
            });
    }
});
