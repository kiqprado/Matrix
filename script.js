window.addEventListener('load', eventWindowLoaded, false)

function eventWindowLoaded() {
  canvasApp()
}

function canvasSupport(e) {
  return !!e.getContext
}

function canvasApp() {
  var canvas = document.getElementById('canvas')

  if (!canvasSupport(canvas)) {
    return
  }

  var ctx = canvas.getContext('2d')
  var w = (canvas.width = window.innerWidth)
  var h = (canvas.height = window.innerHeight)
  var yPosition = Array(300).join(0).split('')

  function runMatrix() {
    if (typeof Game_Interval != 'undefined') clearInterval(Game_Interval)
    Game_Interval = setInterval(drawScreen, 33)
  }

  function drawScreen() {
    ctx.fillStyle = 'rgba(0, 0, 0, .05)'
    ctx.fillRect(0, 0, w, h)
    ctx.fillStyle = '#0f0'
    ctx.font = '10px Georgia'
    yPosition.map(function (y, index) {
      text = String.fromCharCode(1e2 + Math.random() * 33)
      x = index * 10 + 10
      ctx.fillText(text, x, y)
      if (y > 100 + Math.random() * 1e4) {
        yPosition[index] = 0
      } else {
        yPosition[index] = y + 10
      }
    })
  }
  runMatrix()
}
