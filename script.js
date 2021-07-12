// // Requiring fs module in which  
// readFile function is defined. 
const fs = require('fs') 
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path')

const PORT = process.env.PORT || 5000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));



// declaring variables 
let poem = []
let aLet = []
let bLet = []
let cLet = []
let dLet = []
let eLet = []
let fLet = []
let gLet = []
let hLet = []
let iLet = []
let jLet = []
let kLet = []
let lLet = []
let mLet = []
let nLet = []
let oLet = []
let pLet = []
let qLet = []
let rLet = []
let sLet = []
let tLet = []
let uLet = []
let vLet = []
let wLet = []
let xLet = []
let yLet = []
let zLet = []

let randomNumber3 = 0
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q','r','s','t','u','v','w', 'x', 'y', 'z']

// read the file 
fs.readFile('nounlist.txt', (err, data) => { 
      if (err) throw err; 
    
     // turn the data into strings, then split the strings where they start a new line

      str= data.toString();

      const words = str.split('\n');
    
   
// create seprate arrays for words that start with each letter of the alphabet
function alphabetArrays(){
        var i
        for(i=0; i< words.length; i++){
            if (words[i].charAt(0) == "a"){
                
                aLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "b"){
              
                bLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "c"){
              
                cLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "d"){
                dLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "e"){
                eLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "f"){
                fLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "g"){
                gLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "h"){
                hLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "i"){
                iLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "j"){
                jLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "k"){
                kLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "l"){
                lLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "m"){
                mLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "n"){
                nLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "o"){
                oLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "p"){
                pLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "q"){
                qLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "r"){
                rLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "s"){
                sLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "t"){
                tLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "u"){
                uLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "v"){
                vLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "w"){
                wLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "x"){
                xLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "y"){
                yLet.push(words[i])
                
            }
            else if (words[i].charAt(0) == "z"){
                zLet.push(words[i])
                
            }
            
        }
       
};

alphabetArrays();

// create an object that has each array corresponding to its fibonnacci number

var alphabetObject = {
    1: aLet,
    2: bLet,
    3: cLet,
    5: dLet,
    8: eLet,
    13: fLet,
    21: gLet,
    34: hLet,
    55: iLet,
    89: jLet,
    144: kLet,
    233: lLet,
    377: mLet,
    610: nLet,
    987: oLet,
    1597: pLet,
    2854: qLet,
    4181: rLet,
    6765: sLet,
    10946: tLet,
    17711: uLet,
    28657: vLet,
    46368: wLet,
    75025: xLet,
    121393: yLet,
    196418: zLet
}



var a = 0, b = 1, f = 1;
 var fibonacci = function(n) {
 
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};


console.log(fibonacci(6))

// get a random number between 0 and 3 
function getRandomNumber3(){
    randomNumber3 = Math.floor(Math.random() * 4);
    return randomNumber3;
}

// loop through each key of the alphabet Objecr

Object.keys(alphabetObject).forEach(function (item) {
	
    var key = item;
    var value = (alphabetObject[item]);

  



   var loop;
   for (loop=0; loop < key; loop++){
       // get a random number from 0 to 2, then chose a line to write based on the number. write a line as many times as the number of the key
       

       getRandomNumber3();
     
    if ((randomNumber3 < 3) && (key == 1)){
        var sameWord = value[Math.floor( Math.random() * value.length)];
        poem.push(sameWord + " exists, " + sameWord + " exists, " + "<br>");
     }
     else if (randomNumber3 == 0) {
         poem.push(value[Math.floor( Math.random() * value.length)] + " exists; " + value[Math.floor(Math.random() * value.length)]+ ", and " + value[Math.floor(Math.random() * value.length)] + "; " + "<br>")
     }
     else if (randomNumber3 == 1){
         poem.push(value[Math.floor( Math.random() * value.length)] + ", " + value[Math.floor( Math.random() * value.length)] + ", " + value[Math.floor( Math.random() * value.length)] + " exists; " + "<br>")
     }
     else if (randomNumber3 == 2){
         poem.push(value[Math.floor( Math.random() * value.length)] + ", " + value[Math.floor( Math.random() * value.length)] + " exists;"+ "<br>")
     }
     else if (randomNumber3 == 3){
        var sameWord = value[Math.floor( Math.random() * value.length)];
        poem.push(sameWord + " exists, " + sameWord + " exists, " + "<br>");

     };
     
   };

   // push a line break after each round of letters

   poem.push("<br> <br>");
});

console.log(poem);

poemJoin = poem.join("");

// console.log(poemJoin);

//set handlebar routes
app.get('/', function(req, res){
    res.render('home', {
    poemHTML: poemJoin
});
});


});
