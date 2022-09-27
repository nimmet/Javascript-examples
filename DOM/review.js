
const users = [
    {profile:'images/1.jpg',
name:'Nimetullah Necmettin',
position:'Developer',
cv:'I graduated from Oslomet in Software Engineering and studied master in Computer Science at USN. Right now I am studying my Phd at Sakarya University. I want to work as Software Engineer at a Norway Software company soon.'},
{profile:'images/2.jpg',
name:'Camilla Nimetullah',
position:'Game Designer',
cv:'I am going to Myrene school right now and 9 years old. I like designing game, specially Roblox game. Till now i have developed several child game and all of them was put to App Store. I want to be a famous game designer one day.'},
{profile:'images/3.jpg',
name:'Atilla Nimetullah',
position:'Doktor',
cv:'I am going to Myre kindergarten right now, it is placed next to Myrene school. My sister is going to Myrene school and my fater is Software Engineer and my mother is nurse. I love my parents and sister.'},
]

const profile = document.querySelector('.profile')
const fullname = document.querySelector('.fullname')
const position = document.querySelector('.position')
const cv = document.querySelector('.cv')
const image = document.getElementById('image')
let num=0;
const btns = document.querySelectorAll('.btn')
btns.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.className==='left'){
           
            
           
                
              

                image.setAttribute('src',users[num].profile)
                fullname.innerHTML=`${users[num].name}`
                position.innerHTML=`${users[num].position}`
                cv.innerHTML=innerHTML=`${users[num].cv}`
                if(num===0){
                    num=users.length-1
                }
                num--
                
               
        }else if(e.target.className==='right'){
            // if(num>=0 && num<users.length-1){
                image.setAttribute('src',users[num].profile)
                fullname.innerHTML=`${users[num].name}`
                position.innerHTML=`${users[num].position}`
                cv.innerHTML=innerHTML=`${users[num].cv}`
                
                if(num===users.length-1){
                    num=0
                }
                
            //}
            num++
        } else{
            num = Math.floor(Math.random()*users.length)
            image.setAttribute('src',users[num].profile)
            fullname.innerHTML=`${users[num].name}`
                position.innerHTML=`${users[num].position}`
                cv.innerHTML=innerHTML=`${users[num].cv}`
        }

        
    })
})