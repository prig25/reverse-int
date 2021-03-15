module.exports = function reverse (n) {
    let pos;
    let posar=[];
    let invert;
    (n<0 ? pos=n*(-1) : pos=n);
    posar=String(pos).split("");
    posar.reverse();
    invert=posar.join("");
    return Number(invert);
}
/*module.exports = function reverse (n) {
    let ost=0;
    let cel;
    let invert="";
    (n<0 ? cel=n*(-1) : cel=n);
    while (cel!=0) {
        ost=cel%10;
        cel=Math.floor(cel/10);
        invert=invert+""+ost;
    }    
    return Number(invert);
}*/