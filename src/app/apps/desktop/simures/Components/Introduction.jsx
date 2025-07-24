// src/app/apps/desktop/simures/Components/Introduction.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaDesktop, FaShieldAlt, FaSlidersH, FaEye, FaCode, FaBell, FaLinux, FaUsers, FaCogs, FaWatchmanMonitoring, FaAdjust } from 'react-icons/fa'
import { MdMonitor, MdSettings, MdSecurity, Md1xMobiledata, MdDisplaySettings, MdTune, MdDevices, MdComputer } from 'react-icons/md'
import { RiTerminalLine, RiCommandLine, RiSettings3Line } from 'react-icons/ri'
import { HiOutlineTerminal } from 'react-icons/hi'





function Introduction() {
    const favicon_url = "https://raw.githubusercontent.com/rodolfocasan/simures/v1.1.1/Storage/Icons/favicon_01.png"

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
                console.warn('Error al fetchear el logo de SimuRES:', error)
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

    // Características principales de SimuRES
    const mainFeatures = [
        {
            icon: <FaDesktop className="text-2xl" />,
            title: "Interfaz Gráfica",
            description: "GUI intuitiva con selector de pantallas múltiples y controles precisos"
        },
        {
            icon: <RiTerminalLine className="text-2xl" />,
            title: "Línea de Comandos",
            description: "CLI potente para cambios rápidos e integración con scripts"
        },
        {
            icon: <Md1xMobiledata className="text-2xl" />,
            title: "Escalado Preciso",
            description: "Control de escalado de 1.0x hasta 20.0x con precisión de 0.1x"
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Sistema Seguro",
            description: "Manejo robusto de señales y restauración automática"
        }
    ]

    // Tecnologías y herramientas utilizadas
    const technologies = [
        "Python",
        "Tkinter",
        "Xrandr",
        "X11",
        "Linux",
        "CLI"
    ]

    // Casos de uso principales
    const useCases = [
        {
            icon: <FaCode className="text-2xl" />,
            title: "Desarrolladores",
            description: "Prueba interfaces en diferentes resoluciones sin cambiar hardware",
            color: "green"
        },
        {
            icon: <FaUsers className="text-2xl" />,
            title: "Usuarios Finales",
            description: "Ajustes temporales de escalado para necesidades específicas",
            color: "blue"
        },
        {
            icon: <MdComputer className="text-2xl" />,
            title: "Demostraciones",
            description: "Proyectos con requisitos específicos de visualización",
            color: "purple"
        }
    ]

    // Funcionalidades detalladas por categoría
    const detailedFeatures = [
        {
            category: "Modo GUI",
            color: "green",
            items: [
                { icon: <MdMonitor />, text: "Selector de pantallas múltiples" },
                { icon: <FaSlidersH />, text: "Slider de precisión (1.0x - 20.0x)" },
                { icon: <FaEye />, text: "Indicadores visuales de estado" },
                { icon: <MdSettings />, text: "Restauración automática al cerrar" },
                { icon: <FaBell />, text: "Sistema de notificaciones integrado" }
            ]
        },
        {
            category: "Modo CLI",
            color: "blue",
            items: [
                { icon: <RiCommandLine />, text: "Cambios rápidos desde terminal" },
                { icon: <FaCogs />, text: "Integración con scripts" },
                { icon: <HiOutlineTerminal />, text: "Ideal para uso remoto/SSH" },
                { icon: <MdDisplaySettings />, text: "Parámetros flexibles" },
                { icon: <RiSettings3Line />, text: "Control granular de monitores" }
            ]
        },
        {
            category: "Seguridad",
            color: "purple",
            items: [
                { icon: <FaShieldAlt />, text: "Manejo robusto de señales (SIGINT, SIGTERM)" },
                { icon: <MdSecurity />, text: "Restauración de resolución en fallos" },
                { icon: <MdTune />, text: "Validación de parámetros estricta" },
                { icon: <FaWatchmanMonitoring />, text: "Monitoreo de estado del sistema" },
                { icon: <MdDevices />, text: "Detección automática de dispositivos" }
            ]
        }
    ]

    // Comandos de ejemplo
    const exampleCommands = [
        {
            command: "python main.py",
            description: "Abrir interfaz gráfica"
        },
        {
            command: "python main.py --start 1.5",
            description: "Aplicar escala 1.5x al monitor principal"
        },
        {
            command: "python main.py --start 1.8 --output HDMI-1",
            description: "Aplicar escala 1.8x a monitor específico"
        },
        {
            command: "python main.py --list-outputs",
            description: "Listar todos los monitores detectados"
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

                    {/* Logo de SimuRES */}
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
                                        alt="SimuRES Logo"
                                        className={`w-20 h-20 md:w-28 md:h-28 rounded-xl transition-all duration-500 group-hover:scale-105 ${logoLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => setLogoLoaded(true)}
                                        onError={() => {
                                            setLogoLoaded(true)
                                            console.warn('Error al cargar el logo de SimuRES')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        SimuRES
                    </h1>

                    {/* Subtítulo descriptivo */}
                    <div className="mb-6">
                        <span className="text-2xl md:text-3xl text-gray-300 font-light">
                            Simulador de <span className="text-green-400 font-medium">Resolución</span>
                        </span>
                    </div>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Descripción principal */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed max-w-4xl mx-auto">
                        Herramienta <span className="text-green-400 font-medium">multiplataforma</span> para{' '}
                        <span className="text-blue-400 font-medium">modificar y simular</span> resoluciones de pantalla mediante{' '}
                        <span className="text-purple-400 font-medium">escalado dinámico</span>
                    </h2>

                    {/* Descripción detallada */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Con <span className="text-green-400 font-medium">interfaz gráfica intuitiva</span> y{' '}
                        <span className="text-blue-400 font-medium">línea de comandos potente</span>, SimuRES es la herramienta perfecta
                        para desarrolladores, usuarios y proyectos que requieren{' '}
                        <span className="text-purple-400 font-medium">ajustes temporales de visualización</span>.
                    </p>
                </div>

                {/* Casos de uso principales */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Icono del caso de uso */}
                            <div className={`text-${useCase.color}-400 mb-4 group-hover:text-blue-400 transition-colors duration-300`}>
                                {useCase.icon}
                            </div>

                            {/* Título */}
                            <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
                                {useCase.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {useCase.description}
                            </p>

                            {/* Efecto de brillo al hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Características principales en grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {mainFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Icono de la característica */}
                            <div className="text-blue-400 mb-4 group-hover:text-green-400 transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Título de la característica */}
                            <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
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

                {/* Comandos de ejemplo */}
                <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Comandos de Ejemplo
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {exampleCommands.map((cmd, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300"
                            >
                                {/* Comando */}
                                <div className="flex items-center mb-3">
                                    <RiTerminalLine className="text-green-400 mr-3 text-lg" />
                                    <code className="text-green-400 font-mono text-sm md:text-base bg-gray-800/50 px-3 py-1 rounded-lg flex-1">
                                        {cmd.command}
                                    </code>
                                </div>
                                
                                {/* Descripción del comando */}
                                <p className="text-gray-400 text-sm ml-6">
                                    {cmd.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tecnologías utilizadas */}
                <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Stack Tecnológico
                    </h3>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {technologies.map((tech, index) => (
                            <span
                                key={tech}
                                className={`px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 
                                           hover:border-blue-400 hover:text-blue-400 hover:bg-gray-800/70 
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
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent">
                        Funcionalidades Completas
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {detailedFeatures.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-500"
                            >
                                {/* Título de la sección */}
                                <h4 className={`text-xl font-bold mb-6 text-center bg-gradient-to-r from-${section.color}-400 to-blue-500 bg-clip-text text-transparent`}>
                                    {section.category}
                                </h4>

                                {/* Lista de funcionalidades */}
                                <ul className="space-y-4">
                                    {section.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                                        >
                                            <span className={`text-${section.color}-400 group-hover:text-green-400 transition-colors duration-300 mt-1 flex-shrink-0`}>
                                                {item.icon}
                                            </span>
                                            <span className="text-sm leading-relaxed">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Información adicional - Valores permitidos */}
                <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h4 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                            Especificaciones Técnicas
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <MdTune className="text-green-400" />
                                    <span className="text-gray-300 font-medium">Rango de Escalado:</span>
                                    <span className="text-blue-400">1.0x - 20.0x</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaAdjust className="text-blue-400" />
                                    <span className="text-gray-300 font-medium">Precisión:</span>
                                    <span className="text-purple-400">0.1x</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <FaLinux className="text-purple-400" />
                                    <span className="text-gray-300 font-medium">Plataforma:</span>
                                    <span className="text-green-400">Linux (X11)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MdSecurity className="text-green-400" />
                                    <span className="text-gray-300 font-medium">Cambios:</span>
                                    <span className="text-blue-400">Temporales</span>
                                </div>
                            </div>
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