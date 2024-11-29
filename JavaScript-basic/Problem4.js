// <---------------  Problem 4 ------------------------->

/* Took a Function named findingBadData and with array property. As we need to find the bad data(Negative Data),  declared let count as the number counter value for bad data, then arranged a loop with i = 0 and i++ to run the loop for each array index value. In the loop there is also a conditional to check for Bad data by making sure only data with value that is less than zero is flagged and added to count if condition is met, ending the function with return. */

function findingBadData(array) {
    if (!Array.isArray(array)) {
        return 'input a array';
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++
        }
    }
    return count;  
}