var readlinesync=require("readline-sync");

var score=0

var username=readlinesync.question("whats your name ? ")

console.log("Welcome " + username  +  " to Marvel Cinematic Universe quiz game 🦸‍♂️ ? ");

console.log("⚔️ use small letters for answer ⚔️️ ️️️ ️️ ")
//function aray

function play(question,answer){

var userans=readlinesync.question(question);

if(userans===answer){
  console.log("right");
  score=score+1
  
}
else{
  console.log("wrong");
  
}

console.log("current score :" + score);
console.log("----------");

}




// arrey of object

var questions= [{question:"What is Captain America's shield made out of? ",
  answer: "vibranium"},
   {question:"Who can lift Thor's hammer? ? ",
  answer:"captain america"},
   {question:"Who is Peter Parker's best friend ? ",
  answer:"ned"},
   {question:"In which fictional country is Black Panther set ? ",
  answer:"wakanda"},
   {question:"What is Tony Stark’s final line in the first Iron Man ? ",
  answer:"i am iron man"}
  ]
  

// loop

for (var i=0; i<questions.length; i++){

var currentquestion=questions[i];
play(currentquestion.question,currentquestion.answer)

}


console.log("YAY! You Scored = " + score );
