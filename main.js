console.log("hey");
var fib = 1;
var oldFib = 0;
console.log(0);
do{
    console.log(fib);
    debugger;
    var hold = fib;
    fib = fib + oldFib;
    oldFib = hold;


} while(fib < 500);

// fib(6);

// function fib(start){
//     if(start <= 1){
//         return start;
//     }

//     var newFib = fib(start - 1) + fib(start - 2);
//     console.log(newFib);
//     return start;
// }
