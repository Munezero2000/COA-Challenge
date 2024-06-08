// script.js

document.addEventListener("DOMContentLoaded", function () {
  const galleryCards = document.querySelectorAll(".gallery-card");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementsByClassName("close")[0];

  galleryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const imgSrc = card.querySelector("img").src;
      modal.style.display = "block";
      modalImg.src = imgSrc;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
