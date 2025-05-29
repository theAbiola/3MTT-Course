const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    button.addEventListener('click', () => {
        if (action === 'clear') {
            currentInput = '';
            display.textContent = '0';
        } else if (action === 'equal') {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
