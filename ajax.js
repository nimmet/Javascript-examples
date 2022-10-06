const xhr = new XMLHttpRequest();
xhr.open('GET',"./ajaxTxt.txt")
// xhr.onreadystatechange = function() {
// console.log(xhr);
// if(xhr.readyState === 4 && xhr.status === 200){
//     console.log(xhr.responseText);
// } else {
//     console.log({
//         status: xhr.status,
//         text: xhr.statusText
//     });
// }
// }
xhr.send()
xhr.addEventListener('load',()=>{
    console.log(xhr.responseText);
    const text = document.createElement('p')
    text.textContent = xhr.responseText
    document.body.appendChild(text)

})
