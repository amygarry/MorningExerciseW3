

function best(array){
    let bestBuy = 0
 for(let i=0; i<array.length; i++){
    for(let k= i+1;k<array.length;k++){

        if(array[k]-array[i]> bestBuy){
            bestBuy =array[k]-array[i]
        }
    }
 }
 console.log(bestBuy)
}
best([15, 10, 20, 22, 1, 9])
