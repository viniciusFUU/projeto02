const imagem = document.querySelector(".luffy");

let a = 0;

function handleChange() {
  a++;

  if (a === 1) {
    imagem.src = "imagens/second.png";
  } else if (a === 2) {
    imagem.src = "imagens/third.png";
  } else if (a === 3) {
    imagem.src = "imagens/fourth.png";
  } else {
    a = 0;
    imagem.src = "imagens/luffy.png";
  }
}
