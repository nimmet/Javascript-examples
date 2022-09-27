
const circle = document.querySelector('.circle-btn')
const rect = document.querySelector('.rect-btn')

const cir = document.querySelector('#circle')
const rec = document.querySelector('#rect')

circle.addEventListener('click',()=>{
    cir.classList.add('circle')
})

rect.addEventListener('click',()=>{
    rec.classList.add('rect')
    const params = rec.getBoundingClientRect()
    console.log(params.width)
    console.log(rec.getBoundingClientRect().top)
})