//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function getArticleLess (input){
    let words = input.split("");
    let nonArticleWords = words.filter(
        (word) => {
            let lowerCase = word.toLowerCase();
            if(lowerCase === "the" || lowerCase === "an" || lowerCase === "a"){
                return false;
            }
            return true;
        }
    )
    return nonArticleWords.join(" ");
}
let hashMap = {};
let arr1 = [];

for(i = 0; i < arr.length; i++){
    let articleLess = nonArticleWords(arr[i]);
    hashMap[articleLess] = arr[i];
    arr1.push(articleLess);
}

arr1.sort();

let output = [];

arr1.forEach((newString) => {
    output.push(hashMap[newString]);
})

console.log(output);
