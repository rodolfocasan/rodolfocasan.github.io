// src/app/resources/education/Components/Overview.jsx
'use client';
import React, { useState, useEffect, useCallback } from 'react'
import { FaLock, FaExternalLinkAlt, FaGraduationCap, FaUser, FaCalendarAlt, FaTimes, FaEye, FaSpinner, FaExclamationTriangle } from 'react-icons/fa'
import { MdRefresh, MdTimer } from 'react-icons/md'
import { IoIosWarning } from 'react-icons/io'





function Overview() {
    // Estados principales
    const [cupones, setCupones] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    // Estados del modal de actualización
    const [showModal, setShowModal] = useState(false)
    const [password, setPassword] = useState('')
    const [updating, setUpdating] = useState(false)
    const [updateMessage, setUpdateMessage] = useState('')

    // Configuración de la API
    const API_BASE = 'https://rocasan-cupones.onrender.com'
    const CUPONES_PER_PAGE = 12

    // Función para obtener cupones iniciales
    const fetchCupones = async (pageNum = 1, append = false) => {
        try {
            if (!append) {
                setLoading(true)
                setError(null)
            } else {
                setLoadingMore(true)
            }

            const response = await fetch(`${API_BASE}/api/cupones`)

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()

            if (data.cupones && Array.isArray(data.cupones)) {
                // Filtrar solo cupones gratuitos
                const cuponesGratuitos = data.cupones.filter(cupon =>
                    cupon.precio_descuento === "Gratis"
                )

                // Simular paginación en el frontend
                const startIndex = (pageNum - 1) * CUPONES_PER_PAGE
                const endIndex = startIndex + CUPONES_PER_PAGE
                const paginatedCupones = cuponesGratuitos.slice(startIndex, endIndex)

                if (append) {
                    setCupones(prev => [...prev, ...paginatedCupones])
                } else {
                    setCupones(paginatedCupones)
                }

                // Verificar si hay más cupones
                setHasMore(endIndex < cuponesGratuitos.length)
            } else {
                throw new Error('Formato de respuesta inválido')
            }
        } catch (err) {
            console.error('Error al obtener cupones:', err)
            setError(err.message)
        } finally {
            setLoading(false)
            setLoadingMore(false)
        }
    }

    // Función para cargar más cupones (infinite scroll)
    const loadMoreCupones = useCallback(() => {
        if (!loadingMore && hasMore) {
            const nextPage = page + 1
            setPage(nextPage)
            fetchCupones(nextPage, true)
        }
    }, [loadingMore, hasMore, page])

    // Efecto para infinite scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loadingMore) {
                return
            }

            if (hasMore) {
                loadMoreCupones()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loadMoreCupones, loadingMore, hasMore])

    // Función para actualizar cupones (requiere contraseña)
    const handleUpdate = async () => {
        if (!password.trim()) {
            setUpdateMessage('Por favor ingresa la contraseña')
            return
        }

        setUpdating(true)
        setUpdateMessage('')

        try {
            const response = await fetch(`${API_BASE}/api/extraer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contrasena: password
                })
            })

            const data = await response.json()

            if (response.ok) {
                setUpdateMessage('Actualización iniciada exitosamente')
                setTimeout(() => {
                    setShowModal(false)
                    setPassword('')
                    fetchCupones() // Recargar cupones después de la actualización
                }, 2000)
            } else {
                setUpdateMessage(data.error || 'Error al actualizar')
            }
        } catch (err) {
            console.error('Error al actualizar:', err)
            setUpdateMessage('Error de conexión')
        } finally {
            setUpdating(false)
        }
    }

    // Efecto inicial para cargar cupones
    useEffect(() => {
        fetchCupones()
    }, [])

    // Función para formatear fecha
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString)
            return date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        } catch {
            return dateString
        }
    }

    // Renderizado de loading inicial
    if (loading && cupones.length === 0) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col items-center justify-center min-h-[50vh]">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-green-400/30 border-t-green-400 rounded-full animate-spin"></div>
                        </div>
                        <p className="text-gray-400 mt-4 text-lg">Cargando cupones de estudiantes...</p>
                    </div>
                </div>
            </section>
        )
    }

    // Renderizado de error
    if (error && cupones.length === 0) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col items-center justify-center min-h-[50vh]">
                        <FaExclamationTriangle className="text-red-400 text-6xl mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Error al cargar cupones</h2>
                        <p className="text-gray-400 mb-6 text-center">{error}</p>
                        <button
                            onClick={() => fetchCupones()}
                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 flex items-center gap-2"
                        >
                            <MdRefresh className="text-lg" />
                            Reintentar
                        </button>
                    </div>
                </div>
            </section>
        )
    }

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

                {/* Header con advertencia */}
                <div className="text-center mb-12">
                    {/* Advertencia importante */}
                    <div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 border border-orange-400/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <IoIosWarning className="text-orange-400 text-2xl" />
                            <MdTimer className="text-orange-400 text-2xl" />
                            <button
                                onClick={() => setShowModal(true)}
                                className="text-orange-400 text-2xl hover:text-orange-300 transition-colors duration-300 cursor-pointer"
                                title="Gestión avanzada"
                            >
                                <FaLock />
                            </button>
                        </div>
                        <h3 className="text-xl font-bold text-orange-300 mb-2">¡Importante!</h3>
                        <p className="text-orange-200 leading-relaxed">
                            Debes acceder al curso lo más pronto posible antes de que el cupón expire
                            y el curso vuelva a tener su precio normal. Los cupones tienen disponibilidad limitada.
                        </p>
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Cupones para Estudiantes
                    </h1>

                    {/* Línea decorativa */}
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>

                    {/* Subtítulo */}
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                        Descubre <span className="text-green-400 font-medium">cursos gratuitos</span> con{' '}
                        <span className="text-blue-400 font-medium">cupones especiales</span> para impulsar tu educación
                    </p>
                </div>

                {/* Grid de cupones */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {cupones.map((cupon, index) => (
                        <div
                            key={`${cupon.id || index}-${cupon.titulo}`}
                            className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Imagen del curso */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={cupon.imagen || '/api/placeholder/480/270'}
                                    alt={cupon.titulo}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.src = '/api/placeholder/480/270'
                                    }}
                                />

                                {/* Badge de precio */}
                                <div className="absolute top-3 right-3">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        {cupon.precio_descuento}
                                    </span>
                                </div>

                                {/* Precio original tachado */}
                                {cupon.precio_original && cupon.precio_original !== cupon.precio_descuento && (
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-red-500/80 text-white px-2 py-1 rounded text-xs line-through">
                                            {cupon.precio_original}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Contenido del curso */}
                            <div className="p-6">
                                {/* Título del curso */}
                                <h3 className="text-white text-lg font-semibold mb-3 line-clamp-2 group-hover:text-green-400 transition-colors duration-300">
                                    {cupon.titulo}
                                </h3>

                                {/* Instructor */}
                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                    <FaUser className="text-blue-400" />
                                    <span>{cupon.instructor}</span>
                                </div>

                                {/* Descripción */}
                                {cupon.descripcion && (
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {cupon.descripcion}
                                    </p>
                                )}

                                {/* Fecha de extracción */}
                                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                                    <FaCalendarAlt className="text-purple-400" />
                                    <span>Actualizado: {formatDate(cupon.extraido_en)}</span>
                                </div>

                                {/* Botón de acceso */}
                                <a
                                    href={cupon.url_udemy}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                                >
                                    <FaExternalLinkAlt />
                                    Acceder al Curso
                                </a>
                            </div>

                            {/* Efecto de brillo al hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Loading más cupones */}
                {loadingMore && (
                    <div className="flex justify-center items-center py-8">
                        <div className="flex items-center gap-3 text-green-400">
                            <FaSpinner className="text-2xl animate-spin" />
                            <span className="text-lg">Cargando más cupones...</span>
                        </div>
                    </div>
                )}

                {/* Mensaje cuando no hay más cupones */}
                {!hasMore && cupones.length > 0 && (
                    <div className="text-center py-8">
                        <FaGraduationCap className="text-4xl text-gray-500 mx-auto mb-3" />
                        <p className="text-gray-400 text-lg">Sin más cupones por ahora. Vuelve mañana.</p>
                    </div>
                )}

                {/* Botón oculto de actualización - REMOVIDO */}
            </div>

            {/* Modal de actualización */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-md w-full relative">
                        {/* Botón cerrar */}
                        <button
                            onClick={() => {
                                setShowModal(false)
                                setPassword('')
                                setUpdateMessage('')
                            }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        {/* Título del modal */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MdRefresh className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Actualizar Cupones</h3>
                            <p className="text-gray-400">Ingresa la contraseña para solicitar una actualización</p>
                        </div>

                        {/* Campo de contraseña */}
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Contraseña de actualización
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                                placeholder="Ingresa la contraseña"
                                onKeyPress={(e) => e.key === 'Enter' && !updating && handleUpdate()}
                                disabled={updating}
                            />
                        </div>

                        {/* Mensaje de estado */}
                        {updateMessage && (
                            <div className={`mb-4 p-3 rounded-lg text-sm ${updateMessage.includes('Error') || updateMessage.includes('contraseña')
                                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                    : 'bg-green-500/20 text-green-300 border border-green-500/30'
                                }`}>
                                {updateMessage}
                            </div>
                        )}

                        {/* Botones */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowModal(false)
                                    setPassword('')
                                    setUpdateMessage('')
                                }}
                                className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300"
                                disabled={updating}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleUpdate}
                                disabled={updating || !password.trim()}
                                className="flex-1 py-3 px-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {updating ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Actualizando...
                                    </>
                                ) : (
                                    <>
                                        <MdRefresh />
                                        Actualizar
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-35 delay-2000"></div>

            {/* Estilos CSS personalizados */}
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    )
}

export default Overview