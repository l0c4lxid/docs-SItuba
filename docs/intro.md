---
sidebar_position: 1
title: Panduan Penggunaan Sistem SItuba
slug: /
---

# Selamat Datang di Panduan Penggunaan Aplikasi SItuba

Selamat datang Bapak, Ibu, dan Rekan-rekan sekalian di **Buku Panduan Penggunaan Aplikasi SItuba (Sistem Informasi Tuberkulosis Kota Surakarta)**.

Buku panduan ini disusun secara runtut, lengkap, dan menggunakan bahasa Indonesia yang **sederhana, ramah, dan mudah dipahami** untuk memandu seluruh pihak yang terlibat dalam penanggulangan penyakit TBC di Kota Surakarta.

---

## Siapa Saja Pengguna di Dalam Aplikasi SItuba?

Aplikasi SItuba menghubungkan 5 kelompok pengguna yang saling bekerja sama dari tingkat warga hingga pemerintah kota:

1. **Dinas Kesehatan Kota (Pemda / Pengawasan & Pemantauan Se-Kota):**
   - Berperan dalam **pemantauan eksekutif terpusat** terhadap seluruh data pemeriksaan, sebaran wilayah, dan perkembangan kasus TBC se-Kota Surakarta secara langsung dari dashboard.
   - Mengawasi kemitraan wilayah antara Puskesmas dengan seluruh kelurahan binaannya serta menerbitkan kebijakan resmi.

2. **Puskesmas Pembina (Pusat Layanan Medis & Verifikator Wilayah):**
   - Bertindak sebagai penanggung jawab layanan kesehatan medis yang membina **banyak Kelurahan** di wilayah kerjanya (1 Puskesmas membawahi beberapa kelurahan).
   - Memeriksa dan **menyetujui (ACC / Mengaktifkan)** pendaftaran akun Kader TBC baru di wilayah binaannya.
   - Menerima hasil pemeriksaan warga dari kader, menghubungi pasien suspek, dan menyiapkan rujukan pemeriksaan dahak (Tes Cepat Molekuler / TCM) serta pengobatan tuntas.

3. **Perangkat Kelurahan & Rekanan Mitra (Pemantauan Wilayah & Dukungan Sosial):**
   - Berperan dalam **pemantauan wilayah lingkungan RW dan RT** untuk mengetahui sebaran warga yang sakit batuk/suspek TBC.
   - Memantau keaktifan kader yang bertugas di wilayah kelurahan setempat.
   - Bekerja sama dengan Rekanan Mitra (PKK, organisasi sosial, dan relawan) untuk menyalurkan bantuan makanan bergizi tambahan (PMT) serta perbaikan ventilasi rumah warga yang sakit.

4. **Kader TBC Lapangan (Petugas Pemeriksa di Lingkungan RW/RT):**
   - Mendaftar akun secara mandiri melalui website, lalu menunggu persetujuan (ACC) dari Puskesmas pembinanya.
   - Melakukan kunjungan dari rumah ke rumah (*door-to-door*) untuk mewawancarai warga mengenai 5 gejala utama TBC dan 10 faktor risiko kesehatan.
   - Mengisi formulir skrining digital di HP dan mendampingi warga yang perlu berobat ke Puskesmas.

5. **Masyarakat Umum & Warga Kota:**
   - Membaca berita kesehatan terpercaya, tips pencegahan penularan batuk TBC, dan mengunduh materi penyuluhan secara gratis.
   - Mendaftar akun mandiri jika ingin bergabung menjadi kader kesehatan sukarela.

---

## Alur Kerja Terpadu Aplikasi SItuba

Aplikasi SItuba dirancang agar seluruh data dari lapangan langsung terhubung secara otomatis tanpa perlu pencatatan manual di kertas yang berulang kali:

