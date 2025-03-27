radio.setGroup(1)
basic.forever(function () {
    if (bitbot.sonar(BBPingUnit.Centimeters) <= 20) {
        basic.showIcon(IconNames.Heart)
        radio.sendNumber(1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(15000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
