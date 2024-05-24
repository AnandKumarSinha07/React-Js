
const newArr=new Array(1,2,3,4,5,6)
// console.log(newArr)

// newArr.push(33)
// // newArr.pop();
// newArr.unshift(101)// aage se add ho jayega 1 element 
// //newArr.shift(101)// aage se delete bhi ho jayega



//slice ka matlab wahi part include hoga array ka jiska index dala gya h par last wala include nahi hoga bas
// ar uske bad agar array ko print kr wayege toh pura aray print kr ke de dega
const ans=newArr.slice(1,4);
console.log(ans);
console.log(newArr)


// splice me bhi wahi include hoga bas last ka value bhi add ho jayega jo hm pass krege
// par agar original array print kr wayege toh left element of splice array would be added to the main array
const checkSplice=newArr.splice(1,4);
console.log(checkSplice)
console.log(newArr)


// console.log(newArr.includes(2));
// console.log(newArr.indexOf(5))

    