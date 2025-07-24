// src/app/edu/national/Schools/EMedia.jsx
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
    FaChild,
    FaCalculator,
    FaBook,
    FaLanguage,
    FaFlask,
    FaGlobe,
    FaMusic,
    FaPalette,
    FaRunning,
    FaHandsHelping,
    FaAtom,
    FaHistory,
    FaLeaf,
    FaCamera,
    FaTheaterMasks,
    FaUserFriends,
    FaStar,
    FaTrophy,
    FaRocket
} from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { MdSchool, MdScience, MdGroup } from 'react-icons/md'

const bachilleratoInfo = {
    institucion: "Educación Media Nacional",
    periodo: "2016 - 2018",
    duracion: "3 años",
    grados: "1° a 3° Bachillerato",
    pais: "El Salvador",
    modalidad: "Bachillerato General",
    descripcion: "Formación integral que consolidó mis conocimientos científicos y desarrolló habilidades sociales fundamentales",
    certificados: [
        {
            titulo: "Certificado de Bachillerato",
            descripcion: "Documento oficial que certifica la finalización exitosa del bachillerato general, habilitando para estudios superiores",
            imageUrl: "https://raw.githubusercontent.com/rodolfocasan/fetch-media/main/edu/national/bachillerato_certificado.jpg",
            tipo: "Certificado Oficial"
        },
        {
            titulo: "Diploma de Bachillerato",
            descripcion: "Diploma institucional que reconoce el logro académico y la preparación para la educación superior",
            imageUrl: "https://raw.githubusercontent.com/rodolfocasan/fetch-media/main/edu/national/bachillerato_diploma.jpg",
            tipo: "Diploma Académico"
        }
    ],
    materias: [
        { nombre: "Matemáticas Avanzadas", icon: <FaCalculator className="w-5 h-5" />, color: "from-blue-500 to-cyan-600" },
        { nombre: "Física", icon: <FaAtom className="w-5 h-5" />, color: "from-purple-500 to-violet-600" },
        { nombre: "Química", icon: <FaFlask className="w-5 h-5" />, color: "from-green-500 to-emerald-600" },
        { nombre: "Biología", icon: <FaLeaf className="w-5 h-5" />, color: "from-emerald-500 to-teal-600" },
        { nombre: "Lenguaje y Literatura", icon: <FaLanguage className="w-5 h-5" />, color: "from-orange-500 to-red-600" },
        { nombre: "Historia", icon: <FaHistory className="w-5 h-5" />, color: "from-amber-500 to-orange-600" },
        { nombre: "Estudios Sociales", icon: <FaGlobe className="w-5 h-5" />, color: "from-red-500 to-pink-600" },
        { nombre: "Educación Física", icon: <FaRunning className="w-5 h-5" />, color: "from-yellow-500 to-amber-600" },
        { nombre: "Educación Artística", icon: <FaPalette className="w-5 h-5" />, color: "from-pink-500 to-rose-600" },
        { nombre: "Filosofía", icon: <FaBook className="w-5 h-5" />, color: "from-indigo-500 to-blue-600" }
    ],
    logros: [
        {
            titulo: "Desarrollo de Relaciones Sociales",
            descripcion: "Fortalecimiento de habilidades interpersonales y trabajo en equipo",
            icon: <FaUserFriends className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-600"
        },
        {
            titulo: "Bases Científicas Sólidas",
            descripcion: "Consolidación de conocimientos en ciencias exactas y naturales",
            icon: <MdScience className="w-6 h-6" />,
            color: "from-green-500 to-emerald-600"
        },
        {
            titulo: "Participación en Eventos",
            descripcion: "Asistencia activa a eventos culturales, científicos y deportivos",
            icon: <FaStar className="w-6 h-6" />,
            color: "from-purple-500 to-violet-600"
        },
        {
            titulo: "Preparación Universitaria",
            descripcion: "Formación integral para el acceso a la educación superior",
            icon: <FaRocket className="w-6 h-6" />,
            color: "from-orange-500 to-red-600"
        }
    ]
}

