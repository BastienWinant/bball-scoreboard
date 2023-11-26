const homeTeam = {
	designation: "home",
	points: 0,
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

function resetScore() {
	homeTeam.points = 0;
	awayTeam.points = 0;

	homeTeam.fouls = 5;
	awayTeam.fouls = 5;

	homeTeam.timeouts = 6;
	awayTeam.timeouts = 6;

	updateScoreCards();
}

function updateScoreCards() {
	// pull the data in the team objects to update html
	for (let i = 0; i < 2; i++) {
		scoreCards[i].textContent = teams[i].points;
	}

	const homePoints = homeTeam.points;
	const awayPoints = awayTeam.points;

	if (homePoints > awayPoints) {
		scoreCards[0].style.color = "red";
		scoreCards[1].style.color = "black";
	} else if (homePoints < awayPoints) {
		scoreCards[0].style.color = "black";
		scoreCards[1].style.color = "red";
	} else {
		scoreCards[0].style.color = "black";
		scoreCards[1].style.color = "black";
	}
}; 

document.addEventListener("DOMContentLoaded", () => {
	updateScoreCards();
});