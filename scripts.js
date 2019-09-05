//vVARIABLE HTML LINKS

const start = document.getElementById("start");
const restart = document.getElementById("restart");
const question = document.getElementById("question");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const score = document.getElementById("score");

//QUIZ QUESTIONS

let questions = [
    {
        question : "What does HTML stand for?",
        answer1 : "Hypertext Markup Language",
        answer2 : "Hit The Mother Load",
        answer3 : "Hypertext Made Light",
        correct : "1"
    },{
        question : "What does CSS stand for?",
        answer1 : "Cascading Sea Shells",
        answer2 : "Cascading Style Sheets",
        answer3 : "Cascading Style Shell",
        correct : "2"

    },{
        question : "What does JS stand for?",
        answer1 : "JavaStory",
        answer2 : "JavaShell",
        answer3 : "JavaScript",
        correct : "3"

    },{
        question : "What does C# stand for?",
        answer1 : "C Sharp",
        answer2 : "C Hash",
        answer3 : "C Tag",
        correct : "1"

    }
];

// TIMER VARIABLES

const answerTime = 10;
let count = 0;
let TIMER;

//QUESTION VARIABLES

let currQ = 0;
const lastQ = questions.length -1;
let currentScore = 0;

//TESTING
//question.innerHTML = "testing";

//START FUNCTION

startQuiz = () => {
    start.style.display = "none";
    displayCount();
    quiz.style.display = "block";
    TIMER = setInterval(displayCount, 1000);
    restart.style.display = "block";
    displayQuestion(); 
    displayScore();
};

reload = () => {
    location.reload();
    return;
};

//START AND RESTART EVENT LISTENER

start.addEventListener("click",startQuiz);
restart.addEventListener("click",reload);

//DISPLAY TIMER FUNCTION
//RENDER COUNTER
displayCount = () => {
    if (count <= answerTime){ 
        counter.innerHTML = "Timer "+ count; //displaying counter
        count++; //adding to counter
    }else{
        count = 0;
        if (currQ < lastQ){
            currQ++; //moving onto next question if count is zero
            displayQuestion();
        }else{
            clearInterval(TIMER);
        }
    }
};

//DISPLAY QUESTION AND ANSWERS
displayQuestion = () => {
   let q = questions[currQ];
   question.innerHTML = "<p>"+ q.question +"<p>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;   
    answer3.innerHTML = q.answer3;
};

displayScore = () => {
    score.innerHTML = "<p>"+ currentScore + "<p>";
};

checkAnswer = (answer) => {
    if (answer == questions[currQ].correct){
        currentScore++;
    }else{
console.log("currScore");
    }
};


