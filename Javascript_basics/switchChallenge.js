p1 = {
    name:'Ahmet',
    age: 16,
    status:'resident'
}

p2 = {
    name:'Samet',
    age:21,
    status: 'tourist'
}

if(p1.age>18 && p1.status==='resident'){
    document.write('Hei'+p1.name+' you can vote this year')
} else{
    document.write('Hei '+p1.name+' You are not eligible for voting')
}

let info = document.getElementById('info')

switch(p2.name){
    case 'Samet':
        info.innerHTML='<h1>'+p2.name+'</h1>'+
        '<h2>'+p2.age+'</h2>'+
        '<h2>'+p2.status+'</h2>'
}

function fullname(first,last){
    return `Your first name is: <b>${first}</b> and last name is: <b>${last}</b>`
}

info.innerHTML = `${fullname('Camilla','Nimetullah')}`

const names = ['Ahmet','Samet','Mehmet']






