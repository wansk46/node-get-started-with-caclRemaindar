// Write your cade below:
function caclRemaindar(x,y) {
	return x%y
};

function caclSum(numArray) {
    let total=0
    
    for (i=0; i<numArray.length; i++)
    {
        total += numArray[i];
    }
    return total

};

function caclSumInConditon(numArray,intNum) {
    let total=0
    
    for (i=0; i<numArray.length; i++)
    {
        if ( numArray[i]<intNum)
        {
            total += numArray[i];
        }
        
    }
    return total

};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}