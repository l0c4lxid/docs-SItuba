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

1. **Dinas Kesehatan Kota (Pemda / Pengawas Utama):**
   - Memantau seluruh data kesehatan dan laporan pemeriksaan TBC se-Kota Surakarta secara langsung dari satu layar dashboard terpusat.
   - Mengawasi kemitraan wilayah antara Puskesmas dengan seluruh kelurahan binaannya.
   - Mengelola akun petugas tingkat kota serta menerbitkan berita sosialisasi kesehatan dan buku panduan resmi.

2. **Puskesmas Pembina (Pusat Layanan Medis & Pembina Wilayah):**
   - Bertindak sebagai penanggung jawab layanan kesehatan yang membina **banyak Kelurahan** di wilayah kerjanya (1 Puskesmas membawahi beberapa kelurahan).
   - Memeriksa dan **menyetujui (ACC / Mengaktifkan)** pendaftaran akun Kader TBC baru yang bertugas di wilayah binaannya.
   - Memeriksa hasil pemeriksaan warga yang dikirim oleh kader, menghubungi pasien suspek, dan menyiapkan rujukan pemeriksaan dahak (Tes Cepat Molekuler / TCM) serta pengobatan.

3. **Perangkat Kelurahan & Rekanan Mitra (Pemerintahan Wilayah & Dukungan Sosial):**
   - Mengetahui daftar kader aktif yang bertugas di setiap lingkungan RW dan RT di kelurahannya.
   - Memantau sebaran warga yang terindikasi batuk/suspek TBC di lingkungannya.
   - Bekerja sama dengan Rekanan Mitra (organisasi kemasyarakatan, PKK, dan lembaga sosial) untuk menyalurkan bantuan makanan bergizi tambahan (PMT) serta perbaikan ventilasi rumah warga yang sakit.

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

