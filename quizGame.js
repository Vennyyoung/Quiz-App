let questionBank = [
  {
    "The 19 in Covid-19 represents ____": ["A. 19 days","B. 19th Pandemic","C. Year 2019","D. 19,000 deaths"]
  },
  {
    "The Covid-19 virus first broke out in which city": ["A.Lagos", "B.Wuhan", "C.NewYork", "D.Rome"]
  },
  {
    "The agency is in charge of the battle against covid-19 and other infectious diseases is ____ ": ["A. NAPPTIP", "B. NSCDC", "C.NDA", "D. NCDC"]
  },
  {
    "Which African country developed a $1 covid-19 test kit": ["A. Senegal", "B. Mozambique", "C. Rwanda", "D. Nigeria"]
  },
  {
    "Which of these is not a symptom of Covid-19": ["A.High temperature", "B.Coughing", "C.stooling", "D.Breathing difficultly"]
  }
];

const answers = {
  0: 'c',
  1: 'b',
  2: 'b',
  3: 'a',
  4: 'd' 
}

next = document.getElementById("but");
const begin = document.getElementById("start");
begin.addEventListener("click", myquiz1);
const quest = document.getElementById("options");

// start quiz

begin.style.display = "none";
// next.style.display = "none";
//quest.style.display = "none"

if(myquiz1()) { checkOption(e);
  
}


console.log(Object.values(answers)[0])
document.getElementById("p1").innerHTML = Object.keys(questionBank[0]).join();
document.getElementById("a").innerHTML = Object.values(questionBank[0])[0][0];
  document.getElementById("b").innerHTML = Object.values(questionBank[0])[0][1];
  document.getElementById("c").innerHTML = Object.values(questionBank[0])[0][2];
  document.getElementById("d").innerHTML = Object.values(questionBank[0])[0][3];

  function checkOption(e) {
    if (e.target.id === Object.values(answers)[0]){
      e.target.style.backgroundColor = 'green'
    } else {
 
      e.target.style.backgroundColor = 'red'
      document.getElementById(Object.values(answers)[0]).style.backgroundColor = 'green'
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
}

 

