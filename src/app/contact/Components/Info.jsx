// src/app/contact/Components/Info.jsx
'use client'
import React, { useState, useEffect } from 'react'





function Info() {
    // Estados para las animaciones y efectos
    const [isVisible, setIsVisible] = useState(false)

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Motivos de contacto
    const contactReasons = [
        {
            title: 'Oportunidades Laborales',
            description: 'Si consideras que mi perfil es ideal para un proyecto o posición en tu empresa',
            icon: '💼',
            color: 'from-green-400 to-blue-500'
        },
        {
            title: 'Consultas Privadas',
            description: 'Para asesorías técnicas, revisión de código o consultoría especializada',
            icon: '🔍',
            color: 'from-blue-400 to-purple-500'
        },
        {
            title: 'Colaboraciones',
            description: 'Propuestas de proyectos conjuntos, partnerships o iniciativas innovadoras',
            icon: '🤝',
            color: 'from-purple-400 to-green-500'
        },
        {
            title: 'Apoyo y Mentoría',
            description: 'Dudas técnicas, orientación profesional o intercambio de conocimientos',
            icon: '📚',
            color: 'from-green-400 to-blue-400'
        },
        {
            title: 'Proyectos Personalizados',
            description: 'Desarrollo de soluciones específicas adaptadas a tus necesidades',
            icon: '⚙️',
            color: 'from-blue-400 to-purple-400'
        }
    ]

    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 lg:py-24 overflow-hidden">
            {/* Gradientes decorativos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Título principal */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                        ¿Deseas contactarme?
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                        Estoy disponible para diversas formas de{' '}
                        <span className="text-green-400 font-medium">colaboración</span> y{' '}
                        <span className="text-blue-400 font-medium">comunicación profesional</span>
                    </p>
                </div>

                {/* Motivos de contacto */}
                <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold text-center mb-12">
                        Motivos para contactarme
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {contactReasons.map((reason, index) => (
                            <div
                                key={reason.title}
                                className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 
                                           hover:border-green-400 hover:bg-gray-800/70 transition-all duration-300 cursor-default
                                           transform hover:scale-105 animate-fade-in`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Icono y gradiente de fondo */}
                                <div className="relative mb-4">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-10 rounded-xl blur-sm 
                                                    group-hover:opacity-20 transition-opacity duration-300`}></div>
                                    <div className="relative text-4xl mb-2">{reason.icon}</div>
                                </div>

                                {/* Título */}
                                <h3 className={`text-lg font-semibold mb-3 bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                                    {reason.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {reason.description}
                                </p>

                                {/* Efecto de brillo al hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nota importante */}
                <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
                            <span className="text-2xl">⚠️</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
                            Comunicación Profesional
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-4">
                            Esta es una sección destinada a{' '}
                            <span className="text-orange-400 font-medium">comunicación seria y profesional</span>.
                            Cada solicitud de mensaje será leída y evaluada personalmente por mí.
                        </p>

                        <p className="text-gray-400 text-base leading-relaxed">
                            Las comunicaciones que evidencien ser{' '}
                            <span className="text-red-400 font-medium">bromas, spam o contenido inapropiado</span> no
                            recibirán respuesta y podrían resultar en el bloqueo del remitente.
                            Agradezco tu comprensión y profesionalismo.
                        </p>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40 delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-50 delay-2000"></div>
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30 delay-3000"></div>

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

export default Info