import { menuArray } from "./data.js";
const menuSection = document.querySelector(".menu");
const orderSection = document.querySelector(".order");

function render() {
    menuArray.forEach((item) => {
        const divItem = document.createElement("div");
        divItem.classList.add("menu-item");
        divItem.innerHTML = `
        <div class="menu-result">
            <span class="emoji">${item.emoji}</span>
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.ingredients}</p>
                <p>$${item.price}</p>
                <button>+</button>
            </div>
        </div>
        
        `
        menuSection.appendChild(divItem);
    });
}

render();

querySelectorAll(document)