// 배열 문법 ...args 사용 하면 됌

// Rest prameter (ES6)
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}

printAll('dream' , 'coding' , 'dayong');