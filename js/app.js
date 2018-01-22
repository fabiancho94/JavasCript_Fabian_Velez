
var calculadora = {
  init: function(){
    /* Asignacion de teclas*/
    var self = this
    var tecla0 = document.getElementById('0')
    var tecla1 = document.getElementById('1')
    var tecla2 = document.getElementById('2')
    var tecla3 = document.getElementById('3')
    var tecla4 = document.getElementById('4')
    var tecla5 = document.getElementById('5')
    var tecla6 = document.getElementById('6')
    var tecla7 = document.getElementById('7')
    var tecla8 = document.getElementById('8')
    var tecla9 = document.getElementById('9')
    var on = document.getElementById('on')
    var signo = document.getElementById('sign')
    var punto = document.getElementById('punto')
    var dividido = document.getElementById('dividido')
    var tecla1 = document.getElementById('menos')
    var tecla1 = document.getElementById('mas')
    var tecla1 = document.getElementById('por')
    var igual = document.getElementById('igual')
    /* Animacion de teclas*/
    tecla0.addEventListener("click", function(){
      
    })
    tecla0.addEventListener("mousedown", function(){
      tecla0.setAttribute("style", "transform: scale(0.95,0.95)")
    })
    tecla0.addEventListener("mouseout", function(){
      tecla0.setAttribute("style", "transform: scale(1,1)")
    })
  }
}
