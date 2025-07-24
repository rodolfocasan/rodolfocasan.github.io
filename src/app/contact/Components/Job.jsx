// src/app/contact/Components/Job.jsx
'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'





function Job() {
    // Estados para las animaciones y efectos
    const [isVisible, setIsVisible] = useState(false)
    const [activeCard, setActiveCard] = useState(null)
    const canvasRef = useRef(null)
    const intervalRef = useRef(null)

    // Caracteres para el efecto Matrix
    const chars = "!@#$%^&*()_+-=[]{};':,./<>?";

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Configuración del efecto Matrix en canvas
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')

        // Función para redimensionar el canvas
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const fontSize = 14
        const columns = Math.floor(canvas.width / fontSize)
        const drops = new Array(columns).fill(1)

        // Función de animación del efecto Matrix
        const draw = () => {
            // Fondo semi-transparente para efecto de desvanecimiento
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Configuración del texto
            ctx.fillStyle = '#00ff41'
            ctx.font = `${fontSize}px monospace`

            // Dibujar caracteres cayendo
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)]
                ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.8 + 0.2})`
                ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                // Reiniciar la gota si llega al final
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }
        }

        // Iniciar animación con menor frecuencia para optimizar rendimiento
        intervalRef.current = setInterval(draw, 100)

        return () => {
            clearInterval(intervalRef.current)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    // Datos de los métodos de contratación
    const jobMethods = [
        {
            id: 'hourly',
            title: 'Pago por hora',
            subtitle: 'Time & Materials',
            description: 'Te cobro por cada hora que trabajo en tu proyecto. Así pagas solo por lo que realmente necesitas, y si algo cambia o surge algo nuevo, seguimos trabajando sin complicaciones.',
            benefits: [
                'Puedes cambiar cosas sobre la marcha',
                'Pagas solo por el tiempo que uso'
            ],
            icon: '⏱️',
            gradient: 'from-green-500 to-blue-600',
            hoverGradient: 'from-green-600 to-blue-700',
            borderColor: 'border-green-400',
            accentColor: 'text-green-400'
        },
        {
            id: 'fixed',
            title: 'Pago por proyecto completo',
            subtitle: 'Fixed Price',
            description: 'Nos ponemos de acuerdo en un precio fijo desde el inicio, y ese es el monto que pagas al final, sin sorpresas. Es perfecto si ya sabes exactamente qué quieres.',
            benefits: [
                'Sabes cuánto vas a pagar desde el principio',
                'No te preocupas por cambios de última hora en el costo'
            ],
            icon: '💰',
            gradient: 'from-blue-500 to-purple-600',
            hoverGradient: 'from-blue-600 to-purple-700',
            borderColor: 'border-blue-400',
            accentColor: 'text-blue-400'
        },
        {
            id: 'monthly',
            title: 'Pago mensual',
            subtitle: 'Retainer o Suscripción',
            description: 'Me pagas un monto fijo cada mes para que esté disponible cuando me necesites. Esto es ideal si quieres tenerme a mano para arreglar cosas, hacer actualizaciones o resolver problemas rápidamente.',
            benefits: [
                'Tienes acceso garantizado a mí cuando me necesites',
                'Más barato que contratar a alguien a tiempo completo'
            ],
            icon: '📅',
            gradient: 'from-purple-500 to-pink-600',
            hoverGradient: 'from-purple-600 to-pink-700',
            borderColor: 'border-purple-400',
            accentColor: 'text-purple-400'
        }
    ]

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden py-16 lg:py-24">
            {/* Canvas para efecto Matrix de fondo */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                style={{ zIndex: 1 }}
            />

            {/* Gradientes decorativos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Título de la sección */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        ¿Interesado/a en mi trabajo?
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Elige la modalidad que mejor se adapte a tu proyecto y necesidades.
                        Cada método está diseñado para ofrecerte la máxima{' '}
                        <span className="text-green-400 font-medium">flexibilidad</span> y{' '}
                        <span className="text-blue-400 font-medium">transparencia</span>.
                    </p>
                </div>

                {/* Tarjetas de métodos de contratación */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {jobMethods.map((method, index) => (
                        <div
                            key={method.id}
                            className={`group relative transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            onMouseEnter={() => setActiveCard(method.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Borde animado */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>

                            {/* Tarjeta principal */}
                            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                                {/* Icono y título */}
                                <div className="text-center mb-6">
                                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300">
                                        {method.title}
                                    </h3>
                                    <p className={`text-sm font-medium ${method.accentColor} mb-4`}>
                                        {method.subtitle}
                                    </p>
                                    <div className={`h-0.5 w-16 bg-gradient-to-r ${method.gradient} mx-auto rounded-full`}></div>
                                </div>

                                {/* Descripción */}
                                <div className="mb-6">
                                    <p className="text-gray-300 leading-relaxed text-center">
                                        {method.description}
                                    </p>
                                </div>

                                {/* Beneficios */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-gray-200 mb-4 text-center">
                                        Beneficios:
                                    </h4>
                                    <ul className="space-y-3">
                                        {method.benefits.map((benefit, benefitIndex) => (
                                            <li
                                                key={benefitIndex}
                                                className="flex items-start text-gray-300"
                                            >
                                                <span className={`${method.accentColor} mr-3 text-lg font-bold`}>
                                                    ✓
                                                </span>
                                                <span className="leading-relaxed">
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>



                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección de contacto */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            ¿No estás seguro cuál elegir?
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Contáctame directamente por WhatsApp para conversar sobre tu proyecto
                            y encontrar juntos la modalidad que mejor se adapte a tus necesidades específicas.
                        </p>
                        <a
                            href="https://wa.me/50369893085"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                        >
                            <FaWhatsapp className="text-2xl group-hover:animate-pulse" />
                            <span className="relative z-10">WhatsApp: +503 6989-3085</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40 delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50 delay-2000"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30 delay-3000"></div>

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

                .delay-0 { animation-delay: 0ms; }
                .delay-200 { animation-delay: 200ms; }
                .delay-400 { animation-delay: 400ms; }
                .delay-600 { animation-delay: 600ms; }
            `}</style>
        </section>
    )
}

export default Job