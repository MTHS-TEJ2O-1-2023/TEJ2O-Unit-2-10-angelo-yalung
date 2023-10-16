/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program lights up the neopixels when a certain light threshold is met
*/

  // variables
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let lightLevel: number
let neopixelStrip: neopixel.Strip = null

  // cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

  // program starting on button a pressed
input.onButtonPressed(Button.A, function() {

  // looking for lightlevel
  lightLevel = input.lightLevel()

  // if the light level is less than or equal to 51
if (lightLevel <= 51) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
}

  // if the light level is less than or equal to 52
if (lightLevel >= 52) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}

  // if the light level is less than or equal to 104
if (lightLevel >= 104) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}

  // if the light level is greater than or equal to 156
if (lightLevel >= 156) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}

  // if the light level is greater than or equal to 208
if (lightLevel >= 208) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}
})

  // resetting the program
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showIcon(IconNames.Happy)
})
