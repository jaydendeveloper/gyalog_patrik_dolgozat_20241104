let numbers = [1,2,3,4,5,6,7,8,9];
const div = document.getElementById("nums");
const button = document.getElementById("btn");

function printHtml(numberArr){
    let html = "";

    numberArr.forEach((number)=> {
        html += `<div class="grid-item">${number}</div>`
    })
    
    div.innerHTML = html;
}

printHtml(numbers)

button.addEventListener("click", ()=> {
    let numbers2 = [];

    while(numbers2.length < 9){
        const rand = Math.floor(Math.random() * (numbers.length -  1 + 1) + 1);
        const number = numbers[rand-1]
        
        if(!numbers2.includes(number)) {
            numbers2.push(number);
        }
    }


    printHtml(numbers2)
})