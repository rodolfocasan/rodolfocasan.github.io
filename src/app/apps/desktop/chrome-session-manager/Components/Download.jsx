// src/app/apps/desktop/chrome-session-manager/Components/Download.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaDownload, FaWindows, FaLinux, FaGithub, FaSpinner, FaExclamationTriangle, FaCalendar, FaTag, FaFileArchive } from 'react-icons/fa'
import { MdUpdate, MdBugReport } from 'react-icons/md'
import { RiComputerLine } from 'react-icons/ri'





function Download() {
    // Estados para la gestión de datos
    const [releases, setReleases] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    // Función para fetchear los releases de GitHub
    const fetchReleases = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch('https://api.github.com/repos/rodolfocasan/chrome-session-manager/releases')

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()
            setReleases(data)
        } catch (err) {
            console.error('Error al fetchear releases:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Efecto para cargar los releases al montar el componente
    useEffect(() => {
        fetchReleases()
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Función para categorizar assets por plataforma
    const categorizeAssets = (assets) => {
        const platforms = {
            windows: [],
            linux: []
        }

        assets.forEach(asset => {
            if (asset.name.startsWith('windows_')) {
                platforms.windows.push(asset)
            } else if (asset.name.startsWith('linux_')) {
                platforms.linux.push(asset)
            }
        })

        return platforms
    }

    // Función para formatear el tamaño del archivo
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    // Función para formatear fecha
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Componente de tarjeta de plataforma
    const PlatformCard = ({ platform, assets, icon, bgColor, hoverColor }) => (
        <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 ${hoverColor} transition-all duration-300 hover:scale-105`}>
            <div className="flex items-center space-x-3 mb-4">
                <div className={`${bgColor} p-2 rounded-lg`}>
                    {icon}
                </div>
                <h4 className="text-xl font-bold text-white">
                    {platform === 'windows' ? 'Windows' : 'Linux'}
                </h4>
            </div>

            {assets.length > 0 ? (
                <div className="space-y-3">
                    {assets.map((asset, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-colors duration-200"
                        >
                            <div className="flex items-center space-x-3">
                                <FaFileArchive className="text-gray-400" />
                                <div>
                                    <p className="text-white text-sm font-medium">
                                        {asset.name.replace(`${platform}_`, '')}
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        {formatFileSize(asset.size)}
                                    </p>
                                </div>
                            </div>

                            <a
                                href={asset.browser_download_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                                <FaDownload className="text-xs" />
                                <span>Descargar</span>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-4">
                    <FaExclamationTriangle className="text-yellow-400 text-2xl mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                        No disponible para {platform === 'windows' ? 'Windows' : 'Linux'}
                    </p>
                </div>
            )}
        </div>
    )

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">

                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Descargar
                    </h1>

                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Descarga <span className="text-green-400 font-medium">Chrome Session Manager</span> para tu plataforma preferida.
                        Todas las versiones están disponibles directamente desde{' '}
                        <span className="text-blue-400 font-medium">GitHub Releases</span>.
                    </p>
                </div>

                {/* Estado de carga */}
                {loading && (
                    <div className={`text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaSpinner className="text-green-400 text-4xl mx-auto mb-4 animate-spin" />
                        <p className="text-gray-300 text-lg">Cargando versiones disponibles...</p>
                    </div>
                )}

                {/* Estado de error */}
                {error && (
                    <div className={`text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaExclamationTriangle className="text-red-400 text-4xl mx-auto mb-4" />
                        <h3 className="text-red-400 text-xl font-semibold mb-2">Error al cargar las descargas</h3>
                        <p className="text-gray-400 mb-6">{error}</p>

                        <button
                            onClick={fetchReleases}
                            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                        >
                            <MdUpdate />
                            <span>Reintentar</span>
                        </button>
                    </div>
                )}

                {/* Lista de releases */}
                {!loading && !error && releases.length > 0 && (
                    <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {releases.map((release, releaseIndex) => {
                            const platforms = categorizeAssets(release.assets)

                            return (
                                <div key={release.id} className="max-w-6xl mx-auto">
                                    {/* Header del release */}
                                    <div className="text-center mb-8">
                                        <div className="flex items-center justify-center space-x-3 mb-4">
                                            <FaTag className="text-green-400" />
                                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                                Versión {release.tag_name}
                                            </h2>
                                            {release.prerelease && (
                                                <span className="bg-yellow-600 text-yellow-100 px-3 py-1 rounded-full text-sm font-medium">
                                                    Pre-release
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm mb-4">
                                            <div className="flex items-center space-x-2">
                                                <FaCalendar />
                                                <span>{formatDate(release.published_at)}</span>
                                            </div>

                                            <a
                                                href={release.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                            >
                                                <FaGithub />
                                                <span>Ver en GitHub</span>
                                            </a>
                                        </div>

                                        {/* Descripción del release */}
                                        {release.body && (
                                            <div className="max-w-3xl mx-auto">
                                                <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4">
                                                    <div className="text-gray-300 text-sm whitespace-pre-line">
                                                        {release.body.length > 300
                                                            ? `${release.body.substring(0, 300)}...`
                                                            : release.body
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tarjetas de plataformas */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <PlatformCard
                                            platform="windows"
                                            assets={platforms.windows}
                                            icon={<FaWindows className="text-white text-xl" />}
                                            bgColor="bg-blue-600"
                                            hoverColor="hover:border-blue-400/50"
                                        />

                                        <PlatformCard
                                            platform="linux"
                                            assets={platforms.linux}
                                            icon={<FaLinux className="text-white text-xl" />}
                                            bgColor="bg-green-600"
                                            hoverColor="hover:border-green-400/50"
                                        />
                                    </div>

                                    {/* Separador entre releases */}
                                    {releaseIndex < releases.length - 1 && (
                                        <div className="mt-12 pt-8 border-t border-gray-700/30"></div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Mensaje cuando no hay releases */}
                {!loading && !error && releases.length === 0 && (
                    <div className={`text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <RiComputerLine className="text-gray-400 text-4xl mx-auto mb-4" />
                        <h3 className="text-gray-300 text-xl font-semibold mb-2">No hay versiones disponibles</h3>
                        <p className="text-gray-400">No se encontraron releases en el repositorio.</p>
                    </div>
                )}
            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-35 delay-2000"></div>
        </section>
    )
}

export default Download