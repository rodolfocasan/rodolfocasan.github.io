// src/app/Navegation.jsx
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';





// Configuración de elementos del menú reorganizada y con soporte para anidación
const menuItems = [
    {
        title: "Contacto",
        href: "/contact",
        type: "link",
        newTab: false
    },
    {
        title: "Sobre mí",
        type: "submenu",
        key: "sobre-mi",
        items: [
            {
                title: "Mis Estudios",
                type: "submenu",
                items: [
                    {
                        title: "Educación nacional",
                        href: "/edu/national",
                        newTab: false
                    },
                    {
                        title: "Educación internacional",
                        href: "/edu/international",
                        newTab: false
                    }
                ]
            },
            {
                title: "Blog",
                type: "submenu",
                items: [
                    {
                        title: "Tutoriales",
                        type: "category",
                        items: [
                            {
                                title: "ChatGPT API Gratis",
                                href: "/blog/youtube/chatgpt-api-gratis",
                                newTab: false
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        title: "Mis Proyectos",
        type: "submenu",
        key: "proyectos",
        items: [
            {
                title: "VOLQOR",
                href: "https://itch.io/profile/volqor",
                newTab: true
            },
            {
                title: "Asoge Labs",
                href: "https://asogelabs.github.io/",
                newTab: true
            }
        ]
    },
    {
        title: "Mis Apps",
        type: "submenu",
        key: "apps",
        items: [
            {
                title: "Mobile Apps",
                type: "category",
                items: [
                    {
                        title: "Another Chat Room",
                        href: "/apps/mobile/another-chat-room",
                        newTab: false
                    },
                    {
                        title: "Huevos La Rural (Vendedor App)",
                        href: "/apps/mobile/huevos-vendedor",
                        newTab: false
                    },
                    {
                        title: "FlipMAD",
                        href: "https://volqor.itch.io/flipmad",
                        newTab: true
                    },
                ]
            },
            {
                title: "Desktop Apps",
                type: "category",
                items: [
                    {
                        title: "ARPA",
                        href: "/apps/desktop/arpa",
                        newTab: false
                    },
                    {
                        title: "ARPA (no root)",
                        href: "/apps/desktop/arpa-noroot",
                        newTab: false
                    },
                    {
                        title: "SimuRES",
                        href: "/apps/desktop/simures",
                        newTab: false
                    },
                    {
                        title: "Google Chrome Session Manager",
                        href: "/apps/desktop/chrome-session-manager",
                        newTab: false
                    },
                    {
                        title: "Pywkit Browser",
                        href: "/apps/desktop/pywkit-browser",
                        newTab: false
                    },
                ]
            }
        ]
    },
    {
        title: "Mis Servicios",
        type: "submenu",
        key: "services",
        items: [
            {
                title: "VOLQOR Studios",
                type: "category",
                items: [
                    {
                        title: "Calculadora para Cambio",
                        href: "/services/volqor/calculadora-cambio/privacy-policy",
                        newTab: false
                    },
                ]
            },
        ]
    },
    {
        title: "Recursos",
        type: "submenu",
        key: "recursos",
        items: [
            {
                title: "Educación gratis",
                href: "/resources/education",
                newTab: false
            }
        ]
    }
];





function Navegation() {
    // Estado para controlar el menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Estado para controlar los submenús (ahora soporta anidación)
    const [openSubmenus, setOpenSubmenus] = useState({});
    // Estado para el scroll y efectos
    const [isScrolled, setIsScrolled] = useState(false);

    // Referencias para detectar clics fuera de los menús
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Optimización: Usar useCallback para evitar recrear funciones en cada render
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 20;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    }, [isScrolled]);

    // Efecto para detectar scroll y cambiar apariencia
    useEffect(() => {
        // Throttle del scroll para mejor rendimiento
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, [handleScroll]);

    // Efecto para cerrar menús al hacer click fuera (solo desktop)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Solo cerrar menú móvil con la X, no con clicks fuera
            // En desktop sí cerramos submenús con clicks fuera
            if (navRef.current && !navRef.current.contains(event.target) && window.innerWidth >= 768) {
                setOpenSubmenus({});
            }
        };

        // Efecto para cerrar submenús con ESC
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setOpenSubmenus({});
                setIsMenuOpen(false);
            }
        };

        // Agregar event listeners
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    // Función para alternar submenús con soporte para anidación - UNIFICADA
    const toggleSubmenu = useCallback((key) => {
        setOpenSubmenus(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    }, []);

    // Función para cerrar todos los submenús
    const closeAllSubmenus = useCallback(() => {
        setOpenSubmenus({});
    }, []);

    // Función para abrir solo un submenú específico (cerrar los demás en el mismo nivel) - SOLO PARA MENÚ PRINCIPAL
    const openSingleMainSubmenu = useCallback((key) => {
        // Para desktop, mantener solo el submenú principal actual abierto
        if (window.innerWidth >= 768) {
            setOpenSubmenus({ [key]: true });
        }
    }, []);

    // Función para alternar menú móvil
    const toggleMobileMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // Función para cerrar menú móvil
    const closeMobileMenu = useCallback(() => {
        setIsMenuOpen(false);
        closeAllSubmenus();
    }, [closeAllSubmenus]);

    // Función para renderizar enlaces con soporte para newTab
    const renderLink = (item, className, onClick) => {
        const commonProps = {
            className,
            onClick
        };

        if (item.newTab) {
            return (
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...commonProps}
                >
                    {item.title}
                </a>
            );
        } else {
            return (
                <Link
                    href={item.href}
                    {...commonProps}
                >
                    {item.title}
                </Link>
            );
        }
    };

    // Función recursiva UNIFICADA para renderizar submenús anidados
    const renderSubmenuItems = (items, parentKey = '', level = 0, isMobile = false) => {
        return items.map((subItem, subIndex) => {
            const itemKey = parentKey ? `${parentKey}.${subIndex}` : `${subIndex}`;

            return (
                <div key={subIndex}>
                    {subItem.type === "category" ? (
                        // Categorías con sub-elementos
                        <div className={`mb-3 last:mb-0 ${level > 0 && isMobile ? 'ml-4' : ''}`}>
                            <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 px-2 word-wrap break-words">
                                {subItem.title}
                            </h4>
                            <div className="space-y-1">
                                {renderSubmenuItems(subItem.items, itemKey, level + 1, isMobile)}
                            </div>
                        </div>
                    ) : subItem.type === "submenu" ? (
                        // Submenú anidado - HACIA ABAJO IGUAL QUE MOBILE
                        <div className={`${level > 0 && isMobile ? 'ml-4' : ''}`}>
                            <button
                                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm transition-all duration-200 group/item ${isMobile
                                    ? 'text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-lg'
                                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg'
                                    }`}
                                onClick={() => toggleSubmenu(itemKey)}
                            >
                                <span className="flex-1 text-left break-words hyphens-auto mr-2">{subItem.title}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${openSubmenus[itemKey] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Panel del submenú anidado - HACIA ABAJO */}
                            <div className={`overflow-hidden transition-all duration-300 ${openSubmenus[itemKey] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className={`mt-2 space-y-1 ${isMobile
                                    ? 'ml-4 border-l-2 border-cyan-500/20 pl-4'
                                    : 'ml-4 border-l-2 border-cyan-500/20 pl-4'
                                    }`}>
                                    {renderSubmenuItems(subItem.items, itemKey, level + 1, isMobile)}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Enlaces directos
                        <div>
                            {renderLink(
                                subItem,
                                `${isMobile ? 'block' : 'flex items-start'} px-3 py-2.5 text-sm transition-all duration-200 group/item rounded-lg ${isMobile
                                    ? `text-gray-400 hover:text-white hover:bg-cyan-500/10 leading-relaxed break-words hyphens-auto ${level > 0 ? 'ml-4' : ''}`
                                    : `text-gray-300 hover:text-white hover:bg-cyan-500/10 ${level > 0 ? 'ml-2' : ''}`
                                }`,
                                isMobile ? closeMobileMenu : closeAllSubmenus
                            )}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                ? 'backdrop-blur-xl bg-gray-900/80 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
                : 'backdrop-blur-sm bg-gray-900/60'
                }`}
        >
            {/* Efecto de luz superior animado */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo/Brand - Desktop y Mobile */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="group relative" onClick={closeAllSubmenus}>
                            <div className="flex items-center space-x-2">
                                {/* Icono futurista animado */}
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                                    <div className="relative w-6 h-6 border-2 border-cyan-400 rounded transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                                        <div className="absolute inset-1 bg-cyan-400/20 rounded-sm"></div>
                                    </div>
                                </div>
                                {/* Texto del logo */}
                                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                    Inicio
                                </span>
                            </div>
                            {/* Efecto de brillo en hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-lg"></div>
                        </Link>
                    </div>

                    {/* Menú Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    {item.type === "link" ? (
                                        // Enlaces simples
                                        renderLink(
                                            item,
                                            "relative px-3 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group",
                                            closeAllSubmenus
                                        )
                                    ) : (
                                        // Submenús
                                        <>
                                            <button
                                                className="relative px-3 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group flex items-center space-x-1"
                                                onMouseEnter={() => openSingleMainSubmenu(item.key)}
                                                onClick={() => toggleSubmenu(item.key)}
                                            >
                                                <span>{item.title}</span>
                                                {/* Flecha animada */}
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-300 ${openSubmenus[item.key] ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                                {/* Línea inferior animada */}
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                                {/* Efecto de resplandor en hover */}
                                                <div className="absolute inset-0 bg-cyan-400/5 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                                            </button>

                                            {/* Panel del submenú principal */}
                                            <div
                                                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 max-w-[calc(100vw-2rem)] transition-all duration-300 ${openSubmenus[item.key]
                                                    ? 'opacity-100 visible translate-y-0'
                                                    : 'opacity-0 invisible -translate-y-2'
                                                    }`}
                                                onMouseEnter={() => openSingleMainSubmenu(item.key)}
                                                onMouseLeave={() => closeAllSubmenus()}
                                                style={{
                                                    left: index >= menuItems.length - 2 ? 'auto' : '50%',
                                                    right: index >= menuItems.length - 2 ? '0' : 'auto',
                                                    transform: index >= menuItems.length - 2 ? 'none' : 'translateX(-50%)',
                                                    zIndex: 1000
                                                }}
                                            >
                                                <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 p-4 overflow-visible">
                                                    {/* Efecto de brillo superior */}
                                                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

                                                    <div className="space-y-1">
                                                        {renderSubmenuItems(item.items, item.key, 0, false)}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón menú móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300 group z-50"
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-cyan-400/10 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="relative">
                                {/* Ícono hamburguesa/X animado */}
                                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                                    <span
                                        className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen
                                            ? 'rotate-45'
                                            : '-translate-y-1.5'
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen
                                            ? 'opacity-0 scale-0'
                                            : 'opacity-100 scale-100'
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen
                                            ? '-rotate-45'
                                            : 'translate-y-1.5'
                                            }`}
                                    ></span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            <div
                ref={mobileMenuRef}
                className={`md:hidden transition-all duration-300 ease-out ${isMenuOpen
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                {item.type === "link" ? (
                                    // Enlaces simples móvil
                                    renderLink(
                                        item,
                                        "block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/20 break-words hyphens-auto",
                                        closeMobileMenu
                                    )
                                ) : (
                                    // Submenús móvil
                                    <div>
                                        <button
                                            onClick={() => toggleSubmenu(item.key)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                                        >
                                            <span className="text-left flex-1 mr-2 break-words hyphens-auto">{item.title}</span>
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${openSubmenus[item.key] ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Submenú expandible móvil */}
                                        <div className={`overflow-hidden transition-all duration-300 ${openSubmenus[item.key] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="ml-4 mt-2 space-y-1 border-l-2 border-cyan-500/20 pl-4">
                                                {renderSubmenuItems(item.items, item.key, 0, true)}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navegation;