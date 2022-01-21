function fizzBuzz() {  
	// Your code here
		for (let valor = 1; valor<101; valor++){
			if (valor % 15 == 0) console.log('FizzBuzz');
			else if (valor % 3 == 0) console.log('Fizz');
			else if (valor % 5 == 0) console.log('Buzz');
			else console.log(valor)
		}
		}		

fizzBuzz();

