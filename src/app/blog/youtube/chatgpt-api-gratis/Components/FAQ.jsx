// src/app/blog/youtube/chatgpt-api-gratis/Components/FAQ.jsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';





// Array de preguntas frecuentes
const faqs = [
    {
        pregunta: "¿Por qué añadir más de una sesión de Google Chrome?",
        respuesta: "Se recomienda añadir múltiples sesiones de Google Chrome como una estrategia de tolerancia a fallos y optimización. Cuando una sesión encuentra límites de uso o CAPTCHAs de Cloudflare, el sistema automáticamente cambia a otra sesión, preservando el progreso de la conversación. Esta arquitectura distribuida asegura una operación continua y sin interrupciones, evitando la necesidad de implementar técnicas de bypass potencialmente problemáticas."
    },
    {
        pregunta: "¿Es compatible con Windows y/o MacOS?",
        respuesta: "El sistema está optimizado específicamente para entornos Linux (Debian) con interfaz gráfica y puede requerir modificaciones significativas para funcionar tanto en Windows como en MacOS. Al ser un proyecto de código abierto, los desarrolladores pueden adaptar y modificar el código para hacerlo compatible con otros sistemas operativos, manteniendo la funcionalidad central del proyecto."
    },
    {
        pregunta: "¿Cómo maneja el sistema las limitaciones de ChatGPT?",
        respuesta: "El proyecto implementa un sofisticado sistema de gestión de sesiones que monitorea y maneja automáticamente las limitaciones de uso, rotando entre múltiples sesiones cuando es necesario. También incluye mecanismos de reintento y recuperación para manejar interrupciones del servicio."
    },
    {
        pregunta: "¿Cómo funciona el almacenamiento de conversaciones?",
        respuesta: "Todas las conversaciones se guardan automáticamente en archivos JSON en tu computadora. Estos archivos incluyen la fecha y hora de cada mensaje, las preguntas realizadas y las respuestas recibidas. Puedes acceder a esta información fácilmente a través de la API del proyecto."
    },
    {
        pregunta: "¿Qué tipo de datos almacena el sistema?",
        respuesta: "El sistema almacena metadatos de sesión, prompts, respuestas y timestamps en formato JSON. Toda la información se guarda localmente y puede ser accedida a través de endpoints específicos de la API. El almacenamiento está diseñado para ser transparente y facilitar el análisis posterior."
    },
    {
        pregunta: "¿Se puede usar este proyecto en un entorno de producción?",
        respuesta: "No, este proyecto NO está diseñado para uso en producción. Contiene vulnerabilidades de seguridad intencionales para prevenir usos maliciosos. Usarlo en un entorno real podría exponer datos sensibles y causar problemas de seguridad. El código está pensado únicamente para fines educativos y de investigación (la versión desarrollada por Rodolfo Casan)."
    },
    {
        pregunta: "¿Por qué el proyecto utiliza Ngrok?",
        respuesta: "Ngrok nos permite obtener una URL pública gratuita para acceder a la API desde cualquier lugar. Esto facilita las pruebas y el desarrollo, permitiendo que otros dispositivos en tu red (como tu teléfono) puedan conectarse al servicio sin configuración adicional."
    },
    {
        pregunta: "¿Necesito conocimientos técnicos para usar el proyecto?",
        respuesta: "Sí, se recomienda tener conocimientos básicos de Python y entender cómo funciona la línea de comandos en Linux. También es útil estar familiarizado con conceptos como APIs y automatización web. El proyecto incluye documentación para ayudarte en el proceso."
    },
    {
        pregunta: "¿Puedo modificar el código para mis necesidades?",
        respuesta: "¡Absolutamente! El proyecto es de código abierto, lo que significa que puedes modificarlo, mejorarlo y adaptarlo a tus necesidades específicas. Solo recuerda mantener el uso ético y respetar los términos de servicio de las plataformas que utilices."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Variantes de animación para el contenedor
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    // Variantes de animación para cada elemento
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-3xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Preguntas Frecuentes
                </h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border border-gray-800 rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-900 transition-colors duration-200"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium">{faq.pregunta}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="border-t border-gray-800"
                                    >
                                        <p className="p-4 text-gray-400">
                                            {faq.respuesta}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FAQ;