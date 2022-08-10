//% color=#efe70d weight=10 icon="\uf1b9"
namespace SpikeyBit
 {
    /**
  * TODO: Avancer Robot Spikey
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
     * TODO: Reculer Robot Spikey
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
     * TODO: Touner à gauche Robot Spikey
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
     * TODO: Touner à droite Robot Spikey
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
     * TODO: Stopper Robot Spikey
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
    /**
    * TODO: Bouger Robot SpikeyBit
    * @param m the m from -100 (min) to 100 (max), eg:0
    * @param n the n from -100 (min) to 100 (max), eg:0
    */
    //% blockId=SpikeyBit_freestyle block="Bouger Robot Vitesse Gauche  %m | Vitesse Droite %n"
    //% m.min=-100 m.max=100
    //% n.min=-100 n.max=100
    export function freestyle(m: number, n: number): void {
        // Add code here

        if (m > 0) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P1, m * 1023 / 100)
        }
        else {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.analogWritePin(AnalogPin.P1, - m * 1023 / 100)
        }

        if (n > 0) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.analogWritePin(AnalogPin.P2, - n * 1023 / 100)
        }

    }

}
