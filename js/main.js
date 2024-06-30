document.addEventListener("DOMContentLoaded", () => {
  // Welcome Message
  const welcomeMessage = document.getElementById("welcome-message");
  const userName = prompt("Please enter your name:");
  if (userName) {
    welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;
  }

  // Form Validation and Submission
  const contactForm = document.getElementById("contact-form");
  const formOutput = document.getElementById("form-output");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    formOutput.innerHTML = `
         <p><strong>Nama:</strong> ${name}</p>
         <p><strong>Tanggal Lahir:</strong> ${dob}</p>
         <p><strong>Jenis Kelamin:</strong> ${gender}</p>
         <p><strong>Pesan:</strong> ${message}</p>
     `;
  });
});
