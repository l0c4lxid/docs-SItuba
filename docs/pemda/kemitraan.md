---
sidebar_position: 4
title: Tata Kelola Kemitraan Wilayah & Rekanan Mitra
---

# Tata Kelola Kemitraan Wilayah & Rekanan Mitra

Dalam arsitektur Sistem Informasi SItuba, penataan wilayah kerja kesehatan mengikuti prinsip **pembinaan berjenjang**:
- **1 Puskesmas Pembina dapat menaungi Banyak Kelurahan** (relasi *One-to-Many*).
- Setiap Kelurahan memiliki jajaran Kader TBC yang bertugas di tingkat RW dan RT.
- Puskesmas dan Kelurahan dapat berkoordinasi dengan **Rekanan Mitra** (organisasi kemasyarakatan, faskes swasta, atau komunitas peduli TBC).
- Dinas Kesehatan Kota (Pemda) memegang kendali penuh dalam memantau, memetakan, dan mengubah relasi penugasan wilayah ini.

---

## 1. Membuka Menu Kemitraan Wilayah

- **Langkah 1:** Pada bilah navigasi sebelah kiri, klik menu **Kemitraan Wilayah / Kemitraan**.
- **Langkah 2:** Sistem akan menampilkan daftar seluruh Kelurahan binaan yang terdaftar di Kota Surakarta beserta Puskesmas Pembina yang menaunginya dan status aktif kemitraan.

[![Tabel Kemitraan Wilayah dan Rekanan](/img/pemda/mitra.png)](/img/pemda/mitra.png)

:::tip
Klik gambar di atas untuk memperbesar tampilan tangkapan layar.
:::

---

## 2. Struktur Data Kemitraan Wilayah

Tabel kemitraan memuat indikator-indikator kunci:

| Kolom Data | Keterangan Sistem Informasi |
| :--- | :--- |
| **Nama Kelurahan** | Wilayah administrasi kelurahan tempat kader bertugas. |
| **Alamat Kelurahan** | Lokasi kantor kelurahan untuk koordinasi bantuan sosial dan logistik. |
| **Total Kelurahan & RW/RT** | Cakupan wilayah administratif yang dibina di bawah satu puskesmas. |
| **Puskesmas Pembina** | Fasilitas Kesehatan Tingkat Pertama (FKTP) yang bertanggung jawab atas validasi medis dan rujukan TCM. |
| **Status Kemitraan** | Status relasi kerja sama (*Aktif* atau *Menunggu Persetujuan*). |
| **Aksi / Kelola** | Tombol untuk melihat detail wilayah atau mengubah penugasan kemitraan. |

---

## 3. Cara Memantau Detail Wilayah & Kasus Per Kelurahan

Untuk meninjau agregat data pemeriksaan warga di satu kelurahan tertentu:

- **Langkah 1:** Klik nama kelurahan atau tombol **[Detail]** pada baris kelurahan yang dipilih.
- **Langkah 2:** Layar rincian kelurahan akan menampilkan:
  - Total Skrining yang berhasil dilakukan di kelurahan tersebut.
  - Jumlah cakupan wilayah Rukun Warga (RW) dan Rukun Tetangga (RT).
  - Daftar pasien hasil skrining lengkap beserta nama kader penanggung jawab, kontak, dan alamat RT/RW.

[![Detail Skrining dan Cakupan Wilayah Kelurahan](/img/pemda/detail_mitra.png)](/img/pemda/detail_mitra.png)

:::tip
Klik gambar di atas untuk melihat ukuran penuh detail kelurahan dan data skrining warga.
:::

---

## 4. Peran Rekanan Mitra dalam Ekosistem SItuba

Selain struktur formal pemerintahan (Puskesmas dan Kelurahan), SItuba mendukung integrasi **Rekanan Mitra**:
1. **Dukungan Sosial & Nutrisi:** Kelurahan dan mitra dapat memanfaatkan data skrining suspek untuk menyalurkan bantuan makanan tambahan bagi pasien TBC kurang mampu.
2. **Penguatan Penjangkauan:** Kader mitra membantu kader puskesmas dalam melakukan pelacakan kontak erat (*contact tracing*) pada pasien yang terkonfirmasi TBC.
3. **Pemantauan Lintas Sektor:** Pemda memastikan setiap kelurahan tidak ada yang tertinggal (*no one left behind*) dan selalu berada dalam binaan Puskesmas yang tepat.
