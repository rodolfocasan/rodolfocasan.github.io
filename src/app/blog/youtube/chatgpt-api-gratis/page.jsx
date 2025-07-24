// src/app/blog/youtube/chatgpt-api-gratis/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import VideoYT from './Components/VideoYT'
import Introduction from './Components/Introduction'
import APIStructure from './Components/APIStructure'
import FAQ from './Components/FAQ'





export const metadata = {
    title: "Convierte ChatGPT en API GRATIS - Tutorial Completo 2024 | Automatización Python",
    description: "Aprende a convertir tu cuenta de ChatGPT en una API gratuita usando Python, Selenium y Flask. Tutorial paso a paso con código completo, automatización avanzada y sin costos adicionales.",
    keywords: [
        "chatgpt api gratis",
        "chatgpt api gratuita",
        "api chatgpt python",
        "automatizar chatgpt",
        "chatgpt selenium",
        "flask api chatgpt",
        "tutorial chatgpt api",
        "chatgpt automation python",
        "free chatgpt api",
        "python chatgpt bot",
        "selenium chatgpt",
        "ngrok api",
        "web scraping chatgpt",
        "chatgpt api tutorial",
        "automatización chatgpt"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan - Desarrollador Full Stack",
    publisher: "Rodolfo Casan Tech Blog",
    openGraph: {
        title: "🚀 Convierte ChatGPT en API GRATIS - Tutorial Python 2024",
        description: "Tutorial completo para crear tu propia API de ChatGPT usando Python, Selenium y Flask. Código gratuito, automatización avanzada y sin límites de uso.",
        url: `${Data.main_domain}/blog/youtube/chatgpt-api-gratis`,
        siteName: "Rodolfo Casan - Desarrollo y Tecnología",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Tutorial ChatGPT API Gratis - Python Selenium Flask Automatización"
            }
        ],
        type: "article",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "🔥 ChatGPT API GRATIS con Python | Tutorial 2024",
        description: "Convierte tu ChatGPT en API gratuita usando Python y Selenium. Tutorial completo con código y automatización avanzada.",
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
        canonical: `${Data.main_domain}/blog/youtube/chatgpt-api-gratis`,
        languages: {
            "es-SV": `${Data.main_domain}/blog/youtube/chatgpt-api-gratis`,
            "es": `${Data.main_domain}/blog/youtube/chatgpt-api-gratis`
        },
    },
    category: "Tecnología y Programación",
    classification: "Tutorial de Desarrollo Web y Automatización",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Rodolfo Casan Tech Blog",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "ChatGPT API Gratis Tutorial"
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
            url: `${Data.main_domain}/blog/youtube/chatgpt-api-gratis`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/blog/youtube/chatgpt-api-gratis`),
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
            <VideoYT />
            <Introduction />
            <APIStructure />
            <FAQ />
        </React.Fragment>
    )
}

export default page