---
sidebar_position: 2
title: Tata Kelola Akun & Verifikasi Pengguna
---

# Tata Kelola Akun & Verifikasi Pengguna

Sistem Informasi SItuba menerapkan kontrol akses berbasis peran (*Role-Based Access Control*) yang ketat untuk menjamin kerahasiaan data medis pasien dan keandalan data pelaporan.

---

## 1. Alur Pendaftaran & Verifikasi Berjenjang

Untuk menjaga integritas operasional di lapangan:
1. **Pendaftaran Mandiri:** Calon Kader TBC melakukan pendaftaran secara mandiri melalui form registrasi dengan memilih peran, puskesmas induk, dan wilayah kelurahan tugasnya.
2. **Verifikasi / ACC oleh Puskesmas:** Petugas Puskesmas setempat memverifikasi identitas kader dan menyetujui (ACC) akun agar kader dapat mulai menginput skrining.
3. **Supervisi & Kendali Penuh Pemda:** Dinas Kesehatan Kota (Pemda) memiliki hak otorisasi menyeluruh untuk memantau status seluruh pengguna (Puskesmas, Kelurahan, dan Kader) se-Kota Surakarta, mengaktifkan akun, atau menonaktifkan akses jika diperlukan.

---

## 2. Membuka Menu Data Pengguna / Kader

- **Langkah 1:** Klik menu **Verifikasi Pengguna / Data Kader** pada bilah menu sebelah kiri.
- **Langkah 2:** Sistem menampilkan tabel master pengguna yang memuat nama petugas, nomor kontak (WhatsApp), status otorisasi, dan tanggal pendaftaran.

[![Tabel Daftar Pengguna dan Kader](/img/pemda/data_kader.png)](/img/pemda/data_kader.png)

:::tip
Klik gambar di atas untuk melihat tampilan ukuran penuh.
:::

### Status Akun dalam Sistem:
- <span className="badge-status badge-status-active">Aktif</span> **Aktif:** Petugas sudah disetujui (ACC) dan memiliki akses penuh untuk bertugas.
- <span className="badge-status badge-status-pending">Pending</span> **Pending:** Akun baru terdaftar yang sedang **menunggu persetujuan verifikasi**.
- <span className="badge-status badge-status-inactive">Nonaktif</span> **Nonaktif:** Akun yang dinonaktifkan (misalnya kader purna tugas atau pindah wilayah) sehingga tidak dapat lagi mengakses data.

---

## 3. Cara Memeriksa Detail & Mengelola Status Pengguna

- **Langkah 1:** Pada baris nama petugas yang ingin diperiksa, klik tombol **[Detail]**.
- **Langkah 2:** Layar rincian profil petugas akan terbuka, menampilkan nomor telepon, faskes penugasan, riwayat jumlah skrining yang telah dicatat, dan tanggal aktivasi akun.
- **Langkah 3 (Kelola Status):** 
  - Klik **[Setujui / Aktifkan]** untuk memberikan akses resmi kepada pengguna baru.
  - Klik **[Nonaktifkan Kader]** untuk mencabut akses akun tanpa menghapus riwayat data skrining yang pernah diinput sebelumnya (menjaga *audit trail* data).

[![Layanan Detail Identitas dan Verifikasi Petugas](/img/pemda/detail_kader.png)](/img/pemda/detail_kader.png)

:::tip
Klik gambar di atas untuk memperbesar.
:::
