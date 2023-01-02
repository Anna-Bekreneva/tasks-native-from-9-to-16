console.log('lesson 2');

// Lexical environment +
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying +
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion +
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(a: number) {
	return (b: number) => {
		return a + b
	}
}
sum(3)(6)

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
	let counter = 0
	return () => ++counter
}

const counter = makeCounter()
console.log(counter())
console.log(counter())

const counter2 = makeCounter()
console.log(counter2())
console.log(counter())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

let makeCounter2 = function(number: number) {
	let privateCounter = 0;
	let start = number

	return {
		increment: function() {
			return number = ++number
		},
		decrement: function() {
			return number = --number
		},
		reset: function() {
			return privateCounter;
		},
		set: function() {
			return start
		}
	}
};

let Counter1 = makeCounter2(10);
let Counter2 = makeCounter2(5);

console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.decrement())
console.log(Counter1.set())

console.log(Counter2.increment())
console.log(Counter2.increment())
console.log(Counter2.decrement())
console.log(Counter2.set())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n:number) {
	if (n === 0) return 0;
	if (n === 1) return (num: number) => num;

	let _arguments: number[] = [];

	function helper(...args: number[]) {
		_arguments = [..._arguments, ...args];
		if(_arguments.length >= n) {
			_arguments.length = n;
			return _arguments.reduce((acc, number) => acc + number)
		} else {
			return helper;
		}
	}
	return helper;
}

superSum(0) //0
//@ts-ignore
superSum(3)(2)(5)(3) //10
//@ts-ignore
superSum(3)(2)(5,3) //10
//@ts-ignore
superSum(3)(2,5,3) //10
//@ts-ignore
superSum(3)(2,5)(3) //10
//@ts-ignore
superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Вычислить сумму чисел до данного
const sumTo = (n: number): number => n === 1 ? n : n + sumTo(n - 1) //Рекурсия
sumTo(100)

const sumTo2 = (n: number): number => { //Цикл
	let result = 0

	for (let i = n; i >= 1; i--) {
		result = result + (n + 1) / 2
	}

	return result
}
sumTo2(100)

const sumTo3 = (n: number): number => n * (n + 1) / 2
sumTo3(100)


//Вычислить факториал
function factorial(n: number): number {
	let min = n - 1

	if (min === 1) {
		return n
	}

	else {
		return n * factorial(n - 1)
	}
}
factorial(5)

const factorial2 = (n: number): number => n === 1 ? n : n * factorial(n - 1)
factorial2(5)

//Числа Фибоначчи
const fib = (n : number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2)
fib(7)

//Вывод односвязного списка
let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

// Вывод односвязного списка
const printList = (list: any): any => { // Рекурсия
	console.log(list.value)

	if (list.next) {
		return printList(list.next)
	}
}
printList(list)

const printList2 = (list: any): any => { // Цикл
	let i = list

	while (i) {
		console.log(i.value)
		i = i.next
	}
}
printList2(list)

// Вывод односвязного списка в обратном порядке
const printReverseList = (list: any) => { // Рекурсия
	if (list.next) {
		printReverseList(list.next)
	}
	console.log(list.value)
}
printReverseList(list)

const printReverseList2 = (list: any) => { // Цикл
	let i = list
	let arr = []

	while (i) {
		arr.push(i.value)
		i = i.next
	}

	arr.reverse()
	for (let j = 0; j <= arr.length; i++) {
		console.log(arr[j])
	}
}

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

const arr: any = [1, 'dadw', [2, [2,3,4]]];

const alternativeFlat = (array: any): any => {
	let newArray: any = []
	let miniArray: any = []

	const arrayMapped = () => {
		if (typeof array !== 'undefined') {
			for (let i = 0; i <= array.length; i++) {
				if (typeof array[i] === 'number' || typeof array[i] === 'string') {
					newArray.push(array[i])
				} if (typeof array[i] === 'object') {
					miniArray = [ ...array[i]]
				}
			}
		}

		const miniArrayMapped = () => {
			if (miniArray.length > 0) {
				for (let j = 0; j <= miniArray.length; j++) {
					if (typeof miniArray[j] === 'object') {
						miniArray[j] = [...miniArray[j]]
					}
				}
				newArray.push(miniArray)
			}
		}

		miniArrayMapped()
	}

	arrayMapped()

	return newArray
}

const result = alternativeFlat(arr)
console.log(result)
console.log(arr[2] === result[2])
console.log(arr[2][1] === result[2][1])

// just a plug
export default () => {};