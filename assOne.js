
function reverseStr(str){
 let reversed = str.split("").reverse().join("");
 return reversed;
}
console.log(reverseStr("Hello world"))






function reverseStr(str){
 let reversed = "";
 for(i=str.length-1 ; i >=0; i--){
  reversed += str[i];

 }
 return reversed;
}

console.log(reverseStr("Hello world"))