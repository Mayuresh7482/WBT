//self calling function
//any function you want to execute only once, then use 
//self calling function
(function(x){
    console.log("in f2",x);
})(10);


// a function which has access to its parent scope 
//is called as closure function

function f1(){
    var v=20;
    
    console.log("in f1")
    //closure function
    function f2(){
       console.log("value of v :",v);
       
    }
    
    f2();
}

f1()