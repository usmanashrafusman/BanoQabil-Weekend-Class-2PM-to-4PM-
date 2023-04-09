// const startDate = new Date("Feb 20, 2023");
// const endDate = new Date("Aug 20, 2023");

// const currentDate = new Date();

// const differenceInMS = endDate.getTime() - currentDate.getTime();
// const differenceInDays = differenceInMS / 86400000
// console.log(Math.floor(differenceInDays / 31))


//Functions
function printTable(table) {
    for (let i = 1; i <= 10; i++) {
        console.log(table + " X " + i + " = " + table * i)
    }
}

printTable(5)
printTable(6)

printTable(7)