<svg viewBox="0 0 920 780" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#0b132b', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.12)', margin: '24px 0', boxShadow: '0 16px 36px -8px rgba(0,0,0,0.6)'}}>
  <defs>
    {/* Markers */}
    <marker id="panah-hijau" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
    </marker>
    <marker id="panah-biru" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="panah-kuning" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
    </marker>
    <marker id="panah-ungu" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
    </marker>
    <marker id="panah-merah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="panah-abu" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
    </marker>

    {/* Gradients */}
    <linearGradient id="bg-kartu" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1e293b" />
      <stop offset="100%" stopColor="#0f172a" />
    </linearGradient>
    <linearGradient id="bg-merah" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#450a0a" />
      <stop offset="100%" stopColor="#1e293b" />
    </linearGradient>
    <linearGradient id="bg-hijau" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#064e3b" />
      <stop offset="100%" stopColor="#1e293b" />
    </linearGradient>
    <linearGradient id="bg-dinkes" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1e293b" />
      <stop offset="50%" stopColor="#1e3a8a" />
      <stop offset="100%" stopColor="#0f172a" />
    </linearGradient>
  </defs>

  {/* BARIS 1: LANGKAH 1 & LANGKAH 2 */}
  {/* Langkah 1: Kader Daftar Mandiri */}
  <g transform="translate(30, 20)">
    <rect width="360" height="74" rx="12" fill="url(#bg-kartu)" stroke="#10b981" strokeWidth="2" />
    <circle cx="36" cy="37" r="18" fill="#10b981" />
    <text x="36" y="43" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">1</text>
    <text x="68" y="33" fill="#ffffff" fontSize="15" fontWeight="bold">Kader Daftar Mandiri</text>
    <text x="68" y="54" fill="#94a3b8" fontSize="12">Isi formulir online di website SItuba</text>
  </g>

  {/* Panah Langkah 1 -> Langkah 2 */}
  <path d="M 390, 57 L 490, 57" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#panah-hijau)" />
  <text x="440" y="47" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Kirim Berkas</text>

  {/* Langkah 2: Verifikasi & ACC Puskesmas */}
  <g transform="translate(500, 20)">
    <rect width="390" height="74" rx="12" fill="url(#bg-kartu)" stroke="#38bdf8" strokeWidth="2" />
    <circle cx="36" cy="37" r="18" fill="#0284c7" />
    <text x="36" y="43" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">2</text>
    <text x="68" y="33" fill="#ffffff" fontSize="15" fontWeight="bold">Verifikasi &amp; ACC Puskesmas</text>
    <text x="68" y="54" fill="#94a3b8" fontSize="12">Puskesmas Pembina menyetujui akun kader</text>
  </g>

  {/* BARIS 2: STATUS AKUN AKTIF & LANGKAH 3 */}
  {/* Panah Turun Langkah 2 -> Status Aktif */}
  <path d="M 695, 94 L 695, 130" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#panah-biru)" />

  {/* Badge Status Akun Aktif */}
  <g transform="translate(500, 132)">
    <rect width="390" height="60" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
    <text x="195" y="27" fill="#4ade80" fontSize="13" fontWeight="bold" textAnchor="middle">✓ Akun Kader Disetujui (ACC)</text>
    <text x="195" y="46" fill="#e2e8f0" fontSize="11" textAnchor="middle">Kader Aktif &amp; Siap Bertugas di Lingkungan RT/RW</text>
  </g>

  {/* Panah Kiri: Status Aktif -> Langkah 3 */}
  <path d="M 500, 162 L 400, 162" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#panah-kuning)" />

  {/* Langkah 3: Kader Kunjungi Rumah Warga */}
  <g transform="translate(30, 126)">
    <rect width="360" height="74" rx="12" fill="url(#bg-kartu)" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="36" cy="37" r="18" fill="#d97706" />
    <text x="36" y="43" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">3</text>
    <text x="68" y="33" fill="#ffffff" fontSize="15" fontWeight="bold">Kader Kunjungi Rumah Warga</text>
    <text x="68" y="54" fill="#94a3b8" fontSize="12">Pemeriksaan langsung dari pintu ke pintu</text>
  </g>

  {/* BARIS 3: LANGKAH 4 & EVALUASI GEJALA */}
  {/* Panah Turun Langkah 3 -> Langkah 4 */}
  <path d="M 210, 200 L 210, 238" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#panah-kuning)" />

  {/* Langkah 4: Isi Formulir Skrining */}
  <g transform="translate(30, 240)">
    <rect width="360" height="74" rx="12" fill="url(#bg-kartu)" stroke="#a855f7" strokeWidth="2" />
    <circle cx="36" cy="37" r="18" fill="#7e22ce" />
    <text x="36" y="43" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">4</text>
    <text x="68" y="33" fill="#ffffff" fontSize="15" fontWeight="bold">Isi Formulir Skrining di HP</text>
    <text x="68" y="54" fill="#94a3b8" fontSize="12">5 Gejala Utama &amp; 10 Faktor Risiko Pasien</text>
  </g>

  {/* Panah Kanan Langkah 4 -> Evaluasi */}
  <path d="M 390, 277 L 495, 277" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#panah-ungu)" />

  {/* Kotak Keputusan: Evaluasi Gejala TBC */}
  <g transform="translate(500, 234)">
    <rect width="390" height="86" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
    <text x="195" y="28" fill="#c7d2fe" fontSize="13" fontWeight="bold" textAnchor="middle">Kalkulasi Otomatis Sistem:</text>
    <text x="195" y="48" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">Apakah Ada Gejala Batuk / TBC?</text>
    <text x="195" y="68" fill="#94a3b8" fontSize="11" textAnchor="middle">(Batuk Lebih Dari 2 Minggu, Batuk Darah, Demam, Keringat, BB Turun)</text>
  </g>

  {/* BARIS 4: CABANG HASIL (SUSPEK vs SEHAT) */}
  {/* Cabang TIDAK -> Warga Sehat */}
  <path d="M 550, 320 C 550, 355 390, 355 355, 365" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#panah-hijau)" />
  <text x="460" y="348" fill="#10b981" fontSize="11" fontWeight="bold">TIDAK (0 Gejala)</text>

  <g transform="translate(30, 365)">
    <rect width="360" height="68" rx="10" fill="url(#bg-hijau)" stroke="#10b981" strokeWidth="1.5" />
    <text x="180" y="28" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle">Disimpan sebagai Data Warga Sehat</text>
    <text x="180" y="48" fill="#94a3b8" fontSize="11" textAnchor="middle">Hasil skrining tersimpan untuk evaluasi berkala</text>
  </g>

  {/* Cabang YA -> Suspek TBC */}
  <path d="M 730, 320 L 730, 360" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#panah-merah)" />
  <text x="740" y="345" fill="#ef4444" fontSize="11" fontWeight="bold">YA (Minimal 1 Gejala)</text>

  <g transform="translate(500, 365)">
    <rect width="390" height="72" rx="10" fill="url(#bg-merah)" stroke="#ef4444" strokeWidth="2" />
    <text x="195" y="28" fill="#f87171" fontSize="14" fontWeight="bold" textAnchor="middle">⚠ Otomatis Ditandai "Suspek TBC"</text>
    <text x="195" y="49" fill="#fecaca" fontSize="12" textAnchor="middle">Data langsung muncul di Dashboard Puskesmas</text>
  </g>

  {/* BARIS 5: TINDAK LANJUT MEDIS OLEH PUSKESMAS */}
  <path d="M 695, 437 L 695, 470" stroke="#ef4444" strokeWidth="2" markerEnd="url(#panah-merah)" />

  <g transform="translate(500, 472)">
    <rect width="390" height="70" rx="10" fill="url(#bg-kartu)" stroke="#38bdf8" strokeWidth="1.5" />
    <text x="195" y="28" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">1. Puskesmas: Jadwalkan Tes Dahak (TCM)</text>
    <text x="195" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle">Penanganan medis langsung &amp; pemeriksaan dokter</text>
  </g>

  {/* BARIS 6: PEMANTAUAN WILAYAH KELURAHAN & MITRA */}
  <path d="M 695, 542 L 695, 575" stroke="#facc15" strokeWidth="2" markerEnd="url(#panah-kuning)" />

  <g transform="translate(500, 577)">
    <rect width="390" height="70" rx="10" fill="url(#bg-kartu)" stroke="#facc15" strokeWidth="1.5" />
    <text x="195" y="28" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">2. Kelurahan &amp; Rekanan (Pemantauan Wilayah)</text>
    <text x="195" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle">Pantau sebaran kasus &amp; salurkan bantuan nutrisi (PMT)</text>
  </g>

  {/* KONVERGENSI KE LANGKAH 5: PEMANTAUAN TERPUSAT DINAS KESEHATAN */}
  {/* Panah dari Warga Sehat ke Dinkes */}
  <path d="M 210, 433 C 210, 630 230, 655 290, 668" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,5" fill="none" markerEnd="url(#panah-abu)" />

  {/* Panah dari Kelurahan ke Dinkes */}
  <path d="M 695, 647 L 695, 668" stroke="#4ade80" strokeWidth="2" markerEnd="url(#panah-hijau)" />

  {/* Banner Besar 5: Dinas Kesehatan Kota (Pemda) */}
  <g transform="translate(30, 672)">
    <rect width="860" height="80" rx="14" fill="url(#bg-dinkes)" stroke="#4ade80" strokeWidth="2.5" />
    <circle cx="44" cy="40" r="20" fill="#059669" />
    <text x="44" y="47" fill="#ffffff" fontSize="17" fontWeight="bold" textAnchor="middle">5</text>
    <text x="78" y="32" fill="#4ade80" fontSize="16" fontWeight="bold">Dinas Kesehatan Kota (Pemda) - Pemantauan Terpusat Se-Kota</text>
    <text x="78" y="55" fill="#e2e8f0" fontSize="12">Pemantauan menyeluruh se-Kota Surakarta: Grafik sebaran kelurahan, total skrining, tren suspek, dan pengawasan kebijakan.</text>
  </g>
</svg>

---

## Diagram Hubungan & Koordinasi Antar Peran

Diagram di bawah ini menggambarkan pembagian peran dan alur komunikasi antar pihak secara jelas dan teratur:

<svg viewBox="0 0 920 620" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#0f172a', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.15)', margin: '24px 0', boxShadow: '0 14px 32px -6px rgba(0,0,0,0.5)'}}>
  <defs>
    <marker id="hub-hijau" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
    </marker>
    <marker id="hub-biru" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="hub-kuning" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#facc15" />
    </marker>
    <marker id="hub-putih" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
    </marker>
  </defs>

  {/* TINGKAT 1: DINAS KESEHATAN KOTA (PEMDA) - ATAS TENGAH */}
  <g transform="translate(230, 20)">
    <rect width="460" height="76" rx="14" fill="#1e293b" stroke="#4ade80" strokeWidth="2.5" />
    <text x="230" y="32" fill="#4ade80" fontSize="16" fontWeight="bold" textAnchor="middle">Dinas Kesehatan Kota (Pemda)</text>
    <text x="230" y="54" fill="#94a3b8" fontSize="12" textAnchor="middle">Pengawasan &amp; Pemantauan Eksekutif Seluruh Data Se-Kota</text>
  </g>

  {/* TINGKAT 2 KIRI: KELURAHAN & REKANAN MITRA */}
  <g transform="translate(30, 175)">
    <rect width="360" height="86" rx="12" fill="#1e293b" stroke="#facc15" strokeWidth="2" />
    <text x="180" y="30" fill="#facc15" fontSize="15" fontWeight="bold" textAnchor="middle">Kelurahan &amp; Rekanan Mitra</text>
    <text x="180" y="50" fill="#e2e8f0" fontSize="12" textAnchor="middle">Pemantauan Sebaran Kasus Lingkungan RW/RT</text>
    <text x="180" y="68" fill="#facc15" fontSize="11" fontWeight="600" textAnchor="middle">Koordinasi Penyaluran Bantuan Nutrisi (PMT)</text>
  </g>

  {/* TINGKAT 2 KANAN: PUSKESMAS PEMBINA */}
  <g transform="translate(530, 175)">
    <rect width="360" height="86" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
    <text x="180" y="30" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Puskesmas Pembina</text>
    <text x="180" y="50" fill="#e2e8f0" fontSize="12" textAnchor="middle">Pusat Layanan Medis &amp; ACC Akun Kader</text>
    <text x="180" y="68" fill="#38bdf8" fontSize="11" fontWeight="600" textAnchor="middle">(1 Puskesmas Membina Banyak Kelurahan)</text>
  </g>

  {/* HUBUNGAN KEMITRAAN WILAYAH: KELURAHAN <---> PUSKESMAS */}
  <path d="M 390, 218 L 525, 218" stroke="#facc15" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#hub-kuning)" />
  <g transform="translate(395, 192)">
    <rect width="130" height="24" rx="6" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
    <text x="65" y="16" fill="#facc15" fontSize="10" fontWeight="bold" textAnchor="middle">Kemitraan Wilayah</text>
  </g>

  {/* LAPORAN DARI KELURAHAN KE DINAS KESEHATAN */}
  <path d="M 210, 175 C 210, 120 280, 110 320, 96" stroke="#facc15" strokeWidth="2" fill="none" markerEnd="url(#hub-kuning)" />
  <text x="175" y="130" fill="#facc15" fontSize="11" textAnchor="middle">Laporan Pemantauan Wilayah</text>

  {/* LAPORAN DARI PUSKESMAS KE DINAS KESEHATAN */}
  <path d="M 710, 175 C 710, 120 640, 110 600, 96" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#hub-biru)" />
  <text x="745" y="130" fill="#38bdf8" fontSize="11" textAnchor="middle">Rekapitulasi Kasus &amp; Rujukan TCM</text>

  {/* TINGKAT 3: KADER TBC LAPANGAN - TENGAH */}
  <g transform="translate(230, 340)">
    <rect width="460" height="82" rx="14" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
    <text x="230" y="32" fill="#4ade80" fontSize="15" fontWeight="bold" textAnchor="middle">Kader TBC Lapangan (Tingkat RW / RT)</text>
    <text x="230" y="52" fill="#e2e8f0" fontSize="12" textAnchor="middle">Pendaftaran Mandiri &amp; Pemeriksaan Warga Door-to-Door</text>
    <text x="230" y="69" fill="#94a3b8" fontSize="11" textAnchor="middle">Mewawancarai 5 Gejala Medis &amp; 10 Faktor Risiko</text>
  </g>

  {/* ALUR 1: KADER DAFTAR KE PUSKESMAS & ACC */}
  <path d="M 690, 370 C 780, 360 790, 290 750, 265" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#hub-biru)" />
  <text x="825" y="320" fill="#38bdf8" fontSize="11" textAnchor="middle">1. Pendaftaran &amp; ACC Akun</text>

  {/* ALUR 2: KADER KIRIM LAPORAN SUSPEK KE PUSKESMAS */}
  <path d="M 620, 340 C 620, 305 600, 290 600, 265" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#hub-hijau)" />
  <text x="545" y="310" fill="#4ade80" fontSize="11" textAnchor="middle">2. Laporan Pasien Suspek</text>

  {/* TINGKAT 4: WARGA MASYARAKAT - PALING BAWAH */}
  <g transform="translate(250, 490)">
    <rect width="420" height="54" rx="10" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="210" y="33" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">Warga Masyarakat &amp; Pasien Sasaran</text>
  </g>

  {/* ALUR WARGA -> KADER */}
  <path d="M 460, 490 L 460, 427" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#hub-putih)" />
  <text x="468" y="462" fill="#cbd5e1" fontSize="11">Pemeriksaan 5 Gejala &amp; Faktor Risiko</text>
</svg>

---

## 6 Langkah Utama Alur Pelayanan di Lapangan

Untuk memudahkan pemahaman, berikut adalah 6 langkah alur kerja harian yang berjalan di dalam aplikasi SItuba:

1. **Langkah 1 (Pendaftaran Kader Baru):**  
   Calon kader mendaftar secara mandiri melalui website pendaftaran dengan mengisi nama, nomor WhatsApp, dan memilih wilayah kelurahan tempatnya bertugas. Setelah mendaftar, akun kader akan berstatus **Pending (Menunggu Persetujuan)**.

2. **Langkah 2 (Persetujuan / ACC oleh Puskesmas Pembina):**  
   Petugas di Puskesmas Pembina membuka menu data kader, memeriksa kesesuaian wilayah tugas pendaftar, lalu menekan tombol **[Setujui / Aktifkan]** (**ACC**). Setelah disetujui, kader dapat langsung masuk (*login*) dan mulai bekerja.

3. **Langkah 3 (Kunjungan Rumah & Wawancara Warga):**  
   Kader mendatangi rumah-rumah warga (*door-to-door*) untuk menanyakan **5 Gejala Utama TBC** (batuk lama lebih dari 2 minggu, batuk berdahak/berdarah, demam berulang, keringat malam, penurunan berat badan) serta **10 Pertanyaan Faktor Risiko**.

4. **Langkah 4 (Penentuan Otomatis Status Suspek):**  
   Jika warga menjawab **"Ya"** pada minimal satu ($\ge 1$) dari 5 gejala utama, aplikasi secara otomatis menetapkan warga tersebut sebagai **Suspek TBC**. Laporan ini langsung masuk ke layar Puskesmas Pembina secara *real-time*.

5. **Langkah 5 (Tindak Lanjut Medis & Pemantauan Wilayah):**  
   - **Puskesmas Pembina:** Menghubungi warga melalui nomor WhatsApp untuk menjadwalkan pemeriksaan medis dan tes dahak (TCM) di Puskesmas.
   - **Kelurahan & Rekanan Mitra (Pemantauan):** Memantau sebaran warga yang sakit di lingkungan RW/RT setempat untuk menyalurkan bantuan makanan bergizi tambahan (PMT) dan pendampingan selama masa pengobatan.

6. **Langkah 6 (Pemantauan Terpusat oleh Dinas Kesehatan Kota):**  
   Dinas Kesehatan Kota (Pemda) melakukan pemantauan eksekutif terhadap seluruh data se-Kota Surakarta melalui dashboard terpusat: memantau jumlah warga yang sudah diperiksa, grafik sebaran kelurahan, tren suspek, serta pengawasan kebijakan kesehatan kota.

---

## Cara Menggunakan Buku Panduan Ini

- **Menu Navigasi (Sebelah Kiri):** Klik pada judul menu di sebelah kiri layar HP atau komputer Bapak/Ibu untuk membuka petunjuk halaman yang diinginkan.
- **Langkah Berurutan:** Setiap petunjuk ditulis berurutan (**Langkah 1**, **Langkah 2**, **Langkah 3**).
- **Tombol & Teks Tebal:** Teks yang dicetak tebal seperti **[Setujui]** atau **[Simpan]** adalah nama tombol yang perlu Bapak/Ibu tekan di layar.
- **Gambar Petunjuk:** Setiap langkah dilengkapi dengan foto layar (*screenshot*) asli aplikasi SItuba agar Bapak/Ibu tidak bingung.
- **Memperbesar Gambar:** Jika ada gambar yang tampak kecil, Bapak/Ibu dapat **mengklik/menekan gambar tersebut** untuk melihat tampilan ukuran penuh yang lebih besar dan jelas.
