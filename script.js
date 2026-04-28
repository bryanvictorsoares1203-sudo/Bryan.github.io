function surpresa() {
  document.getElementById("surpresa").classList.toggle("hidden");
}

const startDate = new Date("2024-02-26");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerText =
    "Estamos juntos há " + days + " dias ❤️";
}

setInterval(updateCounter, 1000);
updateCounter();
