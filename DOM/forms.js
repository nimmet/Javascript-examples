

const form = document.getElementById("form")
const nam = document.getElementById('name')
const pass = document.getElementById('password')
const txt = document.getElementById('txt')
form.addEventListener('submit',function(e){
    e.preventDefault()
    txt.innerHTML=`<h2>Name: ${nam.value}</h2></br>
    <h2>Password: ${pass.value}</h2>`
})

localStorage.setItem('name','Atilla')
sessionStorage.setItem('name','Camilla')

localStorage.setItem('family',JSON.stringify(['Sofie','Camilla','Atilla']))

document.body.innerText = sessionStorage.getItem('name')
document.body.innerText = JSON.parse(localStorage.getItem('family'))[0]

function family(hotun,kizim,oglum){
    document.body.innerHTML= `<h2>${hotun}</h2><br>
    <h2>${kizim}</h2><br>
    <h2>${oglum}</h2>`
}

setTimeout(family('Sofie','Camilla','Atilla'),500)


setInterval(family('Sofie','Camilla','Atilla'),500)

window.addEventListener('DOMContentLoaded',()=>{
    const kiz = document.querySelector('h2')
    kiz.innerText = `${sessionStorage.getItem('name')}`
    kiz.style.color='green'
})