const userCity = prompt("Enter Your City Name")
const cities = ["Karachi", "Lahore", "Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

let isCityFound = false;
for (let i = 0; i < cities.length; i++) {
    if (userCity.toLowerCase() !== cities[i].toLowerCase()) {
        continue;
    }
    alert("Your city is available")
}

// if(isCityFound === false){
//     alert("Your City is not available")
// }
// const enteredRollNo = prompt("Enter Student Roll No")
// const students = [["Abdullah", 12385, 22], ["Furqan", 46587, 21], ["Ahmed", 44747, 32]]

// let isStudentFound = false;
// for (let i = 0; i < students.length; i++) {
//     if (enteredRollNo == students[i][1]) {
//         isStudentFound = true;
//         alert("Student Name is " + students[i][0] + " and age is " + students[i][2])
//     }
// }

// if (isStudentFound === false) {
//     alert("Student not found")
// }


const numbers = [[2, 4, 6, 8, 10], [3, 5, 7, 9], [2, 3, 6, 9]];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const randomNumbs = numbers[i];
    let isEvenOdd = "";
    for (let j = 0; j < randomNumbs.length; j++) {
        const number = randomNumbs[j];
        if (number % 2 === 0) {
            if (isEvenOdd === "Even" || isEvenOdd === "") {
                isEvenOdd = "Even"
            } else {
                isEvenOdd = "Mixed"
            }
        } else {
            if (isEvenOdd === "Odd" || isEvenOdd === "") {
                isEvenOdd = "Odd"
            } else {
                isEvenOdd = "Mixed"
            }
        }
    }
    output.push(isEvenOdd)
}
for (let i = 0; i < output.length; i++) {
    alert("Array no " + (i+1) + " is " + output[i])
}



