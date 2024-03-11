let moisture = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(moisture)
    basic.pause(2000)
})