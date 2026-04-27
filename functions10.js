function maxNumber(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}

console.log(maxNumber(5, 5));
function sumNumbers(a, b) {
    return a + b;
}

console.log(sumNumbers(3, 7));
function printMyName() {
    console.log("Mariami Masurashvili");
}
printMyName();

function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}

console.log(getFullName("Mariami", "Masurashvili"));

function multiplyUpToN(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(multiplyUpToN(3));

const student = {
    firstName: "Mariami",
    lastName: "Masurashvili",
    age: 20,
    scores: [4, 7, 5, 3, 2],

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(student.fullName());

function sumScores(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum;
}

console.log(sumScores(student.scores));

console.log(student.firstName + " - " + student.age);
console.log("Homework functions branch update");