// src/app/blog/youtube/chatgpt-api-gratis/Components/Introduction.jsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';





// Componente de tarjeta reutilizable para características principales
const FeatureCard = ({ title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all"
    >
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
        </h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const Introduction = () => {
    // Lista de características principales del proyecto
    const features = [
        {
            title: "Automatización Avanzada",
            description: "Sistema completo de automatización de ChatGPT utilizando Selenium WebDriver con gestión inteligente de sesiones múltiples."
        },
        {
            title: "API Personalizada",
            description: "API HTTP robusta construida con Flask, incluyendo túnel seguro Ngrok para acceso remoto y sistema de monitoreo en tiempo real."
        },
        {
            title: "Gestión Inteligente",
            description: "Manejo automático de CAPTCHAs, sistema de recuperación de errores y almacenamiento automático de conversaciones en formato JSON."
        },
        {
            title: "Seguridad y Monitoreo",
            description: "Sistema integral de monitoreo del estado de procesamiento y generación de códigos QR para acceso rápido y seguro."
        }
    ];

    return (
        // Añadido pt-32 para crear espacio para la barra de navegación
        <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado con animación */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Convierte tu cuenta de ChatGPT en una API GRATIS
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Una solución avanzada que combina Selenium WebDriver y una API personalizada para automatizar interacciones con ChatGPT de manera eficiente y segura.
                    </p>
                </motion.div>

                {/* Grid de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                {/* Botones de repositorio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="https://github.com/rodolfocasan/chatgpt-own_api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 text-white font-medium gap-2"
                    >
                        <Github className="w-5 h-5" />
                        ChatGPT API (repositorio)
                    </a>
                    <a
                        href="https://github.com/rodolfocasan/chatsitogpt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 text-white font-medium gap-2"
                    >
                        <Github className="w-5 h-5" />
                        ChatsitoGPT (repositorio)
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Introduction;