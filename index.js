function isOperator(ch) {
    return '+-*/%'.includes(ch);
}
function Solve(val) {
    var v = document.getElementById('res');
    var cur = v.value;
    if (isOperator(val)) {
        var last = cur.slice(-1);
        if (isOperator(last)) {
            if (last === val) {
                return;
            }
            v.value = cur.slice(0, -1) + val;
            return;
        }
        if (cur === '' && val !== '-') {
            return;
        }
    }
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var sanitized = num1.replace(/x/gi, '*');
        var num2 = eval(sanitized);
        document.getElementById('res').value = num2;
    }
    catch (e) {
        document.getElementById('res').value = 'Error';
    }
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});