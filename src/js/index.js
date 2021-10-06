const DOMSelectors = {
  quote: document.querySelector(".quote-display"),
};

const query = async function () {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();
    console.log(data.response);

    /*const arrayData = [];
    arrayData.push(data);*/

    data.response.array.forEach((fact) => {
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
    });

    (fact) => {
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
    };
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();
const thirty = async function () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((data) => {
      let apiData = [];
      console.log(apiData);
      apiData.push(data);
      data.response.array.forEach((fact) => {
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
      });
    });
};
thirty();
