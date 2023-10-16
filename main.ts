/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program lights up the neopixels when a certain light threshold is met
*/

// variables
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let lightLevel: number = input.lightLevel()
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function() {
if (lightLevel <= 51) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
}

if (lightLevel >= 52) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}

if (lightLevel >= 104) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}

if (lightLevel >= 156) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}

if (lightLevel >= 208) {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show()
  basic.showNumber(lightLevel)
}
})

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
})
