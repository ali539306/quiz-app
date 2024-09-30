// import React, { useState } from "react";
// import "./style.css";

// const questions = [
//   {
//     question: "California?",
//     answers: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"],
//     correct: "Sacramento",
//   },
//   {
//     question: "Texas?",
//     answers: ["Austin", "Houston", "Dallas", "San Antonio"],
//     correct: "Austin",
//   },
//   {
//     question: "New York?",
//     answers: ["Albany", "Buffalo", "Rochester", "New York City"],
//     correct: "Albany",
//   },
//   {
//     question: "Florida?",
//     answers: ["Miami", "Tallahassee", "Orlando", "Jacksonville"],
//     correct: "Tallahassee",
//   },
//   {
//     question: "Illinois?",
//     answers: ["Chicago", "Springfield", "Peoria", "Rockford"],
//     correct: "Springfield",
//   },
//   {
//     question: "Pennsylvania?",
//     answers: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
//     correct: "Harrisburg",
//   },
//   {
//     question: "Ohio?",
//     answers: ["Cleveland", "Columbus", "Cincinnati", "Toledo"],
//     correct: "Columbus",
//   },
//   {
//     question: "Georgia?",
//     answers: ["Atlanta", "Savannah", "Augusta", "Macon"],
//     correct: "Atlanta",
//   },
//   {
//     question: "Arizona?",
//     answers: ["Phoenix", "Tucson", "Mesa", "Flagstaff"],
//     correct: "Phoenix",
//   },
//   {
//     question: "Washington?",
//     answers: ["Seattle", "Olympia", "Spokane", "Tacoma"],
//     correct: "Olympia",
//   },
// ];

// export default function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0); // Use state to track score

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       alert(`End of quiz! Your score is: ${score}`);
//       // Optionally reset quiz
//       // setCurrentQuestionIndex(0);
//       // setScore(0);
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const handleAnswer = (answer) => {
//     if (answer === currentQuestion.correct) {
//       setScore(score + 1); // Update score using setScore
//     }
//   };

//   return (
//     <>
//       <div className="quizMain">
//         <div className="quizcenter">
//           <div className="quiznav">
//             <div className="quizstart">
//               <p className="quizhead">U.S. State Capitals Quiz</p>
              
//             </div>
//             <div className="quizend">
//               <span className="timesup"><h3>Score: {score}</h3></span>
//               <div className="timer"></div>
//               <div className="quiznum"></div>
//               <div className="score"></div>
//             </div>
//           </div>

//           <div className="quizquestions">
//             <h2 className="questions">{currentQuestion.question}</h2>
//             <div className="answers">
//               {currentQuestion.answers.map((answer, index) => (
//                 <div
//                   key={index}
//                   className={`card${index + 1} sheet`}
//                   onClick={() => handleAnswer(answer)} 
//                 >
//                   {answer}
//                 </div>
//               ))}
//             </div>
//             <button className="next" onClick={handleNext}>Next</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }











import React, { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "California?",
    answers: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"],
    correct: "Sacramento",
  },
  {
    question: "Texas?",
    answers: ["Austin", "Houston", "Dallas", "San Antonio"],
    correct: "Austin",
  },
  {
    question: "New York?",
    answers: ["Albany", "Buffalo", "Rochester", "New York City"],
    correct: "Albany",
  },
  {
    question: "Florida?",
    answers: ["Miami", "Tallahassee", "Orlando", "Jacksonville"],
    correct: "Tallahassee",
  },
  {
    question: "Illinois?",
    answers: ["Chicago", "Springfield", "Peoria", "Rockford"],
    correct: "Springfield",
  },
  {
    question: "Pennsylvania?",
    answers: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
    correct: "Harrisburg",
  },
  {
    question: "Ohio?",
    answers: ["Cleveland", "Columbus", "Cincinnati", "Toledo"],
    correct: "Columbus",
  },
  {
    question: "Georgia?",
    answers: ["Atlanta", "Savannah", "Augusta", "Macon"],
    correct: "Atlanta",
  },
  {
    question: "Arizona?",
    answers: ["Phoenix", "Tucson", "Mesa", "Flagstaff"],
    correct: "Phoenix",
  },
  {
    question: "Washington?",
    answers: ["Seattle", "Olympia", "Spokane", "Tacoma"],
    correct: "Olympia",
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); 

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correct) {
      setScore(score + 1); 
    }
    
  
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`End of quiz! Your score is: ${score + (answer === questions[currentQuestionIndex].correct ? 1 : 0)}`);
    
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="quizMain">
        <div className="quizcenter">
          <div className="quiznav">
            <div className="quizstart">
              <p className="quizhead">U.S. State Capitals Quiz</p>
            </div>
            <div className="quizend">
              <span className="timesup"><h3>Score: {score}</h3></span>
              <div className="timer"></div>
              <div className="quiznum"></div>
              <div className="score"></div>
            </div>
          </div>

          <div className="quizquestions">
            <h2 className="questions">{currentQuestion.question}</h2>
            <div className="answers">
              {currentQuestion.answers.map((answer, index) => (
                <div
                  key={index}
                  className={`card${index + 1} sheet`}
                  onClick={() => handleAnswer(answer)} 
                >
                  {answer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
