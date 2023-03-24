x = 10
a = 0;
b = 1;
console.log(a);
console.log(b);
for (i = 2; i <= x; i++){
    c = a+b;
    a = b;
    b = c;
    console.log(c);
}