// src/app/edu/international/Schools/Udemy.jsx
'use client'
import React, { useState, useEffect } from 'react'
import { FaReact, FaCertificate, FaAward, FaCode, FaLaptopCode } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { SiUdemy } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid'





const udemyCertifications = [
    {
        title: "Complete Bootstrap & React Bootcamp with Hands-On Projects",
        description: "Learn to Build Responsive, Interactive Web Apps using Bootstrap and React. Comprehensive course covering modern web development techniques, responsive design patterns, and interactive user interfaces using the latest Bootstrap and React technologies.",
        certificateUrl: "https://www.udemy.com/certificate/UC-5c182dd8-c220-4d32-ac39-e1417c0d7a56/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-5c182dd8-c220-4d32-ac39-e1417c0d7a56.jpg?v=1665955100000",
        icon: <FaReact className="w-6 h-6" />,
        category: "Frontend Development",
        skills: ["Bootstrap", "React", "Responsive Design", "JavaScript", "Web Development", "UI/UX"],
        color: "from-purple-500 to-blue-600"
    },
    {
        title: "CSS, Bootstrap, JavaScript And PHP Stack Complete Course",
        description: "CSS, Bootstrap And JavaScript And PHP Complete Frontend and Backend Course. Full-stack development course covering frontend technologies and backend development with PHP, providing comprehensive web development skills from client to server.",
        certificateUrl: "https://www.udemy.com/course/css-bootstrap-javascript-and-php-stack-complete-course",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-b4cf1dc1-9e3a-4967-baf1-1a5203dcd129.jpg?v=1665954645000",
        icon: <FaCode className="w-6 h-6" />,
        category: "Full Stack Development",
        skills: ["CSS", "Bootstrap", "JavaScript", "PHP", "Full Stack", "Web Development", "Backend"],
        color: "from-orange-500 to-red-600"
    },
    {
        title: "Web Development Wizardry: HTML & CSS Course for Beginners",
        description: "Web Development Wizardry: HTML and CSS Course for Beginners 2023. Master the fundamentals of web development with HTML and CSS, building a solid foundation for creating beautiful and functional websites.",
        certificateUrl: "https://www.udemy.com/course/html-and-css-2-in-1-course-from-zero-for-beginners-2022/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-f2bf0f26-f644-4fa6-8459-501b9d11fc52.jpg?v=1665954310000",
        icon: <FaCode className="w-6 h-6" />,
        category: "Frontend Development",
        skills: ["HTML", "CSS", "Web Development", "Frontend", "Responsive Design"],
        color: "from-green-500 to-teal-600"
    },
    {
        title: "Python for beginners - Learn all the basics of python",
        description: "Learn how to program in python- python functions-python basic apps - python tips and tricks - Other Python features. Comprehensive introduction to Python programming covering fundamentals, functions, and practical applications.",
        certificateUrl: "https://www.udemy.com/course/python-for-beginners-learn/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-54f004a0-3492-4bc3-8deb-da4d9bdee00c.jpg?v=1665428907000",
        icon: <FaLaptopCode className="w-6 h-6" />,
        category: "Programming",
        skills: ["Python", "Programming", "Functions", "Basic Apps", "Software Development"],
        color: "from-yellow-500 to-orange-600"
    },
    {
        title: "Introduction to Domain Names and Web Hosting - Quick Guide",
        description: "Learn how Domain Names Work and Types of Web Hosting for any Web Development Project. Essential knowledge for understanding web infrastructure, domain management, and hosting solutions for web developers.",
        certificateUrl: "https://www.udemy.com/course/introduction-to-domain-names-and-web-hosting-quick-guide/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-fd02298f-8d06-4cb7-a2a9-424e39fda6b6.jpg?v=1690778093000",
        icon: <FaCode className="w-6 h-6" />,
        category: "Web Infrastructure",
        skills: ["Domain Names", "Web Hosting", "DNS", "Web Infrastructure", "Server Management"],
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "Linux Command Line",
        description: "Master the Command Line. Essential skills for system administration, development, and server management. Learn to navigate and control Linux systems efficiently through command-line interfaces.",
        certificateUrl: "https://www.udemy.com/course/linux-command-line-tutorial/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-85bf6677-7ecb-4e4d-a90f-7d8c5ec94c11.jpg?v=1665784660000",
        icon: <FaLaptopCode className="w-6 h-6" />,
        category: "System Administration",
        skills: ["Linux", "Command Line", "System Administration", "Terminal", "Unix"],
        color: "from-gray-500 to-gray-700"
    },
    {
        title: "Universidad HTML - Aprende HTML desde Cero hasta Experto",
        description: "Aprende HTML desde niveles básicos, intermedios y avanzados, para crear aplicaciones y sitios Web increíbles! Comprehensive HTML course from beginner to expert level in Spanish.",
        certificateUrl: "https://www.udemy.com/course/draft/3982816/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d98de72-1521-4fd6-895c-c3eae7a08daf.jpg?v=1752422904000",
        icon: <FaCode className="w-6 h-6" />,
        category: "Frontend Development",
        skills: ["HTML", "Web Development", "Frontend", "Semantic HTML", "Web Standards"],
        color: "from-red-500 to-pink-600"
    },
    {
        title: "Circuitos Eléctricos en Corriente Alterna",
        description: "Análisis de Circuitos Eléctricos. Parte II. Advanced electrical engineering course covering AC circuit analysis, electrical theory, and practical applications in electrical systems.",
        certificateUrl: "https://www.udemy.com/course/circuitos-electricos-en-corriente-alterna/",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-b06bef3a-7780-481f-a9f4-3553827bb4d6.jpg?v=1752423425000",
        icon: <FaCode className="w-6 h-6" />,
        category: "Electrical Engineering",
        skills: ["Electrical Circuits", "AC Analysis", "Electrical Engineering", "Circuit Theory", "Power Systems"],
        color: "from-cyan-500 to-blue-600"
    }
]