<svg viewBox="0 0 900 760" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#0b132b', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.12)', margin: '24px 0', boxShadow: '0 16px 36px -8px rgba(0,0,0,0.6)'}}>
  <defs>
    {/* Markers */}
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
    </marker>
    <marker id="arrow-sky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-slate" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
    </marker>

    {/* Gradients */}
    <linearGradient id="grad-card" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1e293b" />
      <stop offset="100%" stopColor="#0f172a" />
    </linearGradient>
    <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#450a0a" />
      <stop offset="100%" stopColor="#1e293b" />
    </linearGradient>
    <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#064e3b" />
      <stop offset="100%" stopColor="#1e293b" />
    </linearGradient>
    <linearGradient id="grad-dinkes-bar" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1e293b" />
      <stop offset="50%" stopColor="#1e3a8a" />
      <stop offset="100%" stopColor="#0f172a" />
    </linearGradient>
  </defs>

  {/* BARIS 1: LANGKAH 1 & LANGKAH 2 */}
  {/* Step 1: Kader Daftar Mandiri */}
  <g transform="translate(30, 20)">
    <rect width="360" height="72" rx="12" fill="url(#grad-card)" stroke="#10b981" strokeWidth="2" />
    <circle cx="36" cy="36" r="18" fill="#10b981" />
    <text x="36" y="42" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">1</text>
    <text x="68" y="32" fill="#ffffff" fontSize="15" fontWeight="bold">Kader Daftar Mandiri</text>
    <text x="68" y="52" fill="#94a3b8" fontSize="12">Isi formulir online di website SItuba</text>
  </g>

  {/* Panah 1 -> 2 */}
  <path d="M 390, 56 L 485, 56" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
  <text x="440" y="46" fill="#10b981" fontSize="11" textAnchor="middle">Data Dikirim</text>

  {/* Step 2: ACC oleh Puskesmas */}
  <g transform="translate(490, 20)">
    <rect width="380" height="72" rx="12" fill="url(#grad-card)" stroke="#38bdf8" strokeWidth="2" />
    <circle cx="36" cy="36" r="18" fill="#0284c7" />
    <text x="36" y="42" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">2</text>
    <text x="68" y="32" fill="#ffffff" fontSize="15" fontWeight="bold">Pemeriksaan &amp; ACC Puskesmas</text>
    <text x="68" y="52" fill="#94a3b8" fontSize="12">Puskesmas Pembina memverifikasi wilayah tugas</text>
  </g>

  {/* BARIS 2: STATUS AKTIF & LANGKAH 3 */}
  {/* Panah Turun 2 -> Status Aktif */}
  <path d="M 680, 92 L 680, 130" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-sky)" />

  {/* Badge Status Akun Aktif */}
  <g transform="translate(490, 130)">
    <rect width="380" height="60" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
    <text x="190" y="27" fill="#4ade80" fontSize="13" fontWeight="bold" textAnchor="middle">✓ Akun Kader Disetujui (ACC)</text>
    <text x="190" y="46" fill="#e2e8f0" fontSize="11" textAnchor="middle">Kader Aktif &amp; Siap Bertugas di Lingkungan RT/RW</text>
  </g>

  {/* Panah Kiri: Status Aktif -> Langkah 3 */}
  <path d="M 490, 160 L 395, 160" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />

  {/* Step 3: Kunjungan Rumah */}
  <g transform="translate(30, 125)">
    <rect width="360" height="72" rx="12" fill="url(#grad-card)" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="36" cy="36" r="18" fill="#d97706" />
    <text x="36" y="42" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">3</text>
    <text x="68" y="32" fill="#ffffff" fontSize="15" fontWeight="bold">Kader Kunjungi Rumah Warga</text>
    <text x="68" y="52" fill="#94a3b8" fontSize="12">Pemeriksaan langsung dari pintu ke pintu</text>
  </g>

  {/* BARIS 3: LANGKAH 4 & EVALUASI GEJALA */}
  {/* Panah Turun 3 -> 4 */}
  <path d="M 210, 197 L 210, 235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />

  {/* Step 4: Isi Formulir */}
  <g transform="translate(30, 235)">
    <rect width="360" height="72" rx="12" fill="url(#grad-card)" stroke="#a855f7" strokeWidth="2" />
    <circle cx="36" cy="36" r="18" fill="#7e22ce" />
    <text x="36" y="42" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">4</text>
    <text x="68" y="32" fill="#ffffff" fontSize="15" fontWeight="bold">Isi Formulir Skrining di HP</text>
    <text x="68" y="52" fill="#94a3b8" fontSize="12">5 Gejala Utama &amp; 10 Faktor Risiko Pasien</text>
  </g>

  {/* Panah Kanan 4 -> Decision */}
  <path d="M 390, 271 L 485, 271" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrow-purple)" />

  {/* Node Keputusan: Evaluasi Gejala TBC */}
  <g transform="translate(490, 230)">
    <rect width="380" height="82" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
    <text x="190" y="30" fill="#c7d2fe" fontSize="14" fontWeight="bold" textAnchor="middle">Kalkulasi Otomatis Sistem:</text>
    <text x="190" y="50" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">Apakah Ada Gejala Batuk / TBC?</text>
    <text x="190" y="68" fill="#94a3b8" fontSize="11" textAnchor="middle">(Batuk $\ge$ 2 mg, Dahak/Darah, Demam, Keringat, BB Turun)</text>
  </g>

  {/* BARIS 4: CABANG HASIL (SUSPEK vs SEHAT) */}
  {/* Cabang TIDAK -> Warga Sehat */}
  <path d="M 550, 312 C 550, 345 390, 345 350, 355" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow-green)" />
  <text x="475" y="338" fill="#10b981" fontSize="11" fontWeight="bold">TIDAK (0 Gejala)</text>

  <g transform="translate(30, 355)">
    <rect width="360" height="66" rx="10" fill="url(#grad-green)" stroke="#10b981" strokeWidth="1.5" />
    <text x="180" y="28" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle">Disimpan sebagai Data Warga Sehat</text>
    <text x="180" y="48" fill="#94a3b8" fontSize="11" textAnchor="middle">Hasil skrining tersimpan untuk evaluasi berkala</text>
  </g>

  {/* Cabang YA -> Suspek TBC */}
  <path d="M 720, 312 L 720, 350" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
  <text x="730" y="335" fill="#ef4444" fontSize="11" fontWeight="bold">YA ($\ge$ 1 Gejala)</text>

  <g transform="translate(490, 355)">
    <rect width="380" height="70" rx="10" fill="url(#grad-red)" stroke="#ef4444" strokeWidth="2" />
    <text x="190" y="28" fill="#f87171" fontSize="14" fontWeight="bold" textAnchor="middle">⚠ Otomatis Ditandai "Suspek TBC"</text>
    <text x="190" y="48" fill="#fecaca" fontSize="12" textAnchor="middle">Data langsung muncul di Dashboard Puskesmas</text>
  </g>

  {/* BARIS 5: TINDAK LANJUT MEDIS PUSKESMAS */}
  <path d="M 680, 425 L 680, 455" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />

  <g transform="translate(490, 458)">
    <rect width="380" height="68" rx="10" fill="url(#grad-card)" stroke="#38bdf8" strokeWidth="1.5" />
    <text x="190" y="27" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">1. Puskesmas Jadwalkan Tes Dahak (TCM)</text>
    <text x="190" y="46" fill="#cbd5e1" fontSize="11" textAnchor="middle">Hubungi pasien via WhatsApp &amp; rujukan medis faskes</text>
  </g>

  {/* BARIS 6: BANTUAN SOSIAL KELURAHAN & MITRA */}
  <path d="M 680, 526 L 680, 555" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow-amber)" />

  <g transform="translate(490, 558)">
    <rect width="380" height="68" rx="10" fill="url(#grad-card)" stroke="#facc15" strokeWidth="1.5" />
    <text x="190" y="27" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">2. Kelurahan &amp; Rekanan Salurkan Bantuan</text>
    <text x="190" y="46" fill="#cbd5e1" fontSize="11" textAnchor="middle">Paket nutrisi tambahan (PMT) &amp; pengawasan minum obat</text>
  </g>

  {/* KONVERGENSI KE LANGKAH 5: PEMDA / DINKES */}
  {/* Panah dari Warga Sehat ke Dinkes */}
  <path d="M 210, 421 C 210, 620 230, 640 300, 652" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,5" fill="none" markerEnd="url(#arrow-slate)" />

  {/* Panah dari Bantuan Mitra ke Dinkes */}
  <path d="M 680, 626 L 680, 650" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrow-green)" />

  {/* Big Banner 5: Dinas Kesehatan Kota (Pemda) */}
  <g transform="translate(30, 655)">
    <rect width="840" height="78" rx="14" fill="url(#grad-dinkes-bar)" stroke="#4ade80" strokeWidth="2.5" />
    <circle cx="42" cy="39" r="20" fill="#059669" />
    <text x="42" y="46" fill="#ffffff" fontSize="17" fontWeight="bold" textAnchor="middle">5</text>
    <text x="76" y="32" fill="#4ade80" fontSize="16" fontWeight="bold">Dinas Kesehatan Kota (Pemda) Memantau Seluruh Data Terpusat</text>
    <text x="76" y="54" fill="#e2e8f0" fontSize="12">Pemantauan 360° se-Kota Surakarta: Grafik sebaran kelurahan, total skrining, tren suspek, serta kendali kebijakan resmi.</text>
  </g>
