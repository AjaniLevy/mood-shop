const itemsContainer = document.getElementById('items')
import data from './data.js'
for (let i=0; i<data.length; ++i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    let img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300

    newDiv.appendChild(img)
    itemsContainer.appendChild(newDiv)
    let newPride = document.createElement('P');
    newPride.innerText = data[i].desc
    newDiv.appendChild(newPride)
    let newPride2 = document.createElement('P');
    newPride2.innerText = data[i].price
    newDiv.appendChild(newPride2)
    let button = document.createElement('button');
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
    }

const cart = []
const obj = {}
function addItem(name, price){
    for (let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name)  {
            cart[i].qty += 1
            return 
        }
    }
    const item = {name: name, price: price, qty: 1}
    cart.push(item)
}
let alltotal = 0
let allitems = 0
function getItems(){
    for (let i = 0; i < cart.length; i += 1){
        allitems += cart[i].qty
    }
}
function showItems(){
    console.log(`You have ${allitems} items in your cart.`)
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)

    }
    console.log(`Total in cart: $${getTotal()}`)
}
function getTotal(){
    for (let i = 0; i < cart.length; i += 1){
        alltotal += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)}
function removeItem(name){
    for(let i = 0; i < cart.length; i += 1) {
        if(cart[i].name === name){
            cart.splice(i, 1)
            return
        }
    }
}
function removesingleItem(name){
    for(let i = 0; i < cart.length; i += 1) {
        if(cart[i].name === name){
            cart[i].qty -= 1
            if (cart[i].qty === 0){
                cart.splice(i, 1)
            }
            return
        }
    }
}