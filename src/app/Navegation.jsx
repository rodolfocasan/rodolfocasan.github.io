// src/app/Navegation.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText } from 'lucide-react';

import Data from "./constants.json";





// Función auxiliar para convertir imagen a Base64
const getBase64FromUrl = async (url) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Base64 Error:', error);
        return null;
    }
};

const Navegation = () => {
    // Estados para controlar los menús
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Estado para almacenar todas las imágenes en caché
    const [imageCache, setImageCache] = useState({});

    // Datos del blog organizados por categorías
    const blogCategories = [
        {
            category: 'YouTube',
            posts: [
                {
                    name: 'Convierte tu cuenta de ChatGPT en una API GRATIS',
                    path: '/blog/youtube/chatgpt-api-gratis',
                    icon: <FileText className="w-5 h-5" />,
                    newTab: false
                }
            ]
        }
    ];

    // Datos de los proyectos organizados por categorías
    const projectCategories = [
        {
            category: 'Python',
            projects: [
                {
                    name: 'Chrome Session Manager',
                    path: '/projects/python/chrome-session-manager',
                    icon: 'https://raw.githubusercontent.com/rodolfocasan/chrome-session-manager/main//Storage/Settings/icons/favicon.png',
                    newTab: false
                },
                {
                    name: 'SimuRES',
                    path: '/projects/python/simures',
                    icon: 'https://raw.githubusercontent.com/rodolfocasan/simures/main/Storage/Icons/favicon_01.png',
                    newTab: false
                },
                {
                    name: 'Flask Resources Monitor',
                    path: '/projects/python/flask-rm',
                    icon: 'https://raw.githubusercontent.com/rodolfocasan/flask-resources-monitor/main/web/favicon.svg',
                    newTab: false
                }
            ]
        },
        {
            category: 'Javascript',
            projects: [
                {
                    name: 'FlipMAD (Web)',
                    path: '/projects/javascript/flipmad-web',
                    icon: 'https://raw.githubusercontent.com/rodolfocasan/flipmad-multiplatform/main/assets/icon-only.jpg',
                    newTab: false
                }
            ]
        },
        {
            category: 'Mobile',
            projects: [
                {
                    name: 'FlipMAD (Android)',
                    path: 'https://volqor.itch.io/flipmad',
                    icon: 'https://raw.githubusercontent.com/rodolfocasan/flipmad-multiplatform/main/assets/splash.png',
                    newTab: true
                }
            ]
        }
    ];

    // Función para cargar y cachear una imagen
    const loadAndCacheImage = async (url, cacheKey) => {
        try {
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                setImageCache(prev => ({ ...prev, [cacheKey]: cached }));
                return;
            }

            const base64Image = await getBase64FromUrl(url);
            if (base64Image) {
                localStorage.setItem(cacheKey, base64Image);
                setImageCache(prev => ({ ...prev, [cacheKey]: base64Image }));
            }
        } catch (error) {
            console.error('Error al cargar imagen:', error);
        }
    };

    // Efecto para cargar todas las imágenes al inicio
    useEffect(() => {
        loadAndCacheImage(Data.favicon, 'profile_favicon');

        projectCategories.forEach(category => {
            category.projects.forEach(project => {
                const cacheKey = `project_icon_${project.name.toLowerCase().replace(/\s+/g, '_')}`;
                loadAndCacheImage(project.icon, cacheKey);
            });
        });
    }, []);

    // Función para obtener imagen cacheada
    const getCachedImage = (url, cacheKey) => {
        return imageCache[cacheKey] || url;
    };

    // Función para alternar el menú principal
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para alternar el menú de proyectos
    const toggleProjects = (e) => {
        e.stopPropagation();
        setIsProjectsOpen(!isProjectsOpen);
        setIsBlogOpen(false);
    };

    // Función para alternar el menú del blog
    const toggleBlog = (e) => {
        e.stopPropagation();
        setIsBlogOpen(!isBlogOpen);
        setIsProjectsOpen(false);
    };

    // Función para cerrar todos los menús
    const closeAllMenus = () => {
        setIsProjectsOpen(false);
        setIsBlogOpen(false);
        setIsMenuOpen(false);
    };

    // Efecto para cerrar el menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Función para renderizar imagen de proyecto con object-fit y caché
    const renderProjectIcon = (icon, name, size = 'w-8 h-8') => {
        const cacheKey = `project_icon_${name.toLowerCase().replace(/\s+/g, '_')}`;
        const cachedSrc = getCachedImage(icon, cacheKey);

        return (
            <div className={`${size} rounded-full overflow-hidden mr-3 flex-shrink-0 border border-white/20 flex items-center justify-center`}>
                <img
                    src={cachedSrc}
                    alt={name}
                    className="object-contain w-full h-full"
                />
            </div>
        );
    };

    return (
        <nav ref={dropdownRef} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Foto de perfil con caché */}
                <Link href="/" className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:scale-105 transition-transform">
                        <img
                            src={getCachedImage(Data.favicon, 'profile_favicon')}
                            alt="Perfil"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </Link>

                {/* Menú de Escritorio */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        href="/contact"
                        className="text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
                        onClick={closeAllMenus}
                    >
                        Contacto
                    </Link>

                    {/* Menú desplegable del Blog */}
                    <div className="relative">
                        <button
                            onClick={toggleBlog}
                            className="flex items-center text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
                        >
                            Blog
                            <ChevronDown
                                size={16}
                                className={`ml-2 transition-transform ${isBlogOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isBlogOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-72 bg-gray-900 rounded-xl shadow-2xl border border-white/10 overflow-hidden"
                            >
                                {blogCategories.map((category, catIndex) => (
                                    <div key={catIndex} className="px-4 py-3 border-b border-white/10 last:border-b-0">
                                        <p className="text-white/60 text-xs uppercase mb-2 tracking-wider">{category.category}</p>
                                        {category.posts.map((post, postIndex) => (
                                            <Link
                                                key={postIndex}
                                                href={post.path}
                                                target={post.newTab ? '_blank' : '_self'}
                                                rel={post.newTab ? 'noopener noreferrer' : ''}
                                                className="flex items-center text-white/80 hover:text-white py-2 hover:bg-white/5 rounded-md transition-colors"
                                                onClick={closeAllMenus}
                                            >
                                                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0 border border-white/20 flex items-center justify-center text-white/80">
                                                    {post.icon}
                                                </div>
                                                <span className="text-sm">{post.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Menú desplegable de Proyectos */}
                    <div className="relative">
                        <button
                            onClick={toggleProjects}
                            className="flex items-center text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
                        >
                            Mis Proyectos (OpenSource)
                            <ChevronDown
                                size={16}
                                className={`ml-2 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isProjectsOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-72 bg-gray-900 rounded-xl shadow-2xl border border-white/10 overflow-hidden"
                            >
                                {projectCategories.map((category, catIndex) => (
                                    <div key={catIndex} className="px-4 py-3 border-b border-white/10 last:border-b-0">
                                        <p className="text-white/60 text-xs uppercase mb-2 tracking-wider">{category.category}</p>
                                        {category.projects.map((project, projIndex) => (
                                            <Link
                                                key={projIndex}
                                                href={project.path}
                                                target={project.newTab ? '_blank' : '_self'}
                                                rel={project.newTab ? 'noopener noreferrer' : ''}
                                                className="flex items-center text-white/80 hover:text-white py-2 hover:bg-white/5 rounded-md transition-colors"
                                                onClick={closeAllMenus}
                                            >
                                                {renderProjectIcon(project.icon, project.name)}
                                                <span className="text-sm">{project.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Botón de Menú Móvil */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white/80 hover:text-white"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menú Móvil */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <Link
                                href="/contact"
                                className="block text-white/80 hover:text-white py-3 border-b border-white/10 hover:bg-white/5 transition-all"
                                onClick={closeAllMenus}
                            >
                                Contacto
                            </Link>

                            {/* Sección de Blog en Móvil */}
                            <div>
                                <div
                                    onClick={toggleBlog}
                                    className="flex justify-between items-center text-white/80 hover:text-white py-3 border-b border-white/10 hover:bg-white/5 transition-all"
                                >
                                    Blog
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${isBlogOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                {isBlogOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {blogCategories.map((category, catIndex) => (
                                            <div key={catIndex}>
                                                <p className="text-white/60 text-xs uppercase mb-2">{category.category}</p>
                                                {category.posts.map((post, postIndex) => (
                                                    <Link
                                                        key={postIndex}
                                                        href={post.path}
                                                        target={post.newTab ? '_blank' : '_self'}
                                                        rel={post.newTab ? 'noopener noreferrer' : ''}
                                                        className="flex items-center text-white/80 hover:text-white py-1 text-sm"
                                                        onClick={closeAllMenus}
                                                    >
                                                        <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 border border-white/20 flex items-center justify-center text-white/80">
                                                            {post.icon}
                                                        </div>
                                                        {post.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sección de Proyectos en Móvil */}
                            <div>
                                <div
                                    onClick={toggleProjects}
                                    className="flex justify-between items-center text-white/80 hover:text-white py-3 border-b border-white/10 hover:bg-white/5 transition-all"
                                >
                                    Mis Proyectos (OpenSource)
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                {isProjectsOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {projectCategories.map((category, catIndex) => (
                                            <div key={catIndex}>
                                                <p className="text-white/60 text-xs uppercase mb-2">{category.category}</p>
                                                {category.projects.map((project, projIndex) => (
                                                    <Link
                                                        key={projIndex}
                                                        href={project.path}
                                                        target={project.newTab ? '_blank' : '_self'}
                                                        rel={project.newTab ? 'noopener noreferrer' : ''}
                                                        className="flex items-center text-white/80 hover:text-white py-1 text-sm"
                                                        onClick={closeAllMenus}
                                                    >
                                                        {renderProjectIcon(project.icon, project.name, 'w-6 h-6')}
                                                        {project.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navegation;