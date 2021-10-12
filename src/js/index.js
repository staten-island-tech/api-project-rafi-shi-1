const DOMSelectors = {
  quote: document.querySelector(".quote-display"),
  btn: document.querySelector(".btn"),
};
const query = async function () {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();
    console.log(data);

    const arrayData = [];
    arrayData.push(data);

    const displayQuote = function (data) {
      const fact = data;
      DOMSelectors.quote.insertAdjacentHTML(
        "beforeend",
        `
    
    
        </div>
        <div id="quote">
        ${data.value}
        </div>
    
    
      </div>`
      );
    };
    displayQuote(data);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();

DOMSelectors.btn.addEventListener("click", () => {
  window.location.reload(true);
});
