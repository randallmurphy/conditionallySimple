/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
const isItLong = (str) => {
  if(str.length < 20){
    return undefined;
  } else if(str.length === 20){
    return undefined;
  } else if(str.length > 20) {
    return "That's a long string!";
  }
}

const isItMedium = (str) => {
  if(str.length >= 10 && str.length <= 20){
    return "That's a regular sized string!";
  }
}

const isItShort = (str) => {
  if(str.length < 10){
    return "That's a small string!";
  } else {
    return "That's not a small string!"
  }
}

const howLongIsMyString = (str) =>{
  if(str.length > 20){
    return "That's a long string!";
  } else if(str.length <= 20 && str.length >= 10){
    return "That's a regular sized string!";
  } else if(str.length < 10){
    return "That's a small string!";
  }
}

const personsHeight = (str) =>{
  if(str === "Shaq"){
    return 85;
  } else if(str === "Zooey"){
    return 65;
  } else {
    return "I don't know everyone's height!";
  }
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}