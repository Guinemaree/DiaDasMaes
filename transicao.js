document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in-page");
});

function navegar(url) {
  document.body.classList.remove("fade-in-page");
  document.body.classList.add("fade-out-page");

  setTimeout(() => {
    window.location.href = url;
  }, 400);
}