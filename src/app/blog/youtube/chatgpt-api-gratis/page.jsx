// src/app/blog/youtube/chatgpt-api-gratis/page.jsx
import React from 'react'

import VideoYT from './Components/VideoYT';
import Introduction from './Components/Introduction'
import APIStructure from './Components/APIStructure';
import FAQ from './Components/FAQ';

import Data from "../../../constants.json";





export const metadata = {
    title: 'API Propia de ChatGPT | Rodolfo Casan',
    description: "Este proyecto implementa una automatización de ChatGPT usando Selenium WebDriver y crea una API HTTP personalizada utilizando Flask y Ngrok. Permite enviar prompts a ChatGPT y obtener respuestas de manera automatizada, gestionando múltiples sesiones y manejando límites de uso..",
    keywords: ["rodolfocasan", "@rodolfocasan", "rodolfo casan", "rodolfo casan youtube", "rodolfo casan api gratis", "rodolfo casan chatgpt gratis", "rodolfo casan ngrok"],
    authors: [{ name: 'rodolfocasan', url: "https:://rodolfocasan.com/" }, { name: 'rodolfocasan', url: 'https://rodolfocasan.github.io/' }],
    creator: 'rodolfocasan',
    publisher: 'rodolfocasan',
    icons: {
        icon: Data.favicon,
    },
};
export default function page() {
    return (
        <React.Fragment>
            <VideoYT />
            <Introduction />
            <APIStructure />
            <FAQ/>
        </React.Fragment>
    )
}
