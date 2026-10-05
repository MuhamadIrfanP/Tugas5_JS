// Data Produk awal minimal 5
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headset", harga: 500000 },
    { id: 5, nama: "Keyboard", harga: 800000 }
];


// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {

    const tabel = document.getElementById("tabelProduk");

    tabel.innerHTML = "";

    produkList.forEach(({ id, nama, harga }) => {

        tabel.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${nama}</td>
                <td>Rp${harga.toLocaleString("id-ID")}</td>
            </tr>
        `;

    });
}


// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {

    const produkBaru = {
        id,
        nama,
        harga
    };

    produkList = [...produkList, produkBaru];

    tampilkanProduk();
}


// Menghapus Produk dengan Rest Parameter
function hapusProduk(...idProduk) {

    produkList = produkList.filter(
        produk => !idProduk.includes(produk.id)
    );

    tampilkanProduk();
}


// Event Listener untuk tombol Tampilkan
document.getElementById("btnTampilkan").addEventListener("click", function() {
    tampilkanProduk();
});


// Event Listener untuk tombol Tambah
document.getElementById("btnTambah").addEventListener("click", function() {

    tambahProduk(6, "Mouse", 300000);

});


// Event Listener untuk tombol Hapus
document.getElementById("btnHapus").addEventListener("click", function() {

    hapusProduk(2);

});


// Menampilkan produk saat halaman pertama kali dibuka
tampilkanProduk();