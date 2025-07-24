// src/app/apps/mobile/huevos-vendedor/Components/Introduction.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaShoppingCart, FaBoxes, FaUsers, FaChartLine, FaCalendarAlt, FaTruck, FaEgg, FaMobile } from 'react-icons/fa'
import { MdInventory, MdDeliveryDining, MdAnalytics } from 'react-icons/md'
import { IoIosStats } from 'react-icons/io'
import { RiCustomerService2Line } from 'react-icons/ri'





function Introduction() {
    const favicon_url = "https://raw.githubusercontent.com/rodolfocasan/huevos-larural-vendedor-app/v1.0.9/assets/icon.png"

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
                console.warn('Error al fetchear el logo de Huevos Vendedor:', error)
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
            icon: <FaShoppingCart className="text-2xl" />,
            title: "Control de Ventas",
            description: "Registra y gestiona todas tus ventas diarias de forma fácil y rápida"
        },
        {
            icon: <MdInventory className="text-2xl" />,
            title: "Inventario Digital",
            description: "Lleva el control exacto de tu inventario de huevos en tiempo real"
        },
        {
            icon: <FaUsers className="text-2xl" />,
            title: "Gestión de Clientes",
            description: "Administra la información de tus clientes y su historial de compras"
        },
        {
            icon: <FaChartLine className="text-2xl" />,
            title: "Reportes y Estadísticas",
            description: "Visualiza reportes detallados de tus ventas y rendimiento"
        },
        {
            icon: <FaCalendarAlt className="text-2xl" />,
            title: "Programación de Entregas",
            description: "Organiza y programa las entregas a tus clientes"
        },
        {
            icon: <FaTruck className="text-2xl" />,
            title: "Control Logístico",
            description: "Gestiona el stock, entregas y devoluciones de manera eficiente"
        }
    ]

    // Tecnologías utilizadas
    const technologies = [
        "React Native",
        "Expo",
        "Google Maps API",
        "AsyncStorage",
        "React Navigation",
        "EAS Build"
    ]

    // Funcionalidades detalladas
    const detailedFeatures = [
        {
            category: "Gestión de Ventas",
            items: [
                { icon: <FaShoppingCart />, text: "Registro de ventas diarias" },
                { icon: <FaEgg />, text: "Control de productos huevos" },
                { icon: <IoIosStats />, text: "Seguimiento de transacciones" },
                { icon: <MdAnalytics />, text: "Análisis de rendimiento" }
            ]
        },
        {
            category: "Inventario y Stock",
            items: [
                { icon: <FaBoxes />, text: "Control de inventario" },
                { icon: <MdInventory />, text: "Stock en tiempo real" },
                { icon: <FaTruck />, text: "Gestión de entregas" },
                { icon: <MdDeliveryDining />, text: "Control de devoluciones" }
            ]
        },
        {
            category: "Clientes y Reportes",
            items: [
                { icon: <FaUsers />, text: "Base de datos de clientes" },
                { icon: <RiCustomerService2Line />, text: "Historial de compras" },
                { icon: <FaChartLine />, text: "Reportes detallados" },
                { icon: <FaMobile />, text: "Optimizado para móvil" }
            ]
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
                                        alt="Huevos Vendedor App Logo"
                                        className={`w-20 h-20 md:w-28 md:h-28 rounded-xl transition-all duration-500 group-hover:scale-105 ${logoLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => setLogoLoaded(true)}
                                        onError={() => {
                                            setLogoLoaded(true)
                                            console.warn('Error al cargar el logo de Huevos Vendedor App')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtítulo de presentación */}
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
                        Aplicación desarrollada para <span className="text-blue-400 font-medium">vendedores</span>
                    </h2>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Huevos La Rural
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Descripción principal */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                        Aplicación desarrollada para los{' '}
                        <span className="text-green-400 font-medium">vendedores de Huevos La Rural</span>, diseñada para facilitar el{' '}
                        <span className="text-blue-400 font-medium">conteo y administración de ventas</span> de cada vendedor. Esta herramienta permite
                        gestionar transacciones de manera{' '}
                        <span className="text-purple-400 font-medium">eficiente y precisa</span>.
                    </p>

                    {/* Descripción técnica */}
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                        Desarrollada con <span className="text-green-400 font-medium">React Native</span> y{' '}
                        <span className="text-blue-400 font-medium">Google Maps API</span>, esta aplicación permite a los vendedores
                        gestionar sus transacciones de manera eficiente y precisa con funcionalidades de{' '}
                        <span className="text-purple-400 font-medium">inventario y logística avanzada</span>.
                    </p>
                </div>

                {/* Características principales en grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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