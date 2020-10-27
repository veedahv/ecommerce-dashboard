document.body.innerHTML = debugFunc(5);

function debugFunc (sum) {
    if (sum === 5) {
        return 'it is equal to 5';
    } else if (sum > 5) {
        return 'it is greater than 5';
    }
}

