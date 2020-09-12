let option = document.getElementById('select');

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

let button2 = document.getElementById('button');

button2.onclick = function(){
    let r1 = document.getElementById('rd1')
    let r2 = document.getElementById('rd2')
    let r3 = document.getElementById('rd3')
    let r4 = document.getElementById('rd4')
    let r5 = document.getElementById('rd5')

    if(r1.checked == true){
        window.alert(r1.value)
    }
    if (r2.checked == true) {
        window.alert(r2.value)
    }
    if (r3.checked == true) {
        window.alert(r3.value)
    }
    if (r4.checked == true) {
        window.alert(r4.value)
    } if (r5.checked == true) {
        window.alert(r5.value)
    }

}

let image = document.getElementById('image')

      image.onmousemove = function(){
    
    image.src = 'image2.jpg'
      }
      image.onmouseout = function(){
          image.src = 'image1.jpg'
      }