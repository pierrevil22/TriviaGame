
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What number did Lawrence Taylor wear during his Hall of Fame career?',
	possibleAnswers : ['A. 51',
				 'B. 45',
				 'C. 65',
				 'D. 56'],
	flags : [false, false, true, false],
	answer : 'D. 56'
};

var q2 = {
	question: 'Which Super Bowl found the New York Giants in it for the first time?',
	possibleAnswers: ['A. XVI',
				 'B. XXI',
				 'C. XXX',
				 'D. XII'],
	flags : [false, true, false, false],
	answer : 'B. XXI'
};

var q3 = {
	question : 'What year did the New York Giants begin in the NFL?',
	possibleAnswers : ['A. 2000',
				 'B. 1925',
				 'C. 1988',
				 'D. 1905'],
	flags : [false, true, false, false],
	answer : 'B. 1925'
};

var q4 = {
	question : 'Tom Coughlin, the coach of the 2004 New York Giants, actually coached with the Giants under Bill Parcells. What coach was he then?',
	possibleAnswers : ['A. Wide Receivers Coach',
				 'B. Quarter Back Coach',
				 'C. Defensive Back Coach',
				 'D. Kicker Coach'],
	flags : [true, false, false, false],
	answer : 'A. Wide Receivers Coach'
};

var q5 = {
	question : 'Which coach led the Giants to the most victories during the 20th century?',
	possibleAnswers : ['A. John Madden',
				 'B. Steve Owen',
				 'C. Tom Coughlin',
				 'D. Bill Parcells'],
	flags : [false, true, false, false],
	answer : 'B. Steve Owen'
};

var q6 = {
	question : 'Who was the Giants wide receiver who invented the spike?',
	possibleAnswers : ['A. Homer Jones',
				 'B. Victor Cruz',
				 'C. Odell Beckham Jr',
				 'D. Sterling Shepard'],
	flags : [true, false, false, false],
	answer : 'A. Homer Jones'
};

var q7 = {
	question : 'Which season saw the Giants win their first NFL Championship?',
	possibleAnswers : ['A. 2012',
				 'B. 1991',
				 'C. 1927',
				 'D. 2008'],
	flags : [false, false, true, false],
	answer : 'C. 1927'
};

var q8 = {
	question : ' What number did Giant great Michael Strahan wear during his storied career?',
	possibleAnswers : ['A. 56',
				 'B. 92',
				 'C. 79',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. 92'
};

var q9 = {
	question : 'The 2004 NFL Draft saw Eli Manning drafted first overall. Which team drafted him?',
	possibleAnswers : ['A. Dallas Cowgirls',
				 'B. New York Jets',
				 'C. New York Giants',
				 'D. San Diego Chargers'],
	flags : [false, false, false, true],
	answer : 'D. San Diego Chargers'
};

var q10 = {
	question : 'Who was named MVP of Super Bowl XXI?',
	possibleAnswers : ['A. Eli Manning',
				  'B. Phil Simms',
				  'C. Tiki Barber',
				  'D. Ron Dixon'],
	flags : [false, true, false, false],
	answer : 'B. Phil Simms'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
	 
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});