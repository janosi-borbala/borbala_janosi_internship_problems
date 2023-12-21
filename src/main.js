
//the uniq id of the question is the index in the array
const questionsAndAnswers = [
    {
        "question": "What is the capital city of Japan?",
        "answers": ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        "correctAnswer": 0
    },
    {
        "question": "Which gas makes up the majority of Earth's atmosphere?",
        "answers": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        "correctAnswer": 1
    },
    {
        "question": "Who is known as the 'Father of Computer Science'?",
        "answers": ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        "correctAnswer": 0
    },
    {
        "question": "Which planet is nicknamed the 'Red Planet'?",
        "answers": ["Venus", "Mars", "Jupiter", "Saturn"],
        "correctAnswer": 1
    },
    {
        "question": "What is the world's largest desert?",
        "answers": ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctica"],
        "correctAnswer": 3
    },
    {
        "question": "Who painted the 'Mona Lisa'?",
        "answers": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        "correctAnswer": 2
    },
    {
        "question": "Which element has the chemical symbol 'K'?",
        "answers": ["Potassium", "Krypton", "Kryptonite", "Platinum"],
        "correctAnswer": 0
    },
    {
        "question": "What is the longest river in the world?",
        "answers": ["Nile", "Amazon", "Yangtze", "Mississippi"],
        "correctAnswer": 1
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "answers": ["Jane Austen", "Harper Lee", "F. Scott Fitzgerald", "J.K. Rowling"],
        "correctAnswer": 1
    },
    {
        "question": "In what year did the Titanic sink?",
        "answers": ["1912", "1921", "1930", "1942"],
        "correctAnswer": 0
    },
    {
        "question": "What is the capital city of France?",
        "answers": ["Madrid", "Rome", "Berlin", "Paris"],
        "correctAnswer": 3
    },
    {
        "question": "Which planet is known as the 'Blue Planet'?",
        "answers": ["Mars", "Neptune", "Earth", "Venus"],
        "correctAnswer": 2
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "answers": ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"],
        "correctAnswer": 1
    },
    {
        "question": "What is the largest ocean on Earth?",
        "answers": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
        "correctAnswer": 0
    },
    {
        "question": "Which famous scientist developed the theory of relativity?",
        "answers": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        "correctAnswer": 0
    },
    {
        "question": "How many continents are there in the world?",
        "answers": ["5", "6", "7", "8"],
        "correctAnswer": 2
    },
    {
        "question": "What is the currency of Japan?",
        "answers": ["Yen", "Won", "Dollar", "Euro"],
        "correctAnswer": 0
    },
    {
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "answers": ["Thailand", "China", "South Korea", "Japan"],
        "correctAnswer": 3
    },
    {
        "question": "What is the capital city of Australia?",
        "answers": ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        "correctAnswer": 1
    },
    {
        "question": "What is the chemical symbol for gold?",
        "answers": ["Ag", "Au", "Fe", "Cu"],
        "correctAnswer": 1
    },


];

//array containing the indexes of the questions
let indexes = [...Array(questionsAndAnswers.length).keys()];

//suffles the array of indexes randomly
function shuffle(x) {
    for (let i = x.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [x[i], x[j]] = [x[j], x[i]];
    }
}

let currentIndex;
let correctAnswer;
let score;

function startQuiz() {
    score = 0;
    currentIndex = 0;
    shuffle(indexes);
    const scoreBoard = document.getElementById("score");
    scoreBoard.innerText = "";
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('answers').style.visibility = 'visible';
    nextQuestion()
}

function nextQuestion() {
    if (currentIndex >= indexes.length) {
        endQuiz();
    }
    else {
        const question = questionsAndAnswers[indexes[currentIndex]].question;
        const answers = questionsAndAnswers[indexes[currentIndex]].answers;
        correctAnswer = questionsAndAnswers[indexes[currentIndex]].correctAnswer;

        const questionBoard = document.getElementById("question");
        questionBoard.innerText = question;
        document.getElementById("answer1").innerText = answers[0];
        document.getElementById("answer2").innerText = answers[1];
        document.getElementById("answer3").innerText = answers[2];
        document.getElementById("answer4").innerText = answers[3];
    }
}

function checkAnswer(id) {
    if (id == correctAnswer) {
        score += 1;
    }
    currentIndex += 1;
    nextQuestion()
}

function endQuiz() {
    document.getElementById('start').style.visibility = 'visible';
    document.getElementById('score').style.visibility = 'visible';
    document.getElementById('question').innerText = "Congratulations on finishing the quiz!";
    const scoreBoard = document.getElementById("score");
    scoreBoard.innerText = "Your final score is " + score;
    document.getElementById('answers').style.visibility = 'hidden';
}