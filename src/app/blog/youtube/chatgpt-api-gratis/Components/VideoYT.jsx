// src/app/blog/youtube/chatgpt-api-gratis/Components/VideoYT.jsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';





const VideoYT = () => {
    // ID del video de YouTube extraído de la URL
    const videoId = 'tuhq55llV7I';

    // Configuración de animación para el contenedor
    const containerAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        // Contenedor principal con fondo degradado
        <div className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 py-20 px-4 sm:px-6 lg:px-8">
            {/* Contenedor con ancho máximo más reducido para desktop */}
            <div className="max-w-4xl mx-auto">
                {/* Título de la sección con animación */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
                        Demostración en vídeo
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Mira cómo funciona el sistema de automatización de ChatGPT en YouTube
                    </p>
                </motion.div>

                {/* Contenedor del video con animación y tamaño ajustado */}
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                    className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mx-auto"
                >
                    {/* Borde brillante animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-50 animate-pulse rounded-xl -z-10" />

                    {/* Contenedor interno con padding para el borde brillante */}
                    <div className="absolute inset-[2px] bg-gray-900 rounded-xl">
                        {/* iframe de YouTube responsive */}
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&showinfo=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                        />
                    </div>
                </motion.div>

                {/* Nota informativa debajo del video */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center text-gray-500 mt-6 text-sm"
                >
                    Este vídeo muestra las capacidades principales, instalación y demás puntos del proyecto. Se recomienda ver completo antes de interactuar.
                </motion.p>
            </div>
        </div>
    );
};

export default VideoYT;
