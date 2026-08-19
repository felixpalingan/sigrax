# Sigrax CMMS — Enterprise Maintenance Management System

<div align="center">
  <img src="assets/brand/logo.png" alt="Sigrax CMMS Logo" width="240" />
  
  <p><strong>Software Maintenance Pabrik Terpadu Buatan Indonesia</strong></p>
  <p>Website resmi dan katalog interaktif solusi Computerized Maintenance Management System (CMMS) berstandar global tanpa biaya lisensi tahunan.</p>

  <p>
    <a href="#-fitur-utama"><img src="https://img.shields.io/badge/Modules-11%20Integrated-2563eb?style=flat-square" alt="11 Modules" /></a>
    <a href="#-standar-kepatuhan"><img src="https://img.shields.io/badge/Compliance-ISO%2055000%20%7C%20TPM-059669?style=flat-square" alt="ISO 55000" /></a>
    <a href="#-deployment"><img src="https://img.shields.io/badge/Deployment-Docker%20%7C%20Nginx-0f172a?style=flat-square&logo=docker&logoColor=white" alt="Docker Ready" /></a>
    <a href="https://sigrax.com"><img src="https://img.shields.io/badge/Status-Production%20Ready-emerald?style=flat-square" alt="Status" /></a>
  </p>
</div>

---

## 📌 Ringkasan Eksekutif

**Sigrax CMMS** adalah platform manajemen pemeliharaan fasilitas dan mesin industri manufaktur modern yang dirancang untuk mengotomatisasi jadwal preventive maintenance, mempercepat penanganan breakdown work order, serta mengontrol inventaris gudang suku cadang secara terpadu.

### Nilai Strategis Utama:
- **Zero Annual License Fee (Model Tanpa Biaya Lisensi Tahunan)**: Skema investasi transparan tanpa biaya langganan per-user/tahun yang membebani cash flow operasional.
- **Local Engineering Support 24/7**: Pendampingan langsung oleh tim konsultan dan engineer lokal di Indonesia untuk audit SOP, migrasi data Excel, pelatihan teknisi on-site, hingga sistem siap go-live.
- **Standar Industri Internasional**: Dirancang selaras dengan prinsip **ISO 55000**, **Total Productive Maintenance (TPM)**, dan **Reliability-Centered Maintenance (RCM)**.
- **Arsitektur Modular Terintegrasi**: 11 modul yang saling terhubung dari lantai kerja teknisi (*shop floor*) hingga laporan analitik tingkat direksi.

---

## 🏗️ 11 Modul Terintegrasi

| No | Modul | Kategori | Deskripsi Singkat |
|---|---|---|---|
| 01 | **Executive Dashboard** | Dashboard & Laporan | Visualisasi real-time metrik uptime, MTTR, MTBF, status tiket aktif, dan realisasi anggaran. |
| 02 | **Master Data Hub** | Aset & Lokasi | Database terpusat spesifikasi unit, lokasi pabrik, data teknisi, vendor, dan satuan standar. |
| 03 | **Manajemen Aset & Mesin** | Aset & Lokasi | Rekam jejak digital per mesin, riwayat breakdown menyeluruh, dan manual skematik digital. |
| 04 | **Preventive Maintenance** | Maintenance & WO | Otomatisasi jadwal inspeksi rutin berkala berbasis kalender maupun jam jalan mesin (*run-hours*). |
| 05 | **Tiket & Work Order** | Maintenance & WO | Formulir Work Request cepat, alur delegasi teknisi instan, dan pelacakan status perbaikan. |
| 06 | **Task Checklist & Log** | Maintenance & WO | Validasi kepatuhan SOP perbaikan, checklist langkah kerja, dan log jam kerja teknisi (*man-hours*). |
| 07 | **Gudang Suku Cadang** | Suku Cadang & Gudang | Manajemen stok part, batas *Safety Stock Alert*, dan auto-deduction saat tiket selesai. |
| 08 | **Struktur Multi-Site** | Aset & Lokasi | Hierarki pabrik bertingkat (*Plant > Department > Line > Machine*) dengan kontrol hak akses lokasi. |
| 09 | **Karyawan & Teknisi** | Aset & Lokasi | Database tim mekanik/listrik, manajemen shift kerja, dan evaluasi beban tugas harian. |
| 10 | **Lifecycle & Audit ISO** | Dashboard & Laporan | Ekspor format laporan resmi untuk kebutuhan audit pemeliharaan berstandar ISO 55000 & TPM. |
| 11 | **Biaya & Anggaran** | Suku Cadang & Gudang | Kontrol realisasi pengeluaran biaya perbaikan aktual (part + jasa) terhadap plafon budget. |

