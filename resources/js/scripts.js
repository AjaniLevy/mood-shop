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
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')
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
    let qtyStr = ''
    for (let i = 0; i < cart.length; i += 1){
        allitems += cart[i].qty
    }
    qtyStr = `${allitems}`
    cartQty.innerHTML = qtyStr
}
itemList.innerHTML = '<li> Hello World </li>'
function showItems(){
    cartQty.innerHTML = (`You have ${allitems} items in your cart.`)
    let itemStr = ''
    const name = cart[i].name
    const price = cart[i].price
    const qty = cart[i].qty

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${name} $${price} x ${qty} = ${qty * price}`)
        itemStr += `<li>${name} $${price} x ${qty}</li>`
    }
    itemList.innerHTML = itemStr
    cartTotal.innerHTML = `$${getTotal()}`

}
function getTotal(){
    for (let i = 0; i < cart.length; i += 1){
        alltotal += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)}
function removeItem(name, qty = 0){
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name){
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i].qty  < 1 || qty === 0){
                cart.splice(i, 1)
            }
            return
        }
}
}
print(itemList)
print(cartQty)
print(cartTotal)