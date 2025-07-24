// src/app/edu/national/Schools/Otras.jsx
'use client'
import React, { useState } from 'react'
import {
    FaGraduationCap,
    FaCertificate,
    FaSchool,
    FaBookOpen,
    FaUsers,
    FaCalendarAlt,
    FaMedal,
    FaHeart,
    FaHandsHelping,
    FaDollarSign,
    FaLightbulb,
    FaBriefcase,
    FaLaptopCode,
    FaGlobe,
    FaExternalLinkAlt,
    FaAward,
    FaChartLine,
    FaHandshake,
    FaRocket,
    FaNetworkWired
} from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { MdSchool, MdVolunteerActivism } from 'react-icons/md'





// Datos de las organizaciones (estructura preparada para futuras adiciones)
const organizaciones = [
    {
        id: 'jael',
        nombre: "JAEL El Salvador",
        nombreCompleto: "Junior Achievement El Salvador",
        tipo: "Organización sin fines de lucro",
        url: "https://jaelsalvador.org/",
        descripcion: "Miembros de Junior Achievement Worldwide, durante 50 años de existencia en El Salvador hemos potenciado las habilidades y destrezas de niños, jóvenes y mujeres salvadoreñas",
        añosExistencia: "50 años",
        areas: [
            {
                nombre: "Educación Financiera",
                descripcion: "Presupuestar, ahorrar, invertir y administrar el dinero para lograr un adecuado bienestar financiero",
                icon: <FaDollarSign className="w-5 h-5" />,
                color: "from-green-500 to-emerald-600"
            },
            {
                nombre: "Emprendimiento",
                descripcion: "Planificar, tomar riesgos, innovar, trabajar en equipo y liderar con una actitud emprendedora",
                icon: <FaRocket className="w-5 h-5" />,
                color: "from-blue-500 to-cyan-600"
            },
            {
                nombre: "Habilidades para la Inserción Laboral",
                descripcion: "Maximizar las posibilidades de conseguir empleo a través del desarrollo de competencias socioemocionales",
                icon: <FaBriefcase className="w-5 h-5" />,
                color: "from-purple-500 to-violet-600"
            },
            {
                nombre: "Habilidades Digitales",
                descripcion: "Desarrollar las competencias tecnológicas y potenciar las oportunidades en áreas claves",
                icon: <FaLaptopCode className="w-5 h-5" />,
                color: "from-orange-500 to-red-600"
            }
        ],
        impacto: [
            { titulo: "Jóvenes Beneficiados", valor: "985,000", icon: <FaUsers className="w-6 h-6" /> },
            { titulo: "Departamentos", valor: "14", icon: <FaGlobe className="w-6 h-6" /> },
            { titulo: "Municipios", valor: "125", icon: <FaNetworkWired className="w-6 h-6" /> },
            { titulo: "Centros Educativos", valor: "Públicos", icon: <FaSchool className="w-6 h-6" /> }
        ],
        certificados: [
            {
                titulo: "Google Cloud Computing Foundations",
                descripcion: "Certificado de fundamentos en computación en la nube de Google, obtenido a través del programa educativo de JAEL El Salvador",
                imageUrl: "https://raw.githubusercontent.com/rodolfocasan/fetch-media/main/edu/national/jaes_elsalvador.jpg",
                tipo: "Certificado Técnico",
                proveedor: "Google Cloud"
            }
        ],
        color: "from-green-500 to-blue-600",
        iconPrincipal: <FaHandsHelping className="w-12 h-12 text-white" />
    }
    // Aquí se pueden agregar más organizaciones siguiendo la misma estructura
]

