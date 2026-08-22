---
sidebar_position: 3
title: Pemantauan Skrining & Validasi Pasien Suspek TBC
---

# Pemantauan Skrining & Validasi Pasien Suspek TBC

Halaman **Data Skrining** pada akun Puskesmas adalah pusat tindak lanjut medis (*clinical triage*). Petugas Puskesmas dapat memantau seluruh hasil pemeriksaan warga yang dikirimkan oleh kader binaan dari berbagai kelurahan secara langsung.

---

## 1. Membuka Daftar Skrining Pasien Wilayah

- **Langkah 1:** Klik menu **Skrining / Data Skrining** pada bilah navigasi sebelah kiri.
- **Langkah 2:** Sistem menampilkan tabel seluruh pemeriksaan warga di wilayah kerja Puskesmas.

[![Tabel Monitoring Skrining Pasien Wilayah Puskesmas](/img/puskesmas/data_skrining.png)](/img/puskesmas/data_skrining.png)

:::tip
Klik gambar di atas untuk memperbesar tampilan tabel skrining.
:::

---

## 2. Struktur Informasi Tabel Skrining

| Data | Penjelasan Medis & Sistem |
| :--- | :--- |
| **Pasien** | Nama lengkap dan Nomor Induk Kependudukan (NIK) 16 digit warga yang diperiksa. |
| **Kader PJ** | Nama kader penanggung jawab lapangan beserta kode identitas kader. |
| **Status Skrining** | Label merah **Suspek TBC** (jika ditemukan $\ge 1$ gejala utama) atau label hijau **Tidak Suspek**. Menampilkan juga jumlah indikasi positif (misal: *3 indikasi positif*). |
| **Tanggal Skrining** | Waktu pencatatan pemeriksaan oleh kader. |
| **Kontak & Chat WA** | Nomor telepon pasien dengan tombol hijau **[Chat]** untuk membuka obrolan WhatsApp otomatis. |

---

## 3. Alur Klinis Tindak Lanjut Pasien Suspek (Rujukan Tes Dahak TCM)

Setelah kader menemukan warga terduga suspek:

```
[Kader Menemukan Suspek (≥1 Gejala)]
                │
                ▼
[Data Masuk ke Dashboard Puskesmas]
                │
                ▼
[Puskesmas Hubungi Pasien via WhatsApp / Kader Pendamping]
                │
                ▼
[Pengambilan Contoh Dahak / Pemeriksaan TCM di Puskesmas]
                │
        ┌───────┴───────┐
        ▼               ▼
[Hasil Positif]   [Hasil Negatif]
  - Mulai OAT       - Evaluasi Ulang
  - Investigasi     - Edukasi Pencegahan
    Kontak Erat
```

- **Langkah 1:** Gunakan kotak **Filter Suspek** atau cari berdasarkan nama/kelurahan.
- **Langkah 2:** Klik tombol **[Chat]** untuk menghubungi pasien/keluarganya guna menjadwalkan kunjungan ke Puskesmas atau koordinasikan dengan kader pendamping untuk pengantaran pot dahak.
- **Langkah 3:** Klik tombol hijau **[Export Excel]** di pojok kanan atas untuk mengunduh rekap data pemeriksaan pasien guna integrasi laporan program TB Nasional.
