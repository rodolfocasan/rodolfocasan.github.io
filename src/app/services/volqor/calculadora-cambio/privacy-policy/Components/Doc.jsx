// src/app/services/volqor/calculadora-cambio/privacy-policy/Components/Doc.jsx
"use client"
import React, { useState, useEffect } from 'react'
import { FaShieldAlt, FaDatabase, FaMobile, FaUserShield, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa'
import { MdSecurity, MdUpdate, MdPrivacyTip, MdStorage } from 'react-icons/md'
import { RiInformationLine } from 'react-icons/ri'
import { FcDocument } from "react-icons/fc";





function Doc() {
    // Estados para las animaciones
    const [isVisible, setIsVisible] = useState(false)

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Secciones principales de la política de privacidad
    const privacySections = [
        {
            icon: <RiInformationLine className="text-2xl" />,
            title: "Información General",
            content: [
                "Esta aplicación, 'Calculadora para Cambio', ha sido desarrollada por VOLQOR Studios para ayudar a vendedores en el cálculo de cambio de manera eficiente.",
                "Esta Política de Privacidad describe cómo la aplicación maneja la información en tu dispositivo.",
                "Al usar esta aplicación, aceptas las prácticas descritas en esta política."
            ]
        },
        {
            icon: <FaDatabase className="text-2xl" />,
            title: "Recopilación de Datos",
            content: [
                "La aplicación NO recopila, transmite ni almacena datos personales en servidores externos.",
                "Toda la información (productos, transacciones, historial) se almacena únicamente en tu dispositivo.",
                "No se requiere conexión a internet para el funcionamiento de la aplicación.",
                "No se utilizan servicios de análisis de terceros ni se comparten datos con otras aplicaciones."
            ]
        },
        {
            icon: <MdStorage className="text-2xl" />,
            title: "Almacenamiento Local",
            content: [
                "Los datos de productos, precios y transacciones se guardan en el almacenamiento local de tu dispositivo.",
                "El historial de transacciones permanece en tu dispositivo y no es accesible desde el exterior.",
                "Puedes eliminar todos los datos desinstalando la aplicación o limpiando los datos desde la configuración de Android.",
                "No se realizan copias de seguridad automáticas en la nube."
            ]
        },
        {
            icon: <FaUserShield className="text-2xl" />,
            title: "Privacidad y Seguridad",
            content: [
                "No se requiere registro de usuario ni información personal para usar la aplicación.",
                "No se accede a contactos, ubicación, cámara ni otros datos sensibles del dispositivo.",
                "La aplicación funciona completamente offline después de la instalación.",
                "Todos los cálculos y operaciones se realizan localmente en tu dispositivo."
            ]
        },
        {
            icon: <MdPrivacyTip className="text-2xl" />,
            title: "Permisos de la Aplicación",
            content: [
                "La aplicación solicita únicamente los permisos mínimos necesarios para su funcionamiento.",
                "No se accede a datos de otras aplicaciones instaladas en tu dispositivo.",
                "No se realizan llamadas de red ni se conecta a servicios externos.",
                "El almacenamiento local es utilizado exclusivamente para los datos de la aplicación."
            ]
        },
        {
            icon: <MdUpdate className="text-2xl" />,
            title: "Actualizaciones de Política",
            content: [
                "Esta Política de Privacidad puede ser actualizada ocasionalmente para reflejar cambios en la aplicación.",
                "Las actualizaciones serán notificadas a través de Google Play Store cuando descargues nuevas versiones.",
                "Se recomienda revisar esta política periódicamente.",
                "El uso continuado de la aplicación después de cambios constituye la aceptación de la nueva política."
            ]
        }
    ]

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">

                {/* Header con título principal */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Icono principal */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                            <div className="relative bg-gray-900 rounded-2xl p-6">
                                <FcDocument className="w-16 h-16 md:w-20 md:h-20 text-blue-400 group-hover:text-green-400 transition-all duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Política de Privacidad
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-green-500 mx-auto rounded-full mb-6"></div>

                    {/* Subtítulo */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed max-w-4xl mx-auto">
                        <span className="text-blue-400 font-medium">Calculadora para Cambio</span> por{' '}
                        <span className="text-green-400 font-medium">VOLQOR Studios</span>
                    </h2>

                    {/* Fecha de última actualización */}
                    <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8 px-4">
                        <FaCalendarAlt className="text-base md:text-lg flex-shrink-0" />
                        <span className="text-sm md:text-lg text-center">
                            1 de septiembre de 2025
                        </span>
                    </div>


                </div>

                {/* Secciones de la política de privacidad */}
                <div className="max-w-6xl mx-auto space-y-8">
                    {privacySections.map((section, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                            {/* Header de la sección */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="text-blue-400 group-hover:text-green-400 transition-colors duration-300">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                    {section.title}
                                </h3>
                            </div>

                            {/* Contenido de la sección */}
                            <ul className="space-y-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                {section.content.map((item, pIndex) => (
                                    <li
                                        key={pIndex}
                                        className="flex items-start space-x-3 leading-relaxed"
                                    >
                                        <span className="text-blue-400 text-lg mt-1 flex-shrink-0">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Efecto de brillo al hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Sección de contacto y información adicional */}
                <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-3 mb-6">
                                <MdSecurity className="text-green-400 text-3xl" />
                                <h3 className="text-2xl font-bold text-white">Compromiso con tu Privacidad</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-6">
                                "Calculadora para Cambio" ha sido diseñada con la privacidad como prioridad principal. 
                                Eso garantiza que toda tu información comercial permanezca segura y privada en tu dispositivo.
                            </p>

                            {/* Características de privacidad destacadas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="flex items-center space-x-3 text-green-400">
                                    <FaMobile className="text-xl" />
                                    <span>Solo almacenamiento local</span>
                                </div>
                                <div className="flex items-center space-x-3 text-blue-400">
                                    <FaUserShield className="text-xl" />
                                    <span>Sin recopilación de datos</span>
                                </div>
                                <div className="flex items-center space-x-3 text-purple-400">
                                    <MdSecurity className="text-xl" />
                                    <span>Sin conexión a internet</span>
                                </div>
                                <div className="flex items-center space-x-3 text-green-400">
                                    <FaShieldAlt className="text-xl" />
                                    <span>Control total del usuario</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Advertencia sobre cambios en la política */}
                <div className={`mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-3xl mx-auto p-6 bg-amber-900/20 border border-amber-500/30 rounded-2xl">
                        <div className="flex items-center justify-center mb-4">
                            <FaExclamationTriangle className="text-amber-400 text-2xl mr-3" />
                            <span className="text-amber-400 font-semibold text-lg">Importante</span>
                        </div>
                        <p className="text-amber-300 text-center leading-relaxed">
                            Esta Política de Privacidad puede ser modificada en futuras actualizaciones de la aplicación. 
                            Cualquier cambio será notificado a través de Google Play Store y entrará en vigor al actualizar la aplicación.
                        </p>
                    </div>
                </div>

                {/* Footer con información de VOLQOR Studios */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="space-y-4">
                        <div className="h-px w-64 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
                        <p className="text-gray-500 text-sm">
                            Desarrollado por <span className="text-blue-400 font-medium">VOLQOR Studios</span>
                        </p>
                        <p className="text-gray-600 text-xs">
                            Septiembre 2025 - Todos los derechos reservados
                        </p>
                    </div>
                </div>

            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30 delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-35 delay-2000"></div>

            {/* Estilos CSS personalizados */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    )
}

export default Doc