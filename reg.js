document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Semua kolom harus diisi!");
      return; // Hentikan eksekusi jika ada yang kosong
    }

    // Buat objek akun baru
    const newAccount = {
      name: name,
      email: email,
      password: password
    };

    // Ambil array akun dari localStorage (jika ada)
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Tambahkan akun baru ke array
    accounts.push(newAccount);

    // Simpan kembali array akun ke localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Pendaftaran berhasil!");
    window.location.reload();
  });
