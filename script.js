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
    let result = [];

    while(result.length < 9){
        const rand = Math.floor(Math.random() * (numbers.length));
        const number = numbers[rand];
        
        if(!result.includes(number)) {
            result.push(number);
        }
    }


    printHtml(result)
})
