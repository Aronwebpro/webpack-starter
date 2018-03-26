function makeShot(shots, array) {
	var answer = [];
	var a = array;
	for(let i =0; i<shots; i++) {
		let chebra = [];	
		let chebra1 = [];
		let chebra2 = [];	

			
		for(let i=0; i < 3; i++) {
			let a = array;
			let max = Math.max(...a);
			let maxIndex = array.findIndex(e => e === max);
			a[maxIndex] = 0;
			a[maxIndex+1] = 0;
			a[maxIndex-1] = 0;	
			chebra.push(max);
		}

		for(let i=0; i < 3; i++) {
			if( i ===0 ) {
			let a = array;
			let max1 = Math.max(...a);
			let maxIndex1 = array.findIndex(e => e === max1);
			a[maxIndex1] = 0;

			let max2 = Math.max(...a);
			let maxIndex2 = array.findIndex(e => e === max2);
			a[maxIndex1] = max1;
			a[maxIndex2] = 0;
			a[maxIndex2+1] = 0;
			a[maxIndex2-1] = 0;	
			chebra2.push(max2);
			}
		 else {
			let a = array;
			let max = Math.max(...a);
			let maxIndex = array.findIndex(e => e === max);
			a[maxIndex] = 0;
			a[maxIndex+1] = 0;
			a[maxIndex-1] = 0;	
			chebra2.push(max);	
		}
		}	
		for(let i=0; i < 3; i++) {
			if(i ===0) {
				let a = array;
				let max1 = Math.max(...a);
				let maxIndex1 = array.findIndex(e => e === max1);
				a[maxIndex1] = 0;
					
				let max2 = Math.max(...a);
				let maxIndex2 = array.findIndex(e => e === max2);
				a[maxIndex2] = 0;

				let max3 = Math.max(...a);
				let maxIndex3 = array.findIndex(e => e === max3);
				a[maxIndex3] = 0;

				a[maxIndex3+1] = 0;
				a[maxIndex3-1] = 0;	
				chebra2.push(max3);
			} else {
				let a = array;
				let max = Math.max(...a);
				let maxIndex = array.findIndex(e => e === max);
				a[maxIndex] = 0;
				a[maxIndex+1] = 0;
				a[maxIndex-1] = 0;	
				chebra2.push(max);
			}


		}

		let chebryte1 = chebra//.reduce((x, y) => x > y);
		let chebryte2 = chebra1//.reduce((x, y) => x > y);
		let chebryte3 = chebra2//.reduce((x, y) => x > y);	
		
		console.log(chebryte1);
		console.log(chebryte2);
		console.log(chebryte3);	

		//answer.push(max); 	
	}
	return answer.reduce((x, y) => x+y)+ "*******"+answer;
}


console.log(makeShot(9, [26, 54, 36, 35, 63, 58, 31, 80, 59, 61, 34, 54, 62, 73, 89, 7, 98, 91, 78]))

let x = [54,35,58,80,61,62,89, 98, 78 ];

let y = [98, 89, 80, 78, 62, 61, 58, 54, 35];


function targetGame(vals) {
  	let shots = Math.ceil(vals.length/2);

  	let answer = [];
	while (shots > 0) {
		let byrka = vals.slice();		
		let x = makeShot(shots, byrka).reduce((x,y) => x + y );
		answer.push(x);
		shots--;
	}

  return Math.max(...answer) < 0 ? 0 : Math.max(...answer);
  
}


// console.log(targetGame([1, 2, 3, 4,]));


// console.log(targetGame([-5, -10, -1, -1]));

// console.log(targetGame([36, 42, 93, 29, 0, 33, 15, 84, 14, 24, 81, 11]));//327

// console.log(targetGame([73, 80, 40, 86, 14, 96, 10, 56, 61, 84, 82, 36, 85]));//490

// console.log(targetGame([11, 82, 47, 48, 80, 35, 73, 99, 86, 32, 32]));//353

//console.log(targetGame([26, 54, 36, 35, 63, 58, 31, 80, 59, 61, 34, 54, 62, 73, 89, 7, 98, 91, 78])); //615

//console.log(targetGame([26, 54s, 36, 35s, 63, 58s, 31, 80s, 59, 61s, 34, 54, 62s, 73, 89s, 7, 98s, 91, 78s]));
