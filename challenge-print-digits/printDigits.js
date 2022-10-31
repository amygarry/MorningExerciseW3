
// if the number is in the

function printDigits(number){
    while(number){
        let lastnum = number % 10 
        console.log(lastnum)
        number = (number - lastnum)/10
    }
   
}
printDigits(345670)