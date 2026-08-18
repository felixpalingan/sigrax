# Sigrax CMMS - Modern Landing & Product Showcase Website

<div align="center">
  <img src="assets/brand/logo.png" alt="Sigrax CMMS Logo" width="220" />
  <p><strong>Solusi Custom CMMS Modern Berstandar Global, Karya Anak Bangsa</strong></p>
  <p>Website resmi dan katalog produk interaktif untuk software Computerized Maintenance Management System (CMMS) industri manufaktur Indonesia.</p>

  [![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](#-cara-menjalankan-dengan-docker)
  [![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?logo=nginx&logoColor=white)](#)
  [![Design](https://img.shields.io/badge/Theme-Obsidian%20%26%20Gold-F59E0B)](#)
  [![License](https://img.shields.io/badge/License-Proprietary-blue)](#)
</div>

---

## 🌟 Tentang Sigrax CMMS

**Sigrax** adalah software *Computerized Maintenance Management System* (CMMS) terintegrasi yang dirancang khusus untuk memenuhi kebutuhan pabrik dan lini produksi industri Indonesia.

### Keunggulan Utama:
- 🛠️ **100% Customizable**: Struktur hierarki mesin, formulir checklist inspeksi, alur approval tiket, dan pelaporan dapat dikonfigurasi mengikuti SOP unik pabrik Anda.
- 💰 **Zero Annual License Fee**: Skema investasi transparan tanpa beban biaya langganan tahunan berulang.
- 🇮🇩 **Tim Support Lokal 24/7**: Didukung tim engineer dan konsultan langsung di Indonesia untuk pendampingan on-site dan implementasi cepat.
- 🌐 **Standar CMMS Internasional**: Mengadopsi prinsip ISO 55000, Total Productive Maintenance (TPM), dan Reliability-Centered Maintenance (RCM) dengan antarmuka berbahasa Indonesia ramah pengguna.

---

## ✨ Fitur Website Baru

1. **3D Interactive Software Architecture (Disassembly on Scroll)**:
   - Visualisasi anatomi 4 lapisan modular software (Executive UI, Work Order Flow, Preventive Engine, dan Master Database Core) yang terurai secara dinamis saat pengunjung scroll halaman.
2. **Katalog 11 Modul Lengkap**:
   - Menampilkan seluruh modul operasional mulai dari *Executive Dashboard*, *Master Data*, *Asset Management*, *Location Hierarchy*, *Work Request*, *Work Order*, *Material Request*, *Inventory & Spare Parts*, *Preventive Maintenance*, *Team & Technician*, hingga *Reporting & Analytics*.
3. **Filter Kategori Instan & Lightbox Modal**:
   - Filter modul berdasarkan kebutuhan (Aset & Lokasi, Maintenance & WO, Suku Cadang & Gudang, Dashboard & Laporan) dan zoom screenshot resolusi tinggi.
4. **Roadmap 6 Tahap Implementasi Layanan**:
   - Panduan alur adopsi software: Audit SOP $\rightarrow$ Kustomisasi $\rightarrow$ Migrasi Data Excel $\rightarrow$ Pelatihan Tim $\rightarrow$ Go-Live $\rightarrow$ 24/7 Support.
5. **Modern Glassmorphism & Industrial Obsidian Design System**:
   - Estetika premium *Dark Obsidian (`#0a0e17`)* berpadu aksen *Electric Sigrax Gold*, responsive mobile-first, dan interaktivitas tanpa dependensi eksternal (Pure Vanilla JS).

---

## 📁 Struktur Direktori

```
sigrax/
├── index.html                  # Halaman Utama (Hero, 3D Architecture, Bento Grid, Showcase)
├── features.html               # Katalog 11 Modul Lengkap & Filter Kategori
├── services.html               # Roadmap 6 Tahap Implementasi & FAQ
├── Dockerfile                  # Production Nginx Container
├── docker-compose.yml          # Docker Compose Launcher
├── nginx.conf                  # Konfigurasi Nginx (Gzip + Caching + Clean URL)
├── .dockerignore
├── .gitignore
│
├── css/
│   └── style.css               # Design System, Typography, 3D Stage & Utilities
│
├── js/
│   └── main.js                 # Vanilla Interactive Logic (3D scroll engine, tabs, lightbox)
│
└── assets/
    ├── brand/                  # Logo Sigrax & foto representasi tim
    │   ├── logo.png
    │   └── team-about.png
    ├── clients/                # 12 Logo partner & klien industri
    │   ├── 1.png s/d 12.png
    └── screenshots/            # 11 Screenshot resmi modul aplikasi
        ├── dashboard.png
        ├── sites (tempat).png
        ├── assets.png
        ├── sites 2.png
        ├── work req.png
        ├── completed task.png
        ├── image.41.jpg
        ├── PART.png
        ├── image_43.png
        ├── employee.png
        └── image_47.png
```

---

## 🚀 Cara Menjalankan

### Opsi 1: Menggunakan Docker Compose (Direkomendasikan)

Pastikan Docker Desktop sudah terpasang dan berjalan, lalu jalankan:

```bash
# Build dan jalankan container di background
docker compose up -d --build
```
Akses website di browser: **`http://localhost:8080`**

Untuk menghentikan container:
```bash
docker compose down
```

---

### Opsi 2: Menggunakan Docker CLI Biasa

```bash
# 1. Build image Docker
docker build -t sigrax-web .

# 2. Jalankan container
docker run -d -p 8080:80 --name sigrax-app sigrax-web
```
Akses website di: **`http://localhost:8080`**

---

### Opsi 3: Menjalankan Local Web Server Biasa

Anda dapat menggunakan Python built-in HTTP server atau ekstensi VSCode Live Server:

```bash
# Jalankan web server lokal di port 3000
python -m http.server 3000
```
Akses website di: **`http://localhost:3000`**

---

## 🛠️ Teknologi yang Digunakan

- **HTML5 Semantic**: Struktur semantik, SEO-friendly, dan aksesibilitas ramah pembaca layar.
- **Vanilla CSS3 Modern**: CSS Custom Properties (Design Tokens), CSS Grid, Flexbox, 3D Perspective Transforms (`preserve-3d`).
- **Vanilla JavaScript (ES6+)**: Logika interaktif ringan dan efisien tanpa framework berat (Zero external runtime dependencies).
- **Nginx Alpine**: Web server produksi ringan dengan kompresi Gzip dan optimasi caching aset statis.
- **Font & Icon**: Google Fonts (*Outfit* & *Plus Jakarta Sans*) dan Font Awesome 6.

---

## 📞 Kontak & Konsultasi

- **WhatsApp**: [+62 812-xxxx-xxxx](https://wa.link/18xqmd)
- **Email**: info@sigrax.com
- **Instagram**: [@sigraxcmms](https://www.instagram.com/sigraxcmms)
- **Portal Sistem**: [https://cmms.sigrax.com](https://cmms.sigrax.com/#)

---

<div align="center">
  <p>© 2026 Sigrax. All Rights Reserved. Crafted with pride in Indonesia.</p>
</div>
