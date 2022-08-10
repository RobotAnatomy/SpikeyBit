namespace SpikeyBit
 {
    /**
  * TODO: describe your function here
  * @param n the n from 0 (min) to 100 (max), eg:0
  */
    //% blockId=SpikeyBit_Avancer block="Avancer avec vitesse %n"
    //% n.min=0 n.max=100
    export function Avancer(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
        pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:0
     */
    //% blockId=SpikeyBit_Reculer block="Recculer avec vitesse %n"
    //% n.min=0 n.max=100
    export function Reculer(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
        pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:50
     */
    //% blockId=SpikeyBit_TG block="Tourner Gauche avec vitesse %n"
    //% n.min=0 n.max=100
    export function Tourner_Gauche(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:50
     */
    //% blockId=SpikeyBit_TD block="Tourner droite avec vitesse %n"
    //% n.min=0 n.max=100
    export function Tourner_Droite(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
        pins.analogWritePin(AnalogPin.P2, 0)

    }


    /**
     * TODO: describe your function here
     * 
     */
    //% blockId=SpikeyBit_Stop block="Stop"
    export function Stop(): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)

    }

}
