

const students = [
    {id:1,name:'Ahmet',score:80,favorateSubject:'Math'},
    {id:2,name:'Samet',score:70,favorateSubject:'Java'},
    {id:3,name:'Camilla',score:99,favorateSubject:'Python'},
    {id:4,name:'Atilla',score:95,favorateSubject:'Python'},
    {id:5,name:'Mehmet',score:85,favorateSubject:'Python'},
]

const roles = students.map(function(students){
    students.role='student'
})

document.body.innerHTML = roles
console.log(students)

const highScores = students.filter(function(student){
    return student.score > 90
})

console.log(highScores)
document.body.innerHTML = `${highScores}`

const findStudent = students.find(function(student){
    return student.id === 3
})

console.log(findStudent)

const averageScores = students.reduce(function(acc,cur){
    acc +=cur.score
    return acc
},0)/students.length

console.log(averageScores)

const fav =[]
const favorates = students.reduce(function(acc,cur){
fav.push(cur.favorateSubject)
return fav
},fav)

console.log(favorates)

const fag ={Math:0,Python:0,Java:0}
const favObj = students.reduce(function(acc,cur){
acc +=cur.favorateSubject
switch(cur.favorateSubject){
    case 'Math': fag.Math +=1
    break;
    case 'Java': fag.Java +=1
    break;
    case 'Python':
        fag.Python +=1
        break;

}
return fag
},{})

console.log(favObj)


const survey = students.reduce(function(sur,student){
const sub = student.favorateSubject
if(sur[sub]){
    sur[sub] +=1
}else{
    sur[sub]=1
}
return sur
},{})

console.log(survey)

document.body.innerHTML = `${Math.floor(Math.random()*10+1)}`

const date = new Date()
document.body.innerHTML =  date.getDay()