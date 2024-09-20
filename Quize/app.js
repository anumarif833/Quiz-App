// var question = [
//       {
//     question : "which of the following is use to create an object in javascript?",
//     opt1 : "var varibleName;",
//     opt2 : "lat varibleName;",
//     opt3 : "const varibleName",
//     opt4 : "All of the obove",
//     ans : "All of the obove"
//     },
//      {
//     question : "what of the followuing is use to create an object in javascript?",
//         opt1 : "{}",
//         opt2 : "[]",
//         opt3 : "()",
//         opt4 : "<>",
        
// },
// {
//     question: "which method is used to parse a string to an intteger in javascript?",
//        opt1 : "parseInt",
//        opt2 : "parsenteger()",
//        opt3 : "parseNumber()",
//        opt4 : "parseInt()",
//        ans : "parseInt()"
//   }   
// ]
// let index = 0;
// function renderQues(){

//     var conttainer=document.getElementById("container")

// conttainer.innerHTML = ` 
//   <p class="question"> 
// ${question[index].question}</p>
//    <div> <lable for=""><input type="radio" name="opion" id="">$
//    {question[index].opt1}</lable></div>
//    <div> <lable for=""><input type="radio" name="opion" id="">$
//    {question[index].opt2}</lable></div>
//    <div> <lable for=""><input type="radio" name="opion" id="">$
//    {question[index].opt3}</lable></div>
//    <div> <lable for=""><input type="radio" name="opion" id="">$
//    {question[index].opt4}</lable></div>

//  `      
//   index++ 
//   }
//   renderQues()

var questions = [
  {
      question: "What is the correct syntax to declare a variable in JavaScript?",
      opt1: "var variableName;",
      opt2: "let variableName;",
      opt3: "const variableName;",
      opt4: "All of the above",
      ans: "All of the above"
  },
  {
      question: "Which of the following is used to create an object in JavaScript?",
      opt1: "{}",
      opt2: "[]",
      opt3: "()",
      opt4: "< >",
      ans: "{}"
  },
  {
      question: " Which method is used to parse a string to an integer in JavaScript?",
      opt1: "parseInt()",
      opt2: "parseInteger()",
      opt3: "parseNumber()",
      opt4: "parseFloat()",
      ans: "parseInt()"
  },
  {
      question: "What will be the output of the following code? </br> console.log(1 + '1');",
      opt1: "2",
      opt2: "NaN",
      opt3: "11",
      opt4: "TypeError",
      ans: "11"
  },
  {
      question: "What is the purpose of the this keyword in JavaScript?",
      opt1: "Refers to the current function",
      opt2: "Refers to the current object",
      opt3: "Refers to the current previous object",
      opt4: "Refers to the previous object",
      ans: "Refers to the current object."
  },
  {
      question: "Which method is used to add an element at the beginning of an array in JavaScript?",
      opt1: "push()",
      opt2: "pop()",
      opt3: "shift()",
      opt4: "unshift()",
      ans: "unshift()"
  },
  {
      question: "What will be the output of the following code?\nconsole.log('2' * '3');",
      opt1: "6",
      opt2: "23",
      opt3: "NaN",
      opt4: "undefined",
      ans: "6"
  },
  {
      question: "How do you write an IF statement in JavaScript?",
      opt1: "if (i == 5)",
      opt2: "if i = 5 then",
      opt3: "if i == 5",
      opt4: "if i = 5",
      ans: "if (i == 5)"
  },
  {
  question: "What is the output of the following code?\nlet a;\nconsole.log(a);",
  opt1: "undefined",
  opt2: "null",
  opt3: "0",
  opt4: "NaN",
  ans: "undefined"
},
{
  question: "What does the === operator do in JavaScript?",
  opt1: "Checks if two values are equal, ignoring their type",
  opt2: "Checks if two values are equal, considering their type",
  opt3: "Checks if a value is greater than or equal to another value",
  opt4: "Checks if a value is less than or equal to another value",
  ans: "Checks if two values are equal, considering their type"
}
]
var index = 0;
var result = 0

function renderQues() {
  var container = document.getElementById("container");
  var option = document.getElementsByName("option");
  for (var i = 0; i < option.length; i++) {

      if (option[i].checked) {
          if (questions[index - 1].ans === option[i].value) {
              result++
          }
          console.log(option[i].value, questions[index - 1].ans, result);
      }
  }
  if (!questions[index]) {
      calculateResult()
      var resultContainer = document.getElementById("result-container");
      resultContainer.style.display = "block";
      container.style.display = "none";

      console.log("Result: " + result);
      return;
  }
  container.innerHTML = `
   
  

   <p class="question">${index + 1}
   ${questions[index].question}</p><hr/>
      <div class="options"> <label for="opt1"><input type="radio" name="option" id="opt1" value="${questions[index].opt1}"> 
      ${questions[index].opt1}</label></div>
      <div class="options"> <label for="opt2"><input type="radio" name="option" id="opt2" value="${questions[index].opt2}">
      ${questions[index].opt2}</label></div>
      <div class="options"> <label for="opt3"><input type="radio" name="option" id="opt3" value="${questions[index].opt3}">
      ${questions[index].opt3}</label></div>
      <div class="options"> <label for="opt4"><input type="radio" name="option" id="opt4" value="${questions[index].opt4}">
      ${questions[index].opt4}</label></div>
      <button id="prev" class="m-2 btn btn-primary" onclick="previousQuestion()">Previous</button>
      <button id="next" class="m-2 btn btn-success" onclick="nextQuestion()">Next</button> `
  var prevButton = document.getElementById("prev");
// Disable Next button initially and add event listener to radio buttons
var option = document.getElementsByName("option");
var nextButton = document.getElementById("next");
nextButton.disabled = true;  // Disable Next button initially

// Add event listener to enable Next button when an option is selected
for (var i = 0; i < option.length; i++) {
  option[i].addEventListener("change", function () {
      if (document.querySelector('input[name="option"]:checked')) {
          nextButton.disabled = false;  // Enable Next button when an option is selected
      }
  });
}

  function calculateResult() {
      var score = document.getElementById("score");
      var percentage = ((result / questions.length) * 100).toFixed(2)
      var getData = localStorage.getItem("userData");
var parseData = JSON.parse(getData);
      if (percentage >= 70) {
          score.innerHTML = "Congratulations! "+parseData.name +" You passed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
      } else {
          score.innerHTML = "Sorry! "+parseData.name +" You failed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
          score.style.color = "#dc3545";
      }
  }
  prevButton.disabled = (index == 0);
  if (index == questions.length - 1) {
      nextButton.innerHTML = "Submit";
      nextButton.classList.add("btn-danger")
      nextButton
      console.log(questions.length);
  }
}
renderQues()
function nextQuestion() {
  index++;
  renderQues();
}
function previousQuestion() {
  if (index > 0) {
      index--;
      renderQues();
  }
}
