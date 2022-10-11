let vowels =[]
let nonvowels=[]

function hasMoreVowels (word){
 let wordLower= word.toLowerCase()



 for(let i=0; i<wordLower.length; i++){
  if(word[i] === "a" || word[i]=== "e" || word[i] === "o"|| word[i] === "i" || word[i] === 'u')
  vowels.push(word[i])
  else{
    nonvowels.push(word[i])
  }
}

    if( vowels.length>nonvowels.length){
    return true
    }else if (vowels.length<=nonvowels.length){
    return false
    }
}
 //count how many vowels there are 
 //count how many nonvowels 
 //compare vowels to nonvowels 

console.log(hasMoreVowels("okay"))
console.log(vowels)

//this is what Jared did 
function hasMoreVowels(word) {
    word = word.toLowerCase()

    let otherCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (
            word[i] === 'a' ||
            word[i] === 'e' ||
            word[i] === 'i' ||
            word[i] === 'o' ||
            word[i] === 'u'
        ) {
            vowelCount++
        } else {
            otherCount++
        }
    }

    if (vowelCount > otherCount) {
        return true
    }
    
    return false
}

console.log(hasMoreVowels('moose')) //true
console.log(hasMoreVowels('mice')) //false
console.log(hasMoreVowels('graph')) //false
console.log(hasMoreVowels('yay')) //false
console.log(hasMoreVowels('Aal')) //true