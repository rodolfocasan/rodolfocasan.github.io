// src/app/Home/Components/Stats.jsx
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaSort, FaSortUp, FaSortDown, FaCode, FaLaptopCode, FaServer, FaCogs, FaTools } from 'react-icons/fa';





// Datos de las habilidades técnicas con colores personalizados para cada tecnología
const skillCategories = [
    {
        category: "Lenguajes de Programación",
        icon: <FaCode />,
        skills: [
            {
                name: "Python",
                level: 97,
                logoUrl: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
                colors: ["#3776ab", "#ffd43b"]
            },
            {
                name: "JavaScript",
                level: 95,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
                colors: ["#f7df1e", "#000000"]
            }
        ]
    },
    {
        category: "Frameworks Front-end",
        icon: <FaLaptopCode />,
        skills: [
            {
                name: "React",
                level: 95,
                logoUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                colors: ["#61dafb", "#20232a"]
            },
            {
                name: "Next.js",
                level: 93,
                logoUrl: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
                colors: ["#000000", "#ffffff"]
            },
            {
                name: "Vite.js",
                level: 88,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
                colors: ["#646cff", "#bd34fe"]
            },
            {
                name: "Tailwind CSS",
                level: 94,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                colors: ["#06b6d4", "#0891b2"]
            },
            {
                name: "Bootstrap",
                level: 93,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
                colors: ["#7952b3", "#563d7c"]
            }
        ]
    },
    {
        category: "Frameworks Back-end",
        icon: <FaServer />,
        skills: [
            {
                name: "Flask",
                level: 94,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
                colors: ["#000000", "#ffffff"]
            }
        ]
    },
    {
        category: "Entornos y Sistemas",
        icon: <FaCogs />,
        skills: [
            {
                name: "Linux",
                level: 97,
                logoUrl: "https://www.svgrepo.com/show/349437/linux.svg",
                colors: ["#fcc624", "#000000"]
            },
            {
                name: "Termux",
                level: 94,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Termux.svg",
                colors: ["#000000", "#ffffff"]
            },
            {
                name: "Windows",
                level: 92,
                logoUrl: "https://www.svgrepo.com/show/355384/windows-legacy.svg",
                colors: ["#FEB800", "#00A3EE"]
            },
            {
                name: "Android",
                level: 96,
                logoUrl: "https://img.icons8.com/?size=256&id=GgyRdUL5k1fr&format=png",
                colors: ["#3ddc84", "#a4c639"]
            },
            {
                name: "Google Colab",
                level: 96,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
                colors: ["#f9ab00", "#ea4335"]
            },
            {
                name: "HuggingFace",
                level: 95,
                logoUrl: "https://www.svgrepo.com/show/396671/hugging-face.svg",
                colors: ["#ff9d00", "#ffcc4d"]
            },
            {
                name: "Expo",
                level: 89,
                logoUrl: "https://www.svgrepo.com/show/353722/expo.svg",
                colors: ["#000020", "#4630eb"]
            },
            {
                name: "SSH",
                level: 91,
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Unofficial_SSH_Logo.svg",
                colors: ["#727272", "#ffffff"]
            }
        ]
    },
    {
        category: "Herramientas y Tecnologías",
        icon: <FaTools />,
        skills: [
            {
                name: "Git",
                level: 95,
                logoUrl: "https://www.svgrepo.com/show/452210/git.svg",
                colors: ["#f05032", "#ffffff"]
            },
            {
                name: "GitHub",
                level: 93,
                logoUrl: "https://www.svgrepo.com/show/475654/github-color.svg",
                colors: ["#000000", "#ffffff"]
            },
            {
                name: "VirtualBox",
                level: 88,
                logoUrl: "https://img.icons8.com/?size=256&id=38792&format=png",
                colors: ["#183a61", "#4285f4"]
            },
            {
                name: "Ngrok",
                level: 91,
                logoUrl: "https://cdn.brandfetch.io/id3QqXlVah/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
                colors: ["#1f1f1f", "#00d4aa"]
            },
            {
                name: "CapacitorJS",
                level: 94,
                logoUrl: "https://www.svgrepo.com/show/353536/capacitorjs-icon.svg",
                colors: ["#119eff", "#52a8ff"]
            }
        ]
    }
];

