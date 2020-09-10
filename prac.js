// document.write("DOM-javascript"); // this function is used to display something on the browser
// document.write("DOM-javascript");
// document.write("DOM-javascript");

// javascript is a loosely type programming language

      var num = 27;              // variable
      var ax = 'az'              // variable
      var flag = true;          // variable
       p = 10;                  // global variable

      // document.write(num);
     
 
  // when we talk about scope of variables in functions  in javascript language.
  // we have different observations about variables.

  // In function fun(n) we have let variable  of scope inside the if block and var variable of scope inside 
  // whole function.
    
     function fun(n){

       var s = 10;
       num = 100;
        if(true){
          var flag = true
            let x = 12;
           
        }

       // console.log(x)  // scope of x is inside the if block only
        // console.log(s)
        // console.log(flag)
     }
            
    //  fun(12)
    
    //  console.log(p)
    //  console.log(num);

        function sqrt(n){  return Math.sqrt(n); }
      var c = sqrt(num)
      //  console.log(c)

       function f(){
         var d = 10;
         let g = 10;
       }

       if(true){
         let t = false;
       }

      //  f();

      //  console.log(g)
      //  console.log(d)
      //  console.log(t)

      var a = 10;
      a++;
      console.log(a);
      a--;
      console.log(a);

      //  var b = a%5;
      // console.log(b);

      // console.log(a*a)
      // b = 10;

      // if(a != 0 && b != 0){
      //     console.log(true)
      // }

      console.log(typeof(a));

       var x = 10;
       var y = 10;
       var z = 10;

       var result = x+y+z;
        
    
       console.log("new result is " + result);  // associativity are from left to right.
       console.log( result + " new result is " + x + y + z)// associativity are from left to right
       
  class carBrands {

    constructor(brand){
      this.brandName = brand;
    }
  }

        car = new carBrands("ford");
           
     document.write("<h1>" + car.brandName + "</h1>");

     document.getElementById("Demo").innerHTML = "say Hello to everyone";
    
    






