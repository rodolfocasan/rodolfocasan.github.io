// src/app/edu/national/Components/Introduction.jsx
'use client'
import React, { useState, useEffect } from 'react'
import { FaGraduationCap, FaSchool, FaUserGraduate, FaBookOpen, FaAward, FaUniversity, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa'
import { HiAcademicCap, HiDocumentText } from 'react-icons/hi'
import { MdSchool, MdClass } from 'react-icons/md'
import { IoSchool } from 'react-icons/io5'





// Definición de constantes para estadísticas educativas nacionales
const educationStats = {
    levels: { value: 6, suffix: "" },
    institutions: { value: 8, suffix: "+" },
    years: { value: 16, suffix: "+" },
    specializations: { value: 4, suffix: "+" }
}

function Introduction() {
    // Estados para las animaciones y efectos
    const [isVisible, setIsVisible] = useState(false)
    const [animatedStats, setAnimatedStats] = useState({
        levels: 0,
        institutions: 0,
        years: 0,
        specializations: 0
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
                levels: educationStats.levels.value,
                institutions: educationStats.institutions.value,
                years: educationStats.years.value,
                specializations: educationStats.specializations.value
            }

            const duration = 2000 // 2 segundos
            const steps = 60
            const increment = duration / steps

            let current = { levels: 0, institutions: 0, years: 0, specializations: 0 }

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

    // Datos de características educativas nacionales
    const educationFeatures = [
        {
            icon: <FaSchool className="w-6 h-6" />,
            title: "Educación Básica",
            description: "Sólida formación en educación primaria y secundaria salvadoreña"
        },
        {
            icon: <IoSchool className="w-6 h-6" />,
            title: "Educación Media",
            description: "Bachillerato técnico y preparación para la educación superior"
        },
        {
            icon: <FaUniversity className="w-6 h-6" />,
            title: "Educación Superior",
            description: "Formación universitaria en instituciones de prestigio nacional"
        },
        {
            icon: <FaCertificate className="w-6 h-6" />,
            title: "Educación Técnica",
            description: "Especializaciones técnicas y certificaciones profesionales"
        }
    ]

    // Estadísticas educativas nacionales
    const stats = [
        {
            icon: <MdSchool className="w-8 h-8" />,
            value: animatedStats.levels,
            label: "Niveles Educativos",
            suffix: educationStats.levels.suffix
        },
        {
            icon: <FaUniversity className="w-8 h-8" />,
            value: animatedStats.institutions,
            label: "Instituciones",
            suffix: educationStats.institutions.suffix
        },
        {
            icon: <FaAward className="w-8 h-8" />,
            value: animatedStats.years,
            label: "Años de Estudio",
            suffix: educationStats.years.suffix
        },
        {
            icon: <HiAcademicCap className="w-8 h-8" />,
            value: animatedStats.specializations,
            label: "Especializaciones",
            suffix: educationStats.specializations.suffix
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
                            <FaUserGraduate className="w-10 h-10 text-white" />
                        </div>

                        {/* Título principal */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            Educación Nacional
                        </h1>

                        {/* Línea decorativa */}
                        <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                        {/* Subtítulo */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 leading-relaxed max-w-4xl mx-auto">
                            Mi trayectoria educativa en{' '}
                            <span className="text-green-400 font-medium">El Salvador</span>: desde la{' '}
                            <span className="text-blue-400 font-medium">educación básica</span> hasta la{' '}
                            <span className="text-purple-400 font-medium">especialización técnica</span>
                        </h2>

                        {/* Descripción principal */}
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Un recorrido completo por mi formación académica nacional, desde los primeros años de
                            educación básica hasta las especializaciones técnicas más avanzadas. Cada nivel educativo
                            ha contribuido a construir una base sólida de conocimientos y habilidades que sustentan
                            mi desarrollo profesional en el ámbito tecnológico y la ingeniería de software.
                        </p>
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