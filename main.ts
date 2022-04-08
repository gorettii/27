basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        led.plot(2, 2)
        basic.pause(100)
        led.unplot(2, 2)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        led.plot(4, 2)
        basic.pause(100)
        led.unplot(4, 2)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plot(0, 2)
        basic.pause(100)
        led.unplot(0, 2)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        led.plot(2, 4)
        basic.pause(100)
        led.unplot(2, 4)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        led.plot(2, 0)
        basic.pause(100)
        led.unplot(2, 0)
    }
})
