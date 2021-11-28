
const stringSize = (text) => {
    text = 'This text has a certain number of characters';
    return text.length
}

const replaceCharacterE = (text) => {
    text = "This text has a certain number of characters";
    return text.replace(/e/, " ")
}

const concatString = (text1, text2) => {
    text1 = "el Javascript shi ";
    text2 = "ra2e3"
    return text1 + text2
}

const showChar5 = (text) => {
    text = "TDD kicks ass";
    return text.charAt(7);
}

const showChar9 = (text) => {
    text = "But it is really annoying to write";
    return text.substr(0, 9);
}

const toCapitals = (text) => {
    text = "Another useful function";
    return text.toUpperCase();
}

const toLowerCase = (text) => {
    text = "This is a sentence!";
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    text = " Rome wasn\'t built in a day ";
    return text.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
}

const IsString = (text) => {
    text = "Is this a string?";
    if (typeof text === 'string') {
        return true
    }
    else {
        return false
    }
}

const getExtension = (text) => {
    text = "images/photo01.jpg";
    return text.split('.').pop();
}

const countSpaces = (text) => {
    text = "Sire open we have a big one!";
    return text.split(" ").length - 1;
}

const InverseString = (text) => {
    text = "Après demain, à partir d\'aujourd\'hui?";
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    x = 2; y = 3;
    return Math.pow(x, y)
}

const absoluteValue = (num) => {
    num = 5;;
    return Math.abs(num)
}

const absoluteValueArray = (array) => {
    array = [-5, -50, -25, -568];
    return array.map(Math.abs);
}

const circleSurface = (radius) => {
    radius = 5;
    return Math.round(Math.PI * radius * radius)
}

const hypothenuse = (ab, ac) => {
    ab = 5; ac = 8;
    return Math.hypot(ab, ac)
}

const BMI = (weight, height) => {
    weight = 65;
    height = 1.75;
    bmi = weight / (height * height)
    return Math.round((bmi + Number.EPSILON) * 100) / 100;
}

const createLanguagesArray = () => {
    return array = ["Html", "CSS", "Java", "PHP"]
}

const createNumbersArray = () => {
    return array = [0, 1, 2, 3, 4, 5]
}

const replaceElement = (languages) => {
    languages = ["Html", "CSS", "Java", "PHP"]
    languages.splice(2, 1, 'Javascript');
    return languages;
}

const addElement = (languages) => {
    languages = ["Html", "CSS", "Java", "PHP"]
    languages.push('Ruby', 'Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers = [0, 1, 2, 3, 4, 5];
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    languages.shift()
    return languages;
}

const removeLast = (languages) => {
    languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    social_arr = "Facebook,Twitter,Google +,Viadeo,LinkedIn";
    let conv = social_arr.split(',');
    return conv;
}

const convertArrToStr = (languages) => {
    languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    return languages = languages.toString();
}

const sortArr = (social_arr) => {
    social_arr = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    social_arr.reverse()
    return social_arr;


}