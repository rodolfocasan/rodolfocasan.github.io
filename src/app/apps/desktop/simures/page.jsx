// src/app/apps/desktop/simures/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'
import Download from './Components/Download'





export const metadata = {
    title: "SimuRES - Simulador de Resolución de Pantalla | Escalado Dinámico Linux",
    description: "SimuRES es una herramienta multiplataforma para modificar y simular resoluciones de pantalla mediante escalado dinámico. Con interfaz gráfica intuitiva y CLI potente para desarrolladores y usuarios Linux. Descarga gratis desde GitHub.",
    keywords: [
        "simulador resolución pantalla",
        "escalado dinámico linux",
        "cambiar resolución pantalla",
        "herramienta resolución linux",
        "simures",
        "simulador pantalla",
        "xrandr gui",
        "escalado pantalla linux",
        "resolución temporal linux",
        "herramientas desarrollador linux",
        "GUI resolución pantalla",
        "CLI resolución linux",
        "python tkinter resolución",
        "x11 escalado pantalla",
        "monitor múltiple linux"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Desarrollador de SimuRES",
    publisher: "Portafolio Rodolfo Casan",
    openGraph: {
        title: "SimuRES - Simulador de Resolución de Pantalla | Herramienta Linux Gratuita",
        description: "Modifica y simula resoluciones de pantalla con escalado dinámico (1.0x-20.0x). Interfaz gráfica + CLI. Ideal para desarrolladores y proyectos que requieren ajustes temporales de visualización.",
        url: `${Data.main_domain}/apps/desktop/simures`,
        siteName: "Portafolio Rodolfo Casan - Proyectos y Aplicaciones",
        images: [
            {
                url: "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png",
                width: 1200,
                height: 630,
                alt: "SimuRES Logo - Simulador de Resolución de Pantalla para Linux"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "SimuRES - Simulador Resolución Pantalla Linux | GUI + CLI",
        description: "🖥️ Herramienta gratuita para modificar resoluciones con escalado 1.0x-20.0x. Interfaz gráfica + línea de comandos. Desarrolladores y usuarios Linux. ⬇️ Descarga GitHub",
        image: "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png",
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
        icon: "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png",
        shortcut: "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png",
        apple: "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png"
        }
    },
    verification: {
        google: Data.SEO.google_search_console_id,
    },
    alternates: {
        canonical: `${Data.main_domain}/apps/desktop/simures`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/desktop/simures`,
            "es": `${Data.main_domain}/apps/desktop/simures`
        },
    },
    category: "Herramientas de Desarrollo y Utilidades de Sistema",
    classification: "Software de Utilidades - Herramientas de Pantalla y Display",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "SimuRES - Simulador de Resolución",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "SimuRES - Simulador Resolución"
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
            url: `${Data.main_domain}/apps/desktop/simures`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/apps/desktop/simures`),
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false
    },
    geo: {
        region: "SV",
        placename: "El Salvador",
    },
    other: {
        'application-name': 'SimuRES',
        'msapplication-TileColor': Data.colorMarca,
        'msapplication-config': '/browserconfig.xml',
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'format-detection': 'telephone=no',
        'theme-color': Data.colorMarca,
        'color-scheme': 'dark light'
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