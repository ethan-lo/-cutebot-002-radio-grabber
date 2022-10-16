radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "heart") {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (receivedString == "smile") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (receivedString == "diamond") {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (receivedString == "circle") {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
let v = 0
music.playMelody("C D E F G - - - ", 120)
radio.setGroup(7)
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
    if (v == 5) {
        cuteBot.setServo(cuteBot.ServoList.S1, 90)
    } else if (v == 6) {
        cuteBot.setServo(cuteBot.ServoList.S1, 135)
    }
})