---

## 🗺️ Roadmap Implementasi

Proses pendampingan implementasi Sigrax di pabrik dilaksanakan melalui 6 tahapan terstruktur:

```
[Tahap 01: Audit SOP] ──► [Tahap 02: Kustomisasi] ──► [Tahap 03: Migrasi Excel]
                                                              │
[Tahap 06: Support 24/7] ◄── [Tahap 05: Go-Live On-Site] ◄────┴──► [Tahap 04: Pelatihan Tim]
```

1. **Audit SOP & Asesmen Mesin**: Peninjauan alur pemeliharaan eksisting dan titik kendala pabrik.
2. **Kustomisasi Alur & Form**: Penyesuaian formulir inspeksi dan alur approval tiket internal.
3. **Migrasi Data Master**: Validasi dan import data aset serta suku cadang dari spreadsheet Excel lama.
4. **Pelatihan & Sertifikasi**: Sesi pelatihan intensif untuk operator, teknisi, dan supervisor.
5. **Pendampingan Go-Live**: Dukungan langsung tim engineer di lantai produksi saat hari peluncuran.
6. **Dukungan Berkelanjutan**: Helpdesk lokal 24/7 dan evaluasi berkala pencapaian KPI maintenance.

---

## 📂 Struktur Direktori Proyek

```
sigrax/
├── index.html                  # Halaman Utama (Hero, Bento Capabilities, Interactive Tabs, Trust Grid)
├── features.html               # Katalog 11 Modul Terintegrasi & Filter Interaktif
├── services.html               # Roadmap 6 Tahapan Implementasi & FAQ Accordion
│
├── css/
│   └── style.css               # Enterprise Design System (Tokens, Typography, Glassmorphism, Responsive)
│
├── js/
│   └── main.js                 # Logika Interaktif (Sticky Nav, Tabs, Category Filter, Modal Lightbox)
│
├── assets/
│   ├── brand/                  # Identitas Brand (Logo Sigrax & Team Asset)
│   ├── clients/                # 12 Logo Klien & Mitra Industri Manufaktur
│   └── screenshots/            # Tangkapan Layar Resmi 11 Modul Aplikasi
│
├── Dockerfile                  # Production-Ready Nginx Container Configuration
├── docker-compose.yml          # Multi-container Deployment Orchestration
├── nginx.conf                  # Nginx Web Server Rules (Gzip, Caching Headers, Security)
├── .dockerignore
└── .gitignore
```

---

## 🚀 Panduan Menjalankan

### 1. Menggunakan Docker Compose (Direkomendasikan untuk Produksi)

```bash
# Build dan jalankan service di background
docker compose up -d --build
```
Akses aplikasi melalui browser: **`http://localhost:8080`**

Untuk menghentikan service:
```bash
docker compose down
```

---

### 2. Menggunakan Docker Standalone

```bash
# 1. Build image Docker
docker build -t sigrax-enterprise-web .

# 2. Jalankan container
docker run -d -p 8080:80 --name sigrax-app sigrax-enterprise-web
```

---

### 3. Menjalankan di Lingkungan Lokal (Development)

Proyek ini dibangun menggunakan standar modern web tanpa dependency build-step yang berat:

```bash
# Menggunakan Python built-in server
python -m http.server 3000
```
Akses di browser: **`http://localhost:3000`**

---

## 💻 Standar Teknologi

- **Semantic HTML5**: Struktur semantik, optimasi SEO meta-tag, Open Graph, dan standar aksesibilitas WCAG.
- **Enterprise Vanilla CSS3**: Custom properties (Design Tokens), Gapless Bento Grid, Micro-Glassmorphism, dan fluid typography.
- **Vanilla ES6+ JavaScript**: Performa tinggi tanpa overhead framework eksternal (*Zero runtime dependencies*).
- **Nginx Alpine**: Web server ringan berkinerja tinggi dengan kompresi Gzip dan optimasi cache aset statis.

---

<div align="center">
  <p>© 2026 Sigrax CMMS Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
</div>
