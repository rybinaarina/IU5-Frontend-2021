/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {

  let arr_nums = str.split(/[^-\d\.]/)

  return { min: Math.min(...arr_nums), max: Math.max(...arr_nums)};
}

module.exports = getMinMax;


//     let arr_int = str.split(/[^-\d\.]/);
//     let min_int = arr_int[0];
//     let max_int = arr_int[0];
//     for (let i=1; i<length(arr_int); i++)
//     {
//         if (arr_int[i] < min_int)
//             min_int = arr_int[i];
//         if (arr_int[i] > max_int)
//             min_int = arr_int[i]; 
//     }      
            
//     return {min: min_int, max: max_int};
// }


//const nums = str.replace(/\D+ | . | -/gi, ' ').split(' ').map((subStr) => (subStr.includes('.') ? parseFloat(subStr) : parseInt(subStr, 10)));
  //  return {
    //  min: Math.min(...nums),
      //max: Math.max(...nums),
   // };