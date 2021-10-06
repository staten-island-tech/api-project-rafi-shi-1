const DOMSelectors = {
  quote: document.querySelector(".quote-display"),
};
const query = async function () {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();
    console.log(data);

    const arrayData = [];
    arrayData.push(data);

    const displayQuote = function () {
      DOMSelectors.quote.insertAdjacentHTML(
        "beforeend",
        `<div class="test">
        <h1 class="Header"> Chuck Norris Facts </h1>
      </div>
      <div class="container">
        <h2 class="box-title">
    
        </h2>s
        <div class="numbers">
        </div>
        <div class="btn">
          Random
    
    
        </div>
        <div class="quote-display" id="quote">
          Fatin ${fact.value}
        </div>
    
    
      </div>`,

        console.log(displayQuote)
      );
    };
    DOMSelectors.quote.insertAdjacentHTML(
      "beforeend",
      `<div class="test">
      <h1 class="Header"> Chuck Norris Facts </h1>
    </div>
    <div class="container">
      <h2 class="box-title">
  
      </h2>s
      <div class="numbers">
      </div>
      <div class="btn">
        Random
  
  
      </div>
      <div class="quote-display" id="quote">
        Fatin ${fact.value}
      </div>
  
  
    </div>`
    );
  } catch (error) {
    /*(fact) => {
      DOMSelectors.quote.insertAdjacentHTML(
        "beforeend",
        `<div class="test">
      <h1 class="Header"> Chuck Norris Facts </h1>
    </div>
    <div class="container">
      <h2 class="box-title">
  
      </h2>s
      <div class="numbers">
      </div>
      <div class="btn">
        Random
  
  
      </div>
      <div class="quote-display" id="quote">
        Fatin ${fact.value}
      </div>
  
  
    </div>`
      );
    };*/
    console.log(error);
    alert("Something went wrong");
  }
  query();
};
