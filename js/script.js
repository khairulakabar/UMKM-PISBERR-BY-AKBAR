
// ==========================
// MENU RESPONSIVE
// ==========================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
    });
});


// ==========================
// HARGA PRODUK
// ==========================

const hargaProduk = 10000;

const jumlah = document.getElementById("jumlah");
const totalHarga = document.getElementById("totalHarga");

function hitungTotal() {
    let banyak = Number(jumlah.value);

    if (banyak < 1 || !Number.isInteger(banyak)) {
        banyak = 1;
        jumlah.value = 1;
    }

    const total = hargaProduk * banyak;

    totalHarga.innerText =
        "Rp" + total.toLocaleString("id-ID");
}

jumlah.addEventListener("input", hitungTotal);


// ==========================
// PILIH PRODUK
// ==========================

function pilihProduk(namaProduk) {
    document.getElementById("produkPilihan").value =
        namaProduk;

    document.getElementById("pesan").scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================
// PESAN VIA WHATSAPP
// ==========================

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const produk = document.getElementById("produkPilihan").value;
    const banyak = Number(jumlah.value);
    const catatan = document.getElementById("catatan").value;

    if (!Number.isInteger(banyak) || banyak < 1) {
        alert("Jumlah pesanan minimal 1!");
        return;
    }

    const total = hargaProduk * banyak;

    const pesan =
`Halo PISBER! 🍓

Saya ingin memesan:

Nama: ${nama}
Produk: ${produk}
Jumlah: ${banyak}
Harga: Rp${total.toLocaleString("id-ID")}

Catatan: ${catatan}

Terima kasih!`;

    const nomorWA = "6283175122369";

    const url =
        "https://wa.me/" + nomorWA +
        "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
});


// ==========================
// KOMENTAR PELANGGAN
// ==========================

const commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("namaKomentar").value.trim();
    const isi = document.getElementById("isiKomentar").value.trim();

    if (!nama || !isi) {
        alert("Silakan isi nama dan komentar!");
        return;
    }

    const komentar = document.createElement("div");
    komentar.className = "comment";

    const icon = document.createElement("div");
    icon.className = "comment-icon";
    icon.textContent = "🍓";

    const isiKomentar = document.createElement("div");

    const namaElement = document.createElement("h4");
    namaElement.textContent = nama;

    const pesanElement = document.createElement("p");
    pesanElement.textContent = isi;

    isiKomentar.appendChild(namaElement);
    isiKomentar.appendChild(pesanElement);

    komentar.appendChild(icon);
    komentar.appendChild(isiKomentar);

    document.getElementById("daftarKomentar")
        .prepend(komentar);

    commentForm.reset();

    alert("Terima kasih sudah memberikan komentar!");
});
