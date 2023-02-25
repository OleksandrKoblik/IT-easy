// 1. Cортировка пузырьком
const arr = [4, 5, 2, 8, 3, 7, 1, 6, 9];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
        let box;
        if (arr[j] > arr[j + 1]) {
            box = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = box;
        }
    }
}
console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. На входе получем имя и фамилию, а на выходе нужно вернуть инициалы

// getInitial('tom hanks') // вернет T. H.
// getInitial('Іван Федоров') // вернет І. Ф.

const getInitial = (name) => {
    return name.split(' ').map(item => item[0]).join('. ').toUpperCase() + '.';
}

console.log(getInitial('tom hanks'));
console.log(getInitial('Іван Федоров'));
console.log(getInitial('Іван Федоров tom hanks'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Являеться ли слово палиндромом

// isPalindrome('шалаш')   // true
// isPalindrome('teddy')   // false

const isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
}

console.log(isPalindrome('шалаш'));
console.log(isPalindrome('teddy'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Данно предложение, задача вернуть самое короткое слово в предложении.

// getShort('study well');  // well
// getShort('being a junior is not scary');  // a

const getShort = (string) => {
    return string.split(' ').sort((a, b) => a.length - b.length)[0];
}

console.log(getShort('study well'));
console.log(getShort('being a junior is not scary'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.
