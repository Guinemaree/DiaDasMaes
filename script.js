document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in-page");

  iniciarCoracoes();
  iniciarTexto();
  iniciarVibracao();
  iniciarCarrosseis();
});

// =========================
// NAVEGAÇÃO ENTRE PÁGINAS
// =========================
function navegar(url) {
  document.body.classList.remove("fade-in-page");
  document.body.classList.add("fade-out-page");

  setTimeout(() => {
    window.location.href = url;
  }, 400);
}

// =========================
// CORAÇÕES
// =========================
function iniciarCoracoes() {
  const container = document.querySelector(".hearts");
  if (!container) return;

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}

// =========================
// TEXTO DIGITANDO
// =========================
function iniciarTexto() {
  const titulo = document.getElementById("titulo");
  if (!titulo) return;

  const texto = ", eu te amo mãezinhaaaaa";
  let i = 0;

  function escrever() {
    if (i < texto.length) {
      titulo.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escrever, 80);
    }
  }

  escrever();
}

// =========================
// VIBRAÇÃO
// =========================
function iniciarVibracao() {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (navigator.vibrate) navigator.vibrate(100);
    });
  });
}

// =========================
// CARROSSEIS (COM TEMPOS DIFERENTES)
// =========================
function iniciarCarrosseis() {
  const carrosseis = [
    {
      id: "img1",
      imagens: ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg"],
      index: 0,
      direction: "right",
      speed: 3000
    },
    {
      id: "img2",
      imagens: ["img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"],
      index: 0,
      direction: "left",
      speed: 4000
    },
    {
      id: "img3",
      imagens: ["img11.jpeg", "img12.jpeg", "img13.jpeg", "img14.jpeg", "img15.jpeg"],
      index: 0,
      direction: "right",
      speed: 5000
    }
  ];

  function trocar(carrossel) {
    const img = document.getElementById(carrossel.id);
    if (!img) return;

    // fade out
    img.classList.add("fade-out");

    setTimeout(() => {
      // troca índice
      if (carrossel.direction === "right") {
        carrossel.index =
          (carrossel.index + 1) % carrossel.imagens.length;
      } else {
        carrossel.index =
          (carrossel.index - 1 + carrossel.imagens.length) %
          carrossel.imagens.length;
      }

      // troca imagem
      img.src = carrossel.imagens[carrossel.index];

      // fade in
      img.classList.remove("fade-out");
    }, 400);
  }

  // cada carrossel com seu próprio tempo
  carrosseis.forEach((carrossel) => {
    setInterval(() => {
      trocar(carrossel);
    }, carrossel.speed);
  });
}

// =========================
// SURPRESA
// =========================
function mostrarSurpresa() {
  const el = document.getElementById("surpresa");
  if (!el) return;

  el.classList.remove("escondido");

  setTimeout(() => {
    el.classList.add("visivel");
  }, 50);
}