// src/app/edu/international/Components/Introduction.jsx
'use client'
import React, { useState, useEffect } from 'react'
import { FaGraduationCap, FaCertificate, FaGlobeAmericas, FaBookOpen, FaAward, FaUniversity } from 'react-icons/fa'
import { HiAcademicCap, HiDocumentText } from 'react-icons/hi'





// Definición de constantes para estadísticas educativas
const educationStats = {
    institutions: { value: 5, suffix: "+" },
    certificates: { value: 20, suffix: "+" },
    countries: { value: 3, suffix: "" },
    years: { value: 5, suffix: "+" }
}

function Introduction() {
    // Estados para las animaciones y efectos
    const [isVisible, setIsVisible] = useState(false)
    const [animatedStats, setAnimatedStats] = useState({
        institutions: 0,
        certificates: 0,
        countries: 0,
        years: 0
    })

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Animación de contadores estadísticos
    useEffect(() => {
        if (isVisible) {
            const targets = {
                institutions: educationStats.institutions.value,
                certificates: educationStats.certificates.value,
                countries: educationStats.countries.value,
                years: educationStats.years.value
            }

            const duration = 2000 // 2 segundos
            const steps = 60
            const increment = duration / steps

            let current = { institutions: 0, certificates: 0, countries: 0, years: 0 }

            const timer = setInterval(() => {
                let allCompleted = true

                Object.keys(targets).forEach(key => {
                    if (current[key] < targets[key]) {
                        current[key] = Math.min(current[key] + Math.ceil(targets[key] / steps), targets[key])
                        allCompleted = false
                    }
                })

                setAnimatedStats({ ...current })

                if (allCompleted) {
                    clearInterval(timer)
                }
            }, increment)

            return () => clearInterval(timer)
        }
    }, [isVisible])

    // Datos de características educativas
    const educationFeatures = [
        {
            icon: <FaGlobeAmericas className="w-6 h-6" />,
            title: "Educación Global",
            description: "Formación en instituciones internacionales de prestigio"
        },
        {
            icon: <FaCertificate className="w-6 h-6" />,
            title: "Certificaciones Técnicas",
            description: "Validación profesional en tecnologías de vanguardia"
        },
        {
            icon: <HiAcademicCap className="w-6 h-6" />,
            title: "Formación Continua",
            description: "Compromiso permanente con el aprendizaje y la mejora"
        },
        {
            icon: <FaBookOpen className="w-6 h-6" />,
            title: "Conocimiento Diverso",
            description: "Amplio espectro de disciplinas y especializaciones"
        }
    ]

    // Estadísticas educativas
    const stats = [
        {
            icon: <FaUniversity className="w-8 h-8" />,
            value: animatedStats.institutions,
            label: "Instituciones",
            suffix: educationStats.institutions.suffix
        },
        {
            icon: <FaCertificate className="w-8 h-8" />,
            value: animatedStats.certificates,
            label: "Certificaciones",
            suffix: educationStats.certificates.suffix
        },
        {
            icon: <FaGlobeAmericas className="w-8 h-8" />,
            value: animatedStats.countries,
            label: "Países",
            suffix: educationStats.countries.suffix
        },
        {
            icon: <FaAward className="w-8 h-8" />,
            value: animatedStats.years,
            label: "Años de Formación",
            suffix: educationStats.years.suffix
        }
    ]

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-6xl mx-auto">

                    {/* Encabezado principal */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Ícono principal */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6 group hover:scale-110 transition-transform duration-300">
                            <FaGraduationCap className="w-10 h-10 text-white" />
                        </div>

                        {/* Título principal */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            Educación Internacional
                        </h1>

                        {/* Línea decorativa */}
                        <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                        {/* Subtítulo */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 leading-relaxed max-w-4xl mx-auto">
                            Compilación completa de mi{' '}
                            <span className="text-green-400 font-medium">formación académica</span>,{' '}
                            <span className="text-blue-400 font-medium">certificaciones profesionales</span> y{' '}
                            <span className="text-purple-400 font-medium">diplomas especializados</span>
                        </h2>

                        {/* Descripción principal */}
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Este espacio reúne mi trayectoria educativa internacional, documentando cada paso de mi
                            desarrollo profesional a través de instituciones de prestigio mundial. Desde certificaciones
                            técnicas hasta formaciones especializadas, aquí encontrarás el respaldo académico que
                            sustenta mi expertise en tecnología e ingeniería de software.
                        </p>
                    </div>

                    {/* Estadísticas */}
                    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center group">
                                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                                    <div className="flex justify-center mb-4 text-green-400 group-hover:text-blue-400 transition-colors duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div className="text-gray-400 text-sm lg:text-base">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Características de la educación */}
                    <div className={`grid md:grid-cols-2 lg:grid220-cols-4 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {educationFeatures.map((feature, index) => (
                            <div key={feature.title} className="group">
                                <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 h-full hover:border-green-400 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40 delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50 delay-2000"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30 delay-3000"></div>

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