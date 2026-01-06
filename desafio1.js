let experiencia = "";
let quantidadeExperiencia = 0;

switch (quantidadeExperiencia) {
  case 1000:
    experiencia = "Ferro";
    break;
  case 2000:
    experiencia = "Bronze";
    break;
  case 5000:
    experiencia = "Prata";
    break;
  case 7000:
    experiencia = "Ouro";
    break;
  case 8000:
    experiencia = "Platina";
    break;
  case 9000:
    experiencia = "Ascendente";
    break;
  case 10000:
    experiencia = "Imortal";
    break;
    case 10001:
    experiencia = "Radiante";
    break;
default:
    experiencia = "Amador";
    break;
}

console.log(experiencia);
console.log(quantidadeExperiencia);