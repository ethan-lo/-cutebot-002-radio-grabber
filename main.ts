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
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0080)
    }
    if (receivedString == "smile") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff00ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    }
    if (receivedString == "diamond") {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    }
    if (receivedString == "circle") {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff9da5)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0080)
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
let angle_next = 0
let yValue = 0
let xValue = 0
let v = 0
music.playMelody("C D E F G - - - ", 120)
radio.setGroup(7)
cuteBot.setServo(cuteBot.ServoList.S1, 0)
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
let angle_current = 0
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
    if (v == 5) {
        angle_next = angle_current + 10
        cuteBot.setServo(cuteBot.ServoList.S1, angle_next)
        angle_current = angle_next
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
        v = 0
    } else if (v == 6) {
        cuteBot.setServo(cuteBot.ServoList.S1, 0)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
        angle_current = 0
        v = 0
    } else if (v == 7) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        v = 0
    }
})
