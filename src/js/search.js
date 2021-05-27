import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const serachPerams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://opentdb.com/api_count.php?category=${serachPerams}`
        );
        const data = await response.json();
        data.results.forEach((trivia) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="movie-card">
            <div class="movie-card-front">
            <h3 class="movie-card-header">${trivia.question}</h3>
            </div>
            <div class="movie-card-back">
              
              <div class="score-box">
                <p class="user-score">${trivia.correct_answer}</p>
                <p class="user-score"></p>
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
  });
};
listen();