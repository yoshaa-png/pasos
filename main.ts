input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(68.475 * steps)
})
input.onButtonPressed(Button.B, function () {
    steps = 0
    basic.clearScreen()
})
let steps = 0
steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 2500) {
        steps += 1
        basic.pause(100)
    }
})
