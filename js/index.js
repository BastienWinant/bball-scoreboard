const homeTeam = {
	designation: "home",
	points: 4,
	fouls: 5,
	timeouts: 6
};

const awayTeam = {
	designation: "away",
	points: 0,
	fouls: 5,
	timeouts: 6
};

const teams = [homeTeam, awayTeam];

const scoreCards = document.getElementsByClassName("pts-card");

function addPoints(teamIndex, points) {
	// add the score in the appropriate team object
	teams[teamIndex].points += points;

	// update the html cards content
	updateScoreCards();
}

function updateScoreCards() {
	// pull the data in the team objects to update html
	for (let i = 0; i < 2; i++) {
		scoreCards[i].textContent = teams[i].points;
	}
}; 

document.addEventListener("DOMContentLoaded", () => {
	updateScoreCards();
});