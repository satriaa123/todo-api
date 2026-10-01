# Manual Book Teknis — Setup Git Project Todo API

Panduan teknis untuk melakukan setup Git pada project Todo API menggunakan Visual Studio Code. Panduan ini membahas proses pembuatan repository Git lokal, konfigurasi identitas Git, pembuatan file `.gitignore`, pengecekan status project, penambahan file ke staging area, pembuatan commit pertama, serta pemeriksaan hasil commit.

Git digunakan untuk membantu mengelola versi source code dan mencatat perubahan yang terjadi pada project selama proses pengembangan.

## Daftar Isi

- [Deskripsi](#deskripsi)
- [Tujuan](#tujuan)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Persyaratan](#persyaratan)
- [Minimum Requirements](#minimum-requirements)
- [Struktur Project](#struktur-project)
- [Membuka Project di Visual Studio Code](#membuka-project-di-visual-studio-code)
- [Mengecek Instalasi Git](#mengecek-instalasi-git)
- [Konfigurasi Identitas Git](#konfigurasi-identitas-git)
- [Membuat Repository Git dengan git init](#membuat-repository-git-dengan-git-init)
- [Membuat File .gitignore](#membuat-file-gitignore)
- [Memeriksa Status Project](#memeriksa-status-project)
- [Menambahkan File ke Staging Area](#menambahkan-file-ke-staging-area)
- [Memeriksa Staging Area](#memeriksa-staging-area)
- [Membuat Commit Pertama](#membuat-commit-pertama)
- [Memeriksa Riwayat Commit](#memeriksa-riwayat-commit)
- [Memeriksa Repository Git](#memeriksa-repository-git)
- [Perintah Git yang Digunakan](#perintah-git-yang-digunakan)
- [Alur Setup Git](#alur-setup-git)
- [Troubleshooting](#troubleshooting)
- [Kesimpulan](#kesimpulan)

## Deskripsi

Project Todo API merupakan aplikasi backend yang dikembangkan menggunakan Node.js dan Express.js.

Dalam proses pengembangan project, Git digunakan sebagai version control system untuk mencatat perubahan source code.

Setup Git dilakukan langsung pada project menggunakan terminal yang tersedia di Visual Studio Code.

Tahapan utama yang dilakukan adalah:

- Mengecek instalasi Git
- Mengatur identitas pengguna Git
- Membuat repository Git lokal
- Membuat file `.gitignore`
- Memeriksa status repository
- Menambahkan file ke staging area
- Membuat commit pertama
- Memeriksa riwayat commit

Panduan ini hanya membahas setup repository Git lokal dan pembuatan commit pertama.

## Tujuan

Setup Git pada project bertujuan untuk:

- Membuat repository Git pada project Todo API.
- Mengelola perubahan source code menggunakan Git.
- Menghindari file tertentu agar tidak ikut masuk ke repository.
- Menyimpan kondisi awal project dalam bentuk commit.
- Menyediakan riwayat perubahan project.
- Membantu proses pengembangan project agar lebih terorganisir.

## Teknologi yang Digunakan

Teknologi dan tools yang digunakan dalam proses setup:

- **Version Control:** Git
- **Code Editor:** Visual Studio Code
- **Runtime:** Node.js
- **Project:** Todo API
- **Repository Hosting:** GitHub (digunakan pada tahap lanjutan)

## Persyaratan

Sebelum melakukan setup Git, pastikan perangkat sudah memiliki:

- Visual Studio Code
- Git
- Node.js
- Project Todo API

Git harus sudah dapat dijalankan melalui terminal.

Untuk memastikan Git tersedia, jalankan:

```bash
git --version