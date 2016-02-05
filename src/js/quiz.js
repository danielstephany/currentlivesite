// Questions Object *************************************************************************************************

var Questions = function(question, choices, answer) {
	this.questions = question;
	this.choices = choices;
	this.answer = answer;
}

Questions.prototype.isCorrect = function(guess) {
return this.answer === guess;
}

// Quiz Object *************************************************************************************************

var Quiz = function(questions) {
	this.quizQuestions = questions;
	this.currentQuestionIndex = 0;
	this.score = 0;
	this.correctAnswer = false;
}

Quiz.prototype.makeGuess = function(guess) {
	console.log("guess");
	if(this.currentQuestion().isCorrect(guess)) {
		this.correctAnswer = true;
		console.log("correct");
		this.score++;
	} else {
		console.log("wrong");
		this.correctAnswer = false;
	}
	this.currentQuestionIndex++;
	console.log(this.currentQuestionIndex);
}

Quiz.prototype.currentQuestion = function() {
	return this.quizQuestions[this.currentQuestionIndex];
}

Quiz.prototype.isOver = function() {
	return this.currentQuestionIndex === this.quizQuestions.length;
}

// Quiz_UI Object *************************************************************************************************

var Quiz_UI = {
	display: function() {
		if(quiz.isOver()) {
			this.buttonDisable();
			this.displayScore();
		} else {
			this.displaynext();
		}
	},


	displayScore: function() {
		var element = document.getElementById("question");
		element.innerHTML = "Well done, you scored " + quiz.score + " out of " + quiz.quizQuestions.length + ".";
	},

	displaynext: function() {
		this.displayQuestion();
		this.displaychoices();
	},

	//display question
	displayQuestion: function() {
	var element = document.getElementById("question");
	element.innerHTML = quiz.currentQuestion().questions;
	},

	buttonDisplay: function() {
		var button = document.getElementById("nextQuestion");
		button.style.display = "inline-block";
		button.onclick = function() {
			Quiz_UI.buttonHide();
			Quiz_UI.buttonColorReset();
			Quiz_UI.display();
		}
	},

	buttonHide: function() {
		var button = document.getElementById("nextQuestion");
		button.style.display = "none";
	},

	buttonChange: function(id) {
		var element = document.getElementById(id)
		if (quiz.correctAnswer) {
				element.style.background = "#7aad6a";
			} else {
				element.style.background = "#ad706a";
			}
		this.buttonDisable();				
	},

	buttonDisable: function() {
		var buttons = document.getElementsByClassName("select");
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].onclick = "";
		}
	},

	buttonColorReset: function() {
		var buttons = document.getElementsByClassName("select");
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].style.background = "#fff";
		}
	},

	//bind event handler to question
	displaychoices: function() {
		for (var i = 0; i < quiz.currentQuestion().choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = quiz.currentQuestion().choices[i];
			this.guessEventHandler("guess" + i, quiz.currentQuestion().choices[i]);
		}
	},

	//attatch button elements to event handler and have it check the guess.
	guessEventHandler: function(id, guess) {
		var element = document.getElementById(id)
		element.onclick = function() {
			quiz.makeGuess(guess);
			Quiz_UI.buttonChange(id);
			Quiz_UI.buttonDisplay();
		};
	}

};

//new instance of objects and call *******************************************************************************************

var questions = [
	 new Questions("Which character used swords in combat?", ["Michelangelo", "Leonardo", "Donatello"], "Leonardo"),
	 new Questions("What is the name of the turtles master?", ["Sliver", "Splinter", "Oak"], "Splinter"),
	 new Questions("Which character used twin sai in combat?", ["Donatello", "Leonardo", "Raphael"], "Raphael"),
	 new Questions("What is the name of the turtles biggest enemy?", ["The Blender", "The Shredder", "The Slicer"], "The Shredder"),
	 new Questions("Which character used the bow staff in combat?", ["Donatello", "Raphial", "Michelangelo"], "Donatello"),
	 new Questions("Who is the turtles main female companion?", ["April O'Neil", "May Jenson", "Jen Smith"], "April O'Neil"),
	 new Questions("Which character used nunchucks in combat?", ["Leonardo", "Michelangelo", "Raphial"], "Michelangelo")
];

var quiz = new Quiz(questions);

Quiz_UI.display(); 