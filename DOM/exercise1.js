
const colors = ['green','cyan','olive','blue','magenta']
const txt = document.querySelector('.txt')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    let num = Math.floor(Math.random()*5)
    document.body.style.backgroundColor=colors[num]
    txt.innerText =`Background Color: ${colors[num]}`
})