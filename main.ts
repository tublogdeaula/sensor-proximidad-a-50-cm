let distancia = 0
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    basic.pause(1000)
    if (distancia > 50) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Happy)
    } else if (distancia < 50) {
        basic.showIcon(IconNames.No)
        music.playMelody("A G A G A G A G ", 120)
    }
})
