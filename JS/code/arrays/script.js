let arr = [2,5,9,8,7,8]
console.log(arr,typeof arr)
console.log(arr.length)
console.log(arr.push(5,11,))  // push will insert  elements at the end of array
console.log(arr.pop()) // pop will remove last element in the array
console.log(arr)
console.log(arr.unshift(23,24,25)) // unshift will insert elements at the start of array
console.log(arr.shift()) // Shift will remove the first element of the array
console.log(arr)
console.log(arr.splice(2,2))
console.log(arr)
console.log(arr.splice(2,0,"raj","priya"))
console.log(arr)
console.log(arr.indexOf("raj"),arr.slice(2,4))
console.log([].join(''))
console.log(arr.reverse())
console.log("I HATE XYZ".split('').reverse().join(''))

arr=[2,8,4,3,1,11]
console.log(arr.sort())
console.log(arr.concat(7,7))
console.log(arr.includes(28))

// How to print or transverse array values

arr=[5,6,8,9]
console.log(arr.forEach(function (val,x)
{
    console.log(val*2,x)
}))

// forEach will repeat the callback function for Eah and Every Element of the array,always it send call back function first argument element and second argument index.

//Arrays functions like forEach,map,entries,find,filter,reduce will be discussed after functions.