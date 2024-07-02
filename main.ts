let rf = 0
let deGReeS = 0
input.onButtonPressed(Button.A, function () {
    rf = 1
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    rf = 0
})
basic.forever(function () {
    deGReeS = input.compassHeading()
    if (deGReeS < 45) {
        basic.showString("N")
    } else if (deGReeS < 135) {
        basic.showString("E")
    } else if (deGReeS < 225) {
        basic.showString("S")
    } else if (deGReeS < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
basic.forever(function () {
    if (rf == 1) {
        led.plot(input.acceleration(Dimension.X), input.acceleration(Dimension.Y))
    }
})
