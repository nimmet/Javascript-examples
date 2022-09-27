

// const result = document.querySelector('#result')
// result.style.backgroundColor='blue'

// const item = document.querySelector('.special')
// item.style.backgroundColor='green'

// const lastItem = document.querySelector('li:last-child')
// lastItem.style.backgroundColor='olive'


// const list = document.querySelectorAll('.special')
// list.forEach((item)=>{
//     item.style.backgroundColor='green'
//     item.style.paddingLeft = '25px'
// })

// const result = document.querySelector('#result')
// console.log(result.firstChild)
// console.log(result.lastChild)
// console.log(result.parentNode.parentElement)

const liste = document.querySelector('#liste')
console.log(liste.firstChild.nextSibling.textContent)
console.log(liste.lastChild.previousSibling.textContent)
console.log(liste.lastChild.previousSibling.firstChild.nodeValue)
console.log(liste.getAttribute('id'))
const element = document.createElement('li')
element.textContent='after last'
liste.append(element)

console.log(liste.lastChild.textContent)

const divEl = document.createElement('div')
const text = document.createTextNode('A simple div element')
divEl.appendChild(text)
divEl.setAttribute('class','element')
document.body.appendChild(divEl)

const div2 = document.createElement('div')
const div2Text = document.createTextNode('Second div element')
div2.appendChild(div2Text)
div2.className ='element'
document.body.insertBefore(div2,liste)

const por = document.createElement('h2')
const porText = document.createTextNode('Hello Porsgrunn')
por.className = 'element'
por.appendChild(porText)


const korla = document.getElementById('korla')
document.body.replaceChild(por,korla)

const oslo = document.getElementById('oslo')
const stavanger = document.createElement('h2')
stavanger.innerText = 'Hello Stavanger'
stavanger.className = 'element'
document.body.prepend(stavanger)

oslo.remove()
// document.body.removeChild(oslo)