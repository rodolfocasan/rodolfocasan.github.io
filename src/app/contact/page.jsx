// src/app/contact/page.jsx
import React from 'react'

import Data from "../constants.json";


import Info from './Components/Info'
import SocialMedia from './Components/SocialMedia'





export const metadata = {
    title: "Contacto - Desarrollador Full Stack en El Salvador | Rodolfo Casan",
    description: "Contrata desarrollador full stack en El Salvador. Servicios por horas, proyecto completo o suscripción mensual. WhatsApp: +503 7968-3144. Especialista en React, Node.js y desarrollo web.",
    keywords: [
        "desarrollador full stack El Salvador",
        "programador freelance San Salvador",
        "desarrollo web El Salvador",
        "contratacion desarrollador",
        "servicios programacion",
        "React developer El Salvador",
        "Node.js developer",
        "desarrollador por horas",
        "proyecto web completo",
        "suscripcion desarrollo",
        "WhatsApp desarrollador",
        "Rodolfo Casan",
        "consultoria tecnica",
        "mentoria programacion",
        "colaboraciones tecnologicas"
    ],
    authors: [{ name: "Christian Castro - Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Christian Castro (Rodolfo Casan)",
    publisher: "Rodolfo Casan Portfolio",
    openGraph: {
        title: "Contacta a Rodolfo Casan - Desarrollador Full Stack Profesional",
        description: "¿Necesitas un desarrollador? Ofrezco servicios por horas, proyectos completos y suscripciones mensuales. Contacto directo por WhatsApp +503 7968-3144",
        url: `${Data.main_domain}/contact`,
        siteName: "Rodolfo Casan - Desarrollador Full Stack",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Rodolfo Casan - Desarrollador Full Stack en El Salvador - Página de Contacto"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacta Desarrollador Full Stack - Rodolfo Casan",
        description: "Servicios de desarrollo: por horas, proyecto completo o suscripción mensual. WhatsApp: +503 7968-3144",
        image: Data.logos.favicon,
        creator: "@Rodolfo Casan",
        site: "@Rodolfo Casan"
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
        canonical: `${Data.main_domain}/contact`,
        languages: {
            "es-SV": `${Data.main_domain}/contact`,
            "es": `${Data.main_domain}/contact`
        },
    },
    category: "Technology Services",
    classification: "Professional Services, Web Development, Software Development",
    formatDetection: {
        email: false,
        address: false,
        telephone: true
    },
    applicationName: "Rodolfo Casan Portfolio",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Rodolfo Casan - Contacto"
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
            url: `${Data.main_domain}/contact`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/contact`),
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
        "contact:phone": Data.contact_phone,
        "contact:whatsapp": Data.contact_phone,
        "service:hourly": "Pago por hora - Time & Materials",
        "service:fixed": "Pago por proyecto completo - Fixed Price",
        "service:monthly": "Pago mensual - Retainer/Suscripción",
        "specialization": "Full Stack Development, React, Node.js",
        "location": "El Salvador, San Salvador",
        "availability": "Freelance, Remote Work, Consultation"
    }
};
function page() {
    return (
        <React.Fragment>
            <Info />
            <SocialMedia />
        </React.Fragment>
    )
}

export default page