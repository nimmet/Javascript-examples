

        const btn = document.querySelector('.btn')


btn.addEventListener('click',()=>{
    getData()})

function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"./ajaxTxt.txt")
   
    xhr.send()
    
    
    xhr.addEventListener('load',()=>{
        const text = document.createElement('p')
        document.body.appendChild(text)
        text.textContent = xhr.responseText
        
        // console.log(xhr.responseText);
    })
}