---
sidebar_position: 1
title: Panduan Penggunaan Sistem SItuba
slug: /
---

# Selamat Datang di Panduan Penggunaan Aplikasi SItuba

Selamat datang Bapak, Ibu, dan Rekan-rekan sekalian di **Buku Panduan Penggunaan Aplikasi SItuba (Sistem Informasi TBC Kota Surakarta)**.

Panduan ini disusun dengan kalimat yang **sederhana, jelas, dan mudah dipahami**, khusus untuk membantu Bapak/Ibu Kader TBC Lapangan, Perangkat Kelurahan, Petugas Puskesmas, dan Pengelola Dinas Kesehatan dalam menjalankan tugas sehari-hari.

---

## Siapa Saja Pengguna Aplikasi SItuba?

Aplikasi SItuba dirancang dengan arsitektur sistem informasi berjenjang (*Multi-tier Role-Based Architecture*) yang menghubungkan seluruh pemangku kepentingan penanggulangan Tuberkulosis (TBC) di Kota Surakarta:

1. **Dinas Kesehatan Kota (Pemda - Super Administrator / Monitoring Eksekutif):** Memantau seluruh data kesehatan se-kota secara terpusat (*real-time dashboard*), mengawasi kemitraan wilayah antara Puskesmas dan Kelurahan, memantau tata kelola pengguna, serta menerbitkan kebijakan, berita edukasi, dan materi panduan resmi.
2. **Puskesmas Pembina (Fasilitas Pelayanan Kesehatan / Verifikator & Pembina Wilayah):** Berfungsi sebagai *hub* medis utama. Satu Puskesmas membina **banyak Kelurahan** dan bertugas **menyetujui (ACC / Verifikasi)** pendaftaran Kader di wilayahnya, memvalidasi hasil skrining, menyiapkan rujukan tes dahak (TCM), serta berkoordinasi dengan rekanan mitra.
3. **Kelurahan Wilayah (Pemerintahan Administratif & Koordinasi Rekanan):** Memantau daftar kader yang bertugas di wilayah RT/RW setempat, melihat data warga terindikasi suspek TBC untuk intervensi sosial/gizi, serta memantau status kemitraan dengan Puskesmas pembina dan mitra kesehatan.
4. **Kader TBC Lapangan (Garda Terdepan Pengumpul Data / Field Operative):** Mendaftar secara mandiri, menunggu persetujuan Puskesmas pembina, melakukan kunjungan rumah (*door-to-door*) untuk skrining 5 gejala utama dan 10 faktor risiko TBC, serta memantau pasien suspek.
5. **Masyarakat Umum & Rekanan Publik:** Mengakses portal berita dan informasi kesehatan TBC, membaca buku panduan dan materi penyuluhan digital, serta mendaftar menjadi mitra kader/petugas.

---

## Arsitektur & Alur Kerja Terintegrasi SItuba

Diagram berikut menggambarkan interaksi sistem dari pendaftaran kader, verifikasi oleh Puskesmas, pembinaan multi-kelurahan, hingga pengawasan komprehensif oleh Dinas Kesehatan Kota (Pemda):

