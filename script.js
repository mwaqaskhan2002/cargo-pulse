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


document.addEventListener("DOMContentLoaded", function () {
  // Dropdown items ke clicks listener
  document
    .querySelectorAll(".custom-dropdown .dropdown-item")
    .forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault(); // Default link navigation ko rokta hai

        // Selected text nikaal kar button ke span mein set karna
        const selectedValue = this.textContent;
        const dropdown = this.closest(".custom-dropdown");
        const labelSpan = dropdown.querySelector(".selected-text");

        labelSpan.textContent = selectedValue;
      });
    });
});