// src/app/apps/desktop/arpa-noroot/Components/Introduction.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaNetworkWired, FaShieldAlt, FaSearch, FaPython, FaTerminal, FaWifi, FaServer, FaExclamationTriangle, FaCode, FaUserShield, FaBolt } from 'react-icons/fa'
import { MdNetworkCheck, MdSpeed, MdWarning, MdSettings, MdDeviceHub, MdAnalytics } from 'react-icons/md'
import { Ri4kFill } from 'react-icons/ri'





function Introduction() {
    // Estados para las animaciones
    const [isVisible, setIsVisible] = useState(false)

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Características principales de la herramienta
    const mainFeatures = [
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Sin Privilegios Root",
            description: "Funciona con permisos de usuario normal, sin necesidad de acceso administrativo"
        },
        {
            icon: <MdNetworkCheck className="text-2xl" />,
            title: "Análisis de Red",
            description: "Escanea y mapea dispositivos en la red local con direcciones IP y MAC"
        },
        {
            icon: <MdSpeed className="text-2xl" />,
            title: "Ataques Paralelos",
            description: "Soporte para disrumpir múltiples dispositivos simultáneamente"
        },
        {
            icon: <FaBolt className="text-2xl" />,
            title: "Multi-Vector",
            description: "Técnicas combinadas de TCP, UDP, ICMP y saturación de ancho de banda"
        }
    ]

    // Tecnologías utilizadas
    const technologies = [
        "Python 3.6+",
        "Linux",
        "TCP/UDP Sockets",
        "Threading",
        "Network Analysis"
    ]

    // Técnicas implementadas
    const attackVectors = [
        {
            category: "Network Discovery",
            items: [
                { icon: <FaSearch />, text: "Escaneo de red local" },
                { icon: <MdDeviceHub />, text: "Detección de dispositivos" },
                { icon: <FaNetworkWired />, text: "Mapeo IP y MAC" },
                { icon: <MdAnalytics />, text: "Análisis de conectividad" }
            ]
        },
        {
            category: "Disrupción TCP/UDP",
            items: [
                { icon: <FaServer />, text: "Connection flood TCP" },
                { icon: <FaWifi />, text: "UDP packet flooding" },
                { icon: <MdSpeed />, text: "Múltiples threads concurrentes" },
                { icon: <FaBolt />, text: "Puertos comunes objetivo" }
            ]
        },
        {
            category: "Saturación Avanzada",
            items: [
                { icon: <FaNetworkWired />, text: "Saturación de ancho de banda" },
                { icon: <Ri4kFill />, text: "ICMP flood (ping)" },
                { icon: <FaServer />, text: "Requests HTTP con headers grandes" },
                { icon: <MdSettings />, text: "Keep-alive persistente" }
            ]
        }
    ]

    // Advertencias legales y éticas
    const legalWarnings = [
        {
            type: "Uso Permitido",
            color: "green",
            items: [
                "Pruebas de penetración autorizadas",
                "Auditorías de seguridad con consentimiento",
                "Investigación académica controlada",
                "Testing en redes propias"
            ]
        },
        {
            type: "Uso Prohibido",
            color: "red",
            items: [
                "Ataques sin autorización",
                "Disrupción de servicios críticos",
                "Actividades maliciosas",
                "Violación de términos de servicio"
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
                            {/* Logo principal con efecto de hacking */}
                            <div className="relative">
                                {/* Borde animado del logo */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                                <div className="relative bg-gray-900 rounded-2xl p-4">
                                    <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 rounded-xl group-hover:scale-105 transition-all duration-500">
                                        <FaShieldAlt className="text-4xl md:text-5xl text-green-400 group-hover:text-blue-400 transition-colors duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        ARPA No Root
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Subtítulo */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed max-w-4xl mx-auto">
                        Herramienta de <span className="text-green-400 font-medium">análisis y disrupción de red</span> sin{' '}
                        <span className="text-blue-400 font-medium">permisos de administrador</span> para{' '}
                        <span className="text-purple-400 font-medium">pruebas de seguridad</span>
                    </h2>

                    {/* Advertencia legal prominente */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-center mb-4">
                                <FaExclamationTriangle className="text-red-400 text-2xl mr-3" />
                                <span className="text-red-400 font-bold text-lg">ADVERTENCIA LEGAL</span>
                            </div>
                            <p className="text-gray-300 text-center leading-relaxed">
                                <span className="text-red-400 font-semibold">IMPORTANTE:</span> Esta herramienta está diseñada únicamente para{' '}
                                <span className="text-green-400">fines educativos</span> y{' '}
                                <span className="text-blue-400">pruebas de seguridad autorizadas</span>.
                                El uso no autorizado puede ser ilegal.
                            </p>
                        </div>
                    </div>

                    {/* Descripción principal */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Desarrollada en <span className="text-green-400 font-medium">Python</span> para{' '}
                        <span className="text-blue-400 font-medium">sistemas Linux</span>, utiliza técnicas de saturación de recursos
                        en lugar de ARP spoofing para analizar y disrumpir dispositivos en{' '}
                        <span className="text-purple-400 font-medium">redes locales</span> sin privilegios root.
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

                {/* Técnicas de ataque implementadas */}
                <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Técnicas Implementadas
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {attackVectors.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500"
                            >
                                {/* Título de la sección */}
                                <h4 className="text-xl font-bold text-white mb-6 text-center">
                                    {section.category}
                                </h4>

                                {/* Lista de técnicas */}
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

                {/* Instalación */}
                <div className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Instalación
                    </h3>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Paso 1: Clonación del repositorio */}
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <FaCode className="text-green-400 mr-3 text-xl" />
                                <h4 className="text-white font-semibold text-lg">1. Clonar el Repositorio</h4>
                            </div>
                            <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm">
                                <div className="text-green-400 mb-2">git clone https://github.com/rodolfocasan/arpa-noroot.git</div>
                                <div className="text-blue-400">cd arpa-noroot</div>
                            </div>
                        </div>

                        {/* Paso 2: Verificación de Python */}
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <FaPython className="text-blue-400 mr-3 text-xl" />
                                <h4 className="text-white font-semibold text-lg">2. Verificar Python 3.6+</h4>
                            </div>
                            <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm">
                                <div className="text-blue-400 mb-2">python3 --version</div>
                                <div className="text-gray-400"># Debe mostrar Python 3.6 o superior</div>
                            </div>
                        </div>

                        {/* Paso 3: Ejecutar */}
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <FaTerminal className="text-purple-400 mr-3 text-xl" />
                                <h4 className="text-white font-semibold text-lg">3. Ejecutar Herramienta</h4>
                            </div>
                            <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm">
                                <div className="text-purple-400 mb-2">python3 main.py -h</div>
                                <div className="text-gray-400"># Sin dependencias externas requeridas</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comandos de uso completos */}
                <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Comandos de Uso
                    </h3>

                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Sección de ayuda */}
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                            <div className="flex items-center mb-4">
                                <MdSettings className="text-gray-400 mr-3 text-xl" />
                                <h4 className="text-white font-semibold text-lg">Mostrar Ayuda</h4>
                            </div>
                            <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm">
                                <div className="text-green-400 mb-2">python3 main.py -h</div>
                                <div className="text-green-400">python3 main.py --help</div>
                            </div>
                            <p className="text-gray-400 text-sm mt-3">Muestra todas las opciones disponibles y ejemplos de uso.</p>
                        </div>

                        {/* Grid de comandos principales */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Análisis de red */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <FaSearch className="text-green-400 mr-3 text-xl" />
                                    <h4 className="text-white font-semibold text-lg">Análisis de Red</h4>
                                </div>
                                <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="text-green-400">python3 main.py -l</div>
                                    <div className="text-green-400">python3 main.py --list</div>
                                </div>
                                <p className="text-gray-400 text-sm mt-3">
                                    Escanea la red local y lista todos los dispositivos con sus direcciones IP y MAC.
                                </p>
                            </div>

                            {/* Ataque por IP */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <FaBolt className="text-blue-400 mr-3 text-xl" />
                                    <h4 className="text-white font-semibold text-lg">Ataque por Dirección IP</h4>
                                </div>
                                <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="text-blue-400">python3 main.py -k 192.168.1.100</div>
                                    <div className="text-blue-400">python3 main.py --kill 10.0.0.50</div>
                                </div>
                                <p className="text-gray-400 text-sm mt-3">
                                    Inicia ataque multi-vector contra un dispositivo específico por su IP.
                                </p>
                            </div>

                            {/* Ataque por MAC */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <FaNetworkWired className="text-purple-400 mr-3 text-xl" />
                                    <h4 className="text-white font-semibold text-lg">Ataque por Dirección MAC</h4>
                                </div>
                                <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="text-purple-400">python3 main.py -k aa:bb:cc:dd:ee:ff</div>
                                    <div className="text-purple-400">python3 main.py --kill 12:34:56:78:90:ab</div>
                                </div>
                                <p className="text-gray-400 text-sm mt-3">
                                    Ataca un dispositivo específico utilizando su dirección MAC.
                                </p>
                            </div>

                            {/* Ataque masivo */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <MdDeviceHub className="text-red-400 mr-3 text-xl" />
                                    <h4 className="text-white font-semibold text-lg">Ataque Masivo</h4>
                                </div>
                                <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="text-red-400">python3 main.py -k all</div>
                                    <div className="text-red-400">python3 main.py --kill all</div>
                                </div>
                                <p className="text-gray-400 text-sm mt-3">
                                    <span className="text-red-400 font-semibold">¡PELIGROSO!</span> Ataca todos los dispositivos detectados en paralelo (excepto gateway).
                                </p>
                            </div>
                        </div>

                        {/* Ejemplos avanzados */}
                        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
                            <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                                <FaTerminal className="text-green-400 mr-3" />
                                Flujo de Trabajo Recomendado
                            </h4>
                            <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm space-y-3">
                                <div className="flex items-center">
                                    <span className="text-green-400 mr-4">1.</span>
                                    <span className="text-blue-400">python3 main.py -l</span>
                                    <span className="text-gray-400 ml-4"># Escanear red</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-green-400 mr-4">2.</span>
                                    <span className="text-purple-400">python3 main.py -k 192.168.1.50</span>
                                    <span className="text-gray-400 ml-4"># Atacar objetivo</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-green-400 mr-4">3.</span>
                                    <span className="text-red-400">Ctrl+C</span>
                                    <span className="text-gray-400 ml-4"># Detener ataque</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Consideraciones legales y éticas */}
                <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                        Consideraciones Éticas y Legales
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {legalWarnings.map((warning, index) => (
                            <div
                                key={index}
                                className={`bg-gray-800/20 backdrop-blur-sm border ${warning.color === 'green'
                                    ? 'border-green-500/30 hover:border-green-400/50'
                                    : 'border-red-500/30 hover:border-red-400/50'
                                    } rounded-2xl p-8 transition-all duration-500`}
                            >
                                {/* Título de la sección */}
                                <h4 className={`text-xl font-bold mb-6 text-center flex items-center justify-center ${warning.color === 'green' ? 'text-green-400' : 'text-red-400'
                                    }`}>
                                    {warning.color === 'green' ? (
                                        <FaUserShield className="mr-3" />
                                    ) : (
                                        <MdWarning className="mr-3" />
                                    )}
                                    {warning.type}
                                </h4>

                                {/* Lista de elementos */}
                                <ul className="space-y-3">
                                    {warning.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className={`flex items-start space-x-3 text-gray-300 ${warning.color === 'green' ? 'hover:text-green-400' : 'hover:text-red-400'
                                                } transition-colors duration-300`}
                                        >
                                            <span className={`mt-1 ${warning.color === 'green' ? 'text-green-400' : 'text-red-400'
                                                }`}>
                                                {warning.color === 'green' ? '✓' : '✗'}
                                            </span>
                                            <span className="text-sm">{item}</span>
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