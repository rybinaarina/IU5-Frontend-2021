/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */

function getAnagramms(arr) 
{
    let object = {};

    for (let item of arr) 
    {
        let sort_arr = item.toLowerCase().split("").sort().join("");

        if (typeof object[sort_arr] === "undefined") 
        { object[sort_arr] = []; }

        object[sort_arr].push(item);
    }

    return (Object.values(object));
}

module.exports = getAnagramms;