function Otras() {
    // Estados para las imágenes de certificados
    const [imageLoadingStates, setImageLoadingStates] = useState({})
    const [imageErrors, setImageErrors] = useState({})

    // Inicializar estados de carga de imágenes
    React.useEffect(() => {
        const initialLoadingStates = {}
        const initialErrorStates = {}

        organizaciones.forEach((org, orgIndex) => {
            org.certificados.forEach((cert, certIndex) => {
                const key = `${orgIndex}-${certIndex}`
                initialLoadingStates[key] = true
                initialErrorStates[key] = false
            })
        })

        setImageLoadingStates(initialLoadingStates)
        setImageErrors(initialErrorStates)
    }, [])

    // Función para abrir imagen en nueva ventana
    const openImage = (url) => {
        window.open(url, '_blank')
    }

    // Función para abrir sitio web de la organización
    const openWebsite = (url) => {
        window.open(url, '_blank')
    }

    // Función para manejar carga de imagen
    const handleImageLoad = (key) => {
        setImageLoadingStates(prev => ({
            ...prev,
            [key]: false
        }))
        setImageErrors(prev => ({
            ...prev,
            [key]: false
        }))
    }

    // Función para manejar error de imagen
    const handleImageError = (key) => {
        setImageErrors(prev => ({
            ...prev,
            [key]: true
        }))
        setImageLoadingStates(prev => ({
            ...prev,
            [key]: false
        }))
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos estáticos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Encabezado de Otras Educaciones */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6">
                            <MdVolunteerActivism className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            Educación Complementaria
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 leading-relaxed max-w-4xl mx-auto">
                            Formación{' '}
                            <span className="text-green-400 font-medium">especializada</span>{' '}
                            en{' '}
                            <span className="text-blue-400 font-medium">habilidades técnicas</span>,{' '}
                            <span className="text-purple-400 font-medium">vínculos sociales</span>{' '}
                            y{' '}
                            <span className="text-orange-400 font-medium">voluntariado</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Experiencias educativas complementarias que han enriquecido mi formación
                            con organizaciones comprometidas con el desarrollo integral de jóvenes
                            y profesionales en El Salvador.
                        </p>
                    </div>

                    {/* Organizaciones */}
                    <div className="space-y-20">
                        {organizaciones.map((org, orgIndex) => (
                            <div key={org.id} className="relative">
                                {/* Tarjeta principal de la organización */}
                                <div className="bg-gray-800/30 border border-gray-700 rounded-3xl p-8 lg:p-12 mb-12">
                                    {/* Encabezado de la organización */}
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
                                        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                            <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${org.color} rounded-2xl`}>
                                                {org.iconPrincipal}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                                                    {org.nombre}
                                                </h3>
                                                <p className="text-gray-400 text-sm lg:text-base">
                                                    {org.nombreCompleto}
                                                </p>
                                                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs mt-2">
                                                    {org.tipo}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => openWebsite(org.url)}
                                            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                                        >
                                            <FaGlobe className="w-4 h-4" />
                                            <span>Visitar Sitio Web</span>
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                        </button>
                                    </div>

                                    {/* Descripción */}
                                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-8">
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {org.descripcion}
                                        </p>
                                        <div className="flex items-center mt-4 text-sm text-gray-400">
                                            <FaCalendarAlt className="w-4 h-4 mr-2" />
                                            <span>{org.añosExistencia} de experiencia</span>
                                        </div>
                                    </div>

                                    {/* Estadísticas de impacto */}
                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                            <FaChartLine className="w-5 h-5 mr-2 text-green-400" />
                                            Impacto en El Salvador
                                        </h4>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            {org.impacto.map((stat, index) => (
                                                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center">
                                                    <div className="flex justify-center mb-2 text-green-400">
                                                        {stat.icon}
                                                    </div>
                                                    <div className="text-xl lg:text-2xl font-bold text-white mb-1">
                                                        {stat.valor}
                                                    </div>
                                                    <div className="text-gray-400 text-xs lg:text-sm">
                                                        {stat.titulo}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Áreas de formación */}
                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                            <FaLightbulb className="w-5 h-5 mr-2 text-blue-400" />
                                            Áreas de Formación
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {org.areas.map((area, index) => (
                                                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                                    <div className="flex items-start space-x-4">
                                                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex-shrink-0`}>
                                                            <div className="text-white">
                                                                {area.icon}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-lg font-semibold text-white mb-2">
                                                                {area.nombre}
                                                            </h5>
                                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                                {area.descripcion}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Certificados obtenidos */}
                                <div className="mb-8">
                                    <h4 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
                                        <FaAward className="w-6 h-6 mr-3 text-yellow-400" />
                                        Certificados Obtenidos
                                    </h4>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {org.certificados.map((cert, certIndex) => {
                                            const key = `${orgIndex}-${certIndex}`
                                            return (
                                                <div key={certIndex} className="relative">
                                                    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl overflow-hidden h-full">
                                                        {/* Imagen del certificado */}
                                                        <div className="relative h-48 md:h-56 lg:h-64 bg-gray-700/50 overflow-hidden">
                                                            {/* Loader mientras carga la imagen */}
                                                            {imageLoadingStates[key] && !imageErrors[key] && (
                                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                                    <div className="text-center">
                                                                        <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                                                                        <p className="text-gray-400 text-sm">Cargando certificado...</p>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Fallback cuando hay error de imagen */}
                                                            {imageErrors[key] && (
                                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                                    <div className="text-center">
                                                                        <div className={`w-16 h-16 bg-gradient-to-r ${org.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                                                                            <FaCertificate className="w-8 h-8 text-white" />
                                                                        </div>
                                                                        <p className="text-gray-400 text-sm">Vista previa no disponible</p>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Imagen del certificado */}
                                                            <img
                                                                src={cert.imageUrl}
                                                                alt={cert.titulo}
                                                                className={`w-full h-full object-cover object-center transition-opacity duration-300 ${imageLoadingStates[key] ? 'opacity-0' : 'opacity-100'
                                                                    }`}
                                                                onLoad={() => handleImageLoad(key)}
                                                                onError={() => handleImageError(key)}
                                                                loading="lazy"
                                                            />

                                                            {/* Overlay decorativo */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                                                            {/* Badges */}
                                                            <div className="absolute top-4 right-4 flex flex-col space-y-2">
                                                                <span className="text-xs bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20">
                                                                    {cert.tipo}
                                                                </span>
                                                                {cert.proveedor && (
                                                                    <span className="text-xs bg-blue-500/60 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20">
                                                                        {cert.proveedor}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Contenido de la tarjeta */}
                                                        <div className="p-6">
                                                            <div className="flex items-start justify-between mb-4">
                                                                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${org.color} rounded-xl`}>
                                                                    <FaCertificate className="w-6 h-6 text-white" />
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <FaMedal className="w-4 h-4 text-yellow-400" />
                                                                </div>
                                                            </div>
                                                            <h5 className="text-lg font-bold text-white mb-3 leading-tight">
                                                                {cert.titulo}
                                                            </h5>
                                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                                {cert.descripcion}
                                                            </p>
                                                            <div className="flex pt-4 border-t border-gray-700">
                                                                <button
                                                                    onClick={() => openImage(cert.imageUrl)}
                                                                    className={`w-full bg-gradient-to-r ${org.color} hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer`}
                                                                >
                                                                    <FaBookOpen className="w-4 h-4" />
                                                                    Ver Certificado
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Elementos decorativos estáticos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full opacity-30"></div>
        </section>
    )
}

export default Otras