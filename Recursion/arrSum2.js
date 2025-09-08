function arrSum(arr, n, sum = 0)
{
    // base Case
    if (n === 0)
        return sum;

    // recursive call
    return arrSum(arr, n - 1, sum + arr[n - 1]);
}

let arr = [ 2, 55, 1, 7 ];
let n = arr.length;
console.log(arrSum(arr, n, 0));