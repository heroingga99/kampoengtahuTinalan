document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai input dari form login
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Ambil semua akun yang tersimpan dari localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Cek apakah email dan password cocok dengan salah satu akun
    const accountFound = accounts.find(
      (account) =>
        account.email === loginEmail && account.password === loginPassword
    );

    if (accountFound) {
      alert(`Login berhasil! Selamat datang, ${accountFound.name}.`);
      // Redirect ke halaman lain atau aksi lainnya
      window.location.href = "resume.html";
    } else {
      alert("Email atau password salah!");
    }
  });

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
});

// Close the menu if the user clicks outside of it
menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    menu.classList.add("-translate-x-full");
  }
});

document.getElementById("scrollButton").addEventListener("click", function () {
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollButton2").addEventListener("click", function () {
  document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollButton3").addEventListener("click", function () {
  document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
});
