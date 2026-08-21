---
sidebar_position: 1
title: Panduan Penggunaan Sistem SItuba
slug: /intro
---

# Selamat Datang di Panduan Penggunaan Aplikasi SItuba

Selamat datang Bapak, Ibu, dan Rekan-rekan sekalian di **Buku Panduan Penggunaan Aplikasi SItuba (Sistem Informasi TBC Kota Surakarta)**.

Panduan ini disusun dengan kalimat yang **sederhana, jelas, dan mudah dipahami**, khusus untuk membantu Bapak/Ibu Kader TBC Lapangan, Perangkat Kelurahan, Petugas Puskesmas, dan Pengelola Dinas Kesehatan dalam menjalankan tugas sehari-hari.

---

## Siapa Saja Pengguna Aplikasi SItuba?

Aplikasi SItuba digunakan oleh 5 kelompok pengguna. Silakan pilih panduan sesuai dengan tugas Bapak/Ibu:

1. **Dinas Kesehatan Kota (Pemda):** Memeriksa dan menyetujui pendaftaran akun baru, memantau data TBC se-Kota Surakarta, serta mengelola berita edukasi.
2. **Puskesmas Pembina:** Mengawasi kegiatan kader di wilayah binaan, memantau warga terindikasi suspek TBC, dan menyiapkan rujukan tes dahak.
3. **Kelurahan Wilayah:** Memantau jumlah kader dan sebaran warga terindikasi TBC di lingkungan RW dan RT.
4. **Kader TBC Lapangan:** Mengisi formulir skrining 5 indikator gejala TBC saat mengunjungi warga dari rumah ke rumah (*door-to-door*).
5. **Masyarakat Umum (Publik):** Membaca berita kesehatan TBC, mendownload materi penyuluhan, dan mendaftar akun baru.

---

## Diagram Alur & Otorisasi Pengguna SItuba

<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#0f172a', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.15)', margin: '20px 0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)'}}>
  <!-- Defs for arrows and gradients -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
    </marker>
    <linearGradient id="grad-dinkes" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1e293b" />
      <stop offset="100%" stopColor="#0f172a" />
    </linearGradient>
  </defs>

  <!-- Node 1: Dinkes (Top Center) -->
  <g transform="translate(250, 20)">
    <rect width="300" height="64" rx="10" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
    <text x="150" y="28" fill="#4ade80" fontSize="15" fontWeight="bold" textAnchor="middle">Dinas Kesehatan Kota Surakarta</text>
    <text x="150" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">Executive Super Administrator</text>
  </g>

  <!-- Node 2: Puskesmas (Middle Right) -->
  <g transform="translate(480, 160)">
    <rect width="270" height="64" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
    <text x="135" y="28" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Puskesmas Pembina</text>
    <text x="135" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">Faskes Supervisor &amp; Rujukan TCM</text>
  </g>

  <!-- Node 3: Kelurahan (Middle Left) -->
  <g transform="translate(50, 160)">
    <rect width="270" height="64" rx="10" fill="#1e293b" stroke="#facc15" strokeWidth="2" />
    <text x="135" y="28" fill="#facc15" fontSize="15" fontWeight="bold" textAnchor="middle">Kelurahan Wilayah</text>
    <text x="135" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">Administrative Boundary Monitoring</text>
  </g>

  <!-- Node 4: Kader (Lower Center) -->
  <g transform="translate(250, 300)">
    <rect width="300" height="64" rx="10" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
    <text x="150" y="28" fill="#4ade80" fontSize="15" fontWeight="bold" textAnchor="middle">Kader TBC Lapangan</text>
    <text x="150" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">Field Data Collection (Door-to-Door)</text>
  </g>

  <!-- Node 5: Warga (Bottom) -->
  <g transform="translate(250, 400)">
    <rect width="300" height="44" rx="8" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
    <text x="150" y="27" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">Masyarakat Umum &amp; Pasien Sasaran</text>
  </g>

  <!-- Connectors -->
  <!-- Warga -> Kader -->
  <path d="M 400, 400 L 400, 364" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="410" y="387" fill="#94a3b8" fontSize="11">Gejala Medis</text>

  <!-- Kader -> Puskesmas -->
  <path d="M 470, 300 C 470, 260 615, 260 615, 224" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
  <text x="560" y="270" fill="#4ade80" fontSize="11">Input Skrining 5 Gejala</text>

  <!-- Kelurahan <-> Puskesmas -->
  <path d="M 320, 192 L 480, 192" stroke="#facc15" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
  <text x="400" y="184" fill="#facc15" fontSize="11" textAnchor="middle">Kemitraan Wilayah</text>

  <!-- Puskesmas -> Dinkes -->
  <path d="M 615, 160 C 615, 100 450, 100 450, 84" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
  <text x="560" y="120" fill="#38bdf8" fontSize="11">Laporan Rekapitulasi</text>

  <!-- Dinkes -> Kader -->
  <path d="M 320, 84 C 200, 120 220, 260 320, 300" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
  <text x="170" y="140" fill="#4ade80" fontSize="11">Otorisasi &amp; Manajemen Akun</text>
</svg>

---

## Cara Menggunakan Buku Panduan Ini

- **Menu Navigasi (Sebelah Kiri):** Klik pada judul menu di sebelah kiri layar HP atau komputer Bapak/Ibu untuk membuka petunjuk halaman yang diinginkan.
- **Langkah Berurutan:** Setiap petunjuk ditulis berurutan (**Langkah 1**, **Langkah 2**, **Langkah 3**).
- **Tombol & Teks Tebal:** Teks yang dicetak tebal seperti **[Setujui]** atau **[Simpan]** adalah nama tombol yang perlu Bapak/Ibu tekan di layar.
- **Gambar Petunjuk:** Setiap langkah dilengkapi dengan foto layar (*screenshot*) asli aplikasi SItuba agar Bapak/Ibu tidak bingung.
- **Memperbesar Gambar:** Jika ada gambar yang tampak kecil, Bapak/Ibu dapat **mengklik/menekan gambar tersebut** untuk melihat tampilan ukuran penuh yang lebih besar dan jelas.