<svg viewBox="0 0 860 520" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#0f172a', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.15)', margin: '20px 0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)'}}>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#facc15" />
    </marker>
  </defs>

  {/* Level 1: Dinkes / Pemda (Top) */}
  <g transform="translate(260, 20)">
    <rect width="340" height="70" rx="10" fill="#1e293b" stroke="#4ade80" strokeWidth="2.5" />
    <text x="170" y="30" fill="#4ade80" fontSize="16" fontWeight="bold" textAnchor="middle">Dinas Kesehatan Kota (Pemda)</text>
    <text x="170" y="52" fill="#94a3b8" fontSize="12" textAnchor="middle">Monitoring Terpusat Eksekutif Se-Kota &amp; Kebijakan</text>
  </g>

  {/* Level 2: Puskesmas Pembina (Middle Right) */}
  <g transform="translate(520, 160)">
    <rect width="310" height="75" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
    <text x="155" y="30" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Puskesmas Pembina</text>
    <text x="155" y="48" fill="#94a3b8" fontSize="11" textAnchor="middle">ACC Akun Kader &amp; Validasi Skrining</text>
    <text x="155" y="65" fill="#38bdf8" fontSize="11" fontWeight="600" textAnchor="middle">(1 Puskesmas membina Banyak Kelurahan)</text>
  </g>

  {/* Level 2: Kelurahan & Rekanan (Middle Left) */}
  <g transform="translate(30, 160)">
    <rect width="310" height="75" rx="10" fill="#1e293b" stroke="#facc15" strokeWidth="2" />
    <text x="155" y="30" fill="#facc15" fontSize="15" fontWeight="bold" textAnchor="middle">Kelurahan &amp; Rekanan Mitra</text>
    <text x="155" y="48" fill="#94a3b8" fontSize="11" textAnchor="middle">Monitoring Wilayah Administrasi RW/RT</text>
    <text x="155" y="65" fill="#facc15" fontSize="11" fontWeight="600" textAnchor="middle">Koordinasi Bantuan Sosial &amp; Kader</text>
  </g>

  {/* Level 3: Kader TBC Lapangan (Lower Center) */}
  <g transform="translate(260, 310)">
    <rect width="340" height="70" rx="10" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
    <text x="170" y="30" fill="#4ade80" fontSize="15" fontWeight="bold" textAnchor="middle">Kader TBC Lapangan (RW / RT)</text>
    <text x="170" y="52" fill="#94a3b8" fontSize="12" textAnchor="middle">Pendaftaran Mandiri &amp; Skrining Door-to-Door</text>
  </g>

  {/* Level 4: Pasien & Masyarakat (Bottom) */}
  <g transform="translate(260, 440)">
    <rect width="340" height="48" rx="8" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
    <text x="170" y="30" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">Warga Masyarakat &amp; Pasien Sasaran</text>
  </g>

  {/* Flows */}
  {/* Warga -> Kader */}
  <path d="M 430, 440 L 430, 380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="440" y="415" fill="#94a3b8" fontSize="11">Skrining Gejala &amp; Faktor Risiko</text>

  {/* Kader Register -> Puskesmas (ACC) */}
  <path d="M 550, 310 C 620, 280 640, 260 640, 235" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
  <text x="645" y="275" fill="#38bdf8" fontSize="11">1. Registrasi &amp; ACC Akun</text>

  {/* Kader Data -> Puskesmas */}
  <path d="M 480, 310 C 510, 270 540, 255 560, 235" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
  <text x="440" y="280" fill="#4ade80" fontSize="11">2. Data Skrining Warga</text>

  {/* Puskesmas <-> Kelurahan (1 to Many) */}
  <path d="M 340, 197 L 520, 197" stroke="#facc15" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow-yellow)" />
  <text x="430" y="185" fill="#facc15" fontSize="11" textAnchor="middle">Kemitraan Wilayah (1 Faskes : Multi Kelurahan)</text>

  {/* Puskesmas -> Pemda */}
  <path d="M 620, 160 C 620, 110 500, 100 480, 90" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
  <text x="590" y="120" fill="#38bdf8" fontSize="11">Agregat Kasus &amp; Rujukan</text>

  {/* Kelurahan -> Pemda */}
  <path d="M 230, 160 C 230, 110 350, 100 370, 90" stroke="#facc15" strokeWidth="2" fill="none" markerEnd="url(#arrow-yellow)" />
  <text x="170" y="120" fill="#facc15" fontSize="11">Laporan Kewilayahan</text>

  {/* Pemda Direct Oversight (All Data) */}
  <path d="M 430, 90 L 430, 310" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#arrow)" />
  <text x="435" y="240" fill="#4ade80" fontSize="11">Supervisi &amp; Monitoring Penuh Pemda</text>
</svg>

---

## Cara Menggunakan Buku Panduan Ini

- **Menu Navigasi (Sebelah Kiri):** Klik pada judul menu di sebelah kiri layar HP atau komputer Bapak/Ibu untuk membuka petunjuk halaman yang diinginkan.
- **Langkah Berurutan:** Setiap petunjuk ditulis berurutan (**Langkah 1**, **Langkah 2**, **Langkah 3**).
- **Tombol & Teks Tebal:** Teks yang dicetak tebal seperti **[Setujui]** atau **[Simpan]** adalah nama tombol yang perlu Bapak/Ibu tekan di layar.
- **Gambar Petunjuk:** Setiap langkah dilengkapi dengan foto layar (*screenshot*) asli aplikasi SItuba agar Bapak/Ibu tidak bingung.
- **Memperbesar Gambar:** Jika ada gambar yang tampak kecil, Bapak/Ibu dapat **mengklik/menekan gambar tersebut** untuk melihat tampilan ukuran penuh yang lebih besar dan jelas.
