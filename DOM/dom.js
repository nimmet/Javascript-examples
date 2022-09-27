
document.getElementById('btn').addEventListener('click', function(){
    // document.body.style.color='green'
    document.getElementById('bas').classList.add('bas')
})

console.log(document.getElementById('btn').nodeName)
console.log(document.getElementById('btn').style)

const headings = document.getElementsByTagName('h2')
console.log(headings)
headings[0].style.color='blue'


const heads = document.querySelectorAll('h2')
const headsArray = [...heads]
headsArray.forEach((item)=>{
    item.style.color='green'
})

heads.forEach(function(item){
    item.style.backgroundColor='cyan'
})