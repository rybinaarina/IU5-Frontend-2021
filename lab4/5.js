/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
   
    let a = str[str.length-1];
    for (i=str.length-1; i>=0; i--)
    {

        let b = str[i-1];
        if ((a == "]") && ((b == "(") || (b == "<")))
            return false;
        if ((a == ")") && ((b == "[") || (b == "<")))
            return false;
        if ((a == ">") && ((b == "(") || (b == "[")))
            return false;

        a=b;

    }
    return true;
}

module.exports = checkBrackets;
