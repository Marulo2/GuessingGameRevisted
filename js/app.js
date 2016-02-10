var questionArray = ["What color is the sky?", "How many cats does Sam have?", "And finally... is CodeFellows awesome?"];

var globalCounter = 0;
var name = prompt('Welcome user! What is your name?')

function questionLoop() {
  for (globalCounter; globalCounter < 3; globalCounter++) {
    var answers = prompt(questionArray[globalCounter]);
    if (answers.toLowerCase() == 'y' || answers.toLowerCase() == 'blue' || answers.toLowerCase() == 'grey' || answers.toLowerCase() == 'blu' || answers.toLowerCase() == 'yes' || answers.toLowerCase() == '3' || answers.toLowerCase() == 'three') {
      alert('Good job ' + name + '!');
      insertImg();
    } else {
      alert('That is wrong, ' + name + '. Try again!');
      questionLoop();
    }
  }
};

function insertImg() {
  if (globalCounter == 0) {
    document.getElementById('question1').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
  } else if (globalCounter == 1) {
    document.getElementById('question2').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
  } else if (globalCounter == 2){
    document.getElementById('question3').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
  } else {
    alert('boohoo');
  }
};

questionLoop();
