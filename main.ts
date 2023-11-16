function DreheRechts () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . # # # #
        # . . # .
        # . # . .
        `)
    Einlenken()
    Drehzeit = 2000 * Multiplikator
    for (let Geschwindigkeit = 0; Geschwindigkeit <= 5; Geschwindigkeit++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, Geschwindigkeit * 10)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, Geschwindigkeit * 10)
        basic.pause(100)
    }
    basic.pause(Drehzeit)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    Auslenken()
}
function Auslenken () {
    servos.P1.setAngle(90)
    servos.P2.setAngle(90)
    basic.pause(500)
}
function FahreVorwärts () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    for (let Geschwindigkeit = 0; Geschwindigkeit <= 10; Geschwindigkeit++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, Geschwindigkeit * 10)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Geschwindigkeit * 10)
        basic.pause(100)
    }
    basic.pause(2000 * Multiplikator)
    for (let Geschwindigkeit = 0; Geschwindigkeit <= 10; Geschwindigkeit++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100 - Geschwindigkeit * 10)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100 - Geschwindigkeit * 10)
        basic.pause(100)
    }
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
}
function DreheLinks () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # .
        . # . . #
        . . # . #
        `)
    Einlenken()
    Drehzeit = 2000 * Multiplikator
    for (let Geschwindigkeit = 0; Geschwindigkeit <= 5; Geschwindigkeit++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, Geschwindigkeit * 10)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Geschwindigkeit * 10)
        basic.pause(100)
    }
    basic.pause(Drehzeit)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    Auslenken()
}
input.onButtonPressed(Button.A, function () {
    for (let Index = 0; Index <= BefehlsListe.length; Index++) {
        Befehl = BefehlsListe[Index]
        Multiplikator = MultiListe[Index]
        if (Befehl == "FV") {
            FahreVorwärts()
        } else if (Befehl == "DL") {
            DreheLinks()
        } else if (Befehl == "DR") {
            DreheRechts()
        } else {
            Anhalten()
        }
    }
    Anhalten()
})
function Einlenken () {
    servos.P1.setAngle(135)
    servos.P2.setAngle(45)
    basic.pause(500)
}
function Anhalten () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
}
let Befehl = ""
let Multiplikator = 0
let Drehzeit = 0
let MultiListe: number[] = []
let BefehlsListe: string[] = []
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
servos.P1.setAngle(90)
servos.P2.setAngle(90)
basic.clearScreen()
basic.showString("V1")
BefehlsListe = [
"FV",
"DR",
"FV",
"DL",
"FV",
"DL"
]
MultiListe = [
2,
1,
1,
1,
4,
3
]
basic.showLeds(`
    # . . . #
    . # # # .
    # # . # #
    . # # # .
    # . . . #
    `)
