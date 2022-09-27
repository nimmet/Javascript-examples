

const person = [
    {name:'Ahmet',age:24, position:'Developer',salary:95},
    {name:'Fatma',age:34, position:'Designer',salary:90},
    {name:'Atilla',age:19, position:'Hacker',salary:110},
    {name:'Camilla',age:22, position:'Game Developer',salary:120},
]

function showPerson(person){
    return`Name: <b>${person.name}</b>, Age: ${person.age},Posision: <b>${person.position}</b>`
   
}

let showContent = document.getElementById('show')
person.forEach(showPerson)

person.forEach(function(item){
    console.log(item.name.toLocaleUpperCase())
})

const ages = person.map(function(person){
    return `<h2>${person.age}</h2>`
})

// console.log(ages)

document.body.innerHTML = ages.join('')

const young = person.filter(function(person){
    return person.age<=25
})

document.body.innerHTML = young.forEach(showPerson)
// console.log(young)

const findPerson = person.find(function(person){
    return person.position === 'Hacker'
})

// console.log(findPerson)

const total = person.reduce(function(acc,currItem){
    console.log(acc)
    console.log(currItem)
    acc +=currItem.salary
return acc
},0)

document.body.innerHTML=total