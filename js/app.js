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
})


document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinFiled = document.getElementById('display-pin');
    const currentPin = displayPinFiled.value;

    const typedNumberFiled = document.getElementById('typed-number');
    const typedNumber = typedNumberFiled.value;

    const pinSuccessMassage = document.getElementById('pin-success');
    const pinFailureMassage = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {
        pinSuccessMassage.style.display = 'block';
        pinFailureMassage.style.display = 'none';
    }
    else {
        pinFailureMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';
    }
})