let v1 = Math.floor(Math.random()*100);
let v2 = Math.floor(Math.random()*100);

if (v1 > v2){
    console.log(`${v1} é maior que ${v2}`);
}else if (v2 > v1) {
    console.log(`${v2} é maior que ${v1}`);
}else{
    console.log("os valores são iguais");
}
