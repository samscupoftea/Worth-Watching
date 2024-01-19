
// add funtionality for a button 

document.getElementById('searchButton').addEventListener('click', function() {
    var movieName = document.getElementById('movieName').value;
    if (movieName) {
        fetch('/search-movie?name=' + movieName)
            .then(response => response.json())
            .then(data => {
                displayResults(data);
            });
    }
});

function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    // Format and display data
    // ...
    resultsDiv.style.display = 'block';
}
