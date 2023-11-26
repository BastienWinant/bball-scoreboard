let homeTeam = {
  designation: "home",
  points: 0,
  fouls: 5,
  timeouts: 6
};

let awayTeam = {
  designation: "home",
  points: 0,
  fouls: 5,
  timeouts: 6
};

const teams = [homeTeam, awayTeam]

const scoreCards = document.getElementsByClassName("pts-card");
const timeOuts = document.getElementsByClassName("timeout");

function updateScores() {
  for (let i = 0; i < 2; i++) {
    scoreCards[i].textContent = teams[i].points
  }
}

function updateItems(eventType) {
  for (let i = 0; i < 2; i++) {
    const teamContainer = document.getElementsByClassName("team-section")[i];
    const teamItems = teamContainer.getElementsByClassName(eventType);

    const n = eventType == "foul" ? 5 : 6;

    for (let j = 0; j < n; j++) {
      if (j < teams[i][eventType + "s"]) {
        teamItems[j].style.background = "red";
      } else {
        teamItems[j].style.background = "black";
      }
    }
  }
}

function resetGame() {
  for (let i = 0; i < 2; i ++) {
    teams[i].points = 0;
    teams[i].fouls = 5;
    teams[i].timeouts = 6;
  }

  updateScores();
  updateItems("foul");
  updateItems("timeout");

  // reenable all gameplay buttons
  const gameplayButtons = document.getElementsByClassName("gameplay-btn");
  for (let i = 0, n = gameplayButtons.length; i< n; i++) {
    gameplayButtons[i].disabled = false;
  }
}

function addPoints(teamIndex, points) {
  teams[teamIndex].points += points;
  updateScores();
}

function removeFoul(teamIndex) {
  teams[teamIndex].fouls--;
  updateItems("foul");

  // disable button if the team is out of fouls
  if (teams[teamIndex].fouls == 0) {
    document.getElementsByClassName("foul-btn")[teamIndex].disabled = true;
  }
}

function removeTimeOut(teamIndex) {
  teams[teamIndex].timeouts--;
  updateItems("timeout");

  // disable button if the team is out of timeouts
  if (teams[teamIndex].timeouts == 0) {
    document.getElementsByClassName("timeout-btn")[teamIndex].disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateScores();
  updateItems("foul");
  updateItems("timeout");
})