// Componente Conway's Game of Life
const GameOfLife = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const gridRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Configuración del juego
    const CELL_SIZE = 25; // Tamaño pequeño para más detalle
    const UPDATE_INTERVAL = 150; // Velocidad de actualización en ms

    // Inicializar grid con patrón aleatorio
    const initializeGrid = useCallback((width, height) => {
        const cols = Math.floor(width / CELL_SIZE);
        const rows = Math.floor(height / CELL_SIZE);
        const grid = Array(rows).fill().map(() => Array(cols).fill(0));

        // Crear varios patrones conocidos distribuidos por el canvas
        const patterns = [
            // Glider
            [[0, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
            // Beacon
            [[0, 0], [0, 1], [1, 0], [2, 3], [3, 2], [3, 3]],
            // Toad
            [[1, 0], [1, 1], [1, 2], [0, 1], [0, 2], [0, 3]],
            // Block (still life)
            [[0, 0], [0, 1], [1, 0], [1, 1]],
            // Blinker
            [[0, 0], [0, 1], [0, 2]]
        ];

        // Distribuir patrones aleatoriamente
        for (let i = 0; i < 8; i++) {
            const pattern = patterns[Math.floor(Math.random() * patterns.length)];
            const startRow = Math.floor(Math.random() * (rows - 5));
            const startCol = Math.floor(Math.random() * (cols - 5));

            pattern.forEach(([r, c]) => {
                if (startRow + r < rows && startCol + c < cols) {
                    grid[startRow + r][startCol + c] = 1;
                }
            });
        }

        // Agregar algunas células aleatorias adicionales
        for (let i = 0; i < rows * cols * 0.05; i++) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);
            grid[row][col] = Math.random() > 0.7 ? 1 : 0;
        }

        return grid;
    }, [CELL_SIZE]);

    // Contar vecinos vivos
    const countNeighbors = useCallback((grid, x, y) => {
        let count = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const newX = x + i;
                const newY = y + j;
                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                    count += grid[newX][newY];
                }
            }
        }
        return count;
    }, []);

    // Calcular siguiente generación
    const nextGeneration = useCallback((grid) => {
        const rows = grid.length;
        const cols = grid[0].length;
        const newGrid = grid.map(row => [...row]);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const neighbors = countNeighbors(grid, i, j);

                if (grid[i][j] === 1) {
                    // Célula viva
                    if (neighbors < 2 || neighbors > 3) {
                        newGrid[i][j] = 0; // Muere
                    }
                } else {
                    // Célula muerta
                    if (neighbors === 3) {
                        newGrid[i][j] = 1; // Nace
                    }
                }
            }
        }

        return newGrid;
    }, [countNeighbors]);

    // Renderizar el grid en canvas
    const renderGrid = useCallback((canvas, grid) => {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rows = grid.length;
        const cols = grid[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    // Crear efecto de gradiente para células vivas
                    const gradient = ctx.createRadialGradient(
                        j * CELL_SIZE + CELL_SIZE / 2, i * CELL_SIZE + CELL_SIZE / 2, 0,
                        j * CELL_SIZE + CELL_SIZE / 2, i * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 2
                    );
                    gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
                    gradient.addColorStop(1, 'rgba(0, 150, 255, 0.3)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);

                    // Agregar un pequeño brillo
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                    ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE / 2, CELL_SIZE / 2);
                }
            }
        }
    }, [CELL_SIZE]);

    // Bucle de animación
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !gridRef.current) return;

        renderGrid(canvas, gridRef.current);
        gridRef.current = nextGeneration(gridRef.current);

        // Verificar si el patrón se ha estabilizado o está vacío
        const totalCells = gridRef.current.flat().reduce((sum, cell) => sum + cell, 0);
        if (totalCells < 5) {
            // Reinicializar si quedan muy pocas células
            gridRef.current = initializeGrid(canvas.width, canvas.height);
        }

        if (isPlaying) {
            setTimeout(() => {
                animationRef.current = requestAnimationFrame(animate);
            }, UPDATE_INTERVAL);
        }
    }, [isPlaying, renderGrid, nextGeneration, initializeGrid, UPDATE_INTERVAL]);

    // Inicializar canvas y comenzar animación
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';

            // Reinicializar grid con nuevo tamaño
            gridRef.current = initializeGrid(canvas.width, canvas.height);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Comenzar animación
        if (isPlaying) {
            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate, initializeGrid, isPlaying]);

    // Limpiar animación cuando el componente se desmonta
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
};

