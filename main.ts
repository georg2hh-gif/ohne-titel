function sonar_sensor () {
    if (JoyCar.sonar() >= 50) {
        return 0
    } else if (JoyCar.sonar() < 50) {
        return 1
    } else {
        return 2
    }
}
JoyCar.initJoyCar(RevisionMainboard.OnepThree)
JoyCar.initController(ControllerType.Calliope)
basic.forever(function () {
    if (sonar_sensor() == 1) {
        JoyCar.light(ToggleSwitch.Off)
        JoyCar.hazardlights(ToggleSwitch.On)
    } else if (sonar_sensor() == 0) {
        JoyCar.light(ToggleSwitch.On)
        JoyCar.hazardlights(ToggleSwitch.Off)
    }
})
