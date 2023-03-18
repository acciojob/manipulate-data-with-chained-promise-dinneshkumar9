//your JS code here. If required.
const inputArray = [1, 2, 3, 4];

// Function that returns a promise which resolves with an array of numbers after 3 seconds
function generateNumberArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
}

// Chain the promise with two more promises
generateNumberArray()
  .then((numberArray) => {
    // Filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredArray = numberArray.filter((number) => number % 2 === 0);
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((evenNumbersArray) => {
    // Multiply all even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArray = evenNumbersArray.map((number) => number * 2);
        resolve(multipliedArray);
      }, 2000);
    });
  })
  .then((finalArray) => {
    // Update the text of an HTML element with an ID of "output"
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = finalArray.join(", ");
  })
  .catch((error) => {
    console.log(error);
  });
