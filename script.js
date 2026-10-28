
document.addEventListener("DOMContentLoaded", function () {
    
    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.textContent = document.body.classList.contains("light-mode")
            ? "Donker mode"
            : "Licht mode";

        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                themeButton.textContent = "Donker mode";
            } else {
                themeButton.textContent = "Licht mode";
            }
        });
    }

    const newsletterOpen = document.getElementById("newsletter-open");
    console.log(newsletterOpen);
    const newsletterModal = document.getElementById("newsletter-modal");
    const newsletterClose = document.getElementById("newsletter-close");

    if (newsletterModal && newsletterModal.dataset.inschrijvingGelukt === "ja") {
    newsletterModal.style.display = "flex";
}

    if (newsletterOpen && newsletterModal && newsletterClose) {
        newsletterOpen.addEventListener("click", function () {
            newsletterModal.style.display = "flex";
        });

        newsletterClose.addEventListener("click", function () {
            newsletterModal.style.display = "none";
        });

        newsletterModal.addEventListener("click", function (event) {
            if (event.target === newsletterModal) {
                newsletterModal.style.display = "none";
            }
        });
    }
});
