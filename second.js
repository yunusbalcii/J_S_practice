let grade = prompt("Enter your grade: ");

if (grade >= 90 && grade <= 100) {
  score = "A";
} else if (grade >= 80 && grade <= 90) {
  score = "B";
} else if (grade >= 70 && grade <= 80) {
  score = "C";
} else if (grade >= 60 && grade <= 70) {
  score = "D";
} else {
  score = "Fail";
}

console.log("Your grade is", score);
