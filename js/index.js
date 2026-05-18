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
                <button class="order-btn" data-id="${item.id}">+</button>
            </div>

        `
        menuOption.appendChild(divItemMenu)
    });
}

render();

const buttons = document.querySelectorAll("button");

// HandleClick that will display all the information once thwe user clicks on the button
function handleClick(orderId) {
    const orderIdMenu = menuArray.filter((item) => {
        return item.id === parseInt(orderId)
    })[0];
    console.log(orderIdMenu);
}

// Button selector
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.dataset.id){
            handleClick(e.target.dataset.id);
            render();
        }
    })
})