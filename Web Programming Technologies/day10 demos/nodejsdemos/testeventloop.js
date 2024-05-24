function f1(){
    console.log("in f1")
}
var v;
function f2(){
    console.log("in f2");
    v=setInterval(f1,1000);
}
function f3(){
    clearInterval(v);
}

console.log("before call f1")
f1();
setTimeout(()=>{console.log("hello1")},500);
f2();
setTimeout(f3,5000);
setTimeout(()=>{console.log("hello2")},0);
console.log("after settimeout f3")