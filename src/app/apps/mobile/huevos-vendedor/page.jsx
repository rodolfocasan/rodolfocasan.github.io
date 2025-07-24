// src/app/apps/mobile/huevos-vendedor/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'
import Download from './Components/Download'





export const metadata = {
    title: "Huevos La Rural - App para Vendedores | Control de Ventas e Inventario",
    description: "Aplicación móvil desarrollada para vendedores de Huevos La Rural. Controla ventas, inventario, clientes y entregas de manera eficiente. Desarrollada con React Native y Google Maps API. Descarga gratis la versión Android.",
    keywords: ["huevos la rural", "app vendedores", "control de ventas", "inventario huevos", "aplicación móvil", "react native", "vendedores el salvador", "gestión clientes", "reportes ventas", "logística huevos", "app android", "google maps api", "control stock", "entregas programadas", "vendedor app"],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Desarrollador Full Stack",
    publisher: "Portfolio Rodolfo Casan",
    openGraph: {
        title: "Huevos La Rural - App para Vendedores | Control de Ventas e Inventario",
        description: "Aplicación móvil para vendedores de Huevos La Rural. Controla ventas, inventario y clientes con React Native. Descarga gratis para Android.",
        url: `${Data.main_domain}/apps/mobile/huevos-vendedor`,
        siteName: "Rodolfo Casan - Portfolio",
        images: [
            {
                url: "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png",
                width: 1200,
                height: 630,
                alt: "Huevos La Rural - Aplicación para Vendedores"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Huevos La Rural - App para Vendedores | React Native",
        description: "Aplicación móvil para control de ventas e inventario de huevos. Desarrollada con React Native y Google Maps API. Descarga gratis para Android.",
        image: "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png",
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
        icon: "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png",
        shortcut: "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png",
        apple: "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png"
        }
    },
    verification: {
        google: Data.SEO.google_search_console_id,
    },
    alternates: {
        canonical: `${Data.main_domain}/apps/mobile/huevos-vendedor`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/mobile/huevos-vendedor`,
            "es": `${Data.main_domain}/apps/mobile/huevos-vendedor`
        },
    },
    category: "Aplicaciones Móviles",
    classification: "Aplicación de Gestión Comercial y Ventas",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Huevos La Rural - Vendedor App",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Huevos La Rural - Vendedor"
    },
    manifest: "/manifest.json",
    themeColor: "#10b981",
    colorScheme: "dark light",
    referrer: "origin-when-cross-origin",
    generator: "Next.js",
    appLinks: {
        android: {
            package: "com.crodsan.vendedorapp",
            app_name: "Huevos La Rural - Vendedor"
        },
        web: {
            url: `${Data.main_domain}/apps/mobile/huevos-vendedor`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/apps/mobile/huevos-vendedor`),
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