</svg>


---

## Diagram Hubungan & Alur Kerja Antar Pengguna

Diagram di bawah ini menjelaskan bagaimana pendaftaran kader, pembinaan wilayah puskesmas ke banyak kelurahan, koordinasi mitra, hingga pemantauan menyeluruh oleh Dinas Kesehatan Kota (Pemda) saling terhubung:

<svg viewBox="0 0 880 540" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#0f172a', borderRadius: '14px', padding: '24px', border: '1px solid rgba(255,255,255,0.15)', margin: '24px 0', boxShadow: '0 12px 28px -6px rgba(0,0,0,0.5)'}}>
  <defs>
    <marker id="panah-hijau" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
    </marker>
    <marker id="panah-biru" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="panah-kuning" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#facc15" />
    </marker>
    <marker id="panah-putih" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
    </marker>
  </defs>

  {/* Tingkat 1: Dinas Kesehatan Kota / Pemda (Atas Tengah) */}
  <g transform="translate(260, 20)">
    <rect width="360" height="74" rx="12" fill="#1e293b" stroke="#4ade80" strokeWidth="2.5" />
    <text x="180" y="32" fill="#4ade80" fontSize="16" fontWeight="bold" textAnchor="middle">Dinas Kesehatan Kota (Pemda)</text>
    <text x="180" y="54" fill="#94a3b8" fontSize="12" textAnchor="middle">Pemantauan Seluruh Data Se-Kota &amp; Kebijakan</text>
  </g>

  {/* Tingkat 2 Kanan: Puskesmas Pembina */}
  <g transform="translate(530, 160)">
    <rect width="320" height="80" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
    <text x="160" y="30" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Puskesmas Pembina</text>
    <text x="160" y="49" fill="#e2e8f0" fontSize="12" textAnchor="middle">Menyetujui (ACC) Akun &amp; Rujukan Tes Dahak</text>
    <text x="160" y="67" fill="#38bdf8" fontSize="11" fontWeight="600" textAnchor="middle">(1 Puskesmas Membina Banyak Kelurahan)</text>
  </g>

  {/* Tingkat 2 Kiri: Kelurahan & Rekanan Mitra */}
  <g transform="translate(30, 160)">
    <rect width="320" height="80" rx="12" fill="#1e293b" stroke="#facc15" strokeWidth="2" />
    <text x="160" y="30" fill="#facc15" fontSize="15" fontWeight="bold" textAnchor="middle">Kelurahan &amp; Rekanan Mitra</text>
    <text x="160" y="49" fill="#e2e8f0" fontSize="12" textAnchor="middle">Pantau Wilayah RW/RT &amp; Bantuan Sosial</text>
    <text x="160" y="67" fill="#facc15" fontSize="11" fontWeight="600" textAnchor="middle">Koordinasi Bantuan Nutrisi &amp; Rumah Sehat</text>
  </g>

  {/* Tingkat 3: Kader TBC Lapangan (Tengah Bawah) */}
  <g transform="translate(260, 320)">
    <rect width="360" height="74" rx="12" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
    <text x="180" y="32" fill="#4ade80" fontSize="15" fontWeight="bold" textAnchor="middle">Kader TBC Lapangan (Tingkat RW / RT)</text>
    <text x="180" y="54" fill="#94a3b8" fontSize="12" textAnchor="middle">Pendaftaran Mandiri &amp; Pemeriksaan Rumah ke Rumah</text>
  </g>

  {/* Tingkat 4: Warga Masyarakat & Pasien (Paling Bawah) */}
  <g transform="translate(260, 455)">
    <rect width="360" height="50" rx="10" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="180" y="31" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">Warga Masyarakat &amp; Pasien Sasaran</text>
  </g>

  {/* Garis Alur Panah */}
  {/* Warga -> Kader */}
  <path d="M 440, 455 L 440, 394" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#panah-putih)" />
  <text x="448" y="430" fill="#cbd5e1" fontSize="11">Wawancara 5 Gejala Klinis &amp; Faktor Risiko</text>

  {/* Kader -> Puskesmas (Alur 1: Pendaftaran & ACC) */}
  <path d="M 570, 320 C 640, 285 660, 265 660, 240" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#panah-biru)" />
  <text x="668" y="285" fill="#38bdf8" fontSize="11">1. Kader Daftar &amp; Puskesmas Memberi ACC</text>

  {/* Kader -> Puskesmas (Alur 2: Pengiriman Data Skrining) */}
  <path d="M 500, 320 C 525, 280 555, 260 575, 240" stroke="#4ade80" strokeWidth="2" fill="none" markerEnd="url(#panah-hijau)" />
  <text x="450" y="280" fill="#4ade80" fontSize="11">2. Laporan Warga Suspek TBC</text>

  {/* Kelurahan <-> Puskesmas (Kemitraan Wilayah) */}
  <path d="M 350, 200 L 530, 200" stroke="#facc15" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#panah-kuning)" />
  <text x="440" y="190" fill="#facc15" fontSize="11" textAnchor="middle">Kemitraan Wilayah (1 Puskesmas Membina Banyak Kelurahan)</text>

  {/* Puskesmas -> Dinas Kesehatan */}
  <path d="M 640, 160 C 640, 115 520, 105 490, 94" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#panah-biru)" />
  <text x="610" y="125" fill="#38bdf8" fontSize="11">Laporan Kasus &amp; Rujukan Tes Dahak</text>

  {/* Kelurahan -> Dinas Kesehatan */}
  <path d="M 240, 160 C 240, 115 360, 105 390, 94" stroke="#facc15" strokeWidth="2" fill="none" markerEnd="url(#panah-kuning)" />
  <text x="185" y="125" fill="#facc15" fontSize="11">Laporan Sebaran Kasus Wilayah</text>

  {/* Dinas Kesehatan Langsung Mengawasi Seluruh Sistem */}
  <path d="M 440, 94 L 440, 320" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#panah-hijau)" />
  <text x="448" y="245" fill="#4ade80" fontSize="11">Pengawasan Penuh Seluruh Data oleh Dinas Kesehatan</text>
</svg>

---

## 6 Langkah Utama Alur Pelayanan di Lapangan

Untuk memudahkan pemahaman, berikut adalah 6 langkah alur kerja harian yang berjalan di dalam aplikasi SItuba:

1. **Langkah 1 (Pendaftaran Kader Baru):**  
   Calon kader mendaftar secara mandiri melalui website pendaftaran dengan mengisi nama, nomor WhatsApp, dan memilih wilayah kelurahan tempatnya bertugas. Setelah mendaftar, akun kader akan berstatus **Pending (Menunggu Persetujuan)**.

2. **Langkah 2 (Persetujuan / ACC oleh Puskesmas Pembina):**  
   Petugas di Puskesmas Pembina membuka menu data kader, memeriksa kesesuaian wilayah tugas pendaftar, lalu menekan tombol **[Setujui / Aktifkan]** (**ACC**). Setelah disetujui, kader dapat langsung masuk (*login*) dan mulai bekerja.

3. **Langkah 3 (Kunjungan Rumah & Wawancara Warga):**  
   Kader mendatangi rumah-rumah warga (*door-to-door*) untuk menanyakan **5 Gejala Utama TBC** (batuk lama $\ge 2$ minggu, batuk berdahak/berdarah, demam berulang, keringat malam, penurunan berat badan) serta **10 Pertanyaan Faktor Risiko**.

4. **Langkah 4 (Penentuan Otomatis Status Suspek):**  
   Jika warga menjawab **"Ya"** pada minimal satu ($\ge 1$) dari 5 gejala utama, aplikasi secara otomatis menetapkan warga tersebut sebagai **Suspek TBC**. Laporan ini langsung masuk ke layar Puskesmas Pembina secara *real-time*.

5. **Langkah 5 (Tindak Lanjut Medis & Bantuan Sosial):**  
   - **Puskesmas:** Menghubungi warga melalui nomor WhatsApp untuk menjadwalkan pengambilan contoh dahak (pemeriksaan TCM) di Puskesmas.
   - **Kelurahan & Rekanan Mitra:** Memantau sebaran warga yang sakit di lingkungan RW/RT setempat untuk memberikan bantuan makanan bergizi tambahan (PMT) dan pendampingan selama masa pengobatan.

6. **Langkah 6 (Pemantauan Terpusat oleh Dinas Kesehatan Kota):**  
   Dinas Kesehatan Kota (Pemda) memantau seluruh perkembangan data se-Kota Surakarta melalui dashboard eksekutif: memantau jumlah warga yang sudah diperiksa, memetakan kelurahan mana yang banyak ditemukan kasus suspek, serta memastikan penanganan medis berjalan tuntas.

---

## Cara Menggunakan Buku Panduan Ini

- **Menu Navigasi (Sebelah Kiri):** Klik pada judul menu di sebelah kiri layar HP atau komputer Bapak/Ibu untuk membuka petunjuk halaman yang diinginkan.
- **Langkah Berurutan:** Setiap petunjuk ditulis berurutan (**Langkah 1**, **Langkah 2**, **Langkah 3**).
- **Tombol & Teks Tebal:** Teks yang dicetak tebal seperti **[Setujui]** atau **[Simpan]** adalah nama tombol yang perlu Bapak/Ibu tekan di layar.
- **Gambar Petunjuk:** Setiap langkah dilengkapi dengan foto layar (*screenshot*) asli aplikasi SItuba agar Bapak/Ibu tidak bingung.
- **Memperbesar Gambar:** Jika ada gambar yang tampak kecil, Bapak/Ibu dapat **mengklik/menekan gambar tersebut** untuk melihat tampilan ukuran penuh yang lebih besar dan jelas.
