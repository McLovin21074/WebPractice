  
  const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
  ];
  
  const result = pickPropArray(students, 'name');
  console.log(result);

  function pickPropArray(arr, prop) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];

        if (obj.hasOwnProperty(prop)) {
            result.push(obj[prop]);
        }
    }

    return result;
}

  //Задание 2
  const counter1 = createCounter();
  counter1(); // 1
  counter1(); // 2
  
  const counter2 = createCounter();
  counter2(); // 1
  counter2(); // 2

  function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }

  //Задание 3  
  const result1 = spinWords("Привет от Legacy");
  console.log(result1); // тевирП от ycageL
  
  const result2 = spinWords("This is a test");
  console.log(result2); // This is a test

  function spinWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

  
//Задание 4

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));

const nums1 = [4, 5, 7, 10];
const target1 = 15;
console.log(twoSum(nums1, target1));

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
  return [];
}

//Задание 5

console.log(findLongestCommonPrefix(["цветок", "поток", "хлопок"])); 
console.log(findLongestCommonPrefix(["собака", "гоночная машина", "машина"])); 
console.log(findLongestCommonPrefix(["машина", "максимум", "маршрут"])); 
console.log(findLongestCommonPrefix(["дом", "дома", "домашний"])); 

function findLongestCommonPrefix(strs) {
  if (strs.length === 0)  "";

  let shortest = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortest.length) {
      shortest = strs[i];
    }
  }

  for (let len = shortest.length; len >= 2; len--) {
    for (let i = 0; i <= shortest.length - len; i++) {
      let prefix = shortest.slice(i, i + len);

      if (strs.every(str => str.includes(prefix))) {
        return prefix;
      }
    }
  }

  return "";
}
