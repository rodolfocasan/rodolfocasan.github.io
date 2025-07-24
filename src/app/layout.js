// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Data from "./constants.json";

import Navegation from "./Navegation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export const metadata = {
  title: "Rodolfo Casan - Ingeniero de Software | Desarrollador Full Stack | El Salvador",
  description: "Ingeniero de Software especializado en desarrollo web y móvil. Experto en Python, JavaScript, React, Next.js. Soluciones tecnológicas personalizadas desde El Salvador.",
  keywords: [
    "Rodolfo Casan",
    "Ingeniero de Software",
    "Desarrollador Full Stack",
    "Python Developer",
    "JavaScript Developer", 
    "React Developer",
    "Next.js Developer",
    "Desarrollo Web El Salvador",
    "Programador El Salvador",
    "Flask Developer",
    "Tailwind CSS",
    "Bootstrap",
    "Linux",
    "Android Development",
    "Software Engineer",
    "Web Development",
    "Mobile Development",
    "Freelancer El Salvador",
    "Portafolio Desarrollador",
    "Matemático",
    "Científico",
    "Autodidacta",
    "Termux",
    "Google Colab",
    "HuggingFace",
    "Git",
    "GitHub",
    "CapacitorJS",
    "Vite.js",
    "SSH"
  ],
  authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
  creator: "Rodolfo Casan",
  publisher: "Rodolfo Casan",
  openGraph: {
    title: "Rodolfo Casan - Ingeniero de Software & Desarrollador Full Stack",
    description: "Ingeniero de Software con años de experiencia en desarrollo web y móvil. Especialista en Python, JavaScript, React, Next.js. Matemático y científico autodidacta.",
    url: `${Data.main_domain}/`,
    siteName: "Rodolfo Casan - Portafolio Profesional",
    images: [
      {
        url: Data.logos.favicon,
        width: 1200,
        height: 630,
        alt: "Rodolfo Casan - Ingeniero de Software y Desarrollador Full Stack"
      }
    ],
    type: "website",
    locale: "es_SV",
    countryName: "El Salvador"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodolfo Casan - Ingeniero de Software | El Salvador",
    description: "Desarrollador Full Stack especializado en Python, JavaScript, React. Soluciones tecnológicas innovadoras y personalizadas.",
    image: Data.logos.favicon,
    creator: "@editmu",
    site: "@editmu"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  icons: {
    icon: Data.logos.favicon,
    shortcut: Data.logos.favicon,
    apple: Data.logos.favicon,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: Data.logos.favicon
    }
  },
  verification: {
    google: Data.SEO.google_search_console_id,
  },
  alternates: {
    canonical: `${Data.main_domain}/`,
    languages: {
      "es-SV": `${Data.main_domain}/`,
      "es": `${Data.main_domain}/`
    },
  },
  category: "Technology",
  classification: "Professional Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  applicationName: "Rodolfo Casan Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Rodolfo Casan - Ingeniero de Software"
  },
  manifest: "/manifest.json",
  themeColor: Data.colorMarca,
  colorScheme: "dark light",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  appLinks: {
    android: {
      package: Data.android_package,
      app_name: Data.android_appname
    },
    web: {
      url: `${Data.main_domain}/`,
      should_fallback: true
    }
  },
  metadataBase: new URL(`${Data.main_domain}/`),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  geo: {
    region: "SV",
    placename: "El Salvador",
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navegation />
        {/* Contenedor principal con padding superior para evitar que el contenido se superponga con la navegación */}
        <main className="pt-16 md:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}