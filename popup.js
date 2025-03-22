document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "1af47319-38e8-4c92-b29b-821d83572005"; // Replace with your actual API key
    const url = `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success" && data.data.length > 0) {
                let match = data.data[0]; // Get the first match
                let score = `${match.teams[0]} vs ${match.teams[1]}\n${match.score}`;
                document.getElementById("score-container").innerText = score;
            } else {
                document.getElementById("score-container").innerText = "No live matches";
            }
        })
        .catch(error => {
            console.error("Error fetching scores:", error);
            document.getElementById("score-container").innerText = "Error loading scores";
        });
});
