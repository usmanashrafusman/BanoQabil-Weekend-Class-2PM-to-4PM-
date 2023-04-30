// const student = {
//     name: "Ali",
//     subject: ["English", "Urdu", "Computer"],
//     age: 17,
//     setName(newName){
//         this.name = newName;
//     }
// }

// function Student(name, subject, age) {
//     this.studentName = name;
//     this.subject = subject;
//     this.age = age;
//     this.school = "BQ"
//     this.setAge = function(newAge){
//         this.age = newAge;
//     }
// };

// const student1 = new Student("Ahmed" , ["Urdu" , "Islamiat"] , 18)
// const student2 = new Student("Abdullah" , ["English" , "Islamiat"] , 19)
// student1.setAge(24);

// console.log(Object.keys(student1));

// for (const key in student1) {
//    console.log(key)
// };

// undefined // false
// null // false
// "" // false
// "fasd" // true
// {} // true
// [] // true
// 0 // false


///Todo APP code
const todos = [{todo:"Buy Fruits" , createdAt : new Date()}]
document.querySelector("#addBtn").addEventListener("click", () => {
    const todoEle = document.querySelector("#todo");
    if (!todoEle.value) {
        alert("Todo is empty")
    }
    const newTodo = {
        todo: todoEle.value,
        createdAt: new Date()
    }
    todos.push(newTodo)

    todoEle.value = "";

    const todoWrapper = document.createElement("div")
    const newTodoEle = document.createElement("p");
    const todoCreatedEle = document.createElement("p");

    newTodoEle.innerText = newTodo.todo;
    todoCreatedEle.innerText = newTodo.createdAt.toLocaleDateString()
    todoWrapper.appendChild(newTodoEle);
    todoWrapper.appendChild(todoCreatedEle)

    document.querySelector(".todos").appendChild(todoWrapper)

});

todos.forEach((todo, index) => {
    
    const todoWrapper = document.createElement("div")
    const todoEle = document.createElement("p");
    const todoCreatedEle = document.createElement("p");

    todoEle.innerText = todo.todo;
    todoCreatedEle.innerText = todo.createdAt.toLocaleDateString()
    todoWrapper.appendChild(todoEle);
    todoWrapper.appendChild(todoCreatedEle)

    document.querySelector(".todos").appendChild(todoWrapper)
});


