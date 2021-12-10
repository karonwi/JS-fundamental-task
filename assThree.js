function letterOccurence(str){
 let splitted = str.toLowerCase().split("");
 let obj={};
 splitted.forEach(char=>{
  if(!obj[char]){obj[char]=1;}
  else{obj[char]++;}
 })
 let arrObj= obj[splitted[0]];
 for(let i=0; i<splitted.length;i++){
  if(obj[splitted[i]] > arrObj){
    arrObj=obj[splitted[i]];
   }
  }
  let result = Object.keys(obj).find(key=>obj[key]==arrObj)
  console.log(result)
}
console.log(letterOccurence("hello world"))