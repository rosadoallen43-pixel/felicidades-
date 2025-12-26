const btnCarta = document.getElementById("btnCarta");
const modal = document.getElementById("modalCarta");
const closeModal = document.querySelector(".close");

btnCarta.onclick = () => modal.style.display = "block";
closeModal.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
}
