let D;
let x1, x2;
let a = 1,
    b = 1,
    c = 0;

function discr() {
    D = Math.pow(b, 2) - 4 * a * c;
    return D;
}

function searchRoot() {
    if (D == 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        document.getElementById('result').innerHTML = 'Коли D=0, тому один корінь рівняння:<br>  x1 = ' + x1 + ';';
    }
    else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        document.getElementById('result').innerHTML = 'Корені даного рівняння:<br><br>  x1 = ' + x1 + ';<br><br>  x2 = ' + x2 + ';';
    }
    else {
        document.getElementById('result').innerHTML = 'Коли D<0, тому немає дісних коренів';
    }
}

function quadrEquat() {
    document.getElementById('result').innerHTML = '';
    a = parseFloat(document.getElementById('a').value);
    b = parseFloat(document.getElementById('b').value);
    c = parseFloat(document.getElementById('c').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').innerHTML = 'Введіть коректні дані коефіцієнтів!';
    }
    else {
        discr();
        searchRoot();
    }
}
