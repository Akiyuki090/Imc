function calculo() {
  var heigth = document.getElementById("heigth").value;
  var weigth = document.getElementById("weigth").value;  
  
  imc = weigth / (heigth / 100) ** 2;
  text = "";

  if (imc < 18.5) {
    text =
      "Seu imc esta abaixo do padrão, procure um profissional na área para mais detalhes";
  } else if (imc < 24.9) {
    text = "Seu imc esta dentro do normal";
  } else if (imc < 29.9) {
    text =
      "Você esta em estado de sobrepeso, procure um profissional na área para mais detalhes";
  } else if (imc < 39.9) {
    text =
      "Você se encontra em estado de obesidade, procure ajuda o quanto antes";
  } else if (imc > 39.9) {
    text =
      "Você se encontra em estado de obesidade mórbida, procure ajuda imediatamente";
  }

  document.getElementById("text").innerText = text;
}
