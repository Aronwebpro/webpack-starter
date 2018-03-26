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

  function findNumber(alfa) {
    let isEqual = false; 
    let result;
    while (isEqual === false) {       
      let a = Math.pow(x,  Math.pow(2, alfa));
      let b = Math.pow(y, Math.pow(3, alfa));
      let c = Math.pow(z, Math.pow(5, alfa));
      result = Math.min(a, b, c); 
      isEqual = isSumEqual(result);
      if(a == result) {
        x++;
      }
      if(b==result) {
        y++;
      }
      if(c==result) {
        z++;
      }   
      
    } 
    return result;
  }

  
  let result;
  let x = 1;
  let y = 1;
  let z = 1;


  for(let i=0; i<n; i++) {
    let isEqual = false; 
    
    while (isEqual === false) {       
      let a = Math.pow(x, 4);
      let b = Math.pow(y, 9);
      let c = Math.pow(z, 25);
      result = Math.min(a, b, c); 
      isEqual = isSumEqual(result);
      if(a == result) {
        x++;
      }
      if(b==result) {
        y++;
      }
      if(c==result) {
        z++;
      }   
      
    } 
  }
  console.log(x);
  return result;
  
}