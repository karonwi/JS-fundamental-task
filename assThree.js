function letterOccurence(str){
 let wordObj={};
 let word="";
 for ( let i =0; i<str.length; i++){
  wordObj[str[i]] = ++wordObj[str[i]] || 1;
 }
 console.log(wordObj);
}
console.log(letterOccurence())