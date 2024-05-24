exports.addition=function(x,y){
    return x+y;

}

exports.factorial=function(n){
    var f=1;
    for(var i=1;i<=n;i++){
       f=f*i;
    }
    return f;
}

//console.log("addition : ",addition(10,21))

