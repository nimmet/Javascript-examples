

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