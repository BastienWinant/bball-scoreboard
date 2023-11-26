const lightGrey = "#D6D6D6";
const darkGrey = "#333533";
const yellow = "#FFEE32";
const black = "#202020";

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
		scoreCards[0].style.color = yellow;
		scoreCards[0].style.border = `4px solid ${yellow}`;

		scoreCards[1].style.color = lightGrey;
		scoreCards[1].style.border = `4px solid ${lightGrey}`;
	} else if (homePoints < awayPoints) {
		scoreCards[0].style.color = lightGrey;
		scoreCards[0].style.border = `4px solid ${lightGrey}`;

		scoreCards[1].style.color = yellow;
		scoreCards[1].style.border = `4px solid ${yellow}`;
	} else {
		scoreCards[0].style.color = lightGrey;
		scoreCards[0].style.border = `4px solid ${lightGrey}`;
		scoreCards[1].style.color = lightGrey;
		scoreCards[1].style.border = `4px solid ${lightGrey}`;
	}
}; 

document.addEventListener("DOMContentLoaded", () => {
	updateScoreCards();
});