import { menuArray } from "./data.js";
const menuOption = document.querySelector(".menu");



function render() {
    menuArray.forEach((item) => {
        const divItemMenu = document.createElement("div");
        divItemMenu.classList.add("menu-item");
        divItemMenu.innerHTML =  `
            <div class="menu-results">
                <span>${item.emoji}</span>
                <h3>${item.name}</h3>
                <p>${item.ingredients}</p>
                <p>$${item.price}</p>
                <button class="order-btn" data-id=${item.id}>+</button>
            </div>
        
        `
        menuOption.appendChild(divItemMenu)
    });
}

render();

// Button selector 

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.dataset.id){
            console.log(e.target.dataset.id)
        }
    })
})