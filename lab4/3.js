/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let new_str = '';
    let num = 0;

    for (let i=0; i<str.length; i++)
        if (str[i] == str [i+1])
            num += 1;
        else 
        {
            new_str += str[i];

            if (num > 0)
                new_str += num+1;

            num = 0;
        }
        
    return new_str;
}

module.exports = rle;
