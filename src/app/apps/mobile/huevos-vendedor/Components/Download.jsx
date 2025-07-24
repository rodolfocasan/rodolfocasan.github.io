// src/app/apps/mobile/huevos-vendedor/Components/Download.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaAndroid, FaApple, FaDownload, FaSpinner, FaExclamationTriangle, FaGithub, FaCalendarAlt, FaFileArchive } from 'react-icons/fa'
import { MdFileDownload, MdUpdate } from 'react-icons/md'





function Download() {
    // Estados para el manejo de datos y UI
    const [releases, setReleases] = useState([])
    const [latestRelease, setLatestRelease] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [androidAsset, setAndroidAsset] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    // URL de la API de GitHub
    const GITHUB_API_URL = 'https://api.github.com/repos/rodolfocasan/huevos-larural-vendedor-app/releases'

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Fetch de los releases de GitHub
    useEffect(() => {
        const fetchReleases = async () => {
            try {
                setLoading(true)
                const response = await fetch(GITHUB_API_URL)

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }

                const data = await response.json()

                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error('No se encontraron releases disponibles')
                }

                setReleases(data)

                // Obtener el release más reciente (primer elemento del array)
                const latest = data[0]
                setLatestRelease(latest)

                // Buscar archivo APK en los assets del release más reciente
                const apkAsset = latest.assets?.find(asset =>
                    asset.name.toLowerCase().includes('.apk') ||
                    asset.content_type === 'application/vnd.android.package-archive' ||
                    asset.name.toLowerCase().endsWith('.apk')
                )

                setAndroidAsset(apkAsset || null)

            } catch (err) {
                console.error('Error al obtener releases:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchReleases()
    }, [])

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Función para formatear el tamaño del archivo
    const formatFileSize = (bytes) => {
        if (!bytes) return 'N/A'
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(1024))
        return `${Math.round(bytes / Math.pow(1024, i) * 100) / 100} ${sizes[i]}`
    }

    // Función para manejar la descarga
    const handleDownload = (downloadUrl, fileName) => {
        if (!downloadUrl) return

        // Crear enlace temporal para descarga
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = fileName
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/6 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">

                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Descargar
                    </h1>

                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Descarga la última versión de <span className="text-green-400 font-medium">Huevos La Rural - Vendedor App</span> para tu dispositivo móvil
                    </p>
                </div>

                {/* Estado de carga */}
                {loading && (
                    <div className={`flex flex-col items-center justify-center py-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaSpinner className="text-4xl text-green-400 animate-spin mb-4" />
                        <p className="text-gray-300 text-lg">Cargando información de descargas...</p>
                    </div>
                )}

                {/* Estado de error */}
                {error && !loading && (
                    <div className={`flex flex-col items-center justify-center py-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaExclamationTriangle className="text-4xl text-red-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Error al cargar las descargas</h3>
                        <p className="text-gray-400 text-center max-w-md">{error}</p>
                    </div>
                )}

                {/* Contenido principal cuando hay datos */}
                {!loading && !error && latestRelease && (
                    <>
                        {/* Información del release actual */}
                        <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                                <div className="text-center md:text-left mb-4 md:mb-0">
                                    <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                                        <MdUpdate className="mr-2 text-green-400" />
                                        Última Versión: {latestRelease.tag_name}
                                    </h2>
                                    <p className="text-gray-400 flex items-center justify-center md:justify-start">
                                        <FaCalendarAlt className="mr-2" />
                                        Publicado el {formatDate(latestRelease.published_at)}
                                    </p>
                                </div>

                                <a
                                    href={latestRelease.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <FaGithub className="mr-2" />
                                    Ver en GitHub
                                </a>
                            </div>

                            {/* Descripción del release si existe */}
                            {latestRelease.body && (
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="text-white font-semibold mb-2">Notas de la versión:</h4>
                                    <div className="text-gray-300 text-sm whitespace-pre-wrap">
                                        {latestRelease.body}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Opciones de descarga por plataforma */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            {/* Android */}
                            <div className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                                <div className="text-center">
                                    <FaAndroid className="text-6xl text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />

                                    <h3 className="text-2xl font-bold text-white mb-4">Android</h3>

                                    {androidAsset ? (
                                        <div className="space-y-4">
                                            <div className="text-gray-300 space-y-2">
                                                <p className="flex items-center justify-center">
                                                    <FaFileArchive className="mr-2 text-blue-400" />
                                                    {androidAsset.name}
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    Tamaño: {formatFileSize(androidAsset.size)}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => handleDownload(androidAsset.browser_download_url, androidAsset.name)}
                                                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                                            >
                                                <FaDownload className="mr-2" />
                                                Descargar para Android
                                            </button>

                                            <p className="text-xs text-gray-500 text-center">
                                                Archivo APK • Versión {latestRelease.tag_name}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <p className="text-gray-400 mb-4">
                                                No hay versión disponible para Android en este release
                                            </p>
                                            <div className="w-full px-6 py-4 bg-gray-700/50 text-gray-500 font-semibold rounded-lg cursor-not-allowed">
                                                No disponible
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Efecto de brillo al hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>

                            {/* iOS */}
                            <div className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                                <div className="text-center">
                                    <FaApple className="text-6xl text-gray-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />

                                    <h3 className="text-2xl font-bold text-white mb-4">iOS</h3>

                                    <div className="space-y-4">
                                        <p className="text-gray-400 mb-4">
                                            Esta aplicación está desarrollada con React Native/Expo y actualmente solo está disponible para Android
                                        </p>
                                        <div className="w-full px-6 py-4 bg-gray-700/50 text-gray-500 font-semibold rounded-lg cursor-not-allowed">
                                            No disponible
                                        </div>
                                        <p className="text-xs text-gray-500 text-center">
                                            Desarrollada específicamente para Android
                                        </p>
                                    </div>
                                </div>

                                {/* Efecto de brillo al hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 right-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-35 delay-2000"></div>

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

export default Download