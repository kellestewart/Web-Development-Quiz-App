

const myQuestions = [
    {
      question: "What is the purpose of the doctype command?",
      answers: {
        a: "A tag to help format the document",
        b: "A command that tells the browser how to parse the page",
        c: "A declaration that allows JavaScript to run",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "What is a head element?",
      answers: {
        a: "The information that appears at the top of the page",
        b: "The title of the page that shows up in the browser",
        c: "An element that includes metadata about the HTML document",
        d: "All of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "What is semantic HTML, and why is it important?",
      answers: {
        a: "It's an important aspect of the movement for uniform Web Standards",
        b: "It's an accessibility tool that gives context to screen readers",
        c: "It's an important tool that helps search engines index the page properly",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
   {
      question: "Which of the following is true about the difference between classes and IDs in HTML and CSS? (Lesson 1.3)",
      answers: {
        a: "Elements can have both an element and a class",
        b: "Each element can only have one ID and each page can only have one element with that ID",
        c: "In CSS the ID of an element is denoted by the pound sign and the class is denoted by a period",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What does * { box-sizing: border-box; } do? What are its advantages?",
      answers: {
        a: "It uses the width property as the actual rendered width",
        b: "It eliminates the need for the box model calculation",
        c: "It results in more readable code",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "How is an inline element different from a block level element?",
      answers: {
        a: "The div element is an inline element",
        b: "The span element is a block element",
        c: "Inline elements can be used within block level elements",
        d: "Both a and b"
      },
      correctAnswer: "c"
    },
    {
      question: "What's an example of a situation where you would use a <form> element?",
      answers: {
        a: "A sign-up page for a membership website",
        b: "A multimedia page with scrolling videos and music players",
        c: "The Welcome page for a recipe website",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "What are media queries?",
      answers: {
        a: "The javascript method that allows multimedia content to be played in an HTML document",
        b: "An element that allows video to be properly displayed in documents that use HTML and CSS",
        c: "A module that allows web content to be displayed more readily on different size screens",
        d: "All of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Why are grids valuable?",
      answers: {
        a: "They can handle both columns and rows for HTML documents",
        b: "They are an less complicated way to create 2-dimensional styling for webpages",
        c: "They allow the developer to change the layout without interfering with the source order",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What is a function?",
      answers: {
        a: "A block of code designed to perform a specific task or calculate a value",
        b: "A semantic tool that is invoked when a particular action is desired",
        c: "An action that may be performed on an object",
        d: "A container for a data value"
      },
      correctAnswer: "a"
    },
    {
      question: "What is DOM manipulation?",
      answers: {
        a: "A Standard Object Model for HTML",
        b: "A programming interface for HTML",
        c: "A standard for how to get, change, add, or delete HTML elements",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What is an event listener?",
      answers: {
        a: "A procedure or function in a computer program that waits for an event to occur",
        b: "A console screen that registers program functions and errors",
        c: "A value that you can set or get",
        d: "An action that you can perform on an object"
      },
      correctAnswer: "a"
    },
    {
      question: "What is spaghetti code? How can you avoid it, and why should you? (Lesson 3.2)",
      answers: {
        a: "Code that goes on for more than one line",
        b: "Code with a tightly controlled structure",
        c: "Burdensome, unwieldy code that is difficult to read and maintain",
        d: "Well-structured classes that are easy to understand in isolation, but difficult to understand as a whole"
      },
      correctAnswer: "c"
    }

  ];
  
  let currentQuestion = 0;
  let answeredCorrect = 0;

  function loadQuestion(){
    return `<div> <fieldset>
        <legend class="question">${myQuestions[currentQuestion].question}</legend>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-1" tabindex="0" value="a">
        <label for="answer1-1">${myQuestions[currentQuestion].answers.a}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-2" tabindex="1" value="b">
        <label for="answer1-2">${myQuestions[currentQuestion].answers.b}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-3" tabindex="2" value="c">
        <label for="answer1-3">${myQuestions[currentQuestion].answers.c}</label><br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-4" tabindex="3" value="d">
        <label for="answer1-4">${myQuestions[currentQuestion].answers.d}</label>
        <button class = "submitAnswer" type="submit">Submit Answer</button><br>
        <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>
      </fieldset>`; 
  }

  function startQuiz() {
    $('.signup-form').on('click', '.submitStart', function(event){
      event.preventDefault();
      
      $(".signup-form").html(loadQuestion); 
    });
  }

function loadCorrectFeedback () {
  return `<p>That is correct! Way to go!</p>
  <button class = "submitNext" type="submit">Next Question</button>
  <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>`;
};

function loadIncorrectFeedback (){
  return `<p>I'm sorry that is incorrect. But keep trying!</p>
   <button class = "submitNext" type="submit">Next Question</button>
   <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>`;
};

function submitAnswer() {
  $('.signup-form').on('click', '.submitAnswer', function(event){
    event.preventDefault();
    let selectedAnswer = $(".exercise-question:checked").val();

    $(".footer").html("");
    if (selectedAnswer === undefined){
      $(".footer").html("Please select an answer");
    }else{
      if (selectedAnswer === myQuestions[currentQuestion].correctAnswer){
        answeredCorrect ++;
        $(".signup-form").html(loadCorrectFeedback); 
           
      }
      else{
        $(".signup-form").html(loadIncorrectFeedback);   
      }

      currentQuestion ++;
    }
  })
};

function loadExitPage (){
  return `<p>You scored ${answeredCorrect} out of ${myQuestions.length}.</p><br><p>You can use your answers to create a study guide or click the Restart button below if you'd like to try again. Best of luck and remember you are a Rock Star!</p><br>
  <button class = "restartQuiz" type="submit">Restart</button>`;
};

function restartQuiz () {
$('.signup-form').on('click', '.restartQuiz', function(event){
      event.preventDefault();
      currentQuestion = 0;
      answeredCorrect = 0;
      
      $(".signup-form").html(loadQuestion); 
    });
}

function submitNext() {
    $(".signup-form").on('click', '.submitNext', function(event){
      event.preventDefault();
      console.log ("currentQuestion= " + currentQuestion);
      if (currentQuestion == 13) {
        return $(".signup-form").html(loadExitPage);
      }
      else {
      $(".signup-form").html(loadQuestion);
      }
    });

}

function init() {
startQuiz();
submitAnswer();
submitNext();
restartQuiz();
}

$(init)