function EMedia() {
    // Estados para las imágenes
    const [imageLoadingStates, setImageLoadingStates] = useState({})
    const [imageErrors, setImageErrors] = useState({})

    // Inicializar estados de carga de imágenes
    React.useEffect(() => {
        const initialLoadingStates = {}
        const initialErrorStates = {}
        bachilleratoInfo.certificados.forEach((cert, index) => {
            initialLoadingStates[index] = true
            initialErrorStates[index] = false
        })
        setImageLoadingStates(initialLoadingStates)
        setImageErrors(initialErrorStates)
    }, [])

    // Función para abrir imagen en nueva ventana
    const openImage = (url) => {
        window.open(url, '_blank')
    }

    // Función para manejar carga de imagen
    const handleImageLoad = (certIndex) => {
        setImageLoadingStates(prev => ({
            ...prev,
            [certIndex]: false
        }))
        setImageErrors(prev => ({
            ...prev,
            [certIndex]: false
        }))
    }

    // Función para manejar error de imagen
    const handleImageError = (certIndex) => {
        setImageErrors(prev => ({
            ...prev,
            [certIndex]: true
        }))
        setImageLoadingStates(prev => ({
            ...prev,
            [certIndex]: false
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
                    {/* Encabezado de Bachillerato */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6">
                            <FaGraduationCap className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            Educación Media
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 leading-relaxed max-w-4xl mx-auto">
                            Consolidando{' '}
                            <span className="text-green-400 font-medium">conocimientos científicos</span>{' '}
                            y desarrollando{' '}
                            <span className="text-blue-400 font-medium">habilidades sociales</span>{' '}
                            para el{' '}
                            <span className="text-purple-400 font-medium">futuro académico</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Tres años de formación integral que fortalecieron mis bases científicas,
                            desarrollaron mis habilidades sociales y me prepararon para los desafíos
                            de la educación superior y la vida profesional.
                        </p>
                    </div>

                    {/* Información general */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-green-400">
                                    <FaCalendarAlt className="w-8 h-8" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    {bachilleratoInfo.duracion}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    de Bachillerato
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-blue-400">
                                    <HiAcademicCap className="w-8 h-8" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    {bachilleratoInfo.grados}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Niveles Cursados
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-purple-400">
                                    <FaBookOpen className="w-8 h-8" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    {bachilleratoInfo.materias.length}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Materias Avanzadas
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-orange-400">
                                    <FaGlobe className="w-8 h-8" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    {bachilleratoInfo.pais}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    País de Formación
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logros y desarrollo */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Logros y Desarrollo Personal
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {bachilleratoInfo.logros.map((logro, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300"
                                >
                                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${logro.color} rounded-xl mb-4`}>
                                        <div className="text-white">
                                            {logro.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">
                                        {logro.titulo}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {logro.descripcion}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Materias cursadas */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Materias del Bachillerato
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {bachilleratoInfo.materias.map((materia, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300"
                                >
                                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${materia.color} rounded-lg mb-3 mx-auto`}>
                                        <div className="text-white">
                                            {materia.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-xs md:text-sm font-medium text-white text-center leading-tight">
                                        {materia.nombre}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificados y documentos */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Documentos Oficiales
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {bachilleratoInfo.certificados.map((cert, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    {/* Tarjeta de certificado */}
                                    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl overflow-hidden h-full">
                                        {/* Imagen del documento */}
                                        <div className="relative h-64 md:h-72 lg:h-80 bg-gray-700/50 overflow-hidden">
                                            {/* Loader mientras carga la imagen */}
                                            {imageLoadingStates[index] && !imageErrors[index] && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                    <div className="text-center">
                                                        <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                                                        <p className="text-gray-400 text-sm">Cargando documento...</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Fallback cuando hay error de imagen */}
                                            {imageErrors[index] && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                    <div className="text-center">
                                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                                            <FaCertificate className="w-8 h-8 text-white" />
                                                        </div>
                                                        <p className="text-gray-400 text-sm">Vista previa no disponible</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Imagen del documento */}
                                            <img
                                                src={cert.imageUrl}
                                                alt={cert.titulo}
                                                className={`w-full h-full object-cover object-center transition-opacity duration-300 ${imageLoadingStates[index] ? 'opacity-0' : 'opacity-100'
                                                    }`}
                                                onLoad={() => handleImageLoad(index)}
                                                onError={() => handleImageError(index)}
                                                loading="lazy"
                                            />

                                            {/* Overlay decorativo */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                                            {/* Badge del tipo de documento */}
                                            <div className="absolute top-4 right-4 flex items-center space-x-2">
                                                <span className="text-xs bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20">
                                                    {cert.tipo}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Contenido de la tarjeta */}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                                                    <FaCertificate className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex items-center">
                                                    <FaTrophy className="w-4 h-4 text-yellow-400" />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">
                                                {cert.titulo}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {cert.descripcion}
                                            </p>
                                            <div className="flex pt-4 border-t border-gray-700">
                                                <button
                                                    onClick={() => openImage(cert.imageUrl)}
                                                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                                                >
                                                    <FaBookOpen className="w-4 h-4" />
                                                    Ver Documento
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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

export default EMedia