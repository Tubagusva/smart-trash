let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    whaleysans.showNumber(distance)
    basic.showString("" + (distance))
    if (distance > 0 && distance < 20) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(3000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
    basic.pause(100)
})
