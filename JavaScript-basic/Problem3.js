// <---------------  Problem 3 ------------------------->

/* Took a Function named isLGSeven and with num property. Declared let as subNum for Substracted Number and in value substrated 7 from the property input value, afterward with conditionals if subNum is smaller than 7, returned the subnum, otherwise returned twice the original property input ending the function with return in both conditionals.*/

function isLGSeven(num) {
    if (typeof num !== 'number') {
        return 'input a number';
    }
    let subNum = num - 7;
    if (subNum < 7) {
        return (subNum);
    }
    else {
        return (num * 2);
    };

}
