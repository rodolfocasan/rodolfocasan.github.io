// src/app/apps/desktop/chrome-session-manager/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'
import Download from './Components/Download'





export const metadata = {
    title: "Chrome Session Manager - Gestiona Múltiples Sesiones de Chrome | Aplicación Desktop Python",
    description: "Aplicación de escritorio gratuita desarrollada en Python para gestionar múltiples sesiones paralelas de Google Chrome con perfiles independientes. Descarga gratis para Windows y Linux.",
    keywords: [
        "chrome session manager",
        "múltiples sesiones chrome",
        "gestor sesiones chrome",
        "perfiles chrome independientes",
        "aplicación desktop chrome",
        "chrome profiles manager",
        "python tkinter app",
        "chrome sessions desktop",
        "gestionar perfiles chrome",
        "múltiples cuentas chrome",
        "chrome session desktop app",
        "python chrome manager",
        "sesiones paralelas chrome",
        "chrome profile switcher",
        "desktop chrome organizer",
        "chrome workspace manager",
        "aplicación escritorio chrome",
        "chrome session organizer",
        "python gui chrome",
        "chrome multiple accounts"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Desarrollador Full Stack",
    publisher: "Rodolfo Casan Portfolio",
    openGraph: {
        title: "Chrome Session Manager - Gestiona Múltiples Sesiones de Chrome Desktop",
        description: "Aplicación gratuita de escritorio en Python para gestionar múltiples sesiones paralelas de Google Chrome con perfiles completamente independientes. Descarga para Windows y Linux.",
        url: `${Data.main_domain}/apps/desktop/chrome-session-manager`,
        siteName: "Rodolfo Casan - Desarrollador Full Stack Portfolio",
        images: [
            {
                url: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png",
                width: 1200,
                height: 630,
                alt: "Chrome Session Manager - Logo de la aplicación para gestionar múltiples sesiones de Chrome"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chrome Session Manager - Gestor de Sesiones Chrome Desktop",
        description: "Aplicación Python gratuita para gestionar múltiples sesiones paralelas de Chrome con perfiles independientes. Descarga para Windows y Linux.",
        image: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png",
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
        icon: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png",
        shortcut: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png",
        apple: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png"
        }
    },
    verification: {
        google: Data.SEO.google_search_console_id,
    },
    alternates: {
        canonical: `${Data.main_domain}/apps/desktop/chrome-session-manager`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/desktop/chrome-session-manager`,
            "es": `${Data.main_domain}/apps/desktop/chrome-session-manager`
        },
    },
    category: "Software Development",
    classification: "Desktop Application, Chrome Extension Alternative, Session Management Tool",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Chrome Session Manager by Rodolfo Casan",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Chrome Session Manager Desktop"
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
            url: `${Data.main_domain}/apps/desktop/chrome-session-manager`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/apps/desktop/chrome-session-manager`),
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
            <Download />
        </React.Fragment>
    )
}

export default page