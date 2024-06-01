# Uninus Himatif

## Didalam Repo ini menggunakan tech stack sebagai berikut:

- React
- Vite
- TypeScript
- TailwindCSS

# Cara Menggunakan GIT dengan Baik dan Benar

### Jika Kamu baru di Project ini maka kamu bisa ke Section Installasi

# Cara Berkontribusi di Project Ini

# Di Mohon jangan PUSH Langsung ke Branch "develop"

## Aturan Branching ( Percabangan )

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git checkout -b "chore/apa-yang-di-improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git checkout -b "fix/apa-yang-di-fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git checkout -b "feat/fitur-apa-yang-di-buat`

## Aturan Commit

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git commit -m "chore: apa yang di improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git commit -m "fix: apa yang di fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git commit -m "feat: fitur apa yang di buat`

## Cara Mengatasi Konflik

- 1 Stash dulu kerjaan kamu supaya gak ilang

> `git stash`

- 2 Setelah itu kamu perlu pull perubahan dari branch `develop`

> `git pull origin develop`

- 3 Setelah kamu berhasil melakukan pembaruan dari branch `develop` selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter-_stash_

> `git stash pop`

- 4 Lanjutkan Pekerjaan dengan Semestinya

- 5 Tapi jika ketika melakukan langkah-langkah di atas masih terjadi error konflik atau karena kecerobohan kamu, maka ikuti langkah yang bawah

## Cara Mengatasi Konflik Versi 2

- 1 Pindah dulu ke Branch `develop`

> `git checkout develop`

- 2 Kemudian pull perubahan terbaru dari branch `develop`

> `git pull`

- 3 Kemudian Pindah lagi ke branch yang sedang kamu kerjakan

> `git checkout <branch mu>`

- 4 Selanjutnya kita perlu merge perubahan terbaru dari `develop`

> `git merge origin develop`

## Rekomendasi Kode Editor

Visual Studio Code

### Rekomendasi Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier
- Error Lens
- ESLint

## Menyiapkan Projek

- Clone Projek Dengan SSH ( Direkomendasikan menggunakan SSH )

  > `git@github.com:uninus-opensource/uninus-himatif.git`

- Clone Projek Dengan HTTPS

  > `https://github.com/uninus-opensource/uninus-himatif.git`

## Memasang _Dependency_

- Pasang _Dependency_

  > `bun install`

## Menjalankan Aplikasi di Lokal

- Untuk menjalankan Projek dengan mode **Development** ketik perintah berikut

  > `bun dev`
