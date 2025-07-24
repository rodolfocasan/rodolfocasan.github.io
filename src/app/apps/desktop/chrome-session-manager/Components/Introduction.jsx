// src/app/apps/desktop/chrome-session-manager/Components/Introduction.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaChrome, FaDesktop, FaFolderOpen, FaTrash, FaCog, FaHdd, FaPlay, FaPlus, FaPython } from 'react-icons/fa'
import { MdStorage, MdSettings, MdLayers, MdMonitor } from 'react-icons/md'
import { RiComputerLine } from 'react-icons/ri'
import { SiPython } from 'react-icons/si'





function Introduction() {
    const favicon_url = "https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/v2.0.0/Storage/Settings/icons/favicon.png"

    // Estados para las animaciones
    const [isVisible, setIsVisible] = useState(false)
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [logoUrl, setLogoUrl] = useState(null)

    // Fetch de la imagen del logo
    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await fetch(favicon_url)
                if (response.ok) {
                    const blob = await response.blob()
                    const imageUrl = URL.createObjectURL(blob)
                    setLogoUrl(imageUrl)
                    setLogoLoaded(true)
                } else {
                    throw new Error('Error al cargar la imagen')
                }
            } catch (error) {
                console.warn('Error al fetchear el logo de Chrome Session Manager:', error)
                setLogoLoaded(true) // Marcamos como cargado para ocultar el loader
            }
        }

        fetchLogo()

        // Cleanup: liberar la URL del objeto cuando se desmonte el componente
        return () => {
            if (logoUrl) {
                URL.revokeObjectURL(logoUrl)
            }
        }
    }, [])

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Características principales de la aplicación
    const mainFeatures = [
        {
            icon: <FaChrome className="text-2xl" />,
            title: "Sesiones Múltiples",
            description: "Gestiona múltiples sesiones paralelas de Google Chrome"
        },
        {
            icon: <MdLayers className="text-2xl" />,
            title: "Perfiles Independientes",
            description: "Cada sesión tiene su propio perfil y configuración"
        },
        {
            icon: <FaDesktop className="text-2xl" />,
            title: "Interfaz Intuitiva",
            description: "Aplicación de escritorio con interfaz gráfica fácil de usar"
        },
        {
            icon: <MdStorage className="text-2xl" />,
            title: "Gestión de Almacenamiento",
            description: "Monitorea el uso de espacio y administra las sesiones"
        }
    ]

    // Tecnologías utilizadas
    const technologies = [
        "Python 3.10+",
        "Tkinter GUI",
        "JSON Storage",
        "File Management",
        "Desktop App"
    ]

    // Funcionalidades detalladas
    const detailedFeatures = [
        {
            category: "Gestión de Sesiones",
            items: [
                { icon: <FaPlus />, text: "Crear nuevas sesiones personalizadas" },
                { icon: <FaPlay />, text: "Ejecutar sesiones paralelas" },
                { icon: <FaTrash />, text: "Eliminar sesiones existentes" },
                { icon: <MdLayers />, text: "Perfiles completamente independientes" }
            ]
        },
        {
            category: "Configuración",
            items: [
                { icon: <FaCog />, text: "Configurar ruta de Chrome" },
                { icon: <MdSettings />, text: "Interfaz de configuración gráfica" },
                { icon: <FaFolderOpen />, text: "Ver carpeta de sesiones" },
                { icon: <RiComputerLine />, text: "Optimizado para escritorio" }
            ]
        },
        {
            category: "Almacenamiento",
            items: [
                { icon: <FaHdd />, text: "Monitoreo de uso de disco" },
                { icon: <MdStorage />, text: "Información de espacio libre" },
                { icon: <FaFolderOpen />, text: "Gestión de archivos JSON" },
                { icon: <MdMonitor />, text: "Vista detallada del almacenamiento" }
            ]
        }
    ]

    // Estructura de archivos del proyecto
    const fileStructure = [
        { file: "main.py", description: "Código principal de la aplicación" },
        { file: "constants.json", description: "Configuración principal del programa" },
        { file: "sessions.json", description: "Información de sesiones creadas" },
        { file: "Storage/Sessions/", description: "Datos de cada sesión independiente" }
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

                    {/* Logo de la aplicación */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            {/* Logo principal con loader integrado */}
                            <div className="relative">
                                {/* Borde animado del logo */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                                <div className="relative bg-gray-900 rounded-2xl p-2">
                                    {/* Loader CSS mientras carga */}
                                    {!logoLoaded && (
                                        <div className="absolute inset-2 flex items-center justify-center bg-gray-800 rounded-xl">
                                            <div className="w-8 h-8 border-4 border-green-400/30 border-t-green-400 rounded-full animate-spin"></div>
                                        </div>
                                    )}

                                    <img
                                        src={favicon_url}
                                        alt="Chrome Session Manager Logo"
                                        className={`w-20 h-20 md:w-28 md:h-28 rounded-xl transition-all duration-500 group-hover:scale-105 ${logoLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => setLogoLoaded(true)}
                                        onError={() => {
                                            setLogoLoaded(true)
                                            console.warn('Error al cargar el logo de Chrome Session Manager')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Chrome Session Manager
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Subtítulo */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed max-w-4xl mx-auto">
                        Aplicación de <span className="text-green-400 font-medium">escritorio</span> para gestionar{' '}
                        <span className="text-blue-400 font-medium">múltiples sesiones</span> paralelas de{' '}
                        <span className="text-purple-400 font-medium">Google Chrome</span>
                    </h2>

                    {/* Descripción principal */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Desarrollada con <span className="text-green-400 font-medium">Python 3.10</span> y{' '}
                        <span className="text-blue-400 font-medium">Tkinter</span>, esta aplicación permite crear, ejecutar y eliminar
                        sesiones independientes de Chrome, cada una con su{' '}
                        <span className="text-purple-400 font-medium">propio perfil y configuración</span>, todo desde una interfaz gráfica intuitiva.
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

                {/* Estructura de archivos */}
                <div className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent">
                        Estructura del Proyecto
                    </h3>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {fileStructure.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300 group"
                                    >
                                        <FaFolderOpen className="text-blue-400 text-lg mt-1 group-hover:text-green-400 transition-colors duration-300" />
                                        <div className="flex-1">
                                            <h5 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                                                {item.file}
                                            </h5>
                                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Requisitos y configuración */}
                <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                        Requisitos y Configuración
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Requisitos */}
                        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-green-400/30 transition-all duration-500">
                            <div className="flex items-center space-x-3 mb-6">
                                <SiPython className="text-green-400 text-2xl" />
                                <h4 className="text-xl font-bold text-white">Requisitos del Sistema</h4>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Python 3.10 o superior</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Google Chrome instalado</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Sistema operativo compatible</span>
                                </li>
                            </ul>
                        </div>

                        {/* Configuración */}
                        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500">
                            <div className="flex items-center space-x-3 mb-6">
                                <FaCog className="text-blue-400 text-2xl" />
                                <h4 className="text-xl font-bold text-white">Configuración Inicial</h4>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Configurar ruta de Chrome</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Interfaz gráfica intuitiva</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-300">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Configuración desde el menú</span>
                                </li>
                            </ul>
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