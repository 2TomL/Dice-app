let count = 0;
let dices = [];
let hasQuattro = false;
let hasCinquo = false;

function play() {
  getrandom();
  counter();
  duplicates();
}
function getrandom() {
  for (let i = 1; i <= 5; i++) {
    let random = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`dice${i}`).src = `/Resources/dobbel${random}.gif`;
    dices.push(random);
  }
}
function counter() {
  count++;
  document.getElementById("count").innerHTML = count;
}
function duplicates() {
    while (dices.length >= 1) {
      let prelength = dices.length;
      let ldice = dices.pop();
      dices = dices.filter((di) => di != ldice);
      let duplicate = prelength - dices.length;
      if (duplicate >= 2) {
        let max = parseInt(
          document.getElementById(`max${duplicate}`).innerHTML
        );
        document.getElementById(`max${duplicate}`).innerHTML = ++max;
      }
      
      switch (duplicate) {
        case 2:
          document.getElementById(`score`).innerHTML = "You got duo";
          break;
        case 3:
          document.getElementById(`score`).innerHTML = "You got trio";
          break;
        case 4:
          if (!hasQuattro) {
            document.getElementById(`score`).innerHTML = "You got quattro";
            hasQuattro = true;
          }
          break;
        case 5:
          if (!hasCinquo) {
            document.getElementById(`score`).innerHTML = "You got cinquo ";
            hasCinquo = true;
            showWinnerImage();
          }
          break;
        default:
          document.getElementById(`score`).innerHTML = "";
      }
    }
  }
  function showWinnerImage() {
    // Display the winner image when called
    document.getElementById("winnerImage").src = "Resources/OIP.jpg";
    document.getElementById("resultImage").style.display = "block";
}