/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let number=[];
    number[0]=0;
    number[1]=1;

    for (let i=2; i<(num+2); i++){
        number[i]=number[i-1]+number[i-2];
    }
    return number[num+1];
}