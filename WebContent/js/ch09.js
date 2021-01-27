function max2(a, b) {
    a = Number(a);
    b = Number(b);

    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return a;
    }
}

function max3(a,b,c) {
    c = Number(c);
    return max2(max2(a,b),c);
}

function randomEntre(a,b) {
    return Math.round( Math.random() * (a-b+1) + b);
}

function randomVraiFaux() {
    return Boolean(Math.round( Math.random() * 1))
}

