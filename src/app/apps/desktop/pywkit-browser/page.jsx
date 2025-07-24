// src/app/apps/desktop/pywkit-browser/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'





export const metadata = {
    title: "Pywkit Browser - Navegador Web Python | Desarrollo Desktop PyQt/PySide",
    description: "Navegador web de escritorio desarrollado en Python con PyQt/PySide. Funciones completas de navegación, gestión de perfiles persistente e interfaz intuitiva multiplataforma.",
    keywords: [
        "navegador python",
        "pyqt browser",
        "pyside navegador",
        "python desktop app",
        "navegador escritorio",
        "python web browser",
        "pyqt webengine",
        "navegador multiplataforma",
        "python gui aplicacion",
        "desktop browser python",
        "navegador personalizable",
        "python webkit",
        "pyqt aplicacion web",
        "navegador codigo abierto"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Desarrollador Python",
    publisher: "Rodolfo Casan Portfolio",
    openGraph: {
        title: "Pywkit Browser - Navegador Web Desktop en Python | PyQt/PySide",
        description: "Navegador web funcional desarrollado en Python con PyQt/PySide. Incluye navegación completa, gestión de perfiles, autocompletado y interfaz personalizable multiplataforma.",
        url: `${Data.main_domain}/apps/desktop/pywkit-browser`,
        siteName: "Rodolfo Casan - Desarrollador Python",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Pywkit Browser - Navegador Desktop Python con PyQt"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Pywkit Browser - Navegador Desktop Python | PyQt WebEngine",
        description: "Navegador web completo desarrollado en Python. Funciones de navegación, perfiles persistentes e interfaz personalizable con PyQt/PySide.",
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
        canonical: `${Data.main_domain}/apps/desktop/pywkit-browser`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/desktop/pywkit-browser`,
            "es": `${Data.main_domain}/apps/desktop/pywkit-browser`
        },
    },
    category: "Desarrollo de Software",
    classification: "Aplicación Desktop Python, Navegador Web, PyQt/PySide",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Pywkit Browser - Python Desktop",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Pywkit Browser Python"
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
            url: `${Data.main_domain}/apps/desktop/pywkit-browser`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/apps/desktop/pywkit-browser`),
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