let arr=[5,8,1,3,4]
console.log(arr);

/* for each */
function display(x)
{
    console.log(x)
}
arr.forEach(display)

arr.forEach(function(ele,ind)
    {
        console.log(ele,ind)
    })

// use for each and check whether each and every element of array is even or odd

arr.forEach(function(ele)
{
    if (ele%2==0) {
        console.log(` ${ele} is even`)
    } 
    else {
        console.log(` ${ele} is odd`)       
    }

})


let x=arr.map(function(ele)
{
    if (ele%2==0) 
    {
        return "even"
    } 

    else 
    {
        return "odd"       
    }
})
console.log(x)

let x2= arr.map(function(ele)
{
    return ele >5;
})
console.log(x2)

let x3 = arr.filter(function(ele)
{
    return ele%2 == 0
})
console.log(x3)

let x4=arr.some(function(ele)
{
    return ele%2==0;
})
console.log(x4)

arr=[100,200,100,300,200]
let total=arr.reduce(function(prev,curr)
{
    return prev+curr
},0)
console.log(total)