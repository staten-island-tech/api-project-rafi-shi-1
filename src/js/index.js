//import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "YOURKEYHERE";
const query = async function () {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Something is wrong");
  }
};
