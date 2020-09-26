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