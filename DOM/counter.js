
const counter = document.querySelector('.counter')
const btns = document.querySelectorAll('.btns')
let num=0

btns.forEach((item)=>{
    item.addEventListener('click',function(e){

        if(e.target.id === 'dec'){
            num -=1   
        }else if(e.target.id === 'res'){
            num=0    
        }else{
            num +=1
        }
        
        if(num<0){
            counter.style.backgroundColor='red'
        }else if(num === 0){
            counter.style.backgroundColor='green'
        }else{
            counter.style.backgroundColor='cyan'
         }
        counter.innerHTML = num
       
    })
    
})