// src/app/apps/desktop/pywkit-browser/Components/Introduction.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaGlobe, FaArrowLeft, FaArrowRight, FaRedo, FaStop, FaUser, FaDownload, FaDesktop, FaPython, FaGithub, FaTerminal, FaCog } from 'react-icons/fa'
import { MdRefresh, MdSettings, MdWeb, MdFolder, MdInstallDesktop, MdPlayArrow } from 'react-icons/md'
import { IoMdGlobe } from 'react-icons/io'
import { RiWindowLine } from 'react-icons/ri'





function Introduction() {
    // Estados para las animaciones
    const [isVisible, setIsVisible] = useState(false)

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Características principales del navegador
    const mainFeatures = [
        {
            icon: <FaGlobe className="text-2xl" />,
            title: "Navegación Completa",
            description: "Funciones básicas de navegación: adelante, atrás, recargar y detener"
        },
        {
            icon: <MdWeb className="text-2xl" />,
            title: "Barra Inteligente",
            description: "Autocompletado de protocolo y navegación directa por URL"
        },
        {
            icon: <FaUser className="text-2xl" />,
            title: "Gestión de Perfiles",
            description: "Almacenamiento local persistente de configuraciones"
        },
        {
            icon: <FaDesktop className="text-2xl" />,
            title: "Interfaz Intuitiva",
            description: "Tooltips y estados visuales para mejor experiencia"
        }
    ]

    // Tecnologías utilizadas
    const technologies = [
        "Python 3",
        "PyQt/PySide",
        "WebEngine",
        "JSON Storage",
        "Virtual Environment"
    ]

    // Funcionalidades detalladas
    const detailedFeatures = [
        {
            category: "Navegación Web",
            items: [
                { icon: <FaArrowLeft />, text: "Botón atrás con historial" },
                { icon: <FaArrowRight />, text: "Botón adelante dinámico" },
                { icon: <FaRedo />, text: "Recarga de páginas" },
                { icon: <FaStop />, text: "Detener carga de contenido" }
            ]
        },
        {
            category: "Características",
            items: [
                { icon: <MdWeb />, text: "Autocompletado de protocolo" },
                { icon: <RiWindowLine />, text: "Título dinámico de ventana" },
                { icon: <MdRefresh />, text: "Indicador visual de carga" },
                { icon: <MdSettings />, text: "Estados de botones inteligentes" }
            ]
        },
        {
            category: "Gestión",
            items: [
                { icon: <FaUser />, text: "Perfiles persistentes" },
                { icon: <MdFolder />, text: "Almacenamiento local" },
                { icon: <FaCog />, text: "Configuración guardada" },
                { icon: <IoMdGlobe />, text: "Interfaz personalizable" }
            ]
        }
    ]

    // Pasos de instalación
    const installationSteps = [
        {
            step: "1",
            title: "Clonar Repositorio",
            code: "git clone https://github.com/rodolfocasan/pywkit-browser.git\ncd pywkit-browser",
            icon: <FaGithub className="text-xl" />
        },
        {
            step: "2",
            title: "Entorno Virtual",
            code: "python -m venv venv\n\n# Windows\nvenv\\Scripts\\activate\n\n# Linux/macOS\nsource venv/bin/activate",
            icon: <FaTerminal className="text-xl" />
        },
        {
            step: "3",
            title: "Instalar Dependencias",
            code: "pip3 install -r DOCs/requirements.txt",
            icon: <FaDownload className="text-xl" />
        },
        {
            step: "4",
            title: "Ejecutar Navegador",
            code: "python3 main.py",
            icon: <MdPlayArrow className="text-xl" />
        }
    ]

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">

                {/* Header con logo y título principal */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Icono de navegador como logo */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            {/* Borde animado del logo */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                            <div className="relative bg-gray-900 rounded-2xl p-6">
                                <FaPython className="w-16 h-16 md:w-20 md:h-20 text-green-400 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Pywkit Browser
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Subtítulo */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed max-w-4xl mx-auto">
                        Navegador web <span className="text-green-400 font-medium">simple y funcional</span> desarrollado en{' '}
                        <span className="text-blue-400 font-medium">Python</span> con{' '}
                        <span className="text-purple-400 font-medium">gestión de perfiles</span>
                    </h2>

                    {/* Descripción principal */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Un navegador de escritorio construido con <span className="text-green-400 font-medium">PyQt/PySide</span> que ofrece
                        funciones básicas de navegación, gestión de perfiles persistente y una interfaz de usuario{' '}
                        <span className="text-purple-400 font-medium">intuitiva y personalizable</span>.
                    </p>
                </div>

                {/* Características principales en grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {mainFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Icono de la característica */}
                            <div className="text-green-400 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Título de la característica */}
                            <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {feature.description}
                            </p>

                            {/* Efecto de brillo al hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Tecnologías utilizadas */}
                <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Tecnologías Utilizadas
                    </h3>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {technologies.map((tech, index) => (
                            <span
                                key={tech}
                                className={`px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 
                                           hover:border-green-400 hover:text-green-400 hover:bg-gray-800/70 
                                           transition-all duration-300 cursor-default transform hover:scale-105 animate-fade-in`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Funcionalidades detalladas */}
                <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Funcionalidades Completas
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {detailedFeatures.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500"
                            >
                                {/* Título de la sección */}
                                <h4 className="text-xl font-bold text-white mb-6 text-center">
                                    {section.category}
                                </h4>

                                {/* Lista de funcionalidades */}
                                <ul className="space-y-4">
                                    {section.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                                        >
                                            <span className="text-blue-400 group-hover:text-green-400 transition-colors duration-300">
                                                {item.icon}
                                            </span>
                                            <span className="text-sm">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección de instalación */}
                <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent">
                        Instalación y Uso
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {installationSteps.map((step, stepIndex) => (
                            <div
                                key={stepIndex}
                                className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500"
                            >
                                {/* Header del paso */}
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold">
                                        {step.step}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-purple-400">
                                            {step.icon}
                                        </span>
                                        <h4 className="text-lg font-semibold text-white">
                                            {step.title}
                                        </h4>
                                    </div>
                                </div>

                                {/* Bloque de código */}
                                <div className="bg-black/40 border border-gray-600/50 rounded-xl p-4 overflow-x-auto">
                                    <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                                        <code>{step.code}</code>
                                    </pre>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nota adicional */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center space-x-3 bg-gray-800/30 border border-gray-700/50 rounded-full px-6 py-3">
                            <MdInstallDesktop className="text-blue-400 text-xl" />
                            <span className="text-gray-300 text-sm">
                                <span className="text-green-400 font-medium">Navegador de escritorio</span> multiplataforma compatible con{' '}
                                <span className="text-purple-400 font-medium">Windows, Linux y macOS</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-1000"></div>
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

export default Introduction