const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  let candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log(question);
candidateAnswer = input.question("Please enter your answer for question 1 : ")

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log("Your answer for question 1 is correct.")


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hi, Welcome for the Candidate Testing Quiz " +candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
/*
Candidate Name: Can Twin
1) Who was the first American woman in space?
Your Answer: sally ride
Correct Answer: Sally Ride

2) True or false: 5000 meters = 5 kilometers.
Your Answer: false
Correct Answer: true

3) (5 + 3)/2 * 10 = ?
Your Answer: 45
Correct Answer: 40

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: trajectory
Correct Answer: Trajectory

5) What is the minimum crew size for the ISS?
Your Answer: 10
Correct Answer: 3

>>> Overall Grade: 40% (2 of 5 responses correct) <<<
>>> Status: FAILED <<<
*/