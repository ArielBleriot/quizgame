const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    let level = "";
    if (score.score ==  0) {
        level = "Your level is Poor";
    } else if (score.score < 0) {
        level = "Your level is Very Bad";
    } else if (score.score > 0 && score.score <= 25) {
        level = "Your level is Low";
    } else if (score.score > 25 && score.score < 50) {
        level = "Your level is Average ";
    } else if (score.score >= 50) {
        level = "Your level is High";
    }
    return `<li class="high-score">${score.name} : ${score.score} (${level})</li>`;
  })
  .join("");

  