// Componente individual para cada barra de habilidad
const SkillBar = ({ name, level, logoUrl, colors, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        // Activar animación después del delay especificado
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    // Manejar error de carga de imagen
    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className={`mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
            {/* Contenedor principal de información de la habilidad */}
            <div className="flex items-center gap-5 mb-4">
                {/* Container del logo con tamaño fijo */}
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-400/10 rounded-xl border-2 border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-110 hover:rotate-3 flex-shrink-0">
                    {!imageError ? (
                        <img
                            src={logoUrl}
                            alt={`${name} logo`}
                            className="w-8 h-8 object-contain brightness-125 contrast-110"
                            onError={handleImageError}
                        />
                    ) : (
                        // Fallback cuando la imagen no carga - mostrar inicial de la tecnología
                        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-md">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Información de texto */}
                <div className="flex-1 flex justify-between items-center">
                    <div className="text-gray-100 font-semibold text-lg tracking-wide drop-shadow-sm">
                        {name}
                    </div>
                    <div className="text-cyan-400 font-bold text-lg px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/30 shadow-sm shadow-cyan-400/50">
                        {level}%
                    </div>
                </div>
            </div>

            {/* Barra de progreso con colores personalizados - usando CSS inline para evitar conflictos */}
            <div
                className="relative w-full rounded-full overflow-hidden border border-cyan-400/30"
                style={{
                    height: '10px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
                <div
                    className="h-full rounded-full relative transition-all duration-1000 ease-out"
                    style={{
                        width: isVisible ? `${level}%` : '0%',
                        background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`,
                        boxShadow: `0 0 15px ${colors[0]}60`,
                        animationDelay: `${delay}ms`
                    }}
                >
                    {/* Efecto de brillo que se mueve por la barra */}
                    <div
                        className="absolute top-0 h-full rounded-full animate-pulse"
                        style={{
                            width: '120px',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                            animation: isVisible ? 'shimmerWithFade 4s infinite 2s' : 'none',
                            left: '-120px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

// Componente principal de estadísticas
export default function Stats() {
    const [isLoading, setIsLoading] = useState(true);
    const [sortOrders, setSortOrders] = useState(
        // Inicializar el orden de clasificación para cada categoría (por defecto: mayor a menor)
        skillCategories.reduce((acc, category) => {
            acc[category.category] = 'descending';
            return acc;
        }, {})
    );

    useEffect(() => {
        // Simular tiempo de carga para mostrar la animación del loader
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    // Función para alternar el orden de clasificación entre ascendente y descendente
    const toggleSortOrder = (categoryName) => {
        setSortOrders(prevOrders => {
            const currentOrder = prevOrders[categoryName];
            return {
                ...prevOrders,
                [categoryName]: currentOrder === 'descending' ? 'ascending' : 'descending'
            };
        });
    };

    // Función para ordenar habilidades según el criterio seleccionado
    const sortSkills = (skills, categoryName) => {
        const sortOrder = sortOrders[categoryName];
        return [...skills].sort((a, b) =>
            sortOrder === 'descending'
                ? b.level - a.level  // Mayor a menor
                : a.level - b.level  // Menor a mayor
        );
    };

    // Obtener el ícono de ordenamiento apropiado según el estado actual
    const getSortIcon = (categoryName) => {
        const order = sortOrders[categoryName];
        if (order === 'ascending') return <FaSortUp />;
        if (order === 'descending') return <FaSortDown />;
        return <FaSort />;
    };

    return (
        <>
            {/* Estilos CSS integrados solo para animaciones específicas */}
            <style jsx>{`
                /* Animación de brillo en las barras de progreso */
                @keyframes shimmerWithFade {
                    0% { 
                        left: -120px; 
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    85% {
                        left: calc(100% - 120px);
                        opacity: 1;
                    }
                    100% { 
                        left: calc(100% - 120px);
                        opacity: 0;
                    }
                }

                /* Animación del loader con anillos giratorios */
                .spinner-ring {
                    position: absolute;
                    border: 4px solid transparent;
                    border-radius: 50%;
                    animation: spinRing 2s linear infinite;
                }

                .spinner-ring:nth-child(1) {
                    width: 140px;
                    height: 140px;
                    border-top: 4px solid #00ffff;
                    border-right: 4px solid #00ffff;
                    animation-duration: 2s;
                }

                .spinner-ring:nth-child(2) {
                    width: 100px;
                    height: 100px;
                    border-bottom: 4px solid #0099ff;
                    border-left: 4px solid #0099ff;
                    top: 20px;
                    left: 20px;
                    animation-duration: 1.6s;
                    animation-direction: reverse;
                }

                .spinner-ring:nth-child(3) {
                    width: 60px;
                    height: 60px;
                    border-top: 4px solid #9966ff;
                    border-right: 4px solid #9966ff;
                    top: 40px;
                    left: 40px;
                    animation-duration: 1.2s;
                }

                @keyframes spinRing {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Animación del título principal */
                .title-gradient {
                    background: linear-gradient(45deg, #00ffff, #0099ff, #9966ff, #ff6600);
                    background-size: 300% 300%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: titleGradient 4s ease infinite;
                }

                @keyframes titleGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                /* Animación de pulso para los iconos */
                .icon-pulse {
                    animation: iconPulse 2s ease-in-out infinite;
                }

                @keyframes iconPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                /* Efecto de slide-up para las categorías */
                .slide-up {
                    animation: slideUp 0.8s ease forwards;
                    opacity: 0;
                    transform: translateY(40px);
                }

                @keyframes slideUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Efecto de deslizamiento de luz en las tarjetas */
                @keyframes slideLight {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>

            <div className="min-h-screen relative overflow-hidden text-white"
                style={{
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)'
                }}>
                {/* Conway's Game of Life como fondo animado */}
                <GameOfLife />

                <div className="relative z-10 container mx-auto px-4 py-12">
                    {isLoading ? (
                        // Pantalla de carga con spinner futurista
                        <div className="flex justify-center items-center min-h-screen">
                            <div className="relative w-36 h-36">
                                <div className="spinner-ring"></div>
                                <div className="spinner-ring"></div>
                                <div className="spinner-ring"></div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Título principal con gradiente animado */}
                            <h1 className="title-gradient text-4xl md:text-5xl lg:text-6xl text-center mb-16 font-extrabold tracking-tight drop-shadow-lg">
                                Mis Habilidades Técnicas
                            </h1>

                            {/* Grid responsivo de categorías de habilidades */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                                {skillCategories.map((category, categoryIndex) => (
                                    <div
                                        key={category.category}
                                        className="slide-up p-8 rounded-3xl border border-cyan-400/25 backdrop-blur-lg relative overflow-hidden transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/25 hover:-translate-y-2"
                                        style={{
                                            background: 'rgba(20, 20, 40, 0.85)',
                                            animationDelay: `${categoryIndex * 0.15}s`
                                        }}
                                    >
                                        {/* Efecto de luz que se desliza por la tarjeta */}
                                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.15), transparent)',
                                                transform: 'translateX(-100%)',
                                                animation: 'slideLight 0.6s ease'
                                            }}>
                                        </div>

                                        {/* Cabecera de la categoría */}
                                        <div className="flex justify-between items-center pb-5 border-b-2 border-cyan-400/40 mb-8">
                                            <div className="flex items-center gap-4 text-cyan-400 text-xl font-bold tracking-wide">
                                                <span className="text-3xl icon-pulse drop-shadow-lg">
                                                    {category.icon}
                                                </span>
                                                <span>{category.category}</span>
                                            </div>
                                            {/* Botón para cambiar orden de clasificación */}
                                            <button
                                                onClick={() => toggleSortOrder(category.category)}
                                                className="bg-cyan-400/15 border-2 border-cyan-400/40 rounded-xl p-3 text-cyan-400 cursor-pointer transition-all duration-300 hover:bg-cyan-400/25 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-400/40 hover:scale-110 hover:rotate-6 active:scale-95 flex items-center justify-center text-lg"
                                                aria-label={`Ordenar habilidades de ${category.category}`}
                                                title="Cambiar orden de clasificación"
                                            >
                                                {getSortIcon(category.category)}
                                            </button>
                                        </div>

                                        {/* Lista de habilidades de la categoría */}
                                        <div>
                                            {sortSkills(category.skills, category.category).map((skill, skillIndex) => (
                                                <SkillBar
                                                    key={skill.name}
                                                    name={skill.name}
                                                    level={skill.level}
                                                    logoUrl={skill.logoUrl}
                                                    colors={skill.colors}
                                                    delay={skillIndex * 150}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}