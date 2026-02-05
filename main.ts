JoyCar.initJoyCar(RevisionMainboard.OnepThree)
JoyCar.initController(ControllerType.Calliope)
basic.forever(function () {
    JoyCar.drive(FRLRDirection.Forward, 100)
    basic.pause(2000)
    JoyCar.drive(FRLRDirection.Reverse, 100)
    basic.pause(2000)
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Left,
    100,
    0
    )
    basic.pause(2000)
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Right,
    100,
    0
    )
    basic.pause(2000)
    JoyCar.stop(StopIntensity.Intense)
    basic.pause(2000)
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Left,
    50,
    4
    )
    basic.pause(1000)
    JoyCar.turn(
    FRDirection.Reverse,
    LRDirection.Right,
    50,
    2
    )
    basic.pause(1000)
})
