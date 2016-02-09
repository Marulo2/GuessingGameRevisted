var questionArray = ["Is this a placeholder question?", "How about this one?", "And finally... is this one as well?"];

var globalCounter = 0;

function questionLoop() {
  for (i = 0; i < 3; i++) {
    var answers = prompt(questionArray[i]);
    if (answers == 'y') {
      alert('Good job!');
      insertImg();
    } else {
      alert('That is wrong');
    }
  }
};

function insertImg() {
  if (globalCounter == 1) {
    document.getElementById('question1').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
    globalCounter++;
  } else if (globalCounter == 2) {
    document.getElementById('question2').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
    globalCounter++;
  } else if (globalCounter == 3){
    document.getElementById('question3').innerHTML = '<p class="questions">Let\'s give it a shot!</p>';
    globalCounter++;
  } else {
    alert('boohoo');
  }
};

questionLoop();
