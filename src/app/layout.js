// src/app/layout.js
import "./globals.css";

import Navegation from "./Navegation";

import Data from "./constants.json";





export const metadata = {
    title: 'Inicio | Rodolfo Casan',
    description: "Bienvenido a mi sitio web, soy Rodolfo Casan.",
    keywords: ["rodolfocasan", "rodolfocasan inicio", "rodolfocasan home", "@rodolfocasan", "rodolfo casan"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.github.io' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: Data.favicon,
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
          <meta name="google-site-verification" content="PGMgE8gJAmTiYuZekbzXMLSlWZ3mLT4UYUpj2o13doU" />
      </head>
      <body>
        <Navegation />
        {children}
      </body>
    </html>
  );
}
