let cifre_varibal = 0
let _100_a = 0
let _10_a = 0
let _1_a = 0
let _100_b = 0
let _10_b = 0
let _1_b = 0
let svar = 0
input.onButtonPressed(Button.A, function () {
    if (cifre_varibal == 0) {
        _100_a = _100_a + 100
        basic.showNumber(_100_a)
    } else if (cifre_varibal == 1) {
        _10_a = _10_a + 10
        basic.showNumber(_10_a)
    } else if (cifre_varibal == 2) {
        _1_a = _1_a + 1
        basic.showNumber(_1_a)
    } else if (cifre_varibal == 3) {
        _100_b = _100_b + 100
        basic.showNumber(_100_b)
    } else if (cifre_varibal == 4) {
        _10_b = _10_b + 10
        basic.showNumber(_10_b)
    } else if (cifre_varibal == 5) {
        _1_b = _1_b + 1
        basic.showNumber(_1_b)
    } else if (cifre_varibal == 6) {
        svar = _1_a + _1_b + _10_a + (_10_b + (_100_a + _100_b))
        basic.showNumber(svar)
    } else if (cifre_varibal == 7) {
        svar = _1_a + _10_a + _100_a - (_1_b + (_10_b + _100_b))
        basic.showNumber(svar)
    } else if (cifre_varibal == 8) {
        svar = (_1_a + _10_a + _100_a) * (_1_b + (_10_b + _100_b))
        basic.showNumber(svar)
    } else {
        svar = (_1_a + _10_a + _100_a) / (_1_b + (_10_b + _100_b))
        basic.showNumber(svar)
    }
})
input.onButtonPressed(Button.AB, function () {
    cifre_varibal = 0
    _1_a = 0
    _1_b = 0
    _10_a = 0
    _10_b = 0
    _100_a = 0
    _100_b = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    cifre_varibal = cifre_varibal + 1
})
