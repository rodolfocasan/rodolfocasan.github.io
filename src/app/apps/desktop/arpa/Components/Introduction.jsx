// src/app/apps/desktop/arpa/Components/Introduction.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaShieldVirus, FaShieldAlt, FaServer, FaTerminal, FaLinux, FaPython, FaGithub } from 'react-icons/fa'
import { MdDevices, MdRadar, MdBlock } from 'react-icons/md'
import { RiComputerLine, RiWifiLine } from 'react-icons/ri'
import { HiOutlineShieldExclamation } from 'react-icons/hi'





function Introduction() {
    // Estados para las animaciones
    const [isVisible, setIsVisible] = useState(false)
    const [logoLoaded, setLogoLoaded] = useState(true) // No hay logo externo, se carga inmediatamente

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Características principales de la aplicación
    const mainFeatures = [
        {
            icon: <MdRadar className="text-2xl" />,
            title: "Escaneo de Red",
            description: "Descubre dispositivos conectados en tu red local"
        },
        {
            icon: <FaShieldVirus className="text-2xl" />,
            title: "ARP Spoofing",
            description: "Técnicas avanzadas de manipulación de protocolo ARP"
        },
        {
            icon: <MdBlock className="text-2xl" />,
            title: "Desconexión Selectiva",
            description: "Desconecta dispositivos específicos de la red"
        },
        {
            icon: <FaTerminal className="text-2xl" />,
            title: "CLI Intuitiva",
            description: "Interfaz de línea de comandos fácil de usar"
        }
    ]

    // Tecnologías utilizadas
    const technologies = [
        "Python 3.10+",
        "ARP Protocol",
        "Network Analysis",
        "Linux Compatible",
        "Root Access"
    ]

    // Funcionalidades detalladas
    const detailedFeatures = [
        {
            category: "Análisis de Red",
            items: [
                { icon: <MdDevices />, text: "Listar dispositivos conectados" },
                { icon: <FaShieldVirus />, text: "Obtener direcciones IP y MAC" },
                { icon: <MdRadar />, text: "Escaneo automático de red local" },
                { icon: <RiWifiLine />, text: "Detección de gateway" }
            ]
        },
        {
            category: "Manipulación ARP",
            items: [
                { icon: <MdBlock />, text: "Desconectar dispositivos específicos" },
                { icon: <FaShieldAlt />, text: "ARP spoofing continuo" },
                { icon: <HiOutlineShieldExclamation />, text: "Desconexión masiva" },
                { icon: <FaServer />, text: "Restauración automática" }
            ]
        },
        {
            category: "Requisitos Sistema",
            items: [
                { icon: <FaPython />, text: "Python 3.10.13 o superior" },
                { icon: <FaLinux />, text: "Sistema operativo Linux" },
                { icon: <FaTerminal />, text: "Permisos de administrador" },
                { icon: <RiComputerLine />, text: "Acceso ROOT requerido" }
            ]
        }
    ]

    // Comandos de ejemplo
    const commands = [
        {
            command: "sudo python3 main.py -l",
            description: "Listar dispositivos conectados a la red"
        },
        {
            command: "sudo python3 main.py -k <IP o MAC>",
            description: "Desconectar dispositivo específico"
        },
        {
            command: "sudo python3 main.py -k all",
            description: "Desconectar todos los dispositivos"
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

                    {/* Logo/Icono de la aplicación */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            {/* Logo principal con diseño personalizado */}
                            <div className="relative">
                                {/* Borde animado del logo */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                                <div className="relative bg-gray-900 rounded-2xl p-6">
                                    <FaShieldVirus className="w-16 h-16 md:w-20 md:h-20 text-green-400 group-hover:text-blue-400 transition-all duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        ARPA
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Subtítulo */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed max-w-4xl mx-auto">
                        Herramienta de <span className="text-green-400 font-medium">Análisis y Manipulación</span> de Red con{' '}
                        <span className="text-blue-400 font-medium">ARP Spoofing</span> y{' '}
                        <span className="text-purple-400 font-medium">Control Avanzado</span>
                    </h2>

                    {/* Descripción principal */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Desarrollada en <span className="text-green-400 font-medium">Python</span> para{' '}
                        <span className="text-blue-400 font-medium">sistemas Linux</span>, esta herramienta permite analizar redes locales,
                        listar dispositivos conectados y realizar técnicas de{' '}
                        <span className="text-purple-400 font-medium">manipulación ARP</span> con fines educativos y de seguridad.
                    </p>

                    {/* Advertencia de seguridad */}
                    <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-2xl max-w-2xl mx-auto">
                        <div className="flex items-center justify-center mb-2">
                            <HiOutlineShieldExclamation className="text-red-400 text-2xl mr-2" />
                            <span className="text-red-400 font-semibold">Uso Ético Requerido</span>
                        </div>
                        <p className="text-red-300 text-sm">
                            Esta herramienta debe usarse únicamente en redes donde tengas permiso explícito. 
                            El uso no autorizado puede ser ilegal.
                        </p>
                    </div>
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

                {/* Sección de instalación */}
                <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent">
                        Instalación
                    </h3>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <span className="text-green-400 mr-2">1.</span>
                                Clonar el repositorio
                            </h4>
                            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm border border-gray-700/30">
                                <div><span className="text-green-400">git clone</span> <span className="text-blue-400">https://github.com/rodolfocasan/arpa.git</span></div>
                            </div>
                        </div>

                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <span className="text-blue-400 mr-2">2.</span>
                                Instalar dependencias
                            </h4>
                            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm border border-gray-700/30">
                                <div><span className="text-green-400">cd</span> <span className="text-blue-400">arpa</span></div>
                                <div><span className="text-green-400">pip install</span> <span className="text-blue-400">-r DOCs/requirements.txt</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comandos de uso */}
                <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Comandos de Uso
                    </h3>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {commands.map((cmd, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 group"
                            >
                                <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                                    {cmd.description}
                                </h4>
                                {/* Comando */}
                                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm border border-gray-700/30">
                                    <span className="text-green-400">$ </span>
                                    <span className="text-gray-300">{cmd.command}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón de GitHub - Posicionado después de instalación y comandos */}
                <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <a
                        href="https://github.com/rodolfocasan/arpa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 hover:border-green-400 rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105"
                    >
                        <FaGithub className="text-2xl text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                        <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                            Ver repositorio en GitHub
                        </span>
                        <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </div>

                {/* Tecnologías utilizadas */}
                <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Tecnologías y Requisitos
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
                <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Funcionalidades Técnicas
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