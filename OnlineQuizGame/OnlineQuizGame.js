const questions = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Jupiter", "Mars", "Earth", "Venus"],
      correctAnswer: 0,
    },
  ];


  function displayQuestion(question){
    // displaying the question
    console.log(question.question);
    // dislaying the answers choices
    question.answers.forEach((answer,index)=>{
        console.log(index+1+". "+answer);
    });
  }

  function checkAnswer(answer,question) {
    return question.correctAnswer === answer-1;
  }

  function main(){
    console.log("WELCOME TO ONLINE QUIZ GAME");
    const checked_question = [];
    let score = 0;

    while(checked_question.length !== questions.length ){
        const currentQuestionIndex = parseInt(Math.random()*questions.length);

        if(!checked_question.includes(currentQuestionIndex)){
            const question = questions[currentQuestionIndex];

            // Display the question
            displayQuestion(question);
            // Ask Answer
            const answer = parseInt(prompt("Select One answer:"));
            // Check if the answer is correct
            if(checkAnswer(answer, question)){
                console.log("Answer is correct")
                score++;
            }else {
                console.log("Wrong answer, correct answer is: " + question.answers[question.correctAnswer]); 
            }

            checked_question.push(currentQuestionIndex);
        }
 
    }
    
    console.log("Thank you for taking the Quiz.");
    console.log("Your overall Score is "+score+ " Out of "+ questions.length);
  }

  main();