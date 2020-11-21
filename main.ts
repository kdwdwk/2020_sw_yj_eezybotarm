radio.onReceivedNumber(function (receivedNumber) {
    motor.servo(motor.Servos.S2, receivedNumber / 5)
})
radio.onReceivedValue(function (name, value) {
    if (name == "가변저항1") {
        motor.servo(motor.Servos.S1, value / 5)
    }
})
radio.setGroup(3)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P8, pins.analogReadPin(AnalogPin.P0))
    pins.servoWritePin(AnalogPin.P12, pins.analogReadPin(AnalogPin.P1))
})
