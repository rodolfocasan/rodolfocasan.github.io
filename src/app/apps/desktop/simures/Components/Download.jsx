// src/app/apps/desktop/simures/Components/Download.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaDownload, FaLinux, FaWindows, FaApple, FaGithub, FaBox, FaExclamationTriangle, FaSpinner, FaFile, FaClock } from 'react-icons/fa'
import { MdDownload, MdComputer, MdWarning, MdInfo } from 'react-icons/md'
import { RiTerminalLine } from 'react-icons/ri'





function Download() {
    // Estados para manejar las descargas y la UI
    const [isVisible, setIsVisible] = useState(false)
    const [releases, setReleases] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedPlatform, setSelectedPlatform] = useState('all')

    // Efecto de visibilidad al cargar el componente
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    // Fetch de releases desde GitHub API
    useEffect(() => {
        const fetchReleases = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://api.github.com/repos/rodolfocasan/simures/releases')
                if (!response.ok) {
                    throw new Error('Error al obtener las releases')
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

        fetchReleases()
    }, [])

    // Función para detectar plataforma por nombre de archivo
    const detectPlatform = (fileName) => {
        const lowerFileName = fileName.toLowerCase()
        if (lowerFileName.startsWith('linux_')) return 'linux'
        if (lowerFileName.startsWith('windows_')) return 'windows'
        if (lowerFileName.startsWith('mac_') || lowerFileName.startsWith('macos_')) return 'mac'
        return 'unknown'
    }

    // Función para obtener icono de plataforma
    const getPlatformIcon = (platform) => {
        switch (platform) {
            case 'linux':
                return <FaLinux className="text-orange-400" />
            case 'windows':
                return <FaWindows className="text-blue-400" />
            case 'mac':
                return <FaApple className="text-gray-300" />
            default:
                return <FaFile className="text-gray-400" />
        }
    }

    // Función para obtener nombre de plataforma
    const getPlatformName = (platform) => {
        switch (platform) {
            case 'linux':
                return 'Linux'
            case 'windows':
                return 'Windows'
            case 'mac':
                return 'macOS'
            default:
                return 'Otro'
        }
    }

    // Función para formatear tamaño de archivo
    const formatFileSize = (bytes) => {
        if (!bytes) return 'N/A'
        const sizes = ['B', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(1024))
        return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
    }

    // Función para formatear fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Filtrar assets por plataforma
    const filterAssetsByPlatform = (assets, platform) => {
        if (platform === 'all') return assets
        return assets.filter(asset => detectPlatform(asset.name) === platform)
    }

    // Plataformas disponibles
    const platforms = [
        { id: 'all', name: 'Todas', icon: <MdComputer className="text-gray-400" /> },
        { id: 'linux', name: 'Linux', icon: <FaLinux className="text-orange-400" /> },
        { id: 'windows', name: 'Windows', icon: <FaWindows className="text-blue-400" /> },
        { id: 'mac', name: 'macOS', icon: <FaApple className="text-gray-300" /> }
    ]

    // Comandos de instalación para Linux
    const installationCommands = [
        "sudo apt install python3-tk x11-xserver-utils xcalib"
    ]

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
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                        Descargar SimuRES
                    </h1>

                    {/* Descripción */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                        Descarga la última versión de <span className="text-green-400 font-medium">SimuRES</span> para tu sistema operativo
                        desde nuestro repositorio oficial de <span className="text-blue-400 font-medium">GitHub</span>.
                    </p>

                    {/* Enlace al repositorio */}
                    <a
                        href="https://github.com/rodolfocasan/simures/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-700 hover:border-green-400 
                                   px-6 py-3 rounded-full text-gray-300 hover:text-green-400 transition-all duration-300 
                                   transform hover:scale-105"
                    >
                        <FaGithub />
                        <span>Ver en GitHub</span>
                    </a>
                </div>

                {/* Advertencia de requisitos para Linux */}
                <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
                            <div className="flex items-start space-x-4">
                                <MdWarning className="text-orange-400 text-2xl mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h3 className="text-orange-400 font-semibold text-lg mb-2">
                                        Requisitos del Sistema (Linux)
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Para garantizar el correcto funcionamiento del programa, es necesario instalar los siguientes paquetes antes de usarlo:
                                    </p>
                                    <div className="bg-gray-900/50 rounded-lg p-4">
                                        <div className="flex items-center mb-2">
                                            <RiTerminalLine className="text-green-400 mr-2" />
                                            <span className="text-green-400 font-semibold">Terminal:</span>
                                        </div>
                                        <code className="text-green-400 font-mono text-sm block">
                                            {installationCommands[0]}
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filtros de plataforma */}
                <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {platforms.map((platform) => (
                            <button
                                key={platform.id}
                                onClick={() => setSelectedPlatform(platform.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 transform hover:scale-105 ${selectedPlatform === platform.id
                                    ? 'bg-green-500/20 border-green-400 text-green-400'
                                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                                    }`}
                            >
                                {platform.icon}
                                <span>{platform.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Estado de carga */}
                {loading && (
                    <div className={`text-center mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center justify-center space-x-3">
                            <FaSpinner className="text-blue-400 animate-spin text-2xl" />
                            <span className="text-gray-300 text-lg">Cargando releases...</span>
                        </div>
                    </div>
                )}

                {/* Error al cargar */}
                {error && (
                    <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                            <div className="flex items-center space-x-3">
                                <FaExclamationTriangle className="text-red-400 text-xl" />
                                <div>
                                    <h3 className="text-red-400 font-semibold">Error al cargar las descargas</h3>
                                    <p className="text-gray-300">{error}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Lista de releases */}
                {!loading && !error && releases.length > 0 && (
                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="space-y-8">
                            {releases.map((release, index) => {
                                const filteredAssets = filterAssetsByPlatform(release.assets, selectedPlatform)

                                return (
                                    <div key={release.id} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                                        {/* Header del release */}
                                        <div className="mb-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                                                    <h2 className="text-2xl font-bold text-white">
                                                        {release.tag_name}
                                                    </h2>
                                                    {index === 0 && (
                                                        <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium">
                                                            Última
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                                    <div className="flex items-center space-x-1">
                                                        <FaClock />
                                                        <span>{formatDate(release.published_at)}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <FaDownload />
                                                        <span>{release.assets.length} archivo{release.assets.length !== 1 ? 's' : ''}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Nombre del release */}
                                            {release.name && (
                                                <h3 className="text-lg text-gray-300 mb-3">{release.name}</h3>
                                            )}

                                            {/* Descripción del release */}
                                            {release.body && (
                                                <div className="prose prose-sm prose-invert max-w-none">
                                                    <p className="text-gray-400 leading-relaxed">
                                                        {release.body.substring(0, 200)}
                                                        {release.body.length > 200 && '...'}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Assets de descarga */}
                                        {filteredAssets.length > 0 ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {filteredAssets.map((asset) => {
                                                    const platform = detectPlatform(asset.name)
                                                    return (
                                                        <a
                                                            key={asset.id}
                                                            href={asset.browser_download_url}
                                                            className="group bg-gray-700/30 border border-gray-600/50 rounded-xl p-4 hover:border-green-400/50 
                                                                       hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                                                        >
                                                            <div className="flex items-start space-x-3">
                                                                <div className="flex-shrink-0 mt-1">
                                                                    {getPlatformIcon(platform)}
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center space-x-2 mb-2">
                                                                        <span className="text-sm font-medium text-green-400">
                                                                            {getPlatformName(platform)}
                                                                        </span>
                                                                        <MdDownload className="text-blue-400 group-hover:text-green-400 transition-colors duration-300" />
                                                                    </div>
                                                                    <p className="text-white font-medium text-sm mb-1 truncate" title={asset.name}>
                                                                        {asset.name}
                                                                    </p>
                                                                    <div className="flex items-center text-xs text-gray-400">
                                                                        <span>{formatFileSize(asset.size)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    )
                                                })}
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
                                                <MdInfo className="text-gray-400 text-4xl mx-auto mb-4" />
                                                <p className="text-gray-400">
                                                    {selectedPlatform === 'all'
                                                        ? 'No hay archivos disponibles para esta versión.'
                                                        : `No disponible para ${getPlatformName(selectedPlatform)}`
                                                    }
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Mensaje cuando no hay releases */}
                {!loading && !error && releases.length === 0 && (
                    <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaBox className="text-gray-400 text-6xl mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-gray-300 mb-4">No hay releases disponibles</h3>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Actualmente no hay versiones publicadas en el repositorio. Revisa más tarde o visita el repositorio en GitHub.
                        </p>
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