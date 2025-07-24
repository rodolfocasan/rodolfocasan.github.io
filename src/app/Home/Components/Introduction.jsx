// src/app/Home/Components/Introduction.jsx
'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import Data from "../../constants.json";





function Introduction() {
    // Estados para las animaciones y efectos
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [matrixChars, setMatrixChars] = useState([])
    const canvasRef = useRef(null)
    const intervalRef = useRef(null)

    // Caracteres para el efecto Matrix
    //const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
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

    // Datos profesionales
    const skills = [
        'Desarrollo Web',
        'Desarrollo Móvil',
        'Ingeniería de Software',
        'Matemáticas Aplicadas',
        'Soluciones Personalizadas'
    ]

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Canvas para efecto Matrix de fondo */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                style={{ zIndex: 1 }}
            />

            {/* Gradientes decorativos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Sección de imagen */}
                    <div className={`flex-1 flex justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="relative group">
                            {/* Loader mientras carga la imagen */}
                            {!imageLoaded && (
                                <div className="flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-[427px] bg-gray-800 rounded-2xl animate-pulse">
                                    <div className="text-green-400 text-lg">Cargando...</div>
                                </div>
                            )}

                            {/* Contenedor de imagen con efectos */}
                            <div className={`relative ${!imageLoaded ? 'hidden' : 'block'}`}>
                                {/* Borde animado */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                                {/* Imagen principal */}
                                <div className="relative bg-gray-900 rounded-2xl p-2">
                                    <Image
                                        src={Data.photos.me_01}
                                        alt="Rodolfo Casan - Ingeniero de Software"
                                        width={320}
                                        height={568} // Nuevo height para 9:16 ratio
                                        className="
                                            w-64 h-64 md:w-80 md:h-80 
                                            lg:w-80 lg:h-[427px] 
                                            object-cover rounded-xl transition-all duration-300 group-hover:scale-105
                                        "
                                        onLoad={() => setImageLoaded(true)}
                                        onError={() => setImageLoaded(true)}
                                        priority
                                    />
                                </div>

                                {/* Efecto de brillo */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* Sección de contenido textual */}
                    <div className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>

                        {/* Nombre principal */}
                        <div className="mb-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 tracking-tight">
                                Rodolfo Casan
                            </h1>
                            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
                        </div>

                        {/* Título profesional */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 leading-relaxed">
                            Ingeniero de Software,{' '}
                            <span className="text-green-400 font-medium">científico</span> y{' '}
                            <span className="text-blue-400 font-medium">matemático</span> autodidacta
                        </h2>

                        {/* Descripción principal */}
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                            Con años de experiencia en mi área, me he consolidado como un profesional{' '}
                            <span className="text-green-400 font-medium">versátil</span> y{' '}
                            <span className="text-blue-400 font-medium">apasionado</span> por la tecnología.
                            Mi trayectoria abarca múltiples dominios tecnológicos, desde el desarrollo web y móvil
                            hasta soluciones de software personalizadas.
                        </p>

                        {/* Características destacadas */}
                        <div className="mb-8">
                            <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                Me destaco por mi capacidad de{' '}
                                <span className="text-purple-400 font-medium">aprendizaje rápido</span>,
                                resolución creativa de problemas y compromiso continuo con la{' '}
                                <span className="text-green-400 font-medium">excelencia técnica</span>.
                            </p>
                        </div>

                        {/* Skills destacados */}
                        <div className="mb-10">
                            <h3 className="text-gray-300 text-lg font-semibold mb-4">Especialidades:</h3>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {skills.map((skill, index) => (
                                    <span
                                        key={skill}
                                        className={`px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 
                                                   hover:border-green-400 hover:text-green-400 transition-all duration-300 cursor-default
                                                   transform hover:scale-105 animate-fade-in`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Botón de acción */}
                        <div className="flex justify-center lg:justify-start">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                                <span className="relative z-10">Conoce mi trabajo</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/2 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40 delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50 delay-2000"></div>

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