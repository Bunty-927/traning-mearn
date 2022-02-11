//document.getElementsByTagName("h1");
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    randN = Math.floor(Math.random() * 6 + 1);
    userInput = prompt("Enter the Number between 1-6");
    if (isNaN(userInput)) {
      reject(alert("Not a valid Number"));
    }
    if (userInput === randN) {
      resolve({
        point: 2,
        randN,
      });
    } else if (randN === userInput - 1 || randN === userInput + 1) {
      resolve({
        point: 1,
        randN,
      });
    } else {
      resolve({
        point: 0,
        randN,
      });
    }
  });
};
const contGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const runGame = () => {
  enterNumber().then((result) => {
    alert(`Your Point is ${result.point} and Random Number is ${randN}`);
    contGame()
      .then((result) => {
        if (result) {
          runGame();
        } else {
          alert("the game has ended");
        }
      })
      .catch((error) => {
        alert(error);
      });
  });
};
runGame();