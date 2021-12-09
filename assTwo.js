
function palindromeCheck(str){
 let stred= str.toLowerCase();
 
 let result= str.toLowerCase().split("").reverse().join("");
 if(result == stred){
  return true;}
 else return false;
 
}

console.log(palindromeCheck("Racecar"))


function palindromeCheck(str){
 let stred = str.toLowerCase();

 let rword = "";
 for(i=stred.length-1; i>=0 ;i--){
  rword+= stred[i];
 }
 if(stred == rword){
  return true;
 }
 else return false;
}

console.log(palindromeCheck("Racecar"))