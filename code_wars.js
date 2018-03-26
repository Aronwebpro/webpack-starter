/*****************************
Helpers
******************************/
//Function take url string as parameter and return object of params

function getParamsObj(url) {
  let x = url.match(/[^\?]*./g)[1];
  if(url.indexOf('?') === -1 || x === undefined || x.indexOf('?') > -1) return {};
  let paramsObj = {};
  let params = x.match(/[^&]*/g).filter(e=>e).map((el) => paramsObj[el.match(/[^=]*/g).filter(e=>e)[0]] = el.match(/[^=]*/g).filter(e=>e)[1]);
  return paramsObj;
}

console.log(getParamsObj("http://www.younkernissan.com/?action=auto&car=volvo&model=c90"));



/***
Solutions to Tasks
***/

//Dubstep
//Long version**********************************
function songDecoder(song){
  
  var decoded = song.split("WUB");
  var filter = decoded.filter(function(e) {
    if (e !== "") {
      return e;
    }
  });

  return filter.join(" ");
}

//Sort Version****************************************
function songDecoder(song){
  return song.split("WUB").filter((word) => word !== 0 ? word : 0).join(" ");
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));


//Filter all integers from array****************************
function filter_list(l) {
  return l.filter( item => typeof item == "number" ? true : 0);
}

console.log(filter_list([1,2,0,0,'a','b']));


//Build block****************************************************
function findNb(m) {
  var n = 0;
  while(m > 1) { 
    n++;   
    m = m - Math.pow((n), 3);  
  }
 return m == 0 ? n : -1;
}

console.log(findNb(1071225));

// Triple numbers
function tripledouble(num1, num2) {
      var x = num1.toString().split('');
      var y = num2.toString().split('');
      var array = [];
      for(let i = 0; i<x.length; i++) {
          if(x[i] === x[i+1] && x[i] === x[i+2]) {
             for(let s = 0; s<y.length; s++) {
                if(x[i] === y[s] && y[s] === y[s+1]) {
                    array.push(y[s]);
                }
                
             }       
          } 
      }
      if(array.length > 0) {
        return 1;
      } else {
        return 0;
      }   

}


//IQ Test, find even or odd numbers
function iqTest(numbers){
  if((numbers.split(' ').filter((number) => number % 2 == 0 ? number : 0)).length > 1) {
    var odd;
    numbers.split(' ').forEach((number, index) => number % 2 !== 0 ?  odd = index+1 : 0);
    return odd;
  } else {
    var even;
    numbers.split(' ').forEach((number, index) => number % 2 == 0 ?  even = index+1 : 0);
    return even;
  }  
}

console.log(iqTest("2 4 7 8 10"));

//Build a tower
function towerBuilder(nFloors) {
  var array = [];
  array.length = nFloors;
  var floor = array.length-1;
  for(let i =0; i<array.length; i++) {
    array[i] = (' '.repeat(array.length-(i+1)))+('*'.repeat(array.length-floor))+(' '.repeat(array.length-(i+1)));
    floor = floor - 2;
  }

  return array;
}

console.log(towerBuilder(5))

//Array diff
function array_diff(a, b) {
  for(i=0;i<a.length;i++){
      for(x=0;x<b.length;x++){
         if(a[i]===b[x]){
            a[i]= '';
         }
     }
   }
   
  return a.filter(el => el !== 0 ? el : 0);
}

//Array diff UPDATED
//compare differences
function array_diff(a, b) {  
  return a.concat(b).filter((e, i, a) => a.indexOf(e) === i );
}
//extract diff from firtst array
function array_diff(a, b) {  
  return a.filter((e) => !b.includes(e) );
}



console.log(array_diff([1,2],[1]));


//Calculating with Functions

