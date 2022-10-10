var readlineSync = require("readline-sync");
var userName = readlineSync.question("What your Name ? ");
console.log("Welcome  "+userName+"  Have you heard about Doraemon!")
score=0;
console.log("Welcome to the Doraemon Quiz --:");


function play(question,answer){
  var userAnswer = readlineSync.question(question);
    userAnswer = userAnswer.toLowerCase();
  
  if(userAnswer === answer){
    console.log("You are right");
    score=score+1;
    console.log("your current score is:",score)
  }
  else{
    console.log("You are Wrong");
    score=score-1;
    console.log("your current score is:",score);
  }
}

var highscore =[{name:"Deepak",score:"10"},{
  name:"Niyati",score:"5"
}];

var questions = [
  
  {question:"what is Gian's passion ",answer:"singing"},
  {question:"What is the name of bully Gian's Sister ",answer:"jaiko"},
  {question:"What is the name of the mother of Nobita ",answer:"tamaco"},
  {question:"From which century does Doraemon come from ",answer:"22nd"},
  {question:"What is the name of the cat whom doraemon loves? ",answer:"mi chain"},
  {question:"what is the color of Anywhere door? " ,answer:"pink"},
  {question:"whom or what is Doraemon scared of ? " ,answer:"rats"},
  {question:"what are the marks usually scored by nobita in test ? " ,answer:"0"},
  {question:"which instrument does shizuka play so beautifully " ,answer:"piano"
  },
  {question:"what is real name of Gian " ,answer:"takeshi goda"},
];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your Final score is:",score);
// console.log("Thanks for giving quiz") ;
if(score >= 10){
  console.log("CONGRATULATION **You have beaten High Score");
}
else{
  console.log("Your Score is low")
  console.log("Better Luck Next Time");
}
