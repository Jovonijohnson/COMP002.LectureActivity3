function appendResult(divId, text) {
    const resultsDiv = document.getElementById(divId);
    const h2 = document.createElement('h2');
    h2.textContent = text;
    resultsDiv.appendChild(h2);
} // Make commands display onto "index.html" as the h2 element

var myGrade = 70; 
if (myGrade >= 90) {
    console.log("A");
    appendResult("results1", "A");
} else if (myGrade >= 80) {
    console.log("B");
    appendResult("results1", "B");
} else if (myGrade >= 70) {
    console.log("C");
    appendResult("results1", "C");
} else if (myGrade >= 60) {
    console.log("D");
    appendResult("results1", "D");
} else {
    console.log("F");
    appendResult("results1", "F");
} // if/else-if/else statements

var myGrade = 85
switch (true) {
    case (myGrade >= 90):
        console.log("A");
        appendResult("results2", "A");
        break;
    case (myGrade >= 80):
        console.log("B");
        appendResult("results2", "B");
        break;
    case (myGrade >= 70):
        console.log("C");
        appendResult("results2", "C");
        break;
    case (myGrade >= 60):
        console.log("D");
        appendResult("results2", "D");
        break;
    default:
        console.log("F");
        appendResult("results2", "F");
} // case statements

let result3 = "";
for (let i = 1; i <= 100; i++) {
    console.log(i);
    result3 += i + " ";
}
appendResult("results3", result3); // 

let result4 = "";
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("!");
        result4 += "! ";
    } else {
        console.log(i);
        result4 += i + " ";
    }
}
appendResult("results4", result4);