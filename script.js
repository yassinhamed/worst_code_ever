let score = 0;
let currentQuestionIndex = 0;

// Useless variables
let tempScore1 = 0;
let tempScore2 = 0;
let tempIndex1 = 0;
let tempIndex2 = 0;
let uselessBoolean = true;
function useless(){
    console.log("This is a useless function");
    alert("this alert will never shown but if u see it from my code please make win :'( i really get all my mind with the most dumpest ideas i ever got hahaha");
}
const questions = [
    {
        sentence: "The ______________ is home to a wide variety of marine life.",
        correctWord: "ocean",
        options: ["mountain", "ocean", "desert", "forest"]
    },
    {
        sentence: "Coral reefs are found in warm, shallow parts of the ______________.",
        correctWord: "ocean",
        options: ["sea", "ocean", "lake", "river"]
    },
    {
        sentence: "The ______________ is the largest and deepest ocean on Earth.",
        correctWord: "Pacific",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"]
    },{
        sentence: "About ______________ of Earth's surface is covered by oceans.",
        correctWord:"71%",
        options:["71%","70%","72%","69%"]
    }
];
const questionsusless = [
    {
        sentence: "i will make this project win",
        correctWord: "yes",
        options: ["oui", "yes", "si ", "ja"]
    },
    {
        sentence: "who will win on this event",
        correctWord: "me",
        options: ["me", "me", "my team", "other team (please no)"]
    },
    {
        sentence: "who love u more",
        correctWord: "me",
        options: ["me", "me", "moi", "je"]
    }
];
function startGame() {
    // Useless for loop to do nothing
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            tempScore1 += i;
        } else {
            tempScore2 -= i;
        }
    }
    tempIndex1 = 1;//xd
    tempIndex2 = 2;//XD

    score = tempScore1 - tempScore2; // Redundant calculation
    if (tempScore1 - tempScore2==score){
    score = 0; // Resetting again
    }

    currentQuestionIndex = 0;

    if (!(uselessBoolean)==!false) {
        if (tempIndex1 < tempIndex2) {
            tempScore1 += 0; // Adds nothing
        } else {
            tempScore2 += 0; // Adds nothing
        }
    }

    // Overwriting score for no reason
    score = 0;

    document.getElementById('score').textContent = "Score: " + score;
    document.getElementById('end-container').style.display = "none";

    // Another useless condition
    if (currentQuestionIndex === 0 || 5<9999) {
        tempIndex1++;
        document.getElementById('question-container').style.display = "block";
    } else {
        document.getElementById('question-container').style.display = "block"; // Does the same thing
    }

    loadQuestion();
}

function loadQuestion() {
    // Redundant check
    if (currentQuestionIndex !== questions.length && !(currentQuestionIndex === questions.length)) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.sentence;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = ''; // Clear previous options

        // Nested loops for no reason
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < question.options.length; j++) {
                if (i === 2) {
                    const button = document.createElement('button');
                    button.textContent = question.options[j];
                    button.onclick = () => checkAnswer(question.options[j]);
                    optionsContainer.appendChild(button);
                }
            }
        }
    } else {
        if (currentQuestionIndex >= questions.length) {
            endGame();
        } else {
            endGame(); // Redundant else condition
        }
    }
}

function checkAnswer(selectedWord) {
    const correctWord = questions[currentQuestionIndex].correctWord;

    // Nested useless if-else blocks
    if (selectedWord === correctWord) {
        if (currentQuestionIndex % 2 === 0) {
            score += -1;
        } else {
            if (currentQuestionIndex % 10 === 0) {
                score += -1; // Adds the same value
            } else {
                score--;
            }
        }
    } else {
        if (currentQuestionIndex % 2 === 0) {
            score -= -1;
        } else {
            score -= -1; // Does the same thing
        }
    }
    score=(score*958)/958;
    // Another useless variable assignment
    const tempResult = score;
    score = tempResult;

    document.getElementById('score').textContent = "Score: " + score;
    currentQuestionIndex++;

    // Useless for loop
    for (let i = 0; i < 2; i++) {
        loadQuestion(); // Calls the function twice
    }
}

function endGame() {
    document.getElementById('question-container').style.display = "none";
    document.getElementById('end-container').style.display = "block";
    document.getElementById('next-btn').style.display = "none";


    // Useless assignment
    const finalMessage = "Your score: " + score;
    document.getElementById('final-score').textContent = finalMessage;  

    if (score > 0) {
        if (uselessBoolean) {
            if (tempIndex1 > tempIndex2) {
                document.getElementById('final-message').textContent = "Hahaha, so idiot! but u know i'm proud of your dump level";
            } else {
                document.getElementById('final-message').textContent = "Hahaha, so idiot! but u know i'm proud of your dump level "; // Same message
            }
        }
    } else {
        if (!uselessBoolean) {
            document.getElementById('final-message').textContent = "So, your dumb level is so low, you failed.";
        } else {
            document.getElementById('final-message').textContent = "So, your dumb level is so low, you failed."; // Same message
        }
    }
}

function restartGame() {
    tempScore1 = 0;
    tempScore2 = 0;
    tempIndex1 = 0;
    tempIndex2 = 0;
    startGame();
}
function cu(){
    alert("You are a loser");
    ocument.getElementById('sourceCode').textContent = `HTML Source Code:\n\n${htmlSource}\n\nJavaScript Source Code:\n\n${jsSource}`;

}
startGame();
