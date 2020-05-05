let questionBank = [
  "The 19 in Covid-19 represents ____",
  "The Covid-19 virus first broke out in which city",
  "The agency is in charge of the battle against covid-19 and other infectious diseases is ____ ",
  "Which African country developed a $1 covid-19 test kit",
  "Which of these is not a symptom of Covid-19",
];
let options1 = ["A. 19 days","B. 19th Pandemic","C. Year 2019","D. 19,000 deaths",];
let options2 = ["A.Lagos", "B.Wuhan", "C.NewYork", "D.Rome"];
let options3 = ["A. NAPPTIP", "B. NSCDC", "C.NDA", "D. NCDC"];
let options4 = ["A. Senegal", "B. Mozambique", "C. Rwanda", "D. Nigeria"];
let options5 = ["A.High temperature", "B.Coughing", "C.stooling", "D.Breathing difficultly"];

let score = 0;
let answer;


// this code is meant to style the right answer when se
function correct1() {document.getElementById("c").style.backgroundColor = "green";}




//these functions is meant to call the block of code for each question when the next button is clicked
function questions1() {document.getElementById("but").addEventListener("click", myquiz1, true);}
function questions2() {document.getElementById("but").addEventListener("click", myquiz2, true);}
function questions3() {document.getElementById("but").addEventListener("click", myquiz3, true);}
function questions4() {document.getElementById("but").addEventListener("click", myquiz4, true);}
function questions5() {document.getElementById("but").addEventListener("click", myquiz5, true);}
 


/* these  functions holds block of code that helps to apply each of the questions  and its options
on the html page */
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

for (let i = 1; i < 6; i++) {
  if (questions1() && answer == document.getElementById("c")) {
    c.addEventListener("click", correct1());
  } 
  else if (questions2() && answer == document.getElementById("b")) {
    b.addEventListener("click", correct1());
  }
  else if (questions3() && answer == document.getElementById("d")) {
    d.addEventListener("click",correct1() );
  } 
  else if (questions4() && answer == document.getElementById("a")) {
    a.addEventListener("click", correct1());
  } 
  else if (questions5() && answer == document.getElementById("c")) {
    c.addEventListener("click", correct1());
  }
}
