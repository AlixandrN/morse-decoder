const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let size = 10
    let l = expr.length/size
    let arr = []
    
    for (i=0; i<l; i++) {arr.push(expr.slice(i*size, size+i*size))}
    // console.log('arr', arr)

    let resultArr = []
    for (i=0; i<arr.length; i++) {
        if(arr[i] === '**********') {resultArr = resultArr.concat(' ')}
    else{
        let smallArr = []
    for (j=0; j<5; j++) {
        let el = arr[i].slice(j*2, j*2+2)
        if (el==='10') {smallArr.push('.')}
        if (el==='11') {smallArr.push('-')}
    }
    // console.log('smallArr', MORSE_TABLE[smallArr.join('')])
    resultArr = resultArr.concat(MORSE_TABLE[smallArr.join('')])
    }
    }  
    return resultArr.join('')
}

module.exports = {
    decode
}

// console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))