# Dokumentasi Sistem Informasi SItuba 📖

Portal dokumentasi resmi untuk **Sistem Informasi Penanggulangan TBC Kota Surakarta (SItuba)**. Situs ini dibangun menggunakan [Docusaurus 3](https://docusaurus.io/), generator situs statis modern berbasis React.

---

## 🚀 Fitur Utama

- **Dokumentasi Terstruktur**: Panduan penggunaan aplikasi SItuba dan spesifikasi sistem.
- **Dukungan Diagram Mermaid**: Visualisasi alur kerja dan arsitektur sistem secara interaktif.
- **Auto-Deploy GitHub Actions**: Build & deployment otomatis ke GitHub Pages saat push ke branch `main`.

---

## 🛠️ Persyaratan Sistem

- **Node.js**: `v20.0.0` atau yang lebih baru
- **Package Manager**: `npm` (atau `pnpm` / `yarn`)

---

## 💻 Pengembangan Lokal (Local Development)

1. **Install Dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan Server Pengembang**:
   ```bash
   npm run start
   ```
   Perintah ini akan menjalankan server lokal di `http://localhost:3000` dengan fitur *live reload*.

---

## 🏗️ Build Produk

Untuk menghasilkan berkas statis siap rilis ke folder `build/`:

```bash
npm run build
```

Anda juga dapat menguji hasil build secara lokal dengan:

```bash
npm run serve
```

---

## 🚀 Pengaturan Auto-Deploy (GitHub Pages)

Proyek ini telah dikonfigurasi dengan **GitHub Actions** untuk deployment otomatis via `.github/workflows/deploy.yml`.

### 1. Konfigurasi Repository GitHub
Agar auto-deploy berjalan dengan lancar, pastikan sumber deployment pada repository GitHub sudah disetel ke **GitHub Actions**:

1. Buka repository GitHub: [`docs-SItuba`](https://github.com/l0c4lxid/docs-SItuba).
2. Masuk ke **Settings** > **Pages**.
3. Pada bagian **Build and deployment** -> **Source**, pilih **GitHub Actions**.

### 2. Alur Otomatisasi
- Setiap kali perubahan dikirim (*push*) ke branch `main`, GitHub Actions akan otomatis menjalankan proses build `npm run build` dan mempublikasikannya ke GitHub Pages.
- Workflow juga dapat dipicu secara manual dari tab **Actions** di GitHub (*workflow_dispatch*).

---

## 📁 Struktur Direktori

```text
docs-site/
├── .github/workflows/   # Workflow GitHub Actions (Auto-deploy)
├── docs/                # Berkas dokumentasi Markdown / MDX
├── src/                 # Komponen React & CSS kustom
├── static/              # Asset statis (gambar, logo, favicon)
├── docusaurus.config.js # Konfigurasi utama Docusaurus
└── sidebars.js          # Navigasi & struktur sidebar dokumentasi
```

---

## 📄 Lisensi & Hak Cipta

Copyright © Portal Dokumentasi Sistem Informasi SItuba ([situba.my.id](https://situba.my.id)). UBSI Solo.

