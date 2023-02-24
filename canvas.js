let cuadroCanvas = document.getElementById('dibujo')
let lienzo =cuadroCanvas.getContext('2d')

lienzo.beginPath();
lienzo.strokeStyle = "red"
lienzo.moveTo(30,80)
lienzo.lineTo(250,60)
lienzo.stroke()
lienzo.closePath
