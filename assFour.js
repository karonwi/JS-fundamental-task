function checkAlpha(str){
    let vowelReg=/[aeiou]/gi;
    let consReg=/[bcdfghjklmnpqrstvwxyz]/gi;
    let vowel= str.match(vowelReg);
    let consonant=str.match(consReg);
   
    if(vowel.length > consonant.length){ return "vowels win";}
     else if (consonant.length > vowel.length){ return "consonant wins";}
     else if ( consonant.length == vowel.length){ return "Draw";} }

    console.log(checkAlpha("ddii"))

    