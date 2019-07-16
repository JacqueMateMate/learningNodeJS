
function sumArray(array)
{
    var result=0;
    var lengthArray = array.length
    for (i=2; i<lengthArray;i++)
    result += parseInt(array[i])
    return(result)
}


console.log(sumArray(process.argv))
