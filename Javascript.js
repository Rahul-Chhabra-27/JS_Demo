
var x = 10;
for(let i = 0; i<= x;i++){
    document.write("looping ")
}
var ans = 0;
while(x != 0){
    ans += x;
    x--;
}
console.log(ans)
    let input = document.getElementById('inp')
      
     let greetName = document.getElementById('btn')

       greetName.onclick = function(){
         let name = input.value;
         window.alert(name);
     }

     // switch case in javascript.
     var day = 52;

     switch(day){

        case 1 :
            document.write("<h1>sunday</h1>");
            break;

        case 2 :
            document.write("<h1>monday</h1>")
            break

         case 3 :
             document.write("<h1>tuesday</h1>")
             break;

        case 4 :
             document.write("<h1>wednesday</h1>")
             break;
             
        case 5 : 
             document.write("<h1>thursday</h1>")
             break;

        case 6 :
             document.write("<h1>friday</h1>") 
             break;  

         case 7 :
             document.write("<h1>saturday</h1>")  
             
        default :
             document.write("<h1>default enter</h1>")  
     }

     //Arrays in javascript

     var arrayOfCars = ['audi','mercedes','alto','scoda', 'ford']

     for(var i = 0; i<arrayOfCars.length;i++){
         document.write("<h1>" + arrayOfCars[i] + "</h1>");
     }


    arrayOfCars.push('suzuki')
    
document.write("<h1>" + arrayOfCars[arrayOfCars.length-1] + "</h1>");

// fizz-buzz

 //Arrays in javascript

var array = [1,2,3,4,5,5];
var n = array.length;

 var ans = [];
 
 console.log(ans)
 for(var i = 0; i<n; i++){
    var num = array[i]
    console.log(num)
   if(ans[num] == undefined){
       ans[num] = 1;
   } else{
       ans[num]++
   }
 }


 
 for(var i = 1; i<ans.length;i++){
    
    if(ans[i] == 2){
        console.log("result -->>> " + i);
    }
 }

// class in javascript
 class CarDetails{
  
    name;
    model;
    price;
    constructor( name, model,price){
        this.name = name;
        this.model = model;
        this.price =  price;
        this.info = function(){
            document.write("<h1>The model of car is " + model + "</h1>");
        }
    }

 }
     
   // we cannot add something externally in classes but in function's we can easily do this.

   
  var car = new CarDetails("ford",123,1200000);

      car.info();
      document.write("<h1>" + car.name + "</h1>")

   // function like classes

   function Cars (name,model,price){

    this.name  = name;
    this.model = model;
    this.price = price;
    this.infos = function(){

        document.write("<h1>the model no is " + this.model + "</h1>")
    }

   }
   // add something externally in function
   Cars.fuelType = "Diesel";
   var obj = new Cars('ford',123,1200000);
   obj.infos();
   document.write("<h1>" + Cars.fuelType + " </h1>")
   

   //DOM manipulation

   


   
 





      