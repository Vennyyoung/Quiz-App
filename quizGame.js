let questionBank = [
  {
    "The 19 in Covid-19 represents ____": [
      "A. 19 days",
      "B. 19th Pandemic",
      "C. Year 2019",
      "D. 19,000 deaths",
    ],
  },
  {
    "The Covid-19 virus first broke out in which city": [
      "A.Lagos",
      "B.Wuhan",
      "C.NewYork",
      "D.Rome",
    ],
  },
  {
    "The agency in charge of the battle against covid-19 and other infectious diseases is ____ ": [
      "A. NAPPTIP",
      "B. NSCDC",
      "C.NDA",
      "D. NCDC",
    ],
  },
  {
    "Which African country developed a $1 covid-19 test kit": [
      "A. Senegal",
      "B. Mozambique",
      "C. Rwanda",
      "D. Nigeria",
    ],
  },
  {
    "Which of these is not a symptom of Covid-19": [
      "A.High temperature",
      "B.Coughing",
      "C.stooling",
      "D.Breathing difficultly",
    ],
  },
];

const answers = {
  0: "c",
  1: "b",
  2: "b",
  3: "a",
  4: "d",
};
next = document.getElementById("but");
const begin = document.getElementById("start");
begin.addEventListener("click", myquiz1);
const quest = document.getElementById("options");

// start quiz

begin.style.display = "none";
// next.style.display = "none";
//quest.style.display = "none"

// start quiz
/*function runQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    rende
    renderCounter();*/






if(myquiz1()) { checkOption(e);
  
}
  
/* myquiz2();{
  checkOption(e);
  next.addEventListener("click", myquiz3);
}*/

function myquiz1() {
  console.log(Object.values(answers)[0]);
  //begin.style.display = "none"
  document.getElementById("p1").innerHTML = Object.keys(questionBank[0]).join();
  document.getElementById("a").innerHTML = Object.values(questionBank[0])[0][0];
  document.getElementById("b").innerHTML = Object.values(questionBank[0])[0][1];
  document.getElementById("c").innerHTML = Object.values(questionBank[0])[0][2];
  document.getElementById("d").innerHTML = Object.values(questionBank[0])[0][3];
}
function checkOption(e) {
    if (e.target.id == Object.values(answers)[0]) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
      document.getElementById(Object.values(answers)[0]).style.backgroundColor =
        "green";
    }
    next.addEventListener("click", myquiz2);
  }


function myquiz2() {
  //console.log(Object.values(answers)[1])
  begin.style.display = "none";
  document.getElementById("p1").innerHTML = Object.keys(questionBank[1]).join();
  document.getElementById("a").innerHTML = Object.values(questionBank[1])[0][0];
  document.getElementById("b").innerHTML = Object.values(questionBank[1])[0][1];
  document.getElementById("c").innerHTML = Object.values(questionBank[1])[0][2];
  document.getElementById("d").innerHTML = Object.values(questionBank[1])[0][3];
  
  
  
  next.addEventListener("click", myquiz3);


}
/*function checkOption(e) {
  if (e.target.id === Object.values(answers)[1]) {
    e.target.style.backgroundColor = "green";
  } else {
    e.target.style.backgroundColor = "red";
    document.getElementById(Object.values(answers)[1]).style.backgroundColor =
      "green";
  }
  next.addEventListener("click", myquiz3);
}*/


   function myquiz3(){
    console.log(Object.values(answers)[2])
    begin.style.display = "none"
    document.getElementById("p1").innerHTML = Object.keys(questionBank[2]).join();
    document.getElementById("a").innerHTML = Object.values(questionBank[2])[0][0];
    document.getElementById("b").innerHTML = Object.values(questionBank[2])[0][1];
    document.getElementById("c").innerHTML = Object.values(questionBank[2])[0][2];
    document.getElementById("d").innerHTML = Object.values(questionBank[2])[0][3];
    
    next.addEventListener("click", myquiz4);
  }
    
     /* function checkOption(e) {
        if (e.target.id === Object.values(answers)[2]){
          e.target.style.backgroundColor = 'green'
        } else {
     
          e.target.style.backgroundColor = 'red'
          document.getElementById(Object.values(answers)[2]).style.backgroundColor = 'green'
        }
        next.addEventListener("click",myquiz4)
  
     }*/

     function myquiz4(){
      console.log(Object.values(answers)[2])
      begin.style.display = "none"
      document.getElementById("p1").innerHTML = Object.keys(questionBank[3]).join();
      document.getElementById("a").innerHTML = Object.values(questionBank[3])[0][0];
      document.getElementById("b").innerHTML = Object.values(questionBank[3])[0][1];
      document.getElementById("c").innerHTML = Object.values(questionBank[3])[0][2];
      document.getElementById("d").innerHTML = Object.values(questionBank[3])[0][3];
      
      next.addEventListener("click", myquiz5);
    }/* function checkOption(e) {
        if (e.target.id === Object.values(answers)[2]){
          e.target.style.backgroundColor = 'green'
        } else {
     
          e.target.style.backgroundColor = 'red'
          document.getElementById(Object.values(answers)[2]).style.backgroundColor = 'green'
        }
        next.addEventListener("click",myquiz4)
  
     }*/



    
    
    function myquiz5(){
      console.log(Object.values(answers)[2])
      begin.style.display = "none"
      document.getElementById("p1").innerHTML = Object.keys(questionBank[4]).join();
      document.getElementById("a").innerHTML = Object.values(questionBank[4])[0][0];
      document.getElementById("b").innerHTML = Object.values(questionBank[4])[0][1];
      document.getElementById("c").innerHTML = Object.values(questionBank[4])[0][2];
      document.getElementById("d").innerHTML = Object.values(questionBank[4])[0][3];
      
      next.addEventListener("click", );
    }
