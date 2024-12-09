const arr=['Python','Ruby','Java','Javascript','Rust']
let ran = Math.floor(Math.random()*arr.length)
let word = arr[ran]
let displayWord=word[0]+"_".repeat(word.length-1)
console.log(displayWord)
console.log(displayWord.length)

document.getElementById("guess").innerText = displayWord.split('').join(' ')

document.getElementById("submit").addEventListener("click",()=>{

let input = document.getElementById("input").value.toLowerCase();

let newWord=""
let isGuessRight=false;
for(let i=0;i<word.length;i++){
    if(word[i]==input){
        newWord+=input
        isGuessRight=true;
    }else{
        newWord+=displayWord[i]
    }
}
if(!isGuessRight){
    alert("Incorrect Guess")
}

displayWord = newWord;
document.getElementById("guess").innerText = displayWord.split('').join(' ')

if(displayWord==word){
    alert("Congratulation!!")
}

document.getElementById("input").value="";

})


