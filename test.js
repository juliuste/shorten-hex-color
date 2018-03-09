'use strict'

const tape = require('tape')
const shorten = require('./index')

tape('shorten-hex-color', (t) => {
	const color1 = shorten('#ffffff')
	t.ok(color1 === '#fff', '#ffffff')

	const color2 = shorten('#a0a0a0')
	t.ok(color2 === '#999', '#a0a0a0')

	const color3 = shorten('#00ad73')
	t.ok(color3 === '#0a7', '#00ad70')

	t.end()
})
