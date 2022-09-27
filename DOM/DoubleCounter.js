const show1 = document.querySelector('.show1')

// const counter = {
//     count:0,
//     increment(){
//         this.count++
//         show1.innerText = `${this.count}`
//     },
//     reset(){
//         this.count=0
//         show1.innerText = `${this.count}`
//     },
//     decrement(){
//         this.count--
//         show1.innerText = `${this.count}`
//     }
// }
// show1.innerText = `${counter.count}`


const show2 = document.querySelector('.show2')

// const counter2 = {
//     count:0,
//     increment(){
//         this.count++
//         show2.innerText = `${this.count}`
//     },
//     reset(){
//         this.count=0
//         show2.innerText = `${this.count}`
//     },
//     decrement(){
//         this.count--
//         show2.innerText = `${this.count}`
//     }
// }
// show2.innerText = `${counter.count}`

// function Counter(count,show){
//     this.count=count
//     show.innerText = `${this.count}`
//     this.increment=function (){
//         this.count++
//         show.innerText = `${this.count}`
//     }

//     this.reset=function(){
//         this.count=0
//         show.innerText = `${this.count}`
//     },
//     this.decrement=function(){
//         this.count--
//         show.innerText = `${this.count}`
//     }
// }

class Counter {
    constructor(count,show){
        this.count=count
        this.show=show
        this.show.innerText = `${this.count}`
    }

    increment (){
                this.count++
                this.show.innerText = `${this.count}`
            }

    reset(){
                        this.count=0
                        this.show.innerText = `${this.count}`
                    }

    decrement(){
            this.count--
            this.show.innerText = `${this.count}`
            }

}

// const counter2 = new counter()

const counter = new Counter(100,show1)
const counter2 = new Counter(2000,show2)



const b1 = document.querySelectorAll('.btns1')
const b2 = document.querySelectorAll('.btns2')


b1.forEach(item=>{
 item.addEventListener('click',(e)=>{
    if(e.target.className==='increase1'){
        e.addEventListener('click',counter.increment.call(counter))
    }else if(e.target.className==='reset1'){
        e.addEventListener('click',counter.reset.call(counter))
    }else{
        e.addEventListener('click',counter.decrement.call(counter))
    }
 })
})

b2.forEach(item=>{
    item.addEventListener('click',(e)=>{
       if(e.target.className==='increase2'){
           e.addEventListener('click',counter2.increment.call(counter2))
       }else if(e.target.className==='reset2'){
           e.addEventListener('click',counter2.reset.call(counter2))
       }else{
           e.addEventListener('click',counter2.decrement.call(counter2))
       }
    })
   })

// b1.forEach((btn)=>{
//     if(btn.tartget.className.contains('increase1')){
//         btn.addEventListener('click',counter.increment.bind(counter))
//     }
// })

// const decrease = document.querySelector('.decrease1')
// const show1 = document.que1rySelector('.show1')
// increase.addEventListener('click',counter.increment.bind(counter));
// decrease.addEventListener('click',counter.decrement.bind(counter));

