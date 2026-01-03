'use strict';

function getAverage(scores) {
    let average =
        scores.reduce((accumulator, values) => accumulator + values, 0) /
        scores.length;
    return average;
}

function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90 && score <= 99) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Error';
    }
}

function hasPassingGrade(getGrade) {
    return getGrade === 'F' ? false : true;
}

const studentMsg = (scores, score) => {
    let averageScore = getAverage(scores);
    let grade = getGrade(score);
    let passing = hasPassingGrade(grade)
        ? 'You passed the course.'
        : 'You failed the course.';

    return (
        '"Class average: ' +
        averageScore +
        '. Your grade: ' +
        grade +
        '. ' +
        passing +
        '"'
    );
};

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

/* module.exports = {
    getAverage,
    getGrade,
    hasPassingGrade,
    studentMsg,
}; */