function Udemy() {
    // Estados para las imágenes y certificaciones
    const [imageLoadingStates, setImageLoadingStates] = useState({})
    const [imageErrors, setImageErrors] = useState({})
    const [certifications, setCertifications] = useState([])

    // Generar UUIDs para las certificaciones al montar el componente
    useEffect(() => {
        const certificationsWithUUIDs = udemyCertifications.map(cert => ({
            ...cert,
            id: uuidv4() // Asigna un UUID único a cada certificación
        }))
        setCertifications(certificationsWithUUIDs)

        // Inicializar estados de carga de imágenes
        const initialLoadingStates = {}
        const initialErrorStates = {}
        certificationsWithUUIDs.forEach(cert => {
            initialLoadingStates[cert.id] = true
            initialErrorStates[cert.id] = false
        })
        setImageLoadingStates(initialLoadingStates)
        setImageErrors(initialErrorStates)
    }, []) // Array vacío asegura que se ejecute solo una vez al montar

    // Calcular estadísticas
    const udemyStats = {
        totalCertificates: certifications.length,
        categories: [...new Set(certifications.map(cert => cert.category))].length,
        totalSkills: [...new Set(certifications.flatMap(cert => cert.skills))].length
    }

    // Función para abrir certificado
    const openCertificate = (url) => {
        window.open(url, '_blank')
    }

    // Función para manejar carga de imagen
    const handleImageLoad = (certId) => {
        setImageLoadingStates(prev => ({
            ...prev,
            [certId]: false
        }))
        // Aseguramos que no haya error si la imagen se carga correctamente
        setImageErrors(prev => ({
            ...prev,
            [certId]: false
        }))
    }

    // Función para manejar error de imagen
    const handleImageError = (certId) => {
        setImageErrors(prev => ({
            ...prev,
            [certId]: true
        }))
        setImageLoadingStates(prev => ({
            ...prev,
            [certId]: false
        }))
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos estáticos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Encabezado de Udemy */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-orange-600 rounded-full mb-6">
                            <SiUdemy className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            Udemy
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-orange-500 mx-auto rounded-full mb-6"></div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 leading-relaxed max-w-4xl mx-auto">
                            Certificaciones en{' '}
                            <span className="text-purple-400 font-medium">Desarrollo Frontend</span>,{' '}
                            <span className="text-orange-400 font-medium">Full Stack</span> y{' '}
                            <span className="text-red-400 font-medium">Tecnologías Web</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Formación especializada en desarrollo web moderno, desde tecnologías frontend como React y Bootstrap
                            hasta desarrollo full stack con PHP y bases de datos.
                        </p>
                    </div>

                    {/* Estadísticas de Udemy */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-purple-400">
                                    <FaCertificate className="w-8 h-8" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {udemyStats.totalCertificates}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Certificaciones
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-orange-400">
                                    <HiAcademicCap className="w-8 h-8" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {udemyStats.categories}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Categorías
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-red-400">
                                    <FaLaptopCode className="w-8 h-8" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {udemyStats.totalSkills}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Habilidades
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid de certificaciones */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="relative"
                            >
                                {/* Tarjeta de certificación */}
                                <div className="bg-gray-800/30 border border-gray-700 rounded-2xl overflow-hidden h-full">
                                    {/* Imagen de previsualización */}
                                    <div className="relative h-48 md:h-52 lg:h-56 bg-gray-700/50 overflow-hidden">
                                        {/* Loader mientras carga la imagen */}
                                        {imageLoadingStates[cert.id] && !imageErrors[cert.id] && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                <div className="text-center">
                                                    <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                                                    <p className="text-gray-400 text-sm">Cargando certificado...</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Fallback cuando hay error de imagen */}
                                        {imageErrors[cert.id] && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                <div className="text-center">
                                                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                                                        {cert.icon}
                                                    </div>
                                                    <p className="text-gray-400 text-sm">Vista previa no disponible</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Imagen del certificado */}
                                        <img
                                            src={cert.imageUrl}
                                            alt={cert.title}
                                            className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                                                imageLoadingStates[cert.id] ? 'opacity-0' : 'opacity-100'
                                            }`}
                                            onLoad={() => handleImageLoad(cert.id)}
                                            onError={() => handleImageError(cert.id)}
                                            loading="lazy"
                                        />
                                        
                                        {/* Overlay decorativo */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                                        
                                        {/* Badges en la esquina superior derecha */}
                                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                                            <span className="text-xs bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/20">
                                                {cert.category}
                                            </span>
                                            <div className="bg-black/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
                                                <SiUdemy className="w-3 h-3 text-purple-400" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenido de la tarjeta */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl`}>
                                                <div className="text-white">
                                                    {cert.icon}
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <FaAward className="w-4 h-4 text-yellow-400" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {cert.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {cert.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex pt-4 border-t border-gray-700">
                                            <button
                                                onClick={() => openCertificate(cert.certificateUrl)}
                                                className="w-full bg-gradient-to-r from-purple-500 to-orange-600 hover:from-purple-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                                            >
                                                <FaCertificate className="w-4 h-4" />
                                                Ver Certificado
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Elementos decorativos estáticos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full opacity-50"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-30"></div>
        </section>
    )
};

export default Udemy;