// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Perkenalan & Panduan Masyarakat Umum (User Public)',
      collapsed: false,
      items: [
        'public/overview',
        'public/portal-berita-edukasi',
        'public/autentikasi-layanan',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Eksekutif Dinas Kesehatan Kota (Pemda)',
      collapsed: false,
      items: [
        'pemda/overview',
        'pemda/verifikasi-user',
        'pemda/monitoring-skrining',
        'pemda/kemitraan',
        'pemda/cms-berita',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Puskesmas Pembina (Faskes Supervisor)',
      collapsed: false,
      items: [
        'puskesmas/overview',
        'puskesmas/evaluasi-kader',
        'puskesmas/monitoring-skrining',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Kelurahan Wilayah (Administrative Boundary)',
      collapsed: false,
      items: [
        'kelurahan/overview',
        'kelurahan/monitoring-kasus-kader',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Kader TBC Lapangan (Field Officer)',
      collapsed: false,
      items: [
        'kader/overview',
        'kader/form-skrining',
        'kader/riwayat-skrining',
      ],
    },
  ],
};

export default sidebars;
