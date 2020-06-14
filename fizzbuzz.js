for (let x = 1; x <=100; x++){
    switch (true){
        case(x % 3 === 0 && x % 5 === 0):
        console.log("Fizzbuzz");
        break;
        case x % 3 === 0:
        console.log("Fizz");
        break;
        case x % 5 === 0:
        console.log("Buzz");
        break;
        default:
        console.log(x);
    }
}