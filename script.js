// 1.receiving input data".
// 2.input data validation .
// 3.string processing.
// 4.return result.



const userString = prompt('Enter your message', "hello world");
const userSymbols = prompt('Enter symbols to delete', ['l', 'd']);

function removeSymbols(string, symbols) {

    if (string === null || symbols === null) {
        console.log('Bye');
        alert('Bye');

    }


    if (string.trim() === '' || symbols.trim() === '') {
        console.log('Invalid str');
        alert('invalid str');

    }

    let resultString = string.trim();
    let symbolsArray = symbols.split('');


    for (let symbol of symbolsArray) {
        resultString = resultString.replaceAll(symbol, '');
    }
    return resultString;
}

const result = removeSymbols(userString, userSymbols);
console.log(result);
alert(result);
