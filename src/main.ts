function isPrime(number: number):boolean{
    let isPrime=true;
    if (number<2){
        isPrime=false;
    }
    else if (number>2){
        for (let i=2;i<=Math.sqrt(number);i++){
            if (number%i){
                isPrime=false;
                break;
            }
        }
    }
    return isPrime;
}
let array=[1,2,2,343,2];
let sum=0
for (let number of array){
    if (isPrime(number)){
        sum+=number;
    }
}
console.log(sum);