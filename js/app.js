document.getElementById('generate-pin').addEventListener('click', function () {
    function getPin() {
        const pin = genaratePin();
        const pinString = pin + '';
        if (pinString.length === 4) {
            return pin;
        }
        else {
            return getPin();
        }
    }

    function genaratePin() {
        const round = Math.round(Math.random() * 10000);
        return round;
    }


    const pin = getPin();

    const displayPinFiled = document.getElementById('display-pin');
    displayPinFiled.value = pin;
})

document.getElementById('calculator').addEventListener('click', function () {
    const number = event.target.innerText;
    const typedNumbeFiled = document.getElementById('typed-number');
    const previousTypedNumber = typedNumbeFiled.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbeFiled.value = '';
        }
        else if (number === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainDigits = digit.join('');
            typedNumbeFiled.value = remainDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumbeFiled.value = newTypedNumber;
    }
    console.log()
})