function zero(func) {
  return func !== undefined ? func(0) : 0;  
}
function one(func) {
  return func !== undefined ? func(1) : 1; 
}
function two(func) {
  return func !== undefined ? func(2) : 2; 
}
function three(func) {
  return func !== undefined ? func(3) : 3; 
}
function four(func) {
  return func !== undefined ? func(4) : 4; 
}
function five(func) {
  return func !== undefined ? func(5) : 5; 
}
function six(func) {
  return func !== undefined ? func(6) : 6; 
}
function seven(func) { 
  return func !== undefined ? func(7) : 7; 
}
function eight(func) {
  return func !== undefined ? func(8) : 8; 
}
function nine(func) {
  return func !== undefined ? func(9) : 9; 
}

function plus(y) {
  return function(x) {       
    return x + y;    
  };
}
function minus(y) {
  return function(x) {       
    return x - y;    
  };
}
function times(y) {
  return function(x) {       
    return x * y;    
  };
}
function dividedBy(y) {
  return function(x) {       
    return x / y;    
  };
}
//Find string average
//Version 1
function averageString(str) {
   array = [{name:'zero', value:0},{name:'one', value:1},{name:'two', value:2},{name:'three', value:3},{name:'four', value:4},{name:'five', value:5},{name:'six', value:6},{name:'seven', value:7},{name:'eight', value:8},{name:'nine', value:9}]  
   str = str.split(" ");
   newStr = [];
   //check are all values valid
   for(i=0;i<str.length;i++){
      for(x=0; x<array.length; x++){
         if(str[i] === array[x].name){
            newStr.push(array[x]);
         }
     }
   }
   var number = 0; 
   newStr.forEach(obj => number += obj.value); 
   var average = Math.floor(number/newStr.length); 
   array.filter(obj => obj.value === average ? average = obj.name : 0);

	return newStr.length == str.length ? average : 'n/a';
  
}

//Version 2
function averageString(str) {
   strValues = [{name:'zero', value:0},{name:'one', value:1},{name:'two', value:2},{name:'three', value:3},{name:'four', value:4},{name:'five', value:5},{name:'six', value:6},{name:'seven', value:7},{name:'eight', value:8},{name:'nine', value:9}]  
   str = str.split(" ");
   newStr = [];
   //check are all values valid
   str.forEach((string) => strValues.forEach( (obj) => obj.name === string ? newStr.push(obj.value) : 0 ));

   //if valid
   if(newStr.length == str.length) {
	    var number = 0; 
	    newStr.forEach((obj) => number += obj); 

	    var average = Math.floor(number/newStr.length); 
	    strValues.forEach((obj) => obj.value === average ? average = obj.name : 0); 
	    
	    return average;
   
   } else {
    	return 'n/a';
   }
   
}

//Santa Presents
function gifts(number) {  
  giftsObj = [
    {number : 1, gift : 'Toy Soldier' },
    {number : 2, gift : 'Wooden Train'},
    {number : 4, gift : 'Hoop'},
    {number : 8, gift : 'Chess Board' },
    {number : 16, gift : 'Horse' },
    {number : 32, gift : 'Teddy' },
    {number : 64, gift : 'Lego' },
    {number : 128, gift : 'Football'},
    {number : 256, gift : 'Doll' },
    {number : 512, gift : "Rubik's Cube" },
    ]

    presentsArray = [];

    while(number >= 1) {
    var present = giftsObj.map(i => i.number).filter(i => number >= i ? number : 0).reduce((x, y) => Math.max(x,y))
    presentsArray.push(present);
    number = number - present;
    }

    return giftsObj.filter(i => presentsArray.includes(i.number) ? i : 0 ).map(i => i.gift).sort();
}

//FizzBuzz
function fizzBazz(number) {  
  array = new Array(number);

  for(let i =0; i < array.length; i++) {
    ((i+1) % 3) == 0 ? array[i] = 'buzz' :  ((i+1) % 5) == 0 ? array[i] = 'fizz' : array[i] = i+1;
  }

  return array;
}
function fizzBazz(number) {  
	let array = Array.apply(null, {length: number});
	return array.map((e, i) => i+1).map((e) => (e % 3 === 0 ? 'Fizz' : '') + (e % 5 === 0 ? 'Bazz' : '') || e );
}


