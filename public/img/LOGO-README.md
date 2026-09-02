# Logo Semangkok - Panduan Penggantian (Jujur, Tidak Mengada-ada)

**Status saat ini:** Placeholder SVG `logo-semangkok.svg` — **bukan** logo asli. Google Maps melindungi foto/logo dengan JS + autentikasi, tidak bisa di-scrape otomatis (sudah dicoba fetch `share.google/QOCQKq5zvoVVkb4pm` & `maps.app.goo.gl` → hanya `lh3.googleusercontent.com/ogw/default-user`). 

**Agar 100% sesuai kenyataan, lakukan manual (1 menit):**
1. Buka [Google Maps Place](https://maps.app.goo.gl/NvCxPom7GSdYFj7Z9) di HP/laptop → Tab **Foto** → Foto profil/logo → Klik kanan **Simpan gambar**
2. Simpan sebagai `logo-semangkok.png` (512x512, transparan ideal) di `public/img/`
3. Ganti `public/img/logo-semangkok.svg` ATAU biarkan keduanya (Header/Footer prioritas PNG)
4. `git add public/img/logo-semangkok.png && git commit -m "Add original logo" && git push` — otomatis tampil, tidak perlu ubah kode

**Catatan profesional:** Placeholder sekarang ikon mangkok generik #f5b041 agar tidak mengada-ada. Jika dibiarkan, branding tetap konsisten tapi tidak 100% identik. Segera ganti dengan file asli untuk maksimal.

Header (`src/components/Header.tsx:64`) & Footer (`src/components/Footer.tsx:22`) sudah `next/image` + `priority` + `object-contain` + `title` placeholder.