/* function checkOption(e) {
        if (e.target.id === Object.values(answers)[2]){
          e.target.style.backgroundColor = 'green'
        } else {
     
          e.target.style.backgroundColor = 'red'
          document.getElementById(Object.values(answers)[2]).style.backgroundColor = 'green'
        }
        next.addEventListener("click",myquiz4)
  
     }*/






































/*let questionBank = [
  "The 19 in Covid-19 represents ____",
  "The Covid-19 virus first broke out in which city",
  "The agency is in charge of the battle against covid-19 and other infectious diseases is ____ ",
  "Which African country developed a $1 covid-19 test kit",
  "Which of these is not a symptom of Covid-19",
];
let options1 = [
  "A. 19 days",
  "B. 19th Pandemic",
  "C. Year 2019",
  "D. 19,000 deaths",
];
let options2 = ["A.Lagos", "B.Wuhan", "C.NewYork", "D.Rome"];
let options3 = ["A. NAPPTIP", "B. NSCDC", "C.NDA", "D. NCDC"];
let options4 = ["A. Senegal", "B. Mozambique", "C. Rwanda", "D. Nigeria"];
let options5 = [
  "A.High temperature",
  "B.Coughing",
  "C.stooling",
  "D.Breathing difficultly",
];

let score = 0;
const answer1 = document.getElementById("c");
const optionb = document.getElementById("b");
const optiona = document.getElementById("a");
const optiond = document.getElementById("d");
const answerContainerElement = document.getElementById("answerContainer")
const wrnganswer1 = document.querySelectorAll("#a, #b, #d");

const answer2 = document.querySelector("b");
const wrong2 = document.querySelectorAll("#a, #c, #d");

const answer3 = document.getElementById("d");
const wrong3 = document.querySelectorAll("#a , #b ,#c");

const answer4 = document.getElementById("a");
const wrong4 = document.querySelectorAll("#b , #c , #d");

//const answer5 = document.getElementById("c");
//const wrong5 = document.querySelectorAll("#a , #b , #d");

 const  wrng1 = wrn(document.querySelectorAll("#a, #b, #d")){
  backgroundColor
}

// this code is meant to style the right answer when selected
function correct1(id) {
  //answerContainerElement
  console.log(id)
  if (id === "c") {
    answer1.style.backgroundColor = "green";
  } 
  else {
    // for (let i = 0; i < wrnganswer1.length; i++) {
    //   wrnganswer1[i].style.backgroundColor = "red";
    // }
    alert("You are wroung")
  }

 // console.log("result: ", answerContainerElement);
}

function markQuestion() {
answer1.addEventListener("click", correct1(answer1.id));
  //answerContainerElement.addEventListener("click", correct1);
  for (let i = 0; i < wrnganswer1.length; i++) {
    wrnganswer1[i].addEventListener("click", correct1(wrnganswer1[i].id));
  }
  optionb.addEventListener("click", correct1(optionb.id))
}

//these functions is meant to call the block of code for each question when the next button is clicked
function questions1() {
  document.getElementById("but").addEventListener("click", myquiz1, true);
  //answer1.addEventListener("click" , correct1);
  markQuestion();
}
function questions2() {
  document.getElementById("but").addEventListener("click", myquiz2, true);
}
function questions3() {
  document.getElementById("but").addEventListener("click", myquiz3, true);
}
function questions4() {
  document.getElementById("but").addEventListener("click", myquiz4, true);
}
function questions5() {
  document.getElementById("but").addEventListener("click", myquiz5, true);
}

 these  functions holds block of code that helps to apply each of the questions  and its options
on the html page 
function myquiz1() {
  document.getElementById("p1").innerHTML = questionBank[0];
  document.getElementById("a").innerHTML = options1[0];
  document.getElementById("b").innerHTML = options1[1];
  document.getElementById("c").innerHTML = options1[2];
  document.getElementById("d").innerHTML = options1[3];
}

function myquiz2() {
  document.getElementById("p1").innerHTML = questionBank[1];
  document.getElementById("a").innerHTML = options2[0];
  document.getElementById("b").innerHTML = options2[1];
  document.getElementById("c").innerHTML = options2[2];
  document.getElementById("d").innerHTML = options2[3];
}

function myquiz3() {
  document.getElementById("p1").innerHTML = questionBank[2];
  document.getElementById("a").innerHTML = options3[0];
  document.getElementById("b").innerHTML = options3[1];
  document.getElementById("c").innerHTML = options3[2];
  document.getElementById("d").innerHTML = options3[3];
}

function myquiz4() {
  document.getElementById("p1").innerHTML = questionBank[3];
  document.getElementById("a").innerHTML = options4[0];
  document.getElementById("b").innerHTML = options4[1];
  document.getElementById("c").innerHTML = options4[2];
  document.getElementById("d").innerHTML = options4[3];
}

function myquiz5() {
  document.getElementById("p1").innerHTML = questionBank[4];
  document.getElementById("a").innerHTML = options5[0];
  document.getElementById("b").innerHTML = options5[1];
  document.getElementById("c").innerHTML = options5[2];
  document.getElementById("d").innerHTML = options5[3];
}
//markQuestion()
questions1();

if(questions1()){
   
  }
  else if (questions2() && answer2) {
    b.addEventListener("click", correct2());
    questions1()
  }
  else if (questions3()) {answer3;
    d.addEventListener("click",correct3() );
    questions1()
  } 
  else if (questions4()) {
    a.addEventListener("click", correct4());
    questions()

  } 
  else  {
    questions1()
  }

*/
