// src/app/resources/education/page.jsx
import React from 'react'

import Data from "../../constants.json"

import Overview from './Components/Overview'





export const metadata = {
    title: "Cupones Gratuitos Udemy | Cursos Gratis para Estudiantes 2025",
    description: "🎓 Descubre cupones gratuitos de Udemy actualizados diariamente. Más de 1000 cursos gratis para estudiantes. Accede ahora antes de que expiren los cupones.",
    keywords: [
        "cupones udemy gratis",
        "cursos gratuitos udemy",
        "cupones descuento udemy",
        "cursos gratis estudiantes",
        "udemy free coupons",
        "educación gratuita online",
        "cursos online gratis",
        "cupones udemy 2025",
        "formación gratuita",
        "aprendizaje online gratis",
        "cursos técnicos gratis",
        "programación gratis",
        "marketing digital gratis",
        "diseño gráfico gratis",
        "desarrollo web gratis"
    ],
    authors: [{ name: "Cupones Educativos", url: `${Data.main_domain}/` }],
    creator: "Plataforma de Cupones Educativos",
    publisher: "Portal de Educación Gratuita",
    openGraph: {
        title: "🎓 Cupones Gratuitos Udemy | +1000 Cursos Gratis Actualizados",
        description: "Accede a cupones gratuitos de Udemy actualizados cada día. Cursos de programación, diseño, marketing y más. ¡100% gratis para estudiantes!",
        url: `${Data.main_domain}/resources/education`,
        siteName: "Portal de Cupones Educativos",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Cupones Gratuitos Udemy - Cursos Online Gratis para Estudiantes"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "🎓 +1000 Cupones Gratuitos de Udemy | Cursos Gratis 2025",
        description: "Descubre cupones de Udemy 100% gratuitos. Cursos de programación, diseño, marketing y más. Actualizados diariamente.",
        image: Data.logos.favicon,
        creator: "@CuponesEducativos",
        site: "@UdemyGratis"
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
        canonical: `${Data.main_domain}/resources/education`,
        languages: {
            "es-SV": `${Data.main_domain}/resources/education`,
            "es": `${Data.main_domain}/resources/education`
        },
    },
    category: "Educación Online",
    classification: "Portal Educativo - Cupones y Cursos Gratuitos",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Cupones Educativos Udemy",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Cupones Udemy Gratis"
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
            url: `${Data.main_domain}/resources/education`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/resources/education`),
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
        "article:author": "Portal de Cupones Educativos",
        "article:section": "Educación",
        "article:tag": "cupones udemy, cursos gratis, educación online",
        "og:updated_time": new Date().toISOString(),
        "revisit-after": "1 day",
        "content-language": "es-SV",
        "distribution": "global",
        "rating": "general",
        "target": "all",
        "handheld-friendly": "true",
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "msapplication-TileColor": Data.colorMarca,
        "theme-color": Data.colorMarca
    }
};
function page() {
    return (
        <React.Fragment>
            <Overview />
        </React.Fragment>
    )
}

export default page