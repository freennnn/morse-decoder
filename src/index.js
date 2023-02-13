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
    function binaryToMorseToEncoded(str) {
        if (str.length < 10) {
            str = str.padStart(10, "0");
        }
        // 10 stands for dot(.), 11 stands for dash(-).
        // Space in string is **********
        let morse = "";
        for (let i=0; i < str.length-1; i+= 2) {
            let twobits = str.slice(i,i+2);
            switch (twobits) {
                case "10":
                    morse += ".";
                    break;
                case "11":
                    morse += "-";
                    break;
                case "**":
                    morse += "**"
                    break;
                default:
                    break;
            }
        }
        
        if (morse === "**********") {
            return " ";
        } else if (morse in MORSE_TABLE) {
            return MORSE_TABLE[morse];
        } else {
            return "";
        }
    }
    let decodedExpr = "";
    for (i=0; i< expr.length; i+= 10) {
        let encodedSymbol = expr.slice(i, i+10);
        decodedExpr += binaryToMorseToEncoded(encodedSymbol);
    }
    return decodedExpr;
    
}


module.exports = {
    decode
}
