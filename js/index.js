import { menuArray } from "./data.js";
const menuOption = document.querySelector(".menu");
const totalOrder = document.querySelector(".order");
let orders = [];

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


function renderOrder() {
    if(orders.length === 0) {
        totalOrder.innerHTML = ""
        return;
    }
    const total = orders.reduce((sum, item) => sum + item.price, 0)
        totalOrder.innerHTML = `
        <h2>Your Order</h2>
        ${orders.map((item) => `
            <div class="order-item">
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button class="remove-btn" data-id="${item.id}">remove</button>
            </div>
        `).join("")}
        <hr>
        <div class="order-total">
            <strong>Total: $${total}</strong>
        </div>
        <button class="complete-btn">Complete Order</button>
    `;
}

const buttons = document.querySelectorAll("button");

// HandleClick that will display all the information once thwe user clicks on the button
function handleClick(orderId) {
    const orderIdMenu = menuArray.find((item) =>  item.id === parseInt(orderId))
    orders.push(orderIdMenu);
    console.log(orderIdMenu);
      renderOrder();
}

// Button selector
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.dataset.id){
            handleClick(e.target.dataset.id);
        }
    })
});

const completeBtnOrder = document.querySelector(".complete-btn");
const formOrder = document.querySelector(".form-order");

completeBtnOrder.addEventListener("click", completeOrder);

function completeOrder() {
    const divInfo = document.createElement("div");
    divInfo.classList.add("menu-purchased");
    divInfo.innerHTML = `
    <h2>Enter Card details</h2>
    <input type="text" placeholder="Enter your name"/>
    <input type="tel" placeholder="Enter card number"/>
    <input type="text" placeholder="Enter CVV"/>
    <button type="submit">Pay</button>
    `
    formOrder.appendChild(divInfo);
}

