input.onSound(DetectedSound.Loud, function () {
    if (flag == 0) {
        flag = 1
        if (mynum == 0) {
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
            mynum = 1
            basic.showLeds(`
                # . # . #
                . . # . .
                # # # # #
                . . # . .
                # . # . #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            basic.clearScreen()
            basic.pause(3000)
            music.stopAllSounds()
        }
        flag = 0
    }
})
let mynum = 0
let flag = 0
input.setSoundThreshold(SoundThreshold.Loud, 150)
flag = 0
pins.analogSetPitchPin(AnalogPin.P0)
basic.forever(function () {
    if (flag == 0) {
        mynum = randint(0, 5)
        if (mynum == 0) {
            basic.showIcon(IconNames.Ghost)
        } else {
            basic.showNumber(mynum)
        }
        basic.pause(1000)
    }
})
