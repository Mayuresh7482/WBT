function powNumber(num ,power){
    let res = 1;
    for (let index = 1; index <= power; index++) {
        res *= num;
    }
    return res;
}
console.log(powNumber(4,3)); // 4*4*4=64