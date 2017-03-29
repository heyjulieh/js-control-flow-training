console.log("security_questions.js is loaded");
//security questions
var securityQuestions = [
  {
    question: "What is your mother's maiden name?",
    expectedAnswer: "Chou",
  },
  {
    question: "What is your favorite color?",
    expectedAnswer: "Red",
  },
  {
    question: "What is your favorite city?",
    expectedAnswer: "Los Angeles",
  }
];
  //loop prompt
  var userResponse = "";
  var userIncorrect = false;

  for (i=0; i<securityQuestions.length; i++){
    userResponse = prompt(securityQuestions[i].question);
    if (userResponse !== securityQuestions[i].expectedAnswer){
      alert("Your answer was incorrect!");
      userIncorrect = true;
      break;
    }
    }
    if (userIncorrect){
      alert("You do not have any more password attempts.");
    }
