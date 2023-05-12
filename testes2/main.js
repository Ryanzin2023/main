function calcularMedia() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
  
    var media = (num1 + num2 + num3) / 3;
  
    document.getElementById('resultado').innerHTML = "A média é: " + media.toFixed(2);
  }
  