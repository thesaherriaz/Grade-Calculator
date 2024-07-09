function grade() {
    const name = document.getElementById("name").value;
    const obt_marks = document.getElementById("obt_marks").value;
    const total_marks = document.getElementById("total_marks").value;

    let percentage = (obt_marks / total_marks) * 100;

    let grade = "";

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "A-";
    }
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C";
    }
    else if (percentage >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    document.getElementById("result").innerHTML = `Dear ${name}, your percentage is ${percentage.toFixed(2)} and the grade you have achieved is ${grade}.`;
}