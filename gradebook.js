'use strict';

function getAverage(scores) {
    let average =
        scores.reduce((accumulator, values) => accumulator + values, 0) /
        scores.length;
    return average;
}

function getGrade(score) {
    if (score === 100) return 'A+';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function hasPassingGrade(score) {
    return getGrade(score) !== 'F';
}

const studentMsg = (scores, score) => {
    let averageScore = getAverage(scores);
    let grade = getGrade(score);
    let passing = hasPassingGrade(score)
        ? 'You passed the course.'
        : 'You failed the course.';

    return (
        'Class average: ' +
        averageScore +
        '. Your grade: ' +
        grade +
        '. ' +
        passing
    );
};

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));

/* module.exports = {
    getAverage,
    getGrade,
    hasPassingGrade,
    studentMsg,
}; */
