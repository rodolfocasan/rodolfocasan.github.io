// src/app/not-found.js
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";





export default function Custom404() {
    // Estados para controlar la carga y visibilidad
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [selectedGif, setSelectedGif] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    // Lista de GIFs disponibles para el fondo (mantén tu lista aquí)
    const backgroundGifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnl2a2F0ZmRxZWRvYnRzOXN4aWJzcDFoMTV3NzNvOWJyMGVmNm1hOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6J9EYB2Z27Qg8/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmJhbGduenp0cnB6Zm9yY2tzZ3h4dXR3OXZrNG9rY2ZwYm50MG4zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hSEif2nUvjF9nEtqoz/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZzczJuZnF5Zm92Z2Exa3MxejVkNWo0ZnF2dWg4Y3psdmNhcnNheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11JbbNHfXBqqhq/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGt3dTlqa3dscGQzcTJ5a2xtMXRmOG1tMXNsODExYTF4ODI1Y245ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h4Z6RfuQycdiM/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNpaGpwNmRucWMzZDhwaTN2bWdzbmpzMjJ0cjUwNHA4b2Q4dTk0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lkdH8FmImcGoylv3t3/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDZlOHRhZTN5cTM0NWdvdjFmbnlyYzRwaWFodHM0bGdvZnFjOXBtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QE8hREXIgRXeo/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2x5bG95OW44a21nNHhocG13MTFwZXNsazJ5YjBiaHd6bHZvajZhYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RIFv4btS2XLoI/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2t6dHFseDE5ZmxsOGk4a2xnaHdjZml6NnNidWljOHp6OXdmdmJyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cA0TiRmuetO1szgShj/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODl5YmxwNTM3bzN4MmF6ODN5d2VzbGF5ZDI1czJqYXJvY3luZ24xNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/apCyQKrrVwCXuRtd1O/giphy.gif"
    ];

    // Efecto de visibilidad inicial
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Selección y precarga del GIF de fondo
    useEffect(() => {
        if (backgroundGifs.length > 0) {
            // Selecciona un GIF aleatorio de la lista
            const randomIndex = Math.floor(Math.random() * backgroundGifs.length);
            const randomGif = backgroundGifs[randomIndex];
            setSelectedGif(randomGif);

            // Precarga el GIF seleccionado
            const image = new Image();
            image.src = randomGif;
            image.onload = () => setIsImageLoaded(true);
        } else {
            // Si no hay GIFs, marcar como cargado
            setIsImageLoaded(true);
        }
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Contenedor del fondo y overlay */}
            <div className="absolute inset-0 z-0">
                {/* Fondo degradado base del portafolio */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

                {/* GIF de fondo */}
                {selectedGif && (
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out"
                        style={{
                            backgroundImage: `url('${selectedGif}')`,
                            opacity: isImageLoaded ? 0.4 : 0,
                        }}
                    />
                )}

                {/* Gradientes decorativos del portafolio */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-delay"></div>
                <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-delay-2"></div>

                {/* Overlay principal para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
            </div>

            {/* Contenido principal */}
            <div className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                {/* Título 404 con gradiente del portafolio */}
                <div className="mb-6 animate-scale-in">
                    <h1 className="mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-6xl font-bold text-transparent md:text-8xl lg:text-9xl tracking-tight">
                        404
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Subtítulo */}
                <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-white animate-fade-in-delay-1">
                    Página no encontrada
                </h2>

                {/* Descripción */}
                <p className="mb-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-delay-2">
                    El sitio al que intentas acceder no existe o ha dejado de existir.
                    <br className="hidden md:block" />
                    <span className="text-green-400 font-medium">¡Pero no te preocupes!</span> Puedes regresar al inicio.
                </p>

                {/* Botón de acción */}
                <div className="animate-fade-in-delay-3">
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                    >
                        <span className="relative z-10">Regresar al inicio</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            {/* Partículas flotantes */}
            <div className="absolute top-1/2 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40 animate-ping-delay-1"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50 animate-ping-delay-2"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-ping opacity-30 animate-ping-delay-3"></div>

            {/* Estilos CSS personalizados para animaciones optimizadas */}
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
                
                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes pulse-delay {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.8;
                    }
                }

                @keyframes pulse-delay-2 {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.6;
                    }
                }

                @keyframes ping-delay-1 {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes ping-delay-2 {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes ping-delay-3 {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .animate-fade-in-delay-1 {
                    animation: fade-in 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }
                
                .animate-fade-in-delay-2 {
                    animation: fade-in 0.8s ease-out 0.4s forwards;
                    opacity: 0;
                }
                
                .animate-fade-in-delay-3 {
                    animation: fade-in 0.8s ease-out 0.6s forwards;
                    opacity: 0;
                }
                
                .animate-fade-in-delay-4 {
                    animation: fade-in 0.8s ease-out 0.8s forwards;
                    opacity: 0;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.8s ease-out 0.1s forwards;
                    opacity: 0;
                }
                
                .animate-pulse-delay {
                    animation: pulse-delay 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    animation-delay: 1s;
                }
                
                .animate-pulse-delay-2 {
                    animation: pulse-delay-2 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    animation-delay: 2s;
                }
                
                .animate-ping-delay-1 {
                    animation: ping-delay-1 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                    animation-delay: 1s;
                }
                
                .animate-ping-delay-2 {
                    animation: ping-delay-2 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                    animation-delay: 2s;
                }
                
                .animate-ping-delay-3 {
                    animation: ping-delay-3 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                    animation-delay: 3s;
                }

                /* Optimizaciones para móviles */
                @media (max-width: 768px) {
                    .animate-pulse-delay,
                    .animate-pulse-delay-2 {
                        animation-duration: 8s;
                    }
                }
            `}</style>
        </div>
    );
}