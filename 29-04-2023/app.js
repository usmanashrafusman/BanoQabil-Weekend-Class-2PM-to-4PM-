document.getElementById("email-submit").addEventListener("click", () => {
    const emailEle = document.getElementById("email");
    if (emailEle.value === "") {
        alert("Email is required")
    } else {
        emailEle.value = "a@b.com"
    };

    document.querySelector("p").innerText = "You Cliked Submit"
});

document.querySelector("button").addEventListener("click", () => {
    document.getElementById("email-submit").className = "button"
    const parent = document.querySelector(".parent");
    const newEle = document.createElement("div");
    newEle.setAttribute("class", "child");
    const pEle = document.createElement("p");
    pEle.innerText = "Demo Text";
    newEle.appendChild(pEle);
    parent.appendChild(newEle)
});

const img = document.querySelector("img");

console.log(img.getAttribute("alt"));
console.log(img.setAttribute("alt", "BQ-logo"));
console.log(img.getAttribute("alt"));


// console.log(document.querySelector(".parent").children[0].children[0])
// console.log(document.querySelector(".parent").children[0].nextElementSibling.nextElementSibling.previousElementSibling.parentElement)