console.log(fizzBazz(100));

//FizzBuzz Advance
//--> long way
function fizzbuzzPlusPlus(numbers, words) {  

  array = [1];
  result = [];

  function lcm(number, array) {
      var x = array.filter((item) => number % item === 0 ? true : false );
      if(x.length == array.length) {
        return false;
      } else {
        return true;
      } 
  }

  while (lcm(array.length, numbers)) {
    array.length++;
  }

  for(let i =0; i < array.length; i++) {
      var pushed = [];
      for(let v = 0; v < numbers.length; v++) {        
          if((i+1) % numbers[v] == 0) {
               pushed.push(words[v]);           
          } else {
            pushed.push(i + 1);
          }
      }
      if(pushed.every((el) => typeof el === 'number')) {
         result.push(pushed.filter((item, index, self) =>  self.indexOf(item) === index )[0]);
      } else {
         result.push(pushed.filter((item) => typeof item === 'string' ? item : 0).join(''));
      }
    }

  return result;
}

//after refactoring







//Find Equal Sides 
function findEvenIndex(arr) { 
  let answer = arr.map((x, index, array) => array.slice(0, index+1).reduce((x,y) => x+y) == array.slice(index, array.length).reduce((x,y) => x+y) ? index : 0).filter((x) => x)[0] ;
  return answer ? answer : -1;
}

//Get Age
function getAge(inputString){
  return parseInt(inputString.split('')[0]);
}



//Are we alternate?
/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
*/

//Long version
function isAlt(word) {
vowels = ['a', 'e', 'i', 'o', 'u'];
answer = [];
word = word.split(''); 
  for(let i =0; i< word.length; i++) {
    var x = word.slice(i, i+2);
    if(vowels.indexOf(x[0]) > -1 && vowels.indexOf(x[1]) >- 1 || vowels.indexOf(x[0]) === -1 && vowels.indexOf(x[1]) === -1 && x.length === 2) {
        console.log(x);
        answer.push(true);
    }
  }

 return answer.length < 1 ? true : false;
}

//looks like shorter version
function isAlt(word) {
  vowels = ['a', 'e', 'i', 'o', 'u'];
  answer = [];
  word = word.split('').forEach((el, i) => {
    let slice = word.slice(i, i+2);
    if(vowels.indexOf(slice[0]) > -1 && vowels.indexOf(slice[1]) >- 1 || vowels.indexOf(slice[0]) === -1 && vowels.indexOf(slice[1]) === -1 && slice.length === 2) {
          answer.push(false);
      }  
  });  

 return answer.length < 1 ? true : false;
}

//Clean String
function clean_string(s) {
  string = s.split('');

  for(let i = 0; i<string.length; i++) {
    if(string[i] === '#') { 
      if (i === 0) {
        string.splice(i, 1);
        i = i-1;
      } else {        
        string.splice(i-1, 2);
        i = i-2;
      }    
    }
  }
  return string.join('');
};

console.log(clean_string('#########a#######bc#d###############c'));



//Basic Nico variation
function nico(keyword, msg) {

 function encodeMsg(word, order) {
    let modifed = [];
    for(let i = 0; i < order.length; i++) {
       if(word[i] === undefined) {
          word[i] = " ";
       }
      modifed[order[i]-1] = word[i];

    }
    return modifed.join('');
 }
 
  let key = keyword.split('').map(el => keyword.split('').sort().join('').indexOf(el)+1);
  let slicedMsg = [];  
  let message = [];

  for(let i = 0; i< msg.length/keyword.length; i++) {
      let start = keyword.length * i;
      let end = (keyword.length * i) + keyword.length;
      slicedMsg.push(msg.slice(start, end).split(''));
  }

  slicedMsg.forEach((el, i, a) => {
    message.push(encodeMsg(el, key));
  });

  return message.join('');
}

