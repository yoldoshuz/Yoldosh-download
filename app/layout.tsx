import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://download.yoldosh.uz"),

  title: "Yo'ldosh — O‘zbekiston bo‘ylab hamroh toping",
  description:
    "O‘zbekiston bo‘ylab xavfsiz va qulay birgalikdagi safarlar. Yo‘lovchilar va haydovchilarni birlashtiruvchi platforma.",

  keywords: [
    "Yo'ldosh",
    "hamroh topish",
    "carpool Uzbekistan",
    "birgalikdagi safar",
    "Toshkent Samarqand",
    "Toshkent Buxoro",
    "Toshkent Farg‘ona",
    "O‘zbekiston safarlari",
  ],

  openGraph: {
    title: "Yo'ldosh — O‘zbekiston bo‘ylab hamroh toping",
    description:
      "Tekshirilgan haydovchilar va qulay marshrutlar bilan O‘zbekiston bo‘ylab safar qiling.",
    url: "https://download.yoldosh.uz",
    siteName: "Yo'ldosh",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og-home-uz.png",
        width: 1200,
        height: 630,
        alt: "Yo'ldosh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yo'ldosh — O‘zbekiston bo‘ylab hamroh toping",
    description:
      "O‘zbekiston bo‘ylab qulay va xavfsiz birgalikdagi safarlar.",
    images: ["/og-home-uz.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://download.yoldosh.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}