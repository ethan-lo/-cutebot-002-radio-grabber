def on_received_string(receivedString):
    if receivedString == "heart":
        basic.show_leds("""
            . # . # .
                        # . # . #
                        # . . . #
                        . # . # .
                        . . # . .
        """)
    if receivedString == "smile":
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
    if receivedString == "diamond":
        basic.show_leds("""
            . . # . .
                        . # . # .
                        # . . . #
                        . # . # .
                        . . # . .
        """)
    if receivedString == "circle":
        basic.show_leds("""
            . # # # .
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
        """)
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    global xValue, yValue, stop
    if name == "x":
        xValue = value
    if name == "y":
        yValue = value
    if name == "stop":
        stop = value
radio.on_received_value(on_received_value)

distance = 0
stop = 0
yValue = 0
xValue = 0
music.play_melody("C D E F G - - - ", 120)
radio.set_group(7)

def on_forever():
    global distance, stop
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
    if distance < 30 and stop == 0:
        cuteBot.stopcar()
        stop = 1
        music.play_melody("C5 B C5 B C5 B C5 B ", 200)
    cuteBot.motors(yValue + xValue, yValue - xValue)
basic.forever(on_forever)
