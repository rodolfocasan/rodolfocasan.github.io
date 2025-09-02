// src/app/services/volqor/calculadora-cambio/privacy-policy/page.jsx
import React from 'react'

import Data from "../../../../constants.json"

import Doc from './Components/Doc'





export const metadata = {
    title: "Política de Privacidad | Calculadora para Cambio - App Gratuita para Vendedores El Salvador",
    description: "Política de privacidad de Calculadora para Cambio, la mejor app gratuita para vendedores en El Salvador. Calcula cambio exacto, gestiona productos y historial de ventas. 100% privado, datos almacenados localmente. Desarrollada por VOLQOR Studios.",
    keywords: [
        "calculadora cambio vendedores",
        "app calculadora dinero gratis",
        "calculadora ventas El Salvador",
        "herramientas vendedores gratis",
        "calculadora comercial gratuita",
        "app negocios El Salvador",
        "calculadora punto de venta",
        "gestión productos vendedores",
        "historial ventas app",
        "calculadora cambio exacto",
        "app vendedores ambulantes",
        "herramientas comercio local",
        "calculadora tienda pequeña",
        "app caja registradora gratis",
        "calculadora negocio familiar",
        "VOLQOR Studios El Salvador",
        "Rodolfo Casan desarrollador",
        "app offline vendedores",
        "calculadora sin internet",
        "herramientas comercio móvil",
        "app emprendedores El Salvador",
        "calculadora microempresa",
        "política privacidad app",
        "datos seguros vendedores",
        "app privacidad total"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - VOLQOR Studios",
    publisher: "VOLQOR Studios",
    openGraph: {
        title: "Política de Privacidad - Calculadora para Cambio | App #1 Vendedores El Salvador",
        description: "🔒 Tu privacidad es sagrada. Calculadora para Cambio NO recopila datos personales. Todo permanece en TU dispositivo. La app más confiable para vendedores salvadoreños. ¡Descarga gratis!",
        url: `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
        siteName: "Calculadora para Cambio - VOLQOR Studios",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Calculadora para Cambio - Política de Privacidad - App Segura Vendedores El Salvador"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "🔒 Política de Privacidad - Calculadora para Cambio | App Segura Vendedores",
        description: "✅ CERO recopilación de datos ✅ 100% almacenamiento local ✅ Máxima privacidad ✅ App confiable para vendedores El Salvador. Desarrollada por VOLQOR Studios.",
        image: Data.logos.favicon,
        creator: "@editmu",
        site: "@editmu"
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-snippet': 150,
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
        canonical: `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
        languages: {
            "es-SV": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
            "es": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
            "es-GT": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
            "es-HN": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
            "es-NI": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
            "es-CR": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`
        },
    },
    category: "Business Applications",
    classification: "Privacy Policy - Business Calculator App",
    formatDetection: {
        email: true,
        address: true,
        telephone: true
    },
    applicationName: "Calculadora para Cambio",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Calculadora Cambio - Política Privacidad"
    },
    manifest: "/manifest.json",
    themeColor: Data.colorMarca,
    colorScheme: "dark light",
    referrer: "origin-when-cross-origin",
    generator: "Next.js - VOLQOR Studios",
    appLinks: {
        android: {
            package: Data.android_package,
            app_name: "Calculadora para Cambio"
        },
        web: {
            url: `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/`),
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
        viewportFit: "cover"
    },
    geo: {
        region: "SV-SS",
        placename: "San Salvador, El Salvador",
        position: "13.6929;-89.2182"
    },
    // Metadata adicional para SEO avanzado
    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "format-detection": "telephone=yes, address=yes, email=yes",
        "theme-color": Data.colorMarca,
        "msapplication-TileColor": Data.colorMarca,
        "msapplication-tap-highlight": "no",
        "apple-touch-icon": Data.logos.favicon,
        "apple-touch-icon-precomposed": Data.logos.favicon,
        // Schema.org structured data
        "application-name": "Calculadora para Cambio",
        "og:site_name": "Calculadora para Cambio - VOLQOR Studios",
        "og:locale:alternate": "es_GT,es_HN,es_NI,es_CR",
        "article:author": "Rodolfo Casan",
        "article:publisher": "VOLQOR Studios",
        "business:contact_data:street_address": "El Salvador",
        "business:contact_data:locality": "San Salvador",
        "business:contact_data:region": "San Salvador",
        "business:contact_data:postal_code": "01101",
        "business:contact_data:country_name": "El Salvador",
        // Rich snippets para apps
        "al:android:package": Data.android_package,
        "al:android:app_name": "Calculadora para Cambio",
        "al:web:url": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
        "al:web:should_fallback": "true",
        // Datos para redes sociales
        "fb:app_id": Data.facebook_app_id || "",
        "twitter:app:name:googleplay": "Calculadora para Cambio",
        "twitter:app:id:googleplay": Data.android_package,
        "twitter:app:url:googleplay": `${Data.main_domain}/services/volqor/calculadora-cambio/privacy-policy`,
        // SEO local
        "geo.region": "SV-SS",
        "geo.placename": "San Salvador",
        "geo.position": "13.6929;-89.2182",
        "ICBM": "13.6929, -89.2182",
        // Información adicional del negocio
        "business:hours:day": "monday,tuesday,wednesday,thursday,friday,saturday,sunday",
        "business:hours:start": "00:00",
        "business:hours:end": "23:59"
    }
};
function page() {
    return (
        <React.Fragment>
            <Doc />
        </React.Fragment>
    )
}

export default page