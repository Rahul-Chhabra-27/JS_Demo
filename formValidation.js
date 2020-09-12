
let btn = document.getElementById('btn')

 function submit (){

    let text = document.getElementById('text')
    let pass = document.getElementById('password')

   let new_txt = text.value.trim();
   let new_pass = pass.value.trim();

   if(new_txt == new_pass){
       window.alert('did not recognized')
   }

    return true;
}