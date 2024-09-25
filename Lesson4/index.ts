let arr: number[];
arr = [2,4,5,7]
console.log(arr)

//if we include string in the arr
// arr = ['noyon', 2,4,6,8] //we get the error

let newArr: (number | string | boolean)[] //must use parenthesis
newArr = ['noyon', 'pritim', 1,2,3,4, true] //now we can you both string, number and boolean also
console.log(newArr)
