let option = document.getElementById('option');

let btn2 = document.getElementById('btn2');

btn2.onclick = function(){

    let value = option.value;

    window.alert(value);
}

let para = document.getElementsByTagName('p');

function change(){
   for(let i = 0; i<para.length;i++){
       para[i].innerHTML = 'This is new paragraph'
       para[i].style.color = "red"
       console.log('clicked')
   }
}
let dc = document.getElementById('clock')
 
   const digital = () => {

    let dt = new Date().toLocaleTimeString();
    var ct = document.getElementById('setTime');
    ct.innerText = dt;

   
}
setInterval(digital,1000);