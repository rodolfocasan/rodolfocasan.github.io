// src/app/contact/Components/SocialMedia.jsx
'use client'
import React, { useState, useEffect } from 'react'
import {
    FaLinkedin,
    FaWhatsapp,
    FaTelegram,
    FaInstagram,
    FaFacebook,
    FaEye
} from 'react-icons/fa'





function SocialMedia() {
    // Estados para las animaciones y efectos
    const [isVisible, setIsVisible] = useState(false)
    const [showScrollButton, setShowScrollButton] = useState(true)

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Manejo del scroll hacia este componente
    useEffect(() => {
        const handleScroll = () => {
            const socialMediaSection = document.getElementById('social-media-section')
            if (socialMediaSection) {
                const rect = socialMediaSection.getBoundingClientRect()
                const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight
                setShowScrollButton(!isInView)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Verificar estado inicial

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Función para hacer scroll hacia el componente
    const scrollToContact = () => {
        const socialMediaSection = document.getElementById('social-media-section')
        if (socialMediaSection) {
            socialMediaSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }

    // Redes sociales profesionales
    const professionalNetworks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/christcastr',
            icon: FaLinkedin,
            color: 'from-blue-600 to-blue-400',
            bgColor: 'bg-blue-500',
            description: 'christcastr'
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/+50379683144',
            icon: FaWhatsapp,
            color: 'from-green-600 to-green-400',
            bgColor: 'bg-green-500',
            description: '+503 7968 3144'
        },
        {
            name: 'Telegram',
            url: 'https://t.me/rodolfocasan',
            icon: FaTelegram,
            color: 'from-blue-500 to-cyan-400',
            bgColor: 'bg-blue-400',
            description: '@rodolfocasan'
        }
    ]

    // Redes sociales personales
    const personalNetworks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/christcastr/',
            icon: FaInstagram,
            color: 'from-pink-600 via-purple-600 to-orange-500',
            bgColor: 'bg-gradient-to-r from-pink-500 to-purple-500',
            description: '@christcastr'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/christcastr/',
            icon: FaFacebook,
            color: 'from-blue-700 to-blue-500',
            bgColor: 'bg-blue-600',
            description: 'christcastr'
        }
    ]

    // Componente para renderizar cada red social
    const SocialCard = ({ network, index, isProfessional }) => {
        const Icon = network.icon

        return (
            <a
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 
                           hover:border-green-400 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer
                           transform hover:scale-105 animate-fade-in block`}
                style={{ animationDelay: `${index * 150}ms` }}
            >
                {/* Gradiente de fondo */}
                <div className={`absolute inset-0 bg-gradient-to-r ${network.color} opacity-10 rounded-2xl blur-sm 
                                group-hover:opacity-20 transition-opacity duration-300`}></div>

                {/* Contenido de la tarjeta */}
                <div className="relative flex items-center space-x-4">
                    {/* Icono */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center 
                                    ${network.bgColor} text-white transition-transform duration-300 
                                    group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon size={24} />
                    </div>

                    {/* Información */}
                    <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 bg-gradient-to-r ${network.color} 
                                       bg-clip-text text-transparent`}>
                            {network.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {network.description}
                        </p>
                    </div>

                    {/* Flecha indicadora */}
                    <div className="flex-shrink-0 text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
        )
    }

    return (
        <>
            {/* Sección principal */}
            <section
                id="social-media-section"
                className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 lg:py-24 overflow-hidden"
            >
                {/* Gradientes decorativos */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                {/* Contenido principal */}
                <div className="relative z-10 container mx-auto px-4">


                    {/* Redes Profesionales */}
                    <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold text-center mb-12">
                            Medios Profesionales
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                            {professionalNetworks.map((network, index) => (
                                <SocialCard
                                    key={network.name}
                                    network={network}
                                    index={index}
                                    isProfessional={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Redes Personales */}
                    <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold text-center mb-12">
                            Medios Sociales
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {personalNetworks.map((network, index) => (
                                <SocialCard
                                    key={network.name}
                                    network={network}
                                    index={index + 3}
                                    isProfessional={false}
                                />
                            ))}
                        </div>
                    </div>


                </div>

                {/* Elementos decorativos */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

                {/* Partículas flotantes */}
                <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40 delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-50 delay-2000"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30 delay-3000"></div>
            </section>

            {/* Botón flotante "Ver contacto" */}
            {showScrollButton && (
                <button
                    onClick={scrollToContact}
                    className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-bounce"
                >
                    <FaEye size={18} />
                    <span className="font-medium">Ver contacto</span>
                </button>
            )}

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
                
                @media (max-width: 768px) {
                    .fixed.bottom-6.right-6 {
                        bottom: 1rem;
                        right: 1rem;
                    }
                }
            `}</style>
        </>
    )
}

export default SocialMedia