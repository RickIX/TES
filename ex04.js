let idade = Math.floor(Math.random()*100);
console.log(idade);
if (idade <= 13){
    console.log("Criança");
}

else if (13 < idade && idade <= 18){
    console.log("adolescente");
}

else if (18 < idade && idade <= 60 ){
    console.log("Adulto");
}

else if (idade > 60 ){
    console.log("Idoso");
}