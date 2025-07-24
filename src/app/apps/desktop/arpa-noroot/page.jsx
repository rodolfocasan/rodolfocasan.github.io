// src/app/apps/desktop/arpa-noroot/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'





export const metadata = {
    title: "ARPA No Root - Herramienta de Análisis de Red Sin Privilegios de Administrador | Python Network Security",
    description: "Herramienta de análisis y disrupción de red desarrollada en Python para sistemas Linux. Funciona sin permisos root usando técnicas de saturación TCP/UDP, ICMP flooding y análisis de dispositivos para pruebas de seguridad autorizadas.",
    keywords: [
        "ARPA No Root",
        "herramienta análisis red",
        "network security tool",
        "Python network scanner",
        "análisis red sin root",
        "TCP UDP flooding",
        "ICMP ping flood",
        "network penetration testing",
        "herramientas seguridad red",
        "Linux network tools",
        "scanning dispositivos red",
        "pruebas penetración autorizadas",
        "network disruption tool",
        "análisis vulnerabilidades red",
        "herramientas ethical hacking",
        "network security testing",
        "Python cybersecurity",
        "red local scanning",
        "network device discovery",
        "bandwidth saturation tool"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Cybersecurity Developer",
    publisher: "Tu Portfolio - Cybersecurity Tools",
    openGraph: {
        title: "ARPA No Root - Herramienta de Análisis de Red Python | Network Security Testing",
        description: "Herramienta profesional de análisis y disrupción de red sin privilegios root. Desarrollada en Python para pruebas de seguridad autorizadas con técnicas TCP/UDP flooding, ICMP y análisis de dispositivos.",
        url: `${Data.main_domain}/apps/desktop/arpa-noroot`,
        siteName: "Portfolio Cybersecurity - Herramientas de Seguridad de Red",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "ARPA No Root - Herramienta de Análisis de Red Python para Pruebas de Seguridad"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "ARPA No Root - Python Network Security Tool | Análisis de Red Sin Root",
        description: "Herramienta de análisis y disrupción de red desarrollada en Python. TCP/UDP flooding, ICMP, análisis de dispositivos. Para pruebas de seguridad autorizadas.",
        image: Data.logos.favicon,
        creator: "@tu_handle_twitter",
        site: "@tu_handle_twitter"
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
        canonical: `${Data.main_domain}/apps/desktop/arpa-noroot`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/desktop/arpa-noroot`,
            "es": `${Data.main_domain}/apps/desktop/arpa-noroot`
        },
    },
    category: "Technology",
    classification: "Cybersecurity Tools, Network Security, Python Applications, Penetration Testing Tools",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "ARPA No Root - Network Security Tool",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "ARPA No Root"
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
            url: `${Data.main_domain}/apps/desktop/arpa-noroot`,
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
function page() {
    return (
        <React.Fragment>
            <Introduction />
        </React.Fragment>
    )
}

export default page