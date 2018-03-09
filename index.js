'use strict'

const hex2rgb = require('hex-rgb')
const rgb2hex = require('rgb-hex')
const closestNumber = require('closest-number')
const range = require('lodash.range')
const shortenHex = require('shorten-css-hex')

const multiples16 = range(16).map(n => 16*n+n)
const closestMultiple16 = n => closestNumber(multiples16, n)

const main = (hex) => {
    const rgb = hex2rgb(hex)
    const newHex = '#'+rgb2hex(closestMultiple16(rgb.red), closestMultiple16(rgb.green), closestMultiple16(rgb.blue))
    return shortenHex(newHex)
}

module.exports = main
