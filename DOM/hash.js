const colors = ['0','1','2','3','4','5','6','7','8','9',
'A','B','C','D','E','F']
const txt = document.querySelector('.txt')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{

    let num = 0
    let col ='#'
    for(let i=0; i<6;i++){
        num = Math.floor(Math.random()*16)
        col +=colors[num]

    
    }
    document.body.style.backgroundColor=col
    txt.innerText =`Background Color: ${col}`
    
})