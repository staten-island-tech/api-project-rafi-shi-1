const DOMSelectors = {
  grid: document.querySelector(".movie-grid"),
};

const key = "YOURKEYHERE";
const query = async function () {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`
    );
    const data = await response.json();
    data.results.forEach((trivia) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
      <div class="movie-card-front">
        <img
          src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${trivia.question}</h3>
        <div class="score-box">
          <p class="user-score">${trivia.correct_answer}</p>
          <p class="user-score"></p>
        </div>

        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">2020-06-12</p>
        </div>

        <div class="movie-genres">
          <li class="movie-genre">Sci-Fi</li>
          <li class="movie-genre">Fantasy</li>
          <li class="movie-genre">Horror</li>
        </div>
      </div>
    </div> `
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something is wrong");
  }
};
query();
