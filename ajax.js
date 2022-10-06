

        const btn = document.querySelector('.btn')
        const text = document.createElement('p')
        document.body.appendChild(text)

btn.addEventListener('click',()=>{
    getData()})

function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"./ajaxTxt.txt")
   
    xhr.send()
    
    
    xhr.addEventListener('load',()=>{
     
        text.textContent = xhr.responseText
        
        // console.log(xhr.responseText);
    })
}

const data = fetch('./person.json').then((req)=> req.json()).then((data)=> data.map((item)=> `<p>${item.name.toUpperCase()}</p>`)).catch((err)=> console.log(err))

data.then((d)=> document.body.innerHTML=d.join(""));