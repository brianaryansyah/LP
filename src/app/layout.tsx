import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fdf8f5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://semangkok.id"),
  title: {
    default: "Semangkok - Mie Ayam & Bakso Premium",
    template: "%s | Semangkok",
  },
  description:
    "Warisan resep keluarga sejak 1990. Nikmati mie ayam kenyal, bakso premium, dan kuah kaldu gurih yang siap diantar ke rumah Anda.",
  applicationName: "Semangkok",
  keywords: [
    "mie ayam",
    "bakso",
    "mie ayam enak",
    "kuliner",
    "makanan Indonesia",
    "pesan antar",
  ],
  authors: [{ name: "Semangkok" }],
  category: "food",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Semangkok",
    title: "Semangkok - Mie Ayam & Bakso Premium",
    description:
      "Warisan resep keluarga sejak 1990. Nikmati mie ayam kenyal, bakso premium, dan kuah kaldu gurih yang siap diantar ke rumah Anda.",
    url: "https://semangkok.id",
    images: [
      {
        url: "/img/mi-ayam-bakso.jpg",
        width: 1200,
        height: 1500,
        alt: "Semangkok Mie Ayam Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semangkok - Mie Ayam & Bakso Premium",
    description:
      "Warisan resep keluarga sejak 1990. Nikmati mie ayam kenyal, bakso premium, dan kuah kaldu gurih.",
    images: ["/img/mi-ayam-bakso.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased overflow-x-hidden w-full`}>
        <a href="#home" className="skip-link">
          Langsung ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}# Commit 2 on 2024-08-22
Date: 2024-08-22
Commit number: 2
Total commits per day: 35
# Commit 6 on 2024-08-22
Date: 2024-08-22
Commit number: 6
Total commits per day: 35
# Commit 10 on 2024-08-22
Date: 2024-08-22
Commit number: 10
Total commits per day: 35
# Commit 14 on 2024-08-22
Date: 2024-08-22
Commit number: 14
Total commits per day: 35
# Commit 18 on 2024-08-22
Date: 2024-08-22
Commit number: 18
Total commits per day: 35
# Commit 22 on 2024-08-22
Date: 2024-08-22
Commit number: 22
Total commits per day: 35
# Commit 26 on 2024-08-22
Date: 2024-08-22
Commit number: 26
Total commits per day: 35
# Commit 30 on 2024-08-22
Date: 2024-08-22
Commit number: 30
Total commits per day: 35
# Commit 34 on 2024-08-22
Date: 2024-08-22
Commit number: 34
Total commits per day: 35
# Commit 2 on 2024-08-23
Date: 2024-08-23
Commit number: 2
Total commits per day: 38
# Commit 6 on 2024-08-23
Date: 2024-08-23
Commit number: 6
Total commits per day: 38
# Commit 10 on 2024-08-23
Date: 2024-08-23
Commit number: 10
Total commits per day: 38
# Commit 14 on 2024-08-23
Date: 2024-08-23
Commit number: 14
Total commits per day: 38
# Commit 18 on 2024-08-23
Date: 2024-08-23
Commit number: 18
Total commits per day: 38
# Commit 22 on 2024-08-23
Date: 2024-08-23
Commit number: 22
Total commits per day: 38
# Commit 26 on 2024-08-23
Date: 2024-08-23
Commit number: 26
Total commits per day: 38
# Commit 30 on 2024-08-23
Date: 2024-08-23
Commit number: 30
Total commits per day: 38
# Commit 34 on 2024-08-23
Date: 2024-08-23
Commit number: 34
Total commits per day: 38
# Commit 38 on 2024-08-23
Date: 2024-08-23
Commit number: 38
Total commits per day: 38
# Commit 2 on 2024-08-24
Date: 2024-08-24
Commit number: 2
Total commits per day: 40
# Commit 6 on 2024-08-24
Date: 2024-08-24
Commit number: 6
Total commits per day: 40
# Commit 10 on 2024-08-24
Date: 2024-08-24
Commit number: 10
Total commits per day: 40
# Commit 14 on 2024-08-24
Date: 2024-08-24
Commit number: 14
Total commits per day: 40
# Commit 18 on 2024-08-24
Date: 2024-08-24
Commit number: 18
Total commits per day: 40
# Commit 22 on 2024-08-24
Date: 2024-08-24
Commit number: 22
Total commits per day: 40
# Commit 26 on 2024-08-24
Date: 2024-08-24
Commit number: 26
Total commits per day: 40
# Commit 30 on 2024-08-24
Date: 2024-08-24
Commit number: 30
Total commits per day: 40
# Commit 34 on 2024-08-24
Date: 2024-08-24
Commit number: 34
Total commits per day: 40
# Commit 38 on 2024-08-24
Date: 2024-08-24
Commit number: 38
Total commits per day: 40
# Commit 2 on 2024-08-25
Date: 2024-08-25
Commit number: 2
Total commits per day: 37
# Commit 6 on 2024-08-25
Date: 2024-08-25
Commit number: 6
Total commits per day: 37
# Commit 10 on 2024-08-25
Date: 2024-08-25
Commit number: 10
Total commits per day: 37
# Commit 14 on 2024-08-25
Date: 2024-08-25
Commit number: 14
Total commits per day: 37
# Commit 18 on 2024-08-25
Date: 2024-08-25
Commit number: 18
Total commits per day: 37
# Commit 22 on 2024-08-25
Date: 2024-08-25
Commit number: 22
Total commits per day: 37
# Commit 26 on 2024-08-25
Date: 2024-08-25
Commit number: 26
Total commits per day: 37
# Commit 30 on 2024-08-25
Date: 2024-08-25
Commit number: 30
Total commits per day: 37
# Commit 34 on 2024-08-25
Date: 2024-08-25
Commit number: 34
Total commits per day: 37
# Commit 2 on 2024-08-26
Date: 2024-08-26
Commit number: 2
Total commits per day: 36
# Commit 6 on 2024-08-26
Date: 2024-08-26
Commit number: 6
Total commits per day: 36
# Commit 10 on 2024-08-26
Date: 2024-08-26
Commit number: 10
Total commits per day: 36
# Commit 14 on 2024-08-26
Date: 2024-08-26
Commit number: 14
Total commits per day: 36
# Commit 18 on 2024-08-26
Date: 2024-08-26
Commit number: 18
Total commits per day: 36
# Commit 22 on 2024-08-26
Date: 2024-08-26
Commit number: 22
Total commits per day: 36
# Commit 26 on 2024-08-26
Date: 2024-08-26
Commit number: 26
Total commits per day: 36
# Commit 30 on 2024-08-26
Date: 2024-08-26
Commit number: 30
Total commits per day: 36
# Commit 34 on 2024-08-26
Date: 2024-08-26
Commit number: 34
Total commits per day: 36
# Commit 2 on 2024-08-27
Date: 2024-08-27
Commit number: 2
Total commits per day: 39
# Commit 6 on 2024-08-27
Date: 2024-08-27
Commit number: 6
Total commits per day: 39
# Commit 10 on 2024-08-27
Date: 2024-08-27
Commit number: 10
Total commits per day: 39
# Commit 14 on 2024-08-27
Date: 2024-08-27
Commit number: 14
Total commits per day: 39
# Commit 18 on 2024-08-27
Date: 2024-08-27
Commit number: 18
Total commits per day: 39
# Commit 22 on 2024-08-27
Date: 2024-08-27
Commit number: 22
Total commits per day: 39
# Commit 26 on 2024-08-27
Date: 2024-08-27
Commit number: 26
Total commits per day: 39
# Commit 30 on 2024-08-27
Date: 2024-08-27
Commit number: 30
Total commits per day: 39
# Commit 34 on 2024-08-27
Date: 2024-08-27
Commit number: 34
Total commits per day: 39
# Commit 38 on 2024-08-27
Date: 2024-08-27
Commit number: 38
Total commits per day: 39
# Commit 2 on 2024-08-28
Date: 2024-08-28
Commit number: 2
Total commits per day: 35
# Commit 6 on 2024-08-28
Date: 2024-08-28
Commit number: 6
Total commits per day: 35
# Commit 10 on 2024-08-28
Date: 2024-08-28
Commit number: 10
Total commits per day: 35
# Commit 14 on 2024-08-28
Date: 2024-08-28
Commit number: 14
Total commits per day: 35
# Commit 18 on 2024-08-28
Date: 2024-08-28
Commit number: 18
Total commits per day: 35
# Commit 22 on 2024-08-28
Date: 2024-08-28
Commit number: 22
Total commits per day: 35
# Commit 26 on 2024-08-28
Date: 2024-08-28
Commit number: 26
Total commits per day: 35
# Commit 30 on 2024-08-28
Date: 2024-08-28
Commit number: 30
Total commits per day: 35
# Commit 34 on 2024-08-28
Date: 2024-08-28
Commit number: 34
Total commits per day: 35
# Commit 2 on 2024-08-29
Date: 2024-08-29
Commit number: 2
Total commits per day: 38
# Commit 6 on 2024-08-29
Date: 2024-08-29
Commit number: 6
Total commits per day: 38
# Commit 10 on 2024-08-29
Date: 2024-08-29
Commit number: 10
Total commits per day: 38
# Commit 14 on 2024-08-29
Date: 2024-08-29
Commit number: 14
Total commits per day: 38
# Commit 18 on 2024-08-29
Date: 2024-08-29
Commit number: 18
Total commits per day: 38
# Commit 22 on 2024-08-29
Date: 2024-08-29
Commit number: 22
Total commits per day: 38
# Commit 26 on 2024-08-29
Date: 2024-08-29
Commit number: 26
Total commits per day: 38
# Commit 30 on 2024-08-29
Date: 2024-08-29
Commit number: 30
Total commits per day: 38
# Commit 34 on 2024-08-29
Date: 2024-08-29
Commit number: 34
Total commits per day: 38
# Commit 38 on 2024-08-29
Date: 2024-08-29
Commit number: 38
Total commits per day: 38
# Commit 2 on 2024-08-30
Date: 2024-08-30
Commit number: 2
Total commits per day: 40
# Commit 6 on 2024-08-30
Date: 2024-08-30
Commit number: 6
Total commits per day: 40
# Commit 10 on 2024-08-30
Date: 2024-08-30
Commit number: 10
Total commits per day: 40
# Commit 14 on 2024-08-30
Date: 2024-08-30
Commit number: 14
Total commits per day: 40
# Commit 18 on 2024-08-30
Date: 2024-08-30
Commit number: 18
Total commits per day: 40
# Commit 22 on 2024-08-30
Date: 2024-08-30
Commit number: 22
Total commits per day: 40
# Commit 26 on 2024-08-30
Date: 2024-08-30
Commit number: 26
Total commits per day: 40
