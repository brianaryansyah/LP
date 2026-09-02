# Logo Semangkok - Panduan Penggantian

**Status saat ini:** Placeholder SVG `logo-semangkok.svg` digunakan. Bukan logo asli dari Google Maps (JS-protected, tidak bisa di-scrape otomatis tanpa API key).

**Cara ganti dengan logo asli 100% akurat:**
1. Buka Google Maps → Cari `Mie Ayam dan Bakso Semangkok` → Klik foto/logo → Simpan sebagai PNG
2. Ganti file `public/img/logo-semangkok.svg` dengan file asli (bisa SVG atau PNG, tetap nama sama)
3. Atau tambahkan `public/img/logo-semangkok.png` (akan otomatis terdeteksi sebagai fallback)
4. Push ke GitHub — Header & Footer akan otomatis pakai logo asli tanpa mengada-ada

Header (`src/components/Header.tsx:64`) dan Footer (`src/components/Footer.tsx:22`) sudah pakai `next/image` dengan `priority` dan `object-contain`, jadi logo asli akan tampil tajam di semua device.

Jangan pakai screenshot terkompresi — usahakan file asli minimal 512x512 PNG transparan.
