import { menuArray, orderArray } from "./data.js";

const menuSection = document.querySelector('.menu');
const orderItemsDiv = document.getElementById('order-items');
const orderTotalP = document.getElementById('order-total');

function renderOrder() {
    orderItemsDiv.innerHTML = '';
    let total = 0;
    const itemCounts = {};

    orderArray.forEach(item => {
        if (itemCounts[item.id]) {
            itemCounts[item.id].quantity++;
        } else {
            itemCounts[item.id] = { ...item, quantity: 1 };
        }
        total += item.price;
    });

    Object.values(itemCounts).forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <p>${item.quantity}x ${item.name} - $${item.price * item.quantity}</p>
        `;
        orderItemsDiv.appendChild(orderItem);
    });

    orderTotalP.textContent = `Total: $${total}`;
}

menuArray.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <h1>${item.emoji}</h1>
        <div>
            <h2>${item.name}</h2>
            <p class="menu-ingredients">${item.ingredients.join(', ')}</p>
            <p class="menu-price">$${item.price}</p>
        </div>
        <button class="order-btn" data-id="${item.id}">+</button>
    `;
    menuSection.appendChild(menuItem);
});

document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const itemId = parseInt(e.target.dataset.id);
        const selectedItem = menuArray.find(item => item.id === itemId);
        if (selectedItem) {
            orderArray.push(selectedItem);
            renderOrder();
        }
    });
});