console.log(nico("crazy", "secretinformation"));
console.log(nico("abc", "abcd"));
console.log(nico("ba", "1234567890"));
console.log(nico("key", "key"));


/*****************************
Compres and Decompress string
******************************/

var compress = function (str) {
  let answer = [];
  let count = 0;
  str.split('').forEach((item, index, self) => {   
  if(item === self[index+1]) {
      count++; 
     } else {
      answer.push([count+1, item]);
      count = 0; 
     }
  });
  return JSON.stringify(answer).length < str.length ? JSON.stringify(answer) : str; 
}

var decompress = function (c) { 
  try {
    let z = JSON.parse(c);
    let answer = [];
    z.forEach(el => {
      answer.push(el[1].repeat(el[0]));
   });
   return answer.join('');

  } catch (e) {
    return c;
  }
   
}

console.log(compress("aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac"));
console.log(compress("abcde"));
console.log(decompress(compress("aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac")));
console.log(decompress(compress("abcde")));

//trickOrTreat
function trickOrTreat(children,candies){
 
 let array = candies.map((element) => {
    return element.map(e => { if (e === "candy" || e === "bomb") { return e;} 
    }).filter(i=>i);
  }).map((e,i,a) => {
    if(e.length >= 2 && e.indexOf('bomb') === -1 ) {
      return  e.length;
    } else {
      return null;
    }
  });

  for(let i = 0; i < array.length-1; i++) {
    if(array[i] !== array[i+1] || array.length < 2 || array.length !== children || array[i] === null) {
      return "Trick or treat!";
    }
  }
 return "Thank you, strange uncle!";
}


console.log(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]]));
console.log(trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]]));
console.log(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]]));
console.log(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]]));
console.log(trickOrTreat(3,[["candy","apple","candy","bomb"],["candy","candy", "bomb"],["candy","bomb","candy"]]));

/*****************************
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
******************************/
function sumDigPow(a, b) {
  function isSumPowEqual(x) {
    let y = x.toString().split('').map(i => parseInt(i)).reduce((a, b, index) => {
      return a + Math.pow(b,index+1);
    });
    return x == y ? true : false; 
  }
  let answer = [];
  for(let i=a; i<=b; i++ ) {    
    if(isSumPowEqual(i)) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(sumDigPow(1, 89));

/*****************************
Find distance beetween two numbers
******************************/
var lengthOfSequence = function (arr, n) {
  let answer = arr.map((e, i) => { if(e === n){ return i+1 }}).filter(e => e);
  if(answer.length === 2) { return answer.reduce((x,y)=> y-x)+1; } else {return 0 }
};

console.log(lengthOfSequence([1, 2, 3, 1], 1));
console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7));
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7));

/*****************************
Which are in?
******************************/
function inArray(array1,array2){
 return array1
           .map(e => {
              return array2.map(el => {
                if(el.indexOf(e) !== -1) {
                  return e;
                }
              }).filter(i=> i);
            })
           .filter((item) => item.length >= 1 ? item : 0)
           .map(item => { 
            return item[0] })
           .filter((item, index, array) => array.indexOf(item) === index)
           .sort();

}

//Refactor Solution (sample from other members)

function inArray(array1,array2){
   return array1.filter(el => {
        return array2.find(e=> {
          if(e.indexOf(el) !== -1) {
              return e;
            }
        });  
   }).sort();
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));



/*****************************
Convert hexadecimal to RGB
******************************/
function getRGB(hex) {
  code = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let arr = hex.split('').splice(1, 6);
  let rgb = [];
  for(let i=0; i<arr.length; i++) {
      for(let i2 = 0; i2<code.length; i2++) {
          if(arr[i] == code[i2]) {
            rgb.push(i2);
          }

      }   
  } 
return "rgb("+rgb[0]*rgb[1]+","+rgb[2]*rgb[3]+","+rgb[4]*rgb[5] +");";
}


