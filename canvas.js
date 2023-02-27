let cuadroCanvas = document.getElementById('dibujo')
let lienzo =cuadroCanvas.getContext('2d')

dibujarLineas("red",10,20,287,150)
dibujarLineas("gray",90,268,40,15)

function dibujarLineas(color,xInicial,yInicial,xFinal,yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(xInicial,yInicial)
    lienzo.lineTo(xFinal,yFinal)
    lienzo.stroke()
    lienzo.closePath
}

