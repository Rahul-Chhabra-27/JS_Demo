
let demo = document.getElementById("Demo")

let btn = document.getElementById("btn")

let heading1 = document.getElementById("heading1")

let input1 = document.getElementById("inp")

let input2 = document.getElementById("inp2")

let btn1 = document.getElementById('btn1')

let R1 = document.getElementById('rd1')
let R2 = document.getElementById('rd2') 

 let btn2 = document.getElementById('btn2');
 var para = document.getElementsByClassName('para');
 

       btn2.onclick = function(){
           console.log('clicked')
           for(let i = 0; i<para.length;i++){
               para[i].style.color = "red"
           }
       }

       let paragraph = document.getElementsByTagName('p')

       btn2.onclick = function(){
           for(var i = 0; i<paragraph.length;i++){
               paragraph[i].innerHTML = "modified";
           }
       }
// btn1.onclick = function(){

//     let n1 = R1.value;
//     let n2 = R2.value;

//     if(R1.checked == true){
//         alert(n1)
//     } else{
//         alert(n2)
//     }
// }


// btn.onclick = function(){

//     if(input1.value == input2.value){
//         window.alert('Both are true')
//     } else {
//         window.alert('Not same')
//     }
// }

//   btn.onclick = function(){
     
//       heading1.innerHTML = "js"
//       window.alert(heading1.innerHTML)
      
//   }

// btn.onclick = function(){

//     let text = input.value;
//      window.alert(text)

// }


 