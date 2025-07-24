// src/app/apps/mobile/another-chat-room/Components/Download.jsx
'use client';
import React, { useState, useEffect } from 'react'
import { FaAndroid, FaApple, FaDownload, FaGithub, FaSpinner, FaExclamationTriangle } from 'react-icons/fa'
import { MdCloudDownload, MdUpdate, MdFileDownload } from 'react-icons/md'





function Download() {
    // Estados para manejar la información de las releases
    const [releases, setReleases] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    // URLs y configuración
    const GITHUB_API_URL = 'https://api.github.com/repos/rodolfocasan/another-chat-room/releases'
    const REPO_URL = 'https://github.com/rodolfocasan/another-chat-room'

    // Fetch de las releases desde GitHub API
    useEffect(() => {
        const fetchReleases = async () => {
            try {
                setLoading(true)
                const response = await fetch(GITHUB_API_URL)

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`)
                }

                const data = await response.json()
                setReleases(data)
            } catch (err) {
                console.error('Error al obtener releases:', err)
                setError('Error al cargar las versiones disponibles')
            } finally {
                setLoading(false)
            }
        }

        fetchReleases()
    }, [])

    // Efecto de visibilidad para animaciones
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])

    // Función para obtener el asset de Android (.apk)
    const getAndroidAsset = (release) => {
        return release?.assets?.find(asset =>
            asset.name.toLowerCase().endsWith('.apk')
        )
    }

    // Función para obtener el asset de iOS (.ipa)
    const getIOSAsset = (release) => {
        return release?.assets?.find(asset =>
            asset.name.toLowerCase().endsWith('.ipa')
        )
    }

    // Función para formatear el tamaño del archivo
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 B'
        const k = 1024
        const sizes = ['B', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
    }

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    // Obtener la release más reciente
    const latestRelease = releases?.[0]
    const androidAsset = latestRelease ? getAndroidAsset(latestRelease) : null
    const iosAsset = latestRelease ? getIOSAsset(latestRelease) : null

    // Componente de plataforma de descarga
    const PlatformCard = ({ platform, icon, asset, color, unavailableColor }) => (
        <div className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-${color}-400/50 transition-all duration-300 hover:scale-105`}>
            {/* Icono de la plataforma */}
            <div className={`text-4xl mb-6 flex justify-center text-${asset ? color : unavailableColor}-400 group-hover:text-${asset ? color : unavailableColor}-300 transition-colors duration-300`}>
                {icon}
            </div>

            {/* Nombre de la plataforma */}
            <h3 className={`text-white text-xl font-bold mb-4 text-center group-hover:text-${color}-400 transition-colors duration-300`}>
                {platform}
            </h3>

            {asset ? (
                // Disponible - mostrar información y botón de descarga
                <div className="text-center">
                    {/* Información del archivo */}
                    <div className="mb-6 space-y-2">
                        <p className="text-gray-300 text-sm">
                            <span className="text-gray-400">Versión:</span> {latestRelease.tag_name}
                        </p>
                        <p className="text-gray-300 text-sm">
                            <span className="text-gray-400">Tamaño:</span> {formatFileSize(asset.size)}
                        </p>
                        <p className="text-gray-300 text-sm">
                            <span className="text-gray-400">Fecha:</span> {formatDate(latestRelease.published_at)}
                        </p>
                    </div>

                    {/* Botón de descarga */}
                    <a
                        href={asset.browser_download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-${color}-500 to-${color}-600 hover:from-${color}-400 hover:to-${color}-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                        <MdFileDownload className="text-lg" />
                        <span>Descargar última versión</span>
                    </a>
                </div>
            ) : (
                // No disponible
                <div className="text-center">
                    <div className="mb-4">
                        <FaExclamationTriangle className="text-2xl text-gray-500 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">No disponible</p>
                    </div>

                    <div className={`px-6 py-3 bg-gray-700/50 text-gray-400 rounded-xl cursor-not-allowed border border-gray-600/50`}>
                        <span>Próximamente</span>
                    </div>
                </div>
            )}

            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    )

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
                    {/* Icono principal */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-gray-900 rounded-2xl p-4">
                                <MdCloudDownload className="w-16 h-16 md:w-20 md:h-20 text-green-400 group-hover:text-blue-400 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Título */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Descargar
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Descripción */}
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Descarga <span className="text-green-400 font-medium">Another Chat Room</span> en tu dispositivo móvil y comienza a chatear en{' '}
                        <span className="text-blue-400 font-medium">salas temporales</span> al instante.
                    </p>
                </div>

                {/* Estado de carga */}
                {loading && (
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaSpinner className="text-4xl text-blue-400 animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Cargando versiones disponibles...</p>
                    </div>
                )}

                {/* Estado de error */}
                {error && (
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <FaExclamationTriangle className="text-4xl text-red-400 mx-auto mb-4" />
                        <p className="text-red-400 mb-4">{error}</p>
                        <a
                            href={REPO_URL + '/releases'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                        >
                            <FaGithub />
                            <span>Ver en GitHub</span>
                        </a>
                    </div>
                )}

                {/* Plataformas de descarga */}
                {!loading && !error && latestRelease && (
                    <>
                        {/* Información de la versión actual */}
                        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300">
                                <MdUpdate className="text-green-400" />
                                <span className="font-medium">Última versión: {latestRelease.tag_name}</span>
                                <span className="text-gray-500">•</span>
                                <span>{formatDate(latestRelease.published_at)}</span>
                            </div>
                        </div>

                        {/* Grid de plataformas */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <PlatformCard
                                platform="Android"
                                icon={<FaAndroid />}
                                asset={androidAsset}
                                color="green"
                                unavailableColor="gray"
                            />
                            <PlatformCard
                                platform="iOS"
                                icon={<FaApple />}
                                asset={iosAsset}
                                color="blue"
                                unavailableColor="gray"
                            />
                        </div>

                        {/* Notas de la versión */}
                        {latestRelease.body && (
                            <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Notas de la Versión
                                </h3>
                                <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                                    <div className="prose prose-invert max-w-none">
                                        <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
                                            {latestRelease.body}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Enlaces adicionales */}
                        <div className={`text-center mt-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <a
                                href={REPO_URL + '/releases'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-xl transition-all duration-300"
                            >
                                <FaGithub />
                                <span>Ver todas las versiones en GitHub</span>
                            </a>
                        </div>
                    </>
                )}
            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30 delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-35 delay-2000"></div>
        </section>
    )
}

export default Download