//One line solution:
function getRGB(hex) {
 return "rgb("+Number.parseInt((hex.split('').slice(1, 3).join('')), 16)+","+Number.parseInt((hex.split('').slice(3, 5).join('')), 16)+","+Number.parseInt((hex.split('').slice(5, 8).join('')), 16)+")";
}
console.log(getRGB('#00FF00'));


/*****************************
Clocky Mc Clock-Face
******************************/
var whatTimeIsIt = function(angle) {
  let hours = Math.floor((12*angle/360));
  let min = Math.floor((angle - (30*hours))*2);
  hours == 0 || hours == 360 ? hours = 12 : hours; 
  return (hours < 10 ? "0"+ hours : hours)+":"+(min < 10 ? min = "0"+min : min);
}


console.log(whatTimeIsIt(0));



/*****************************
The Supermarket Queue
******************************/
function queueTime(customers, n) {
  let answer = [];

  while(customers.length > 0) {     
      customers = customers.splice(0, n).map((e, i, a) => {
        answer.push(Math.min(...a)/a.length); 
        return e-Math.min(...a); 
      }).filter(e=>e).concat(customers);
  }
 answer1 = answer.reduce((x, y) => x+y)
   return Math.round(answer1);
}

console.log(queueTime([5,3,4], 1));//12
console.log(queueTime([10,2,3,3], 2));//10
console.log(queueTime([2,3,10], 2));//12


/*****************************
Numbers that are a power of their sum of digits
******************************/
function powerSumDigTerm(n) {

  function isSumEqual(number) {
    let x = number.toString().length
    if( x < 2 ) { 
      return false;
    };
    let sum = number.toString().split('').map(i => parseInt(i)).reduce((a, b) => a + b);
    let exp = 1; 
    let result = 0;
    while (number > result && sum > 1) {
      result = Math.pow(sum, exp);
      exp++;
    }
    return result === number ? true : false;
  }

 
  let isEqual = false; 
  let allNum = [];

  for(let i=1; i<100; i++) {
    for(let ii=1; ii < 10; ii++) {
      let num = Math.pow(i, ii);
      isEqual = isSumEqual(num);
      if(isEqual) {
        allNum.push(num);
      } 
    }
  } 

  let answer =  allNum.filter( (e, i, a ) => a.indexOf(e) === i ).sort( (a,b) => a - b );
  
  return answer[n-1];
      
}

//***********Best practice (not mine)
let series = [0];
for (let a = 2; a < 100; a++) {
  for (let b = 2; b < 42; b++) {
    let c = Math.pow(a, b);
    if (c.toString().split('').reduce((x,y) => x + parseInt(y), 0) === a) {
      series.push(c);
    }
  }
}
series = series.sort((a, b) => a - b);
var powerSumDigTerm = n => series[n];

console.log(powerSumDigTerm(1));//81
console.log(powerSumDigTerm(2));//512
console.log(powerSumDigTerm(3));//2401
console.log(powerSumDigTerm(4));//4913
console.log(powerSumDigTerm(5));//5832
console.log(powerSumDigTerm(6));//17576






/*****************************
Reverse Fizz Buzz
******************************/
function reverseFizzBuzz(array) {
  let answer = [];
  for(let i=0; i< array.length; i++) {
    if(typeof array[i] === 'string' && array[i].includes('Fizz')) {
      answer.push(i+1);
      break;
     }
  }
  for(let i=0; i< array.length; i++) {
    if(typeof array[i] === 'string' && array[i].includes('Buzz')) {
      answer.push(i+1);
      break;
     }
  }
  return answer;

};

console.log(reverseFizzBuzz([1,2,'FizzBuzz',4,'Buzz','Fizz',7,8,9,'Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz']));
console.log(reverseFizzBuzz(["Fizz",5,"Fizz","Fizz","Fizz","FizzBuzz"]));



/*****************************
Faulty Data Recovery
******************************/
function calculateParity(cluster) {
  let column = Array.apply(null, {length: cluster[0].length}).map(e => []);
  
  cluster.forEach((e) => {
    e.forEach((el, i) => {
      column[i].push(el);
    });
  });

  cluster.splice(cluster.length, 0 , column.map((ar) => ar.reduce((x, y) => x^y)));

  return cluster;
}


function recoverDisk(cluster) {
  let column = Array.apply(null, {length: (cluster[0].length)}).map(e => []);
    
  cluster.forEach((e) => {
    e.forEach((el, i) => {
      column[i].push(el);
    });
  });
  
  let backup = column.map((ar) => ar.map((el, i, a) => el === null ?  a.reduce((x, y, i, arr) => y === null || x === null ? x ^ arr[i] : x^y ) : el ));
  let answer = Array.apply(null, {length: (cluster.length)}).map(e => []);

  backup.forEach((elm, index, arrr) => { 
    elm.forEach((elm, index) => {
      answer[index].push(elm);
    });
  });
  
  return answer;
}

//Test for calculateParity()
console.log(calculateParity([[0,0,0,1,1,1,1,0],[0,1,0,0,1,0,1,0]]));
console.log(calculateParity([[0,0,0,1],[1,1,1,0],[0,1,0,0], [1,0,1,0]]));

//Test for recoverDisk()
console.log(recoverDisk([[0,0,0,1], [null,1,0,0], [1,1,0,1]]));




/*****************************
Faulty Data Recovery
******************************/

var time = 1;

class KataToolbox {
 saveMathRandom() {
  var time2 = this.time;
  function randomizer(time) {
    if(time === 0 || isNaN(time) ) { time +1 }
    let a = new Date().getTime().toString().split('').splice(-3, 3).join('');
    let b = new Date().getTime().toString().split('').splice(-4,1).join('');
    if( b === 0 ) { a = 1*b; }
    let x = (171 * a * time) % 30269;
    let y = (172 * a * time) % 30307;
    let z = (170 * a * time) % 30323;
    let number = Math.floor((((x/30269.0) + (y/30307.0) + (z/30323.0)) % 1.0) * 11111111111111111);
    let size = number.toString().length;

    return Math.floor(number) / Math.pow(10, size);
  }
  let random = randomizer(time);
  if(!isNaN(random) ) {
    let random = randomizer(time);
  }
  time++;
  return  random;
  }
static  stripwhitespace(string) {
    return string.replace(/\r?\n|\r/g,'').replace(/ /g, '');
  }
  
static  approxEquals(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ) {
      throw new Error('Error!');
    } else {
       return Number((num1).toFixed(3)) === Number((num2).toFixed(3)) ? true : false;
    }
  }
static randomString() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
static  userCheated() {
    if( Math.random() == Math.random()) {
      return true;
    } else {
      return false;
    }
  } 

}

console.log(KataToolbox.stripwhitespace(" s t r i n g "));
console.log(KataToolbox.approxEquals(3.14182, 3.145));
console.log(KataToolbox.randomString());
console.log(KataToolbox.userCheated());
console.log( new KataToolbox().saveMathRandom());



//***********Best practice (not mine)
function KataToolbox(){}
KataToolbox.stripwhitespace=s=>s.replace(/[\s\n]+/g,'');
KataToolbox.approxEquals=(a,b)=>a.toFixed(3)==b.toFixed(3);
KataToolbox.prototype.saveMathRandom=Math.random;
KataToolbox.saveMathRandom=KataToolbox.prototype.saveMathRandom;
KataToolbox.randomString=function(){
  var r="",k="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while(r.length<10)r+=k[Math.floor(this.saveMathRandom()*k.length)];
  return r;
}
KataToolbox.userCheated=()=>Math.random()==Math.random();