var questionArray = ["Is this a placeholder question?", "How about this one?", "And finally... is this one as well?"];

var globalCounter = 0;

function questionLoop() {
  for (globalCounter; globalCounter < 3; globalCounter++) {
    var answers = prompt(questionArray[globalCounter]);
    if (answers == 'y') {
      alert('Good job!');
      insertImg();
    } else {
      alert('That is wrong');
      questionLoop();
    }
  }
};

function insertImg() {
  if (globalCounter == 0) {
    document.getElementById('question1').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
    alert('test');
  } else if (globalCounter == 1) {
    document.getElementById('question2').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
    alert('test');
  } else if (globalCounter == 2){
    document.getElementById('question3').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
    alert('test');
  } else {
    alert('boohoo');
  }
};

questionLoop();
