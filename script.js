/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [];  // setup of empty array
quotes.push({quote: '', author: '', year: '', source: '', tag: ''});  // adding empty objects to the array
quotes.push({quote: '', author: '', year: '', source: '', tag: ''});
quotes.push({quote: '', author: '', year: '', source: '', tag: ''});
quotes.push({quote: '', author: '', year: '', source: '', tag: ''});
quotes.push({quote: '', author: '', year: '', source: '', tag: ''});
quotes[0] = {quote: "Humankind cannont stand very much reality. ", author: "T.S. Eliot", year: '', source: '', tag: ''};    // defining objects in the array
quotes[1] = {quote: "Get not your friends by bare compliments, but by giving them sensible tokens of your love. ", author: "Socrates", year: '', source:'', tag: ''};
quotes[2] = {quote: "What you do, the way you think, makes you beautiful. ", author: "Scott Westerfeld", year: '2005', source: '', tag: ''};
quotes[3] = {quote: "I am extraordinarily patient, provided I get my own way in the end. ", author: "Margaret Thatcher", year: '1989', source: 'Observer', tag: ''};
quotes[4] = {quote: "I think therefore I am. ", author: "Descartes", year: "1637", source: "Discourse on the Method", tag: "Philosophical"};
//console.log(quotes[1].quote);

/** 'changeBackgroundColor' function
 * 
 * function code borrowed from another treehouse developer cameronMHall
 */

function changeBackgroundColor() {
  for ( let i = 0 ; i < 3 ; i++ ) {
    var red = Math.floor(Math.random() * 128);    //assign random color values in RGB scheme
    var green = Math.floor(Math.random() * 128);
    var blue = Math.floor(Math.random() * 128);
  }
  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));  // returns a random number between 0 and array length
  }
  let randomPosition = getRandomInt(quotes.length);  // sets variable equal to random number
  let quote = quotes[randomPosition];  // creates variable equal to a random object from the array
  return quote; // returns the random object

}


/***
 * `printQuote` function
***/
function printQuote(){
    
    let randomQuote = getRandomQuote(); // calls getRandomQuote function
    //console.log(arr.quote);
    let mainQuote = randomQuote.quote;    //define individual pieces of random object
    let mainAuthor = randomQuote.author;
    let mainYear = randomQuote.year;
    let mainSource = randomQuote.source;
    let mainTag = randomQuote.tag;
    let myString = `<p class="quote"> ${mainQuote} </p>`    //building the HTML string for output
    myString += `<p class="source"> ${mainAuthor} `
      if (mainSource !== ''){       // if item has source add it to the string
       myString += `<span class="citation"> ${mainSource} </span>`
      }
      if (mainYear !== '') {     // if item has a year add it to the string
       myString += `<span class="year"> ${mainYear} </span>`
      }
      if (mainTag !== '') {     // if item has a year add it to the string
        myString += `<span class="year"> ${mainTag} </span>`
       }
     `</p>` 
    document.getElementById('quote-box').innerHTML = myString; //output taken from course instructions
    //document.write(mainQuote);
    //document.write(arr.authosr)
    changeBackgroundColor();
}
printQuote();

setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);