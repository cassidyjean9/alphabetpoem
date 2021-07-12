const fs = require('fs') 
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q','r','s','t','u','v','w', 'x', 'y', 'z']
let randomWord = ''
let wordsArray;
let poem = [];

fs.readFile('nounlist.txt', (err, data) => { 
    if (err) throw err; 
  
  //   console.log(data.toString()); 

    str= data.toString();

    const words = str.split('\n');

   

var i;



for (i=0; i< alphabet.length;i++){

    var letter = alphabet[i];
    // console.log(letter);
    
    let q;
    for (q=0; q< words.length; q++){
        randomWord = words[q]
        if (randomWord.charAt(0) == letter){
            var alphabetObject = {}
               wordsArray = []
               wordsArray.push(randomWord);
            //    console.log(wordsArray);
            alphabetObject[alphabet[i]] = wordsArray;
            console.log(alphabetObject);

            Object.keys(alphabetObject).forEach(function (item) {
                // console.log(item); // key
                // value
                var key = item;
                var value = (alphabetObject[item]);
                poem.push(value[Math.floor( Math.random() * value.length)] + " exists; " + value[Math.floor(Math.random() * value.length)]+ ", and " + value[Math.floor(Math.random() * value.length)] + "; " )
               
            });
            
            console.log(poem);
            

        }
          
              
            }
      
        
       }













});