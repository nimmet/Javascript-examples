
const divtxt = document.querySelector('.divtxt')
const btn = document.querySelector('.btn')
const nameTxt = document.querySelector('.name')

divtxt.addEventListener('mouseenter',()=>{
    if(!divtxt.classList.contains('txt')){
        divtxt.className = 'txt'
    }
})

divtxt.addEventListener('mouseleave',()=>{
    if(divtxt.classList.contains('txt')){
        divtxt.classList.remove('txt')
    }
})

nameTxt.addEventListener('keypress',()=>{
nameTxt.classList.add('extra')
})

nameTxt.addEventListener('keyup',()=>{
    if(nameTxt.classList.contains('extra')){
    nameTxt.classList.remove('extra')
    }
    })

    nameTxt.addEventListener('keydown',()=>{
        nameTxt.classList.add('extra')
        })

