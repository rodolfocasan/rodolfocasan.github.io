// src/app/apps/desktop/arpa/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'





export const metadata = {
    title: "ARPA - Herramienta de Análisis y Manipulación de Red con ARP Spoofing | Python Linux",
    description: "Herramienta avanzada desarrollada en Python para análisis de redes locales, ARP spoofing y control de dispositivos en Linux. Escaneo de red, desconexión selectiva y manipulación de protocolos ARP con interfaz CLI intuitiva.",
    keywords: [
        "ARPA",
        "ARP spoofing",
        "análisis de red",
        "herramienta python",
        "network analysis",
        "manipulación ARP",
        "escaneo de red",
        "desconexión dispositivos",
        "Linux network tools",
        "python networking",
        "network security",
        "red local",
        "CLI network tool",
        "dispositivos conectados",
        "gateway detection",
        "root access tool",
        "network manipulation",
        "cybersecurity tool"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Desarrollador Python & Network Security",
    publisher: "Rodolfo Casan Portfolio",
    openGraph: {
        title: "ARPA - Herramienta Avanzada de Análisis de Red y ARP Spoofing",
        description: "Desarrollada en Python para Linux. Análisis de redes locales, escaneo de dispositivos, ARP spoofing y control avanzado de red con CLI intuitiva. Uso ético requerido.",
        url: `${Data.main_domain}/apps/desktop/arpa`,
        siteName: "Rodolfo Casan - Portfolio de Desarrollo",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "ARPA - Herramienta de Análisis y Manipulación de Red con ARP Spoofing desarrollada en Python"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "ARPA - Análisis de Red y ARP Spoofing en Python",
        description: "Herramienta avanzada para análisis de redes, escaneo de dispositivos y manipulación ARP en Linux. CLI intuitiva y control selectivo de red.",
        image: Data.logos.favicon,
        creator: "@rodolfocasan",
        site: "@rodolfocasan"
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
        canonical: `${Data.main_domain}/apps/desktop/arpa`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/desktop/arpa`,
            "es": `${Data.main_domain}/apps/desktop/arpa`
        },
    },
    category: "Technology - Network Security Tools",
    classification: "Software Development, Network Analysis, Cybersecurity Tools, Python Applications",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "ARPA - Network Analysis & ARP Spoofing Tool",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "ARPA - Network Analysis Tool"
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
            url: `${Data.main_domain}/apps/desktop/arpa`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/apps/desktop/arpa`),
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
function page() {
    return (
        <React.Fragment>
            <Introduction />
        </React.Fragment>
    )
}

export default page