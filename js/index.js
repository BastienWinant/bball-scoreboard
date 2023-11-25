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
	let scoreCard = scoreCards[teamIndex];
	const currentPoints = parseInt(scoreCard.textContent);
	
	scoreCard.textContent = currentPoints + points;
}

function updateScoreCards() {
	for (let i = 0; i < 2; i++) {
		scoreCards[i].textContent = teams[i].points;
	}
};

document.addEventListener("DOMContentLoaded", () => {
	updateScoreCards();
});