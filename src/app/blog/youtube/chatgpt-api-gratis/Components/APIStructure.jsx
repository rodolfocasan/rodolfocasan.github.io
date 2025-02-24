// src/app/blog/youtube/chatgpt-api-gratis/Components/APIStructure.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Clock, Database, Terminal } from 'lucide-react';





const APIStructure = () => {
    // Datos de los endpoints de la API
    const endpoints = [
        {
            method: 'POST',
            path: '/execute',
            description: 'Envía un nuevo prompt para procesamiento',
            icon: <Code2 className="w-6 h-6" />,
            curl: `curl -X POST https://****-**-**.ngrok-free.app/execute \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "¿Cuál es la capital de Francia?"}'`,
            response: {
                status: "processing",
                received_prompt: "¿Cuál es la capital de Francia?",
                message: "Prompt recibido y en procesamiento"
            }
        },
        {
            method: 'GET',
            path: '/status',
            description: 'Verifica el estado del procesamiento actual',
            icon: <Clock className="w-6 h-6" />,
            curl: 'curl https://****-**-**.ngrok-free.app/status',
            response: {
                is_processing: true,
                current_prompt: "¿Cuál es la capital de Francia?",
                start_time: 1708732800.123
            }
        },
        {
            method: 'GET',
            path: '/api/data',
            description: 'Obtiene todos los datos de la última conversación',
            icon: <Database className="w-6 h-6" />,
            curl: 'curl https://****-**-**.ngrok-free.app/api/data',
            response: {
                metadata: {
                    timestamp: "2024-02-23T15:30:00",
                    sessions_used: ["session_1", "session_2"]
                },
                conversations: [
                    {
                        timestamp: "2024-02-23T15:30:00",
                        session: "session_1",
                        prompt: "¿Cuál es la capital de Francia?",
                        response: "La capital de Francia es París."
                    }
                ]
            }
        }
    ];

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block p-2 rounded-lg bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 mb-6">
                        <Server className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
                        API Endpoints
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Esta es la estructura API RESTful con ejemplos prácticos de uso
                    </p>
                </motion.div>

                {/* Lista de endpoints */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {endpoints.map((endpoint, index) => (
                        <motion.div
                            key={endpoint.path}
                            variants={itemVariants}
                            className="backdrop-blur-sm rounded-2xl overflow-hidden"
                        >
                            {/* Cabecera del endpoint */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700/50">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
                                        {endpoint.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`text-sm font-mono px-3 py-1 rounded-full ${endpoint.method === 'POST'
                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/20'
                                                }`}>
                                                {endpoint.method}
                                            </span>
                                            <code className="text-xl font-mono text-white">{endpoint.path}</code>
                                        </div>
                                        <p className="text-gray-400">{endpoint.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido del endpoint */}
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6">
                                {/* Ejemplo de solicitud curl */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                        <Terminal className="w-4 h-4" />
                                        <span>Ejemplo de solicitud</span>
                                    </div>
                                    <div className="bg-gray-900/80 rounded-lg p-4 font-mono text-sm">
                                        <pre className="overflow-x-auto">
                                            <code className="text-cyan-400">{endpoint.curl}</code>
                                        </pre>
                                    </div>
                                </div>

                                {/* Ejemplo de respuesta */}
                                <div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                        <Code2 className="w-4 h-4" />
                                        <span>Ejemplo de respuesta</span>
                                    </div>
                                    <div className="bg-gray-900/80 rounded-lg p-4 font-mono text-sm">
                                        <pre className="overflow-x-auto">
                                            <code className="text-teal-400">
                                                {JSON.stringify(endpoint.response, null, 2)}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default APIStructure;