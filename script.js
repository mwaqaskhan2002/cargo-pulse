document.addEventListener("DOMContentLoaded", () => {
  const heroImages = document.querySelectorAll(".hero-bg-img");
  let currentIndex = 0;
  const delayDuration = 5000; // Figma delay: 5000ms

  setInterval(() => {
    // Current image se active class remove karein
    heroImages[currentIndex].classList.remove("active");

    // Next image index calculate karein
    currentIndex = (currentIndex + 1) % heroImages.length;

    // Next image par active class add karein
    heroImages[currentIndex].classList.add("active");
  }, delayDuration);
});
