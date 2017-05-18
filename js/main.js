// Задача 1.1

getBigName(userName);
function getBigName(name) {
	name = name + '';
	return name.toUpperCase();
}
var userName = 'Ivan';
// результат - UNDEFINED
// функция вызвана до того как userName получает значение. name в тот момент undefined, далее он превращается в строку после конкатенации и строка 'undefined' возводится в upperCase

// Задача 1.2
function test() {
	var name = 'Vasiliy';
	return getBigName(userName);
}

function getBigName(name) {
	name = name + '';
	return name.toUpperCase();
}

var userName = 'Ivan';

test();
// результат - IVAN
// Обе функции в Scope ссылаются на глобальное окружение window. Переменная userName = 'Ivan' так же находится в window. При вызове getBigName(userName) в аргумент подставляется Ivan и возводится в upperCase

// Задача 1.3
var food = 'cucumber';

(function () {
	var food = 'bread';
	getFood();
})();

function getFood() {
	console.log(food);
}
// результат - cucumber
// Функция getFood видит только переменную food = 'cucumber' из глобального окружения

// Задача 2.1
var dollar, 
	getDollar;
(function (){
	var dollar = 0;
	getDollar = function () {
		return dollar;
	}
}());
dollar = 30;
console.log(getDollar()); 
// результат - 0
// в переменную getDollar после самовызова функции записалась функция, которая возвращает значение локальной переменной dollar(из ближайшего LE). Т.к. локальная переменная dollar "закрыта" от глобального контекста, то когда dollar = 30 - это значение получила только глобальная переменная, а локальная осталась равна нулю. 

// Задача 2.2

var greet = "Hello";
(function (){
	var text = " World";
	console.log(greet + text); // Выведется в консоль - Hello World
}());
//console.log(greet + text); // ошибка, переменная text вне зоны видимости

//Задача 2.3
var minus = function(firstNumber){
	if (firstNumber == undefined) {
		firstNumber = 0;
	}
	if (firstNumber == 0){
		return function(secondNumber) {
			if (secondNumber == undefined) {
				secondNumber = 0;
			}				
			return firstNumber + secondNumber;
		}	
	}
	else {
		return function(secondNumber) {
			if (secondNumber == undefined) {
				secondNumber = 0;
			}				
			return firstNumber - secondNumber;
		}	
	}			
}
console.log("Задача на вычитание");
console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

//Задача 2.4
var multiplyMaker = function(res){
	return function(number) {return res *= number;}				
}
const multiply = multiplyMaker(2);
console.log("Функция, которая умножает и запоминает результат между вызовами"); 
console.log(multiply(2)); // 4
console.log(multiply(1)); // 4 
console.log(multiply(3)); // 12
console.log(multiply(10)); //120

//Задача 2.5
var stringMaker = (function(){
	var text = '';
	function setString(getText){				
		if (getText == '') {
			text = '';
		} else if (typeof(getText) == 'number'){
			text = getText.toString();
		} else {
			text = getText;
		}
	};
	
	function getString () {
		return text;
	};
	function getStringLength(){
		return text.length;
	};
	function reverseString() {
		var res = '';
		for (i = getStringLength() - 1; i >= 0; i--){
			res += getString()[i];
		}	
		return res;
	};
	return {
		setString,
		getString,
		getStringLength,
		reverseString,
	};
})();
stringMaker.setString('abcde');
console.log("Строка: " + stringMaker.getString()); // abcde
console.log("Длина строки: " + stringMaker.getStringLength()); // 5
console.log("Строка-перевертыш: " + stringMaker.reverseString()); // edcba										

//Задача 2.6
const calc = (function() {

	let res = 0;

	function setValue(x) {
		res = x;
		return this;
	}

	function getValue() {
		return res.toFixed(2);
	}

	function add(x) {
		res += x;
		return this;
	}

	function minus(x) {
		res -= x;
		return this;
	}

	function multiply(x) {
		res *= x;
		return this;
	}

	function divide(x) {
		res /= x;
		return this;
	}

	function pow(y) {
		res = Math.pow(res, y);
		return this;
	}

	return {
		setValue,
		getValue,
		add,
		minus,
		multiply,
		divide,
		pow
	}

})();

calc.setValue(5).add(4).minus(2).multiply(6).divide(2).pow(3);
console.log(calc.getValue()); 