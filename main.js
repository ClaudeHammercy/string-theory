//Xify==========================================================
console.log('xify');

function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + 'x';
    }
    return output;
}

console.log(xify('hello'));
console.log(xify('hi there'));

//Yelling Characters ===========================================
console.log('YELLING CHARACTERS');

function yellingChars(str1) {
    let output1 = '';
    for (let i = 0; i < str1.length; i++) {
        output1 = output1 + str1[i] + '!';
    }
    return output1;
}

console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));

//Indexed Characters ===========================================
console.log('INDEXED CHARACTERS');

function indexedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + i + str[i];
    }
    return output;
}

console.log(indexedChars('hello'));
console.log(indexedChars('bye'));

//Numbered Characters ===========================================
console.log('NUMBERED CHARACTERS');

function numberedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + '(' + (i + 1) + ')' + str[i];
    }
    return output;
}

console.log(numberedChars('hello'));
console.log(numberedChars('bye'));

//Exclaim ======================================================
console.log('EXCLAIM');

function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === '.') || (str[i] === '?')) {
            output = output + '!';
        } else {
            output = output + str[i];
        }
    }
    return output;
}

console.log(exclaim('What are you doing? Are you a fool?'));
console.log(exclaim('This is fine.'));

//Repeat It ====================================================
console.log('REPEAT IT');

//let n =

    function repeatIt(str) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
            output = output;
        }
        return output;
    }

console.log(repeatIt('beetlejuice', 3));
console.log(repeatIt('oh hi!', 8));

//Truncate ====================================================
console.log('Truncate');

function truncate(str) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
            if (i > 15) {
                output = output + '.';
            } else {
                output = output + str[i];
            }
            output = output;
        }
        return output;
    }

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));

//CiEmailify ====================================================
console.log('CiEmailify');

function ciEmailify(str) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                output = output + '.';
            } else {
                output = output + str[i];
            }
        }
        return output;
    }

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));

//Repeat It ====================================================
console.log('Reverse');

function reverse(str) {
        let output = '';
        for (let i = str.length - 1 ; i >= 0; i--) {
        output = output + str[i];
        }
        return output;
    }

console.log(reverse('colin'));
console.log(reverse('mesuara'));

//Only Vowels ====================================================
console.log('Only Vowels');

function onlyVowels(str) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
            if ((str[i] === 'a') || (str[i] === 'e') || (str[i] === 'i') || (str[i] === 'o') || (str[i] === 'u')) {
                output = output + str[i];
            }
        }
        return output;
    }

console.log(onlyVowels('Colin Jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));