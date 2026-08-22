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

```
[1. Kader Daftar Mandiri] ────► [2. Diperiksa & Disetujui (ACC) oleh Puskesmas]
                                                    │
                                                    ▼
[3. Kader Kunjungi Rumah Warga] ◄─── [Kader Aktif & Siap Bertugas di RT/RW]
               │
               ▼
[4. Isi Formulir 5 Gejala & Faktor Risiko]
               │
               ▼
   (Apakah Ada Gejala TBC?)
      ├── Ya (≥ 1 Gejala) ──► Otomatis Ditandai "Suspek TBC" ──► Masuk ke Dashboard Puskesmas
      │                                                                  │
      │                                                                  ▼
      │                                                     [Jadwal Tes Dahak TCM di Puskesmas]
      │                                                                  │
      └── Tidak ────────────► Disimpan sebagai Data Sehat                ▼
                                                            [Kelurahan & Mitra Salurkan Bantuan]
                                                                         │
                                                                         ▼
                                                      [5. Dinas Kesehatan (Pemda) Pantau Semua Data]
```

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
