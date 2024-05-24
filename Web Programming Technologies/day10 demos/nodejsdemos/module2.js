//private function, will not be 
//accessible outside this file
function factorial(n){
    f=1;
    for(var i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
exports.combination=function(n,r){
    nf=factorial(n)
    nmrf=factorial(n-r)
    return nf/nmrf;
}