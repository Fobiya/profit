/* -----------------------------------------------
/* Author : Vikas Kapadiya  - Kapadiya.net
/* MIT license: http://opensource.org/licenses/MIT
/* Lib Used: particles.js by Vincent Garreau  - vincentgarreau.com
/* ----------------------------------------------- */

var pJS = window.pJSDom[0].pJS

var update = function () {
  return pJS.fn.particlesRefresh()
}

var colorFloatToHex = function (color) {
  // By Matt Ostgard - https://codepen.io/mgard/pen/pyxXYz
  // Convert Float color [1,1,] to #fff
  var hexColor = ''
  for (var i = 0; i < color.length; i++) {
    var hex = Number(parseInt(color[i] * 255, 10)).toString(16)
    if (hex.length === 1) {
      hex = '0' + hex
    }
    hexColor += hex
  }
  return hexColor
}

window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {

    if(properties.backgroundText) {
      location.reload()
    }
    if (properties.numbers) {
      pJS.particles.number.value = properties.numbers.value
      return update()
    }

    if (properties.color) {
      var color = properties.color.value.split(' ')

      pJS.particles.color.value = '#' + colorFloatToHex(color)
      return update()
    }

    if (properties.linecolor) {
      var linecolor = properties.linecolor.value.split(' ')

      pJS.particles.line_linked.color = '#' + colorFloatToHex(linecolor)
      return update()
    }

    if (properties.backgroundcolor) {
      console.log("fired")
      var backgroundcolor = properties.backgroundcolor.value.split(' ')
      document.getElementById('particles-js').style.backgroundColor = '#' + colorFloatToHex(backgroundcolor)
    }
  }
}
