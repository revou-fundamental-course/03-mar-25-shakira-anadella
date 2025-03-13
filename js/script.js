document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (slides.length === 0) return; // Cegah error jika tidak ada slide

        slides.forEach(slide => slide.classList.remove("active"));

        slideIndex = (slideIndex + 1) % slides.length; // Perbaikan batas array
        slides[slideIndex].classList.add("active");

        setTimeout(showSlides, 5000);
    }

    showSlides(); // Jalankan slider

    // Menampilkan nama pengguna di sapaan
    let userName = prompt("Enter your name:").trim();
    let usernameElement = document.getElementById("username");
    if (usernameElement) {
        usernameElement.textContent = userName || "Guest";
    }

    // Validasi Formulir
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let message = document.getElementById("message").value.trim();
            let formOutput = document.getElementById("formOutput");

            // Cek jika ada field yang kosong
            if (!name || !email || !phone || !message) {
                alert("All fields are required!");
                return;
            }

            // Validasi email menggunakan regex
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            // Menampilkan output jika valid
            formOutput.innerHTML = `
                <h3>Form Submitted Successfully!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;

            contactForm.reset();
        });
    }
});
