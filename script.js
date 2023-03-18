function manipulateArray(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then(arr => {
    const filteredArr = arr.filter(num => num % 2 === 0);
    document.getElementById("output").innerHTML = filteredArr.join(",");
    return filteredArr;
  })
  .then(filteredArr => {
    const multipliedArr = filteredArr.map(num => num * 2);
    setTimeout(() => {
      document.getElementById("output").innerHTML = multipliedArr.join(",");
    }, 2000);
  });
}

const inputArr = [1, 2, 3, 4];
manipulateArray(inputArr);
