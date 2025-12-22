const questions = [
    {
        category: 'JavaScript',
        question: 'Which keyword is used to declare a variable?',
        choices: ['var', 'let', 'all of the above'],
        answer: 'all of the above',
    },
    {
        category: 'JavaScript',
        question: 'What does typeof return for an array?',
        choices: ['array', 'object', 'list'],
        answer: 'object',
    },
    {
        category: 'HTML',
        question: 'Which HTML tag is used to create a link?',
        choices: ['<a>', '<link>', '<href>'],
        answer: '<a>',
    },
    {
        category: 'CSS',
        question: 'Which property controls text color?',
        choices: ['font-style', 'color', 'text-align'],
        answer: 'color',
    },
    {
        category: 'General',
        question: 'Which symbol is used for comments in JavaScript?',
        choices: ['//', '<!-- -->', '#'],
        answer: '//',
    },
];

function getRandomQuestion(questions) {
    let randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

let choices = questions[Math.floor(Math.random() * questions.length)].choices;

function getRandomComputerChoice(choices) {
    let randomKey = Math.floor(Math.random() * choices.length);
    return choices[randomKey];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    }

    return (
        "The computer's choice is wrong. The correct answer is: " +
        questionObj.answer
    );
}

const questionObj = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(questionObj.choices);

console.log(getResults(questionObj, computerChoice));

//getResults(getRandomQuestion, getRandomComputerChoice);

//
