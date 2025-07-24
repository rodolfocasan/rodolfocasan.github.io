// src/app/apps/mobile/another-chat-room/page.jsx
import React from 'react'

import Data from "../../../constants.json"

import Introduction from './Components/Introduction'
import Download from './Components/Download'





export const metadata = {
    title: "Another Chat Room - App de Chat Temporal Android | Descarga APK Gratis",
    description: "Descarga Another Chat Room APK gratis. App de chat en tiempo real para Android con salas temporales que expiran automáticamente. Mensajería instantánea con React Native y Socket.IO.",
    keywords: [
        "Another Chat Room",
        "chat app android",
        "descargar APK gratis",
        "chat temporal",
        "salas de chat",
        "mensajería tiempo real",
        "chat rooms android",
        "app chat El Salvador",
        "React Native chat",
        "Socket.IO android",
        "chat instantáneo",
        "salas temporales",
        "chat expiration",
        "mobile chat app",
        "descarga aplicación chat",
        "APK download",
        "chat app gratuita",
        "mensajes instantáneos",
        "chat rooms temporales",
        "aplicación móvil chat"
    ],
    authors: [{ name: "Rodolfo Casan", url: `${Data.main_domain}/` }],
    creator: "Rodolfo Casan",
    publisher: "Rodolfo Casan Portfolio",
    openGraph: {
        title: "Another Chat Room - Descarga APK Chat Temporal Android Gratis",
        description: "App de chat en tiempo real para Android. Crea salas temporales que expiran automáticamente. Desarrollada con React Native y Socket.IO. ¡Descarga el APK gratis ahora!",
        url: `${Data.main_domain}/apps/mobile/another-chat-room`,
        siteName: "Rodolfo Casan - Portfolio Developer",
        images: [
            {
                url: "https://raw.githubusercontent.com/rodolfocasan/another-chat-room/v1.0.1/assets/icon.png",
                width: 1200,
                height: 630,
                alt: "Another Chat Room - App de Chat Temporal Android"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Another Chat Room - Chat Temporal Android APK Gratis",
        description: "Descarga gratis Another Chat Room para Android. Salas de chat temporales con mensajería en tiempo real. React Native + Socket.IO",
        image: "https://raw.githubusercontent.com/rodolfocasan/another-chat-room/v1.0.1/assets/icon.png",
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
        icon: "https://raw.githubusercontent.com/rodolfocasan/another-chat-room/v1.0.1/assets/icon.png",
        shortcut: "https://raw.githubusercontent.com/rodolfocasan/another-chat-room/v1.0.1/assets/icon.png",
        apple: "https://raw.githubusercontent.com/rodolfocasan/another-chat-room/v1.0.1/assets/icon.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "https://raw.githubusercontent.com/rodolfocasan/another-chat-room/v1.0.1/assets/icon.png"
        }
    },
    verification: {
        google: Data.SEO.google_search_console_id,
    },
    alternates: {
        canonical: `${Data.main_domain}/apps/mobile/another-chat-room`,
        languages: {
            "es-SV": `${Data.main_domain}/apps/mobile/another-chat-room`,
            "es": `${Data.main_domain}/apps/mobile/another-chat-room`
        },
    },
    category: "Mobile Applications",
    classification: "Chat Application, Mobile Development, Android Apps",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Another Chat Room Portfolio",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Another Chat Room - Chat Temporal"
    },
    manifest: "/manifest.json",
    themeColor: Data.colorMarca,
    colorScheme: "dark light",
    referrer: "origin-when-cross-origin",
    generator: "Next.js",
    appLinks: {
        android: {
            package: "com.crodsan.anotherchatroom",
            app_name: "Another Chat Room"
        },
        web: {
            url: `${Data.main_domain}/apps/mobile/another-chat-room`,
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
    },
    other: {
        "mobile-web-capable": "yes",
        "application-name": "Another Chat Room",
        "theme-color": "#10b981",
        "msapplication-TileColor": "#1f2937",
        "msapplication-config": "/browserconfig.xml"
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