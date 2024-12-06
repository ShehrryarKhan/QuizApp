// Quiz Data
const quizzes = {
    HTML: [
      { question: "What does HTML stand for?", option1: "Hyper Text Markup Language", option2: "Home Tool Markup Language", option3: "Hyperlinks and Text Markup Language", correctAnswer: "Hyper Text Markup Language" },
      { question: "Which HTML element is used for the largest heading?", option1: "<h6>", option2: "<h1>", option3: "<header>", correctAnswer: "<h1>" },
      { question: "What is the correct HTML element for inserting a line break?", option1: "<br>", option2: "<lb>", option3: "<break>", correctAnswer: "<br>" },
      { question: "Which attribute is used to provide alternative text for an image?", option1: "alt", option2: "title", option3: "src", correctAnswer: "alt" },
      { question: "How can you create a checkbox in HTML?", option1: "<input type='checkbox'>", option2: "<checkbox>", option3: "<input type='box'>", correctAnswer: "<input type='checkbox'>" },
      { question: "Which HTML tag is used to create an unordered list?", option1: "<ul>", option2: "<ol>", option3: "<list>", correctAnswer: "<ul>" },
      { question: "What does the <title> element define?", option1: "The document's body", option2: "The document's title in the browser toolbar", option3: "The main heading", correctAnswer: "The document's title in the browser toolbar" },
      { question: "Which tag is used to define a hyperlink in HTML?", option1: "<link>", option2: "<href>", option3: "<a>", correctAnswer: "<a>" },
      { question: "What is the correct syntax for adding a background color in HTML?", option1: "<body bg='color'>", option2: "<body style='background-color: color;'>", option3: "<background color='color'>", correctAnswer: "<body style='background-color: color;'>" },
      { question: "How can you make text bold in HTML?", option1: "<strong>", option2: "<b>", option3: "Both <strong> and <b>", correctAnswer: "Both <strong> and <b>" }
    ],
    CSS: [
      { question: "What does CSS stand for?", option1: "Cascading Style Sheets", option2: "Creative Style Sheets", option3: "Computer Style Sheets", correctAnswer: "Cascading Style Sheets" },
      { question: "Which property is used to change the text color?", option1: "font-color", option2: "text-color", option3: "color", correctAnswer: "color" },
      { question: "Which CSS property controls the font size?", option1: "font-size", option2: "text-size", option3: "size", correctAnswer: "font-size" },
      { question: "What is the correct CSS syntax to make all paragraphs bold?", option1: "p {font-weight: bold;}", option2: "p {text-style: bold;}", option3: "p {style: bold;}", correctAnswer: "p {font-weight: bold;}" },
      { question: "Which property is used to add background color in CSS?", option1: "background-color", option2: "bg-color", option3: "color", correctAnswer: "background-color" },
      { question: "What is the default position value in CSS?", option1: "relative", option2: "absolute", option3: "static", correctAnswer: "static" },
      { question: "Which property is used to change the font of text?", option1: "font-family", option2: "font-style", option3: "font-weight", correctAnswer: "font-family" },
      { question: "How can you add padding to an element?", option1: "padding: 10px;", option2: "margin: 10px;", option3: "border: 10px;", correctAnswer: "padding: 10px;" },
      { question: "Which CSS property is used to change text alignment?", option1: "text-align", option2: "align-text", option3: "font-align", correctAnswer: "text-align" },
      { question: "How do you select an element with the id 'header' in CSS?", option1: ".header", option2: "#header", option3: "header", correctAnswer: "#header" }
    ],
    JavaScript: [
      { question: "What is the correct syntax for declaring a function?", option1: "function myFunction()", option2: "def myFunction()", option3: "fn myFunction()", correctAnswer: "function myFunction()" },
      { question: "Which symbol is used for comments in JavaScript?", option1: "//", option2: "/*", option3: "#", correctAnswer: "//" },
      { question: "How do you declare a variable in JavaScript?", option1: "var myVar;", option2: "let myVar;", option3: "Both var myVar; and let myVar;", correctAnswer: "Both var myVar; and let myVar;" },
      { question: "Which method is used to remove the last element of an array?", option1: "pop()", option2: "shift()", option3: "slice()", correctAnswer: "pop()" },
      { question: "How do you write a conditional statement in JavaScript?", option1: "if (condition) { }", option2: "if condition then { }", option3: "if condition: { }", correctAnswer: "if (condition) { }" },
      { question: "Which method converts a string to lowercase?", option1: "toLowerCase()", option2: "lower()", option3: "convertLower()", correctAnswer: "toLowerCase()" },
      { question: "What is the result of '5' + 5 in JavaScript?", option1: "'55'", option2: "10", option3: "Error", correctAnswer: "'55'" },
      { question: "Which keyword is used to define a constant?", option1: "const", option2: "let", option3: "var", correctAnswer: "const" },
      { question: "How can you detect the type of a variable in JavaScript?", option1: "typeof variable", option2: "type variable", option3: "getType(variable)", correctAnswer: "typeof variable" },
      { question: "What is the output of 1 === '1'?", option1: "true", option2: "false", option3: "Error", correctAnswer: "false" }
    ]
  };
  
  
  let currentQuiz, currentIndex = 0, score = 0, timer;
  
  // Start Quiz
  function startQuiz(type) {
    currentQuiz = quizzes[type];
    document.getElementById("quizSelection").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quizTitle").innerText = `${type} Quiz`;
    currentIndex = 0;
    score = 0;
    nextQuestion();
    startTimer();
  }
  
  // Load Question
  function nextQuestion() {
    if (currentIndex >= currentQuiz.length) {
      clearInterval(timer);
      alert(`Quiz Finished! Your score: ${score}/${currentQuiz.length}`);
      location.reload(); // Reset the app
      return;
    }
  
    const question = currentQuiz[currentIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("option1").innerText = question.option1;
    document.getElementById("option2").innerText = question.option2;
    document.getElementById("option3").innerText = question.option3;
  
    document.getElementsByName("answer").forEach(input => input.checked = false); // Reset options
  }
  
  // Check Answer
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      alert("Please select an answer!");
      return;
    }
  
    const userAnswer = currentQuiz[currentIndex][`option${selectedOption.value}`];
    const correctAnswer = currentQuiz[currentIndex].correctAnswer;
  
    if (userAnswer === correctAnswer) {
      score++;
    }
  
    currentIndex++;
    nextQuestion();
  }
  
  // Timer
  function startTimer() {
    let time = 59;
    clearInterval(timer); // Clear any previous timer
    timer = setInterval(() => {
      document.getElementById("timer").innerText = time;
      if (time === 0) {
        nextQuestion();
        time = 59;
      } else {
        time--;
      }
    }, 1000);
  }
// Create stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100; // Number of stars to create

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize the position and speed of the falling star
        const positionX = Math.random() * 100; // Random position X
        const positionY = Math.random() * 100; // Random position Y
        const animationDuration = Math.random() * 2 + 3; // Random falling duration

        star.style.left = `${positionX}vw`;
        star.style.animationDuration = `${animationDuration}s`;

        starsContainer.appendChild(star);
    }
}

// Call the function to generate stars
createStars();




// Show Result
function showResult() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    document.getElementById("finalScore").innerText = score;
    document.getElementById("totalQuestions").innerText = currentQuiz.length;
    // Create snowballs
    createSnow();
}

// Snowball effect
function createSnow() {
    const snowContainer = document.querySelector('body');
    const snowCount = 50; // Number of snowflakes

    for (let i = 0; i < snowCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snow');

        // Randomize the size and position of the snowflakes
        const size = Math.random() * 5 + 2; // Snowflake size
        const positionX = Math.random() * 100; // Random X position
        const positionDelay = Math.random() * 10; // Random delay for animation
        const animationDuration = Math.random() * 5 + 5; // Random falling duration

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${positionX}vw`;
        snowflake.style.animationDelay = `${positionDelay}s`;
        snowflake.style.animationDuration = `${animationDuration}s`;

        snowContainer.appendChild(snowflake);
    }
}

// Restart Quiz
function restartQuiz() {
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById("quizSelection").style.display = "block";
    // Clear snowflakes
    const snowflakes = document.querySelectorAll('.snow');
    snowflakes.forEach(snowflake => snowflake.